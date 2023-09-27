import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { data } from "../../data/blog/";
import BlogItem from "../../components/blogs/BlogItem";
import HomeHeader from "../../layouts/header/home";
import NewsLetter from "../../layouts/sections/home";
import CallToAction from "../../components/cta";
import { BrandI, brand1, brand2, brand3, brand4 } from "../../data/brands";

function Item(props: BrandI): React.JSX.Element {
    const { name, logo } = props;
    return (
        <div>
            <img title={name} src={logo} alt="img" width={144} style={{maxWidth: "100%", height: "auto"}} />
        </div>
    )
}

export default function HomePage() {
    const [arr, setArr] = React.useState<BrandI[] | null>();
    let name: string = "A";

    useEffect(() => {
        switch (name) {
            case "A":
                setArr(brand1);
                break;
            case "P":
                setArr(brand2);
                break;
            case "S":
                setArr(brand3);
                break;
            case "F":
                setArr(brand4);
                break;
        }
    }, [])


    return (
        <div>
            <HomeHeader />
            <Container>
                <h1 style={{ textAlign: "center" }}>OUR BLOG POSTS</h1>
                <Row>
                    {
                        data?.map((item: any, index: number) => (
                            <Col key={index} sm={6} md={6} lg={4} xs={12}>
                                <BlogItem data={item} />
                            </Col>
                        ))
                    }
                </Row>
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
                <br />
                <div className="container d-flex justify-content-between">
                    {
                        arr?.map((item: BrandI, index: number) => (
                            <Item key={index} name={item.name} logo={item.logo} />
                        ))
                    }
                </div>
                <NewsLetter />
            </Container>
        </div>
    );
}
