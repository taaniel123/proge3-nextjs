# Next.js and Prisma demo app for Programmeerimine III

Simple fullstack app with Next.js, Prisma, and PostgreSQL.
You can add a course with a teacher's name and results are fetched from database instantly.
Didn't go crazy with this, the point was to try out this stack in order to get acquainted with it for Valikpraktika.

To get started:

1. Run `npm install`
2. Run `docker compose up -d`
3. Run `npm run dev`

To access database run `npx prisma studio`

Short introduction to Prisma and Next.js:
Prisma is a next-generation ORM that can be used to access a database in Node.js and TypeScript applications (although this was written in Javascript, but basically developers choice).
Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.