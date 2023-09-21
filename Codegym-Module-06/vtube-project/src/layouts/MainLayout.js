import Header from "./commons/main/header/Header";
import SideBar from "./commons/main/sidebar/SideBar";
import './../assets/scss/_app.scss'
import {useState} from "react";
import {Container} from "react-bootstrap";

function MainLayout({children}){
    const [sidebar, setSidebar] = useState(false);
    const handleSetSidebar = () => setSidebar(value => !value)
    return(
        <>
            <Header handleSetSidebar={handleSetSidebar}/>
            <div className="app__container">
                <Container fluid className={"app__main"}>
                <SideBar sidebar={sidebar}/>
                <div className="app__main">
                    {children}
                </div>
                </Container>
            </div>
        </>
    )
}
export default MainLayout