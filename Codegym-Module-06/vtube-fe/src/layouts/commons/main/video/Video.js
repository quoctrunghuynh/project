import React from 'react'
import './_video.scss'

import {AiFillEye} from 'react-icons/ai'

const Video = () => {
    return (
        <div className={"video"}>
            <div className={"video__top"}>
                <img src={'https://i.ytimg.com/vi/d-MT7Bcuzdk/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&amp;rs=AOn4CLDt7h5ql5_bnoLaYOgdRVV4UUdmbA'} alt={"video"}/>
                <span>5:38pm</span>
            </div>
            <div className={"video__title"}>
                Thái - Debug để thêm BUG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </div>
            <div className={"video__details"}>
                <span><AiFillEye/>  100m Views  •</span>
                <span> Since dragon still exist</span>
            </div>
            <div className={"video__channel"}>
                <img src={'https://cdn.discordapp.com/attachments/1151490874195316856/1152992123059175694/b2c44a9549a5cf8c9eebb8eb8fc51213.jpg'} alt={'channel_name'}/>
                <p>Thái</p>
            </div>
        </div>
    )
}

export default Video;