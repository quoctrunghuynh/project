import {Col, Container, Row} from "react-bootstrap";
import CategoriesBar from "../../layouts/commons/main/categoriesBar/CategoriesBar";
import Video from "../../layouts/commons/main/video/Video";
import {useDispatch, useSelector} from "react-redux";
import {getVideos, selectVideoList} from "../../features/video/videoSlice";
import {useEffect} from "react";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const videoList = useSelector(selectVideoList)

    useEffect(() => {

        if (videoList.length === 0) {
            dispatch(getVideos());
            console.log("getting videos...")
        }
    }, []);
    return (
        <Container className={"home"}>
            <div>
                <CategoriesBar/>
            </div>
            <Row>
                {videoList.map(
                    (video) => (
                        <Col lg={3} md={4}>
                            <Video key={video.id} video={video}/>
                        </Col>
                    ))}
            </Row>
        </Container>
    )
}
export default HomeScreen;