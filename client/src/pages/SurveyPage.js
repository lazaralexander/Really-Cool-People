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
import Options from "../components/Options";

import Auth from "../utils/auth";

const SurveyPage = () => {
  const [surveyAnswers, setSurveyAnswers] = useState({
    "surveyInput-0": "",
    "surveyInput-1": "",
    "surveyInput-2": "",
  });
  const [survey, setSurvey] = useState([
    //questions
    {
      question: "question text1",
      choices: ["a", "b", "c"],
    },
    {
      question: "question text2",
      choices: ["d", "e", "f"],
    },
    {
      question: "question text3",
      choices: ["g", "h", "i"],
    },
  ]);

  // create function to handle saving a survey to our database
  const handleSaveSurvey = async (e) => {
    e.preventDefault();
    console.log("Handle form submit.");
    const userProfile = Auth.getProfile();
    //grab ID for mutation
    // add mutation for (surveyAnswers)
    // pass to graphql controller mutation to update the user with their survey data
    // then, clear input data set survey inputs to clear after they receive data
    setSurveyAnswers("");
  };

  //can we turn these to "for each"?
  function update(e) {
    const { name, value } = e.target;
    setSurveyAnswers({ ...surveyAnswers, [name]: value });
    /**
     * {
     *  "surveyInput-0" : "test",
     *  "surveyInput-1": "second",
     * }
     */
  }
  return (
    <Jumbotron fluid className="text-light bg-dark">
      <Container>
        <h1>Fill Out Your Match Survey!</h1>
        <Form onSubmit={handleSaveSurvey}>
          {survey.map((questions, index) => {
            return (
              <Form.Row>
                <h3>{questions.question}</h3>
                <Col xs={12} md={8}>
                  <Form as="select" size="lg">
                    <Options
                      input={questions.input}
                      choices={questions.choices}
                    ></Options>
                  </Form>
                </Col>
              </Form.Row>
            );
          })}
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
