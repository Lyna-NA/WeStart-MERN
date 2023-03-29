import axios from "axios";

class Post {
  private title: string;
  private info: string;
  private id: number;

  constructor(title: string, info: string, id: number) {
    this.title = title;
    this.info = info;
    this.id = id;
  }

  public get _title(): string {
    return this.title;
  }

  public get _info(): string {
    return this.info;
  }

  public get _id(): number {
    return this.id;
  }

  static async all(): Promise<Post[]>{
    try {
      let response = await axios.get("http://127.0.0.1:5000/api/posts", {
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        // }
      });
      // console.log("Response: ", response.data.data);
      return response.data.data;
    } catch (error) {
      return [];
    }
  }

  async save() {
    try {
      let response = await axios.post(
        "http://127.0.0.1:5000/api/posts",
        {
          title: this.title,
          info: this.info,
        },
        {
          headers: {
            Authorization: "",
          },
        }
      );
    } catch (error) {
      return false;
    }
  }

  async destroy() {
    try {
      let response = await axios.delete(`http://127.0.0.1:5000/api/posts/${this.id}`, {
        headers: {
          Authorization: "",
        },
      });
    } catch (error) {
      return false;
    }
  }
}
export default Post;