import './App.css';
import './assets/scss/_app.scss'
import HomeScreen from "./screens/homeScreen/HomeScreen";
import {Route, Routes} from "react-router-dom";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import LibraryScreen from "./screens/libraryScreen/LibraryScreen";
import WatchedScreen from "./screens/watchedScreen/WatchedScreen";
import YourVideoScreen from "./screens/yourVideoScreen/YourVideoScreen";
import LikedVideosScreen from "./screens/likedVideosScreen/LikedVideosScreen";
import Watching from "./layouts/main-layouts/watching/main/Watching";
import MainLayout from "./layouts/MainLayout";
import WatchLaterScreen from "./screens/watchLaterScreen/WatchLaterScreen";
import SubscribedScreen from "./screens/subscribedScreen/SubscribedScreen";

function App() {


    return (
        <>
            {/*<Header handleSetSidebar = {handleSetSidebar}/>*/}
            {/*<div className={"app__container"}>*/}
            {/*    <SideBar sidebar = {sidebar}/>*/}
            {/*    <Container fluid className={"app__main "}> /!*border border-warning*!/*/}
            {/*        <Routes>*/}
            {/*            <Route path={""} element={<HomeScreen/>}/>*/}
            {/*            <Route path={"/login"} element={<LoginScreen/>}/>*/}
            {/*            <Route path={"/subscribed"} element={<SubscribedScreen/>}/>*/}
            {/*            <Route path={"/library"} element={<LibraryScreen/>}/>*/}
            {/*            <Route path={"/watchedVideos"} element={<WatchedScreen/>}/>*/}
            {/*            <Route path={"/yourVideos"} element={<YourVideoScreen/>}/>*/}
            {/*            <Route path={"/watchLater"} element={<WatchedScreen/>}/>*/}
            {/*            <Route path={"/likedVideos"} element={<LikedVideosScreen/>}/>*/}
            {/*            <Route path={"/watching"} element={<Watching/>}/>*/}
            {/*        </Routes>*/}
            {/*    </Container>*/}
            {/*</div>*/}

                    <Routes>
                        <Route path={""} element={<MainLayout><HomeScreen/></MainLayout>}/>
                        <Route path={"/login"} element={<MainLayout><LoginScreen/></MainLayout>}/>
                        <Route path={"/subscribed"} element={<MainLayout><SubscribedScreen/></MainLayout>}/>
                        <Route path={"/library"} element={<MainLayout><LibraryScreen/></MainLayout>}/>
                        <Route path={"/watchedVideos"} element={<MainLayout><WatchedScreen/></MainLayout>}/>
                        <Route path={"/yourVideos"} element={<MainLayout><YourVideoScreen/></MainLayout>}/>
                        <Route path={"/watchLater"} element={<MainLayout><WatchLaterScreen/></MainLayout>}/>
                        <Route path={"/likedVideos"} element={<MainLayout><LikedVideosScreen/></MainLayout>}/>
                        <Route path={"/watching"} element={<MainLayout><Watching/></MainLayout>}/>
                    </Routes>


        </>
    )
}

export default App;
