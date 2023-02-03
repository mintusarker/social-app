import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons';
import React from 'react';
import './Share.css'

const Share = () => {
    return (
        <div className='share'>
            <div className="shareWarper">
                <div className="shareTop">
                    <img className='shareProfilePicture' src="assets/people/1.jpeg" alt="" />
                    <input className='shareInput' placeholder=" What's in your mind" />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon'></PermMedia>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareIcon'></Label>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareIcon'></Room>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon'></EmojiEmotions>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;