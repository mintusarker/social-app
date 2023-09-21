import { MoreVert } from "@material-ui/icons";
import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="post">
      <div className="postWarper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/people/1.jpeg"
              alt=""
            />
            <span className="postUsername">M S Biraj</span>
            <span className="postDate"> {post?.date}</span>
          </div>

          <div className="postTopRight">
            <MoreVert className="postIcon"></MoreVert>
          </div>
        </div>

        <div className="postCenter">
          <span className="postText"> {post?.desc} </span>
          <img className="postImage" src={post?.photo} alt="" />
        </div>

        <div className="postBottom">
          <div className="postButtonLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="likeCounter">{post?.like} people liked it</span>
          </div>
          <div className="postButtonRight">
            <span className="PostComment"> {post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
