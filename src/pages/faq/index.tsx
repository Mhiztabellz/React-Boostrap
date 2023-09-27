import { Container } from "react-bootstrap";
import FaqItem from "../../components/faq/FaqItem";
import FaqHeader from "../../layouts/header/faq";
import CallToAction from "../../components/cta";

export default function FaqPage(): React.JSX.Element {
    return (
        <>
            <FaqHeader />
            <Container>
            <CallToAction
                    title="Who We Are"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac quam sed 
                    lacus volutpat finibus. Nullam tristique, neque id consequat bibendum, eros risus malesuada ante, 
                    non tristique arcu elit nec metus. Maecenas vel lectus vitae quam convallis dapibus non ut nisi. Pellentesque 
                    habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                    buttonText="Explore"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZ75AL9VVHbkrgOaei5ROiFqsLs0Ja26k_g&usqp=CAU"
                    url="/about"
                />
                <FaqItem />
                <br/>
            </Container>
        </>
    )
}