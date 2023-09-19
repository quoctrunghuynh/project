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


const SideBar = ({sidebar}) => {
    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"}>
        <li>
            <AiOutlineHome size={23}/>
            <span>Home</span>
        </li>
        <li>
            <BsCollectionPlay size={23}/>
            <span>Subscribed</span>
        </li>
        <hr/>
        <li>
            <MdOutlineVideoLibrary size={23}/>
            <span>Library</span>
        </li>
        <li>
            <GoHistory size={23}/>
            <span>Watched Videos</span>
        </li>
        <li>
            <AiOutlinePlaySquare size={23}/>
            <span>Your videos</span>
        </li>
        <li>
            <MdOutlineWatchLater size={23}/>
            <span>Watch later</span>
        </li>
        <li>
            <BiLike size={23}/>
            <span>Liked Videos</span>
        </li>
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
    </nav>)
}
export default SideBar;

