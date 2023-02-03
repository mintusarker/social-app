import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, Watch, WorkOutline } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css'

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="warper">
                <ul className="list">
                    <li className="listItem">
                        <RssFeed className='Icon'></RssFeed>
                        <span className='FeedItem'>Feed</span>
                    </li>
                    <li className="listItem">
                        <Chat className='Icon'></Chat>
                        <span className='FeedItem'>Chats</span>
                    </li>
                    <li className="listItem">
                        <PlayCircleFilledOutlined className='Icon'></PlayCircleFilledOutlined>
                        <span className='FeedItem'>Videos</span>
                    </li>
                    <li className="listItem">
                        <Group className='Icon'></Group>
                        <span className='FeedItem'>Groups</span>
                    </li>
                    <li className="listItem">
                        <Bookmark className='Icon'></Bookmark>
                        <span className='FeedItem'>Bookmarks</span>
                    </li>
                    <li className="listItem">
                        <HelpOutline className='Icon'></HelpOutline>
                        <span className='FeedItem'>Questions</span>
                    </li>
                    <li className="listItem">
                        <WorkOutline className='Icon'></WorkOutline>
                        <span className='FeedItem'>Jobs</span>
                    </li>
                    <li className="listItem">
                        <Event className='Icon'></Event>
                        <span className='FeedItem'>Events</span>
                    </li>
                    <li className="listItem">
                        <School className='Icon'></School>
                        <span className='FeedItem'>Courses</span>
                    </li>
                </ul>
                <button className='btn-btn'>Show More</button>
                <hr className='sidebarHr' />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/people/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sidebarFriendName">Mintu Sarker</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sidebarFriendName">Mintu Sarker</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sidebarFriendName">Mintu Sarker</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sidebarFriendName">Mintu Sarker</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sidebarFriendName">Mintu Sarker</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sidebarFriendName">Mintu Sarker</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sidebarFriendName">Mintu Sarker</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sidebarFriendName">Mintu Sarker</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/people/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sidebarFriendName">Mintu Sarker</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;