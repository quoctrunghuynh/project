import '../videoSection/_VideoSection.scss'
import SuggestionBar from "../suggestionBar/SuggestionBar";
import VideoSection from "../videoSection/VideoSection";
import CommentSection from "../commentSection/CommentSection";
import {Row} from "react-bootstrap";

export default function Watching() {
    return (
        <>
            <Row>
                <div className={"col-9"}>
                    <VideoSection/>
                    <CommentSection/>
                </div>
                <div className={"col-3"}>
                    <SuggestionBar/>
                </div>
            </Row>
        </>
    )
}