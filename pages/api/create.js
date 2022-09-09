import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createCourse(req, res);
  } else {
    return res.status(405).json({ message: "Not allowed", success: false });
  }
}

async function createCourse(req, res) {
  const body = req.body;
  try {
    const newCourse = await prisma.course.create({
      data: {
        name: body.name,
        teacherName: {
          create: { name: body.teacherName },
        },
      },
    });
    return res.status(200).json(newCourse, { success: true });
  } catch (err) {
    console.error("Request error", err);
    res.status(500).json({ error: "Error creating course", success: false });
  }
}
