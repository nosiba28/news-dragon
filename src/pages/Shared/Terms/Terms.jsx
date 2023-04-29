import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel consequuntur deserunt iure quasi, qui quia iusto soluta hic sit aspernatur illum odio! Consequuntur similique deleniti ratione cum, at dolor nam accusantium voluptates dignissimos assumenda, nisi sed non quam itaque! Sequi distinctio, nobis modi fuga ducimus obcaecati rerum facilis perferendis illo.
                <Link to="/register">Register</Link>
            </p>
            
        </Container>
    );
};

export default Terms;