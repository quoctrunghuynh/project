import {Col, Container, Row} from "react-bootstrap";
import CategoriesBar from "../../layouts/commons/main/categoriesBar/CategoriesBar";
import Video from "../../layouts/commons/main/video/Video";

const HomeScreen = () => {
    return (
        <Container className={"home"}>
            <div>
            <CategoriesBar/>
            </div>
            <Row>
                {
                    [...new Array(20)].map(() => (
                        <Col lg={3} md={4}>
                            <Video/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
export default HomeScreen;