import { PermMedia } from '@material-ui/icons';
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
                            <PermMedia className='shareIcon'></PermMedia>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <PermMedia className='shareIcon'></PermMedia>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <PermMedia className='shareIcon'></PermMedia>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <PermMedia className='shareIcon'></PermMedia>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;