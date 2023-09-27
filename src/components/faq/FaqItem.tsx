import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { faqdata } from '../../data/faq';


export default function FaqItem(): React.JSX.Element {


    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const accordionStyle = {
        background: '#f8f9fa',
        borderRadius: '10px',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const headerStyle = {
        background: '#243c4f',
        color: 'white',
        padding: '10px',
        borderRadius: '10px 10px 0 0',
        cursor: 'pointer',
    };

    const bodyStyle = {
        padding: '15px',
        borderTop: '1px solid #dee2e6',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Frequently Asked Questions</h1>
            <Accordion>
                {faqdata.map((item, index) => (
                    <Card key={index} style={accordionStyle}>
                        <Card.Header style={headerStyle} onClick={() => toggleAccordion(index)}>
                            <Button variant="link" style={{ color: 'inherit', textDecoration: 'none' }}>
                                {item.question}
                            </Button>
                        </Card.Header>
                        {activeIndex === index && (
                            <Card.Body style={bodyStyle}>{item.answer}</Card.Body>
                        )}
                    </Card>
                ))}
            </Accordion>
        </div>
    );
}