import React from 'react'
import './_video.scss'

import {AiFillEye} from 'react-icons/ai'
import {NavLink} from "react-router-dom";

function Video({video}) {
    return (
        <NavLink to={"/watching"}>
            <div className={"video"}>
                <div className={"video__top"}>
                    <img src={video.thumbnails} alt={"video"}/>
                    <span>{video.duration}s</span>
                </div>
                <div className={"video__title"}>
                    {video.title}
                </div>
                <div className={"video__details"}>
                    <span><AiFillEye/>{video.views} views • </span>
                    <span>{video.createdAt}</span>
                </div>
                <div className={"video__channel"}>
                    <img src={video.avatar} alt={'channel_name'}/>
                    <p>{video.title}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default Video;