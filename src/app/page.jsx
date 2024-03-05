import Link from "next/link";

async function getBlog() {
  const response = await fetch(
    "https://65e70ec753d564627a8dc5b4.mockapi.io/api/1/users"
  );

  if (!response.ok) {
    throw new Error("cannot fetch blog");
  }
  return response.json();
}
export default async function Page() {
  // A
  const blogs = await getBlog();
  return (
    <div>
      Blog List:
      {/* B */}
      {blogs.map((blog, index) => (
        <div key={index}>
          {blog.id}
          {blog.name}
          <Link href={`/blog/${blog.id}`} className="mx-10 border-2 bg-slate-100">go to read blog</Link>
        </div>
      ))}
    </div>
  );
}
