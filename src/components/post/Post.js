import { MoreVert } from '@material-ui/icons';
import React from 'react';
import './Post.css'

const Post = () => {
    return (
        <div className='post'>
            <div className='postWarper'>
                <div className='postTop'>
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/people/1.jpeg" alt="" />
                        <span className="postUsername">M S Biraj</span>
                        <span className="postDate"> 10 minits ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className='postIcon'></MoreVert>
                    </div>
                </div>
                <div className='postCenter'>
                    <span className="postText">Hey! Its my first post</span>
                    <img className='postImage' src="/assets/post/11.jpeg" alt="" />
                </div>
                <div className='postBottom'>
                    <div className="postButtonLeft">
                        <img className='likeIcon' src="/assets/like.png" alt="" />
                        <img className='likeIcon' src="/assets/heart.png" alt="" />
                        <span className='likeCounter'>32 people liked it</span>
                    </div>
                    <div className="postButtonRight">
                        <span className="PostComment">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;