import './_sidebar.scss'

import {
    BsFillCollectionPlayFill, BsCollectionPlay
} from "react-icons/bs"

import {
    AiFillPlaySquare, AiOutlinePlaySquare,
    AiFillHome, AiOutlineHome,
    AiFillSetting, AiOutlineSetting
} from "react-icons/ai"

import {GrHistory} from "react-icons/gr";
import {GoHistory} from "react-icons/go"

import {
    BiSolidLike, BiLike,
    BiSolidDislike, BiDislike,
    BiSolidHelpCircle, BiHelpCircle
} from "react-icons/bi"

import {
    MdVideoLibrary, MdOutlineVideoLibrary,
    MdWatchLater, MdOutlineWatchLater,
    MdExitToApp, MdOutlineExitToApp,
    MdReport, MdOutlineReportGmailerrorred
} from "react-icons/md";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


const SideBar = ({sidebar}) => {
    const [path, setPath] = useState("");
    const nav = useNavigate();

    useEffect(() => {
        setPath(window.location.pathname.substring(1))
    }, [nav])

    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"}>
            <NavLink to={"/"} activeClassName={"active"} className="nav-link">
                <li>
                    {path === "" ? <AiFillHome size={23}/> : <AiOutlineHome size={23}/>}
                    <span>Home</span>
                </li>
            </NavLink>
            <NavLink to={"/subscribed"} activeClassName={"active"}>
                <li>
                    {path === "subscribed" ? <BsFillCollectionPlayFill size={23}/> : <BsCollectionPlay size={23}/>}
                    <span>Subscribed</span>
                </li>
            </NavLink>
            <hr/>
            <NavLink to={"/library"} activeClassName={"active"}>
                <li>
                    {path === "library" ? <MdVideoLibrary size={23}/> : <MdOutlineVideoLibrary size={23}/>}
                    <span>Library</span>
                </li>
            </NavLink>
            <NavLink to={"watchedVideos"} activeClassName={"active"}>
                <li>
                    {path === "watchedVideos" ? <GrHistory size={23}/> : <GoHistory size={23}/>}
                    <span>Watched Videos</span>
                </li>
            </NavLink>
            <NavLink to={"/yourVideos"} activeClassName={"active"}>
                <li>
                    {path === "yourVideos" ? <AiFillPlaySquare size={23}/> : <AiOutlinePlaySquare size={23}/>}
                    <span>Your Videos</span>
                </li>
            </NavLink>
            <NavLink to={"/watchLater"} activeClassName={"active"}>
                <li>
                    {path === "watchLater" ? <MdWatchLater size={23}/> : <MdOutlineWatchLater size={23}/>}
                    <span>Watch Later</span>
                </li>
            </NavLink>
            <NavLink to={"/likedVideos"} activeClassName={"active"}>
                <li>
                    {path === "likedVideos" ? <BiSolidLike size={23}/> : <BiLike size={23}/>}
                    <span>Liked Videos</span>
                </li>
            </NavLink>
            <hr/>
            <ul>
                <span>Subscribed channels</span>
            </ul>
            <hr/>
            <ul>
                <span>Explore</span>
            </ul>
            <hr/>
            <ul>
                <span>Others</span>
            </ul>
            <hr/>
            <ul>
                <li>
                    <AiOutlineSetting size={23}/>
                    <span>Settings</span>
                </li>
                <li>
                    <BiHelpCircle size={23}/>
                    <span>Guides</span>
                </li>
                <li>
                    <MdOutlineReportGmailerrorred size={23}/>
                    <span>Reports</span>
                </li>
            </ul>
            <hr/>
            <li>
                <MdOutlineExitToApp size={23}/>
                <span>Log Out</span>
            </li>
            <hr/>
        </nav>
    )
}
export default SideBar;

