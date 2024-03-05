async function getBlog(slug) {
  const response = await fetch(
    `https://65e70ec753d564627a8dc5b4.mockapi.io/api/1/users/${slug}`
  );

  if (!response.ok) {
    throw new Error("cannot fetch blog");
  }
  return response.json();
}

async function BlogPage({ params }) {
  const blog = await getBlog(params.slug);
  return (
    <div>
      ID: {params.slug}
      <div>Blog name: {blog.name}</div>
      <div>avatar: {blog.avatar}</div>
    </div>
  );
}

export default BlogPage;
