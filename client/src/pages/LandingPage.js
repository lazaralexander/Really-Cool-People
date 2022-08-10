
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
                                <h2 class="display-4 font-weight-bold white-text pt-5 mb-2">Welcome to Match App</h2>

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

            <main class="mt-5">
                <div class="container">


                    <section id="best-features" class="text-center">

                        <h2 class="mb-5 font-weight-bold">Best Features</h2>


                        <div class="row d-flex justify-content-center mb-4">


                            <div class="col-md-8">


                                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptate
                                    hic
                                    provident nulla repellat
                                    facere esse molestiae ipsa labore porro minima quam quaerat rem, natus repudiandae debitis
                                    est
                                    sit pariatur.</p>

                            </div>


                        </div>

                        <div class="row">

                            <div class="col-md-4 mb-5">
                                <i class="fa fa-camera-retro fa-4x orange-text"></i>
                                <h4 class="my-4 font-weight-bold">Experience</h4>
                                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                                    maiores nam,
                                    aperiam minima
                                    assumenda deleniti hic.</p>
                            </div>

                            <div class="col-md-4 mb-1">
                                <i class="fa fa-heart fa-4x orange-text"></i>
                                <h4 class="my-4 font-weight-bold">Happiness</h4>
                                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                                    maiores nam,
                                    aperiam minima
                                    assumenda deleniti hic.</p>
                            </div>

                            <div class="col-md-4 mb-1">
                                <i class="fa fa-bicycle fa-4x orange-text"></i>
                                <h4 class="my-4 font-weight-bold">Adventure</h4>
                                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                                    maiores nam,
                                    aperiam minima
                                    assumenda deleniti hic.</p>
                            </div>


                        </div>


                    </section>


                    <hr class="my-5" />

{/* images section of landing page */}

                    <section id="examples" class="text-center">


                        <h2 class="mb-5 font-weight-bold">Stunning Examples</h2>


                        <div class="row">


                            <div class="col-lg-4 col-md-12 mb-4">

                                <div class="view overlay z-depth-1-half">
                                    <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" class="img-fluid" alt="" />
                                    <div class="mask rgba-white-slight"></div>
                                </div>

                                <h4 class="my-4 font-weight-bold">Heading</h4>
                                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                                    maiores nam,
                                    aperiam minima
                                    assumenda deleniti hic.</p>

                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">

                                <div class="view overlay z-depth-1-half">
                                    <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" class="img-fluid" alt="" />
                                    <div class="mask rgba-white-slight"></div>
                                </div>

                                <h4 class="my-4 font-weight-bold">Heading</h4>
                                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                                    maiores nam,
                                    aperiam minima
                                    assumenda deleniti hic.</p>

                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">

                                <div class="view overlay z-depth-1-half">
                                    <img src="https://mdbootstrap.com/img/Photos/Others/images/29.jpg" class="img-fluid" alt="" />
                                    <div class="mask rgba-white-slight"></div>
                                </div>

                                <h4 class="my-4 font-weight-bold">Heading</h4>
                                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                                    maiores nam,
                                    aperiam minima
                                    assumenda deleniti hic.</p>

                            </div>


                        </div>

                       

                    </section>


                    <hr class="my-5" />




                </div>
            </main>

        </>
    )
}

export default LandingPage;