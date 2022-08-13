
import { Button, Container, Col, Row, } from "react-bootstrap";

const LandingPage = () => {
    console.log("HomePage connected");

    return (
        <>

            <div id="intro" class="view">

                <div class="mask rgba-black-strong">

                    <div class="container-fluid d-flex align-items-center justify-content-center h-100">

                        <div class="row d-flex justify-content-center text-center mb-4">

                            <div class="col-md-10">

                                {/* <!-- Heading --> */}
                                <h2 class="display-4 font-weight-bold white-text pt-5 mb-2">Welcome to Grumble!</h2>

                                {/* <!-- Divider --> */}
                                <hr class="hr-light" />

                                {/* <!-- Description --> */}
                                <h4 class="white-text my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Deleniti
                                    consequuntur.</h4>
                                <Container fluid className="mb-2">
                                    <Col>
                                      
                                        <Row className="justify-content-center align-center">
                                            <Button className="m-1" href="/admin">Link to page</Button>
                                            <Button className="m-1" href="/survey">Link to survey page</Button>
                                        </Row>
                                    </Col>

                                </Container>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            {/* <!--/.Mask--> */}
             </>
    )
}

export default LandingPage;
