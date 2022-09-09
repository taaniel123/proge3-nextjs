import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const result = await prisma.course.findMany({
    include: {
      teacherName: {
        select: {
          name: true,
        },
      },
    },
  });
  res.json(result);
}
