function ContentPage({params}) {
  return (
    <div>
      <h3>This is content page</h3>
      Slug: {params.slug} {params.id}
    </div>
  );
}

export default ContentPage;
