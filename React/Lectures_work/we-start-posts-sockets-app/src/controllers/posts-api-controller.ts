import Post from "../models/Post";

class PostsApiController {
  public async all() : Promise<Post[]>{
    return await Post.all();
  }

  public async store(post: Post) {
    if (post._title != "" && post._info != "") {
      let response = await post.save();
    }
  }

  public async destroy(post: Post) {
    if(post._id != undefined){
        let response = await post.destroy();
    }
  }

  // public test(): string{return ""}
}
export default PostsApiController;