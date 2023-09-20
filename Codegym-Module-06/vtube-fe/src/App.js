import './App.css';
import './assets/scss/_app.scss'
import {Container} from "react-bootstrap";
import Header from "./layouts/commons/main/header/Header";
import SideBar from "./layouts/commons/main/sidebar/SideBar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import SubscribedScreen from "./screens/subscribedScreen/SubscribedScreen";
import LibraryScreen from "./screens/libraryScreen/LibraryScreen";
import WatchedScreen from "./screens/watchedScreen/WatchedScreen";
import YourVideoScreen from "./screens/yourVideoScreen/YourVideoScreen";
import LikedVideosScreen from "./screens/likedVideosScreen/LikedVideosScreen";

function App() {
    const [sidebar, setSidebar] = useState(false);
    const handleSetSidebar = () => setSidebar(value => !value)

    return (
        <>
            <Header handleSetSidebar = {handleSetSidebar}/>
            <div className={"app__container"}>
                <SideBar sidebar = {sidebar}/>
                <Container fluid className={"app__main "}> {/*border border-warning*/}
                    <Routes>
                        <Route path={""} element={<HomeScreen/>}/>
                        <Route path={"/login"} element={<LoginScreen/>}/>
                        <Route path={"/subscribed"} element={<SubscribedScreen/>}/>
                        <Route path={"/library"} element={<LibraryScreen/>}/>
                        <Route path={"/watchedVideos"} element={<WatchedScreen/>}/>
                        <Route path={"/yourVideos"} element={<YourVideoScreen/>}/>
                        <Route path={"/watchLater"} element={<WatchedScreen/>}/>
                        <Route path={"/likedVideos"} element={<LikedVideosScreen/>}/>
                    </Routes>
                </Container>

            </div>

        </>
    )
}

export default App;
