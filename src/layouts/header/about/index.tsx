import AboutUsImage from "../../../assets/images/aboutus.jpg";

export default function AboutHeader(): React.JSX.Element {
    return (
        <header>
            <img style={{width: "100%", height:"250px"}} src={AboutUsImage}/>
        </header>
    );
}

// import { Col, Container, Row } from "react-bootstrap";
// import AboutUsImage from "../../../assets/images/aboutus.jpg";

// export default function AboutHeader(): React.JSX.Element {
//     return (
//         <header className="header pb-5 mb-5 bg-dark">
//             <Container className="pt-5">
//                 <Row
//                     className="justify-content-between align-items-center"
//                     style={{ minHeight: "80px" }}
//                 >
//                     <Col>
//                         <div style={{ width: "80%" }}>
//                             <h1 className="text-light ">About US!</h1>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </header>
//     );
// }