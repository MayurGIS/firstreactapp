import './header.css';
import { Container, Row, Col } from 'reactstrap';

function Header() {
    return (
        <div className="Header">
            <Container fluid>
                <Row>
                    <Col>Mayur Patel</Col>
                    <Col>Utkarsh Saraf</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;