class Task {
  id;
  name;
  categoryId;
  briefDetails;
  details;
  fromDate;
  toDate;
  status;
  image;

  constructor(
    name,
    categoryId,
    briefDetails,
    details,
    fromDate,
    toDate,
    image
  ) {
    this.name = name;
    this.briefDetails = briefDetails;
    this.details = details;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.categoryId = categoryId;
    this.image = image;
  }
}
export default Task;