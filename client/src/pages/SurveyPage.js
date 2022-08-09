import React, { useState } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

import Auth from "../utils/auth";

const SurveyPage = () => {
  const [surveyInput1, setSurveyInput1] = useState("");
  const [surveyInput2, setSurveyInput2] = useState("");
  const [surveyInput3, setSurveyInput3] = useState("");

  // create function to handle saving a survey to our database
  const handleSaveSurvey = async (e) => {
    e.preventDefault();
    console.log("Handle form submit.");
    const surveyData = { surveyInput1, surveyInput2, surveyInput3 };
    console.log(surveyData);
    // pass to graphql controller mutation to update the user with their survey data
    // then, clear input data set survey inputs to clear after they receive data
    setSurveyInput1("");
    setSurveyInput2("");
    setSurveyInput3("");
  };

  return (
    <Jumbotron fluid className="text-light bg-dark">
      <Container>
        <h1>Fill Out Your Match Survey!</h1>
        <Form onSubmit={handleSaveSurvey}>
          <Form.Row>
            <h3>Question 1</h3>
            <Col xs={12} md={8}>
              <Form.Control
                name="surveyInput1"
                value={surveyInput1}
                onChange={(e) => setSurveyInput1(e.target.value)}
                type="text"
                size="lg"
                placeholder="Answer 1"
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col xs={12} md={8}>
              <Form.Control
                name="surveyInput2"
                value={surveyInput2}
                onChange={(e) => setSurveyInput2(e.target.value)}
                type="text"
                size="lg"
                placeholder="answer 2"
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col xs={12} md={8}>
              <Form.Control
                name="surveyInput3"
                value={surveyInput3}
                onChange={(e) => setSurveyInput3(e.target.value)}
                type="text"
                size="lg"
                placeholder="answer3"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Button type="submit" variant="success" size="lg">
              Submit
            </Button>
          </Form.Row>
        </Form>
      </Container>
    </Jumbotron>
  );
};

export default SurveyPage;
