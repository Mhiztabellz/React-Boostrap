import { Container } from "react-bootstrap";
import ContactItem from "../../components/contact/ContactItem";
import ContactHeader from "../../layouts/header/contact";

export default function ContactPage(): React.JSX.Element {
    return (
        <>
            <ContactHeader />
            <Container>
                <ContactItem />
            </Container>
        </>
    )
}