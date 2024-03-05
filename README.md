This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


===========================================
# page.js
  - app             /
   - dashboard      /dashboard
     - settings     /dashboard/settings
# Layout
# Slug
# Middleware ไม่ redirect!
# fetch api
# client component --> 'use client'
  จะมีเรื่องของ state มาเกี่ยวข้อง ถ้า state ยังเปลี่ยนแปลงอยู่ จะเกิดการ rerender เรื่อยๆ
  แต่ไม่มีข้อมูลจริง เพราะเป็นข้อมูลจาก api
# streaming
  จากเดิมโหลดทั้งก้อน เกิดการหั่นแล้วมีการ loading state หรือ โหลดหน้าเว็บก่อนแล้วค่อย fetch ข้อมูล
  ใช้ <Suspense> หรือ
  สร้างไฟล์ ``` loading.js``` จะเกิดการห่อ suspense ทั้งหน้า 
  server --> ดึงข้อมูล
  client --> จัดการ state ด้วย  'use client'
# Server action 
  สร้าง server function ใน client Component