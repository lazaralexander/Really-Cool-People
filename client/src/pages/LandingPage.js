
import { Button, Container, Col, Row, } from "react-bootstrap";

const LandingPage = () => {
    console.log("HomePage connected");

    return (
        <>
            <Container fluid className="landingPage">
                <Col>
                <Row className="justify-content-center align-center text-white">
                    <h1 >Welcome To Match App</h1>
                </Row>
                    <Row className="justify-content-center align-center">
                        <Button className="m-1" href="/admin">Link to page</Button>
                        <Button className="m-1" href="/survey">Link to survey page</Button>
                    </Row>
                </Col>

            </Container>
        </>
    )
}

export default LandingPage;