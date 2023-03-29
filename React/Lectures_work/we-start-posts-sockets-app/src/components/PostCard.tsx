import Post from "../models/Post";

let PostCard = (props: { post: Post }) => {
  const cardStyle = {
    width: "600px",
    height: "100px",
    borderRadius: "40px",
    boxShadow:
      "5px 5px 30px 7px rgba(0,0,0,0.25)",
    cursor: "pointer",
    padding: "50px",
    margin: "20px",
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card_title title-white">
        <div>
          <h3>New Post</h3>
        </div>
      </div>
    </div>
  );
};
export default PostCard;