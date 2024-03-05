// server

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
      test page fetch api
      {/* B */}
      {blogs.map((blog, index) => (
        <div key={index}>
          {blog.id} 
          {blog.name}
        </div>
      ))}
    </div>
  );
}
