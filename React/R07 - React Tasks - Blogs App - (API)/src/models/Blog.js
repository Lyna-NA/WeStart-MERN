class Blog {
  id;
  title;
  publisherName;
  categoryId;
  categoryName;
  description;

  constructor(title, publisherName, categoryId, categoryName, description) {
    this.title = title;
    this.publisherName = publisherName;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.description = description;
  }
}
export default Blog;