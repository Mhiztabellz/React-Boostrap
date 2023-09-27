import {Container } from "react-bootstrap";
import AboutItem from "../../components/about/AboutItem";
import AboutHeader from "../../layouts/header/about";


export default function AboutPage(): React.JSX.Element {
    return (
        <>
        <AboutHeader />
        <Container>
            <AboutItem />
        </Container>
        </>
    )
}