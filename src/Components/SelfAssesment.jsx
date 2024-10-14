import { useState } from "react";
import { Container, Button, Card, Form, Col } from "react-bootstrap";
import "../Styles/SelfAssesment.css"

function SelfAssessment() {
  const questions = [
    {
      id: 1,
      text: "How often do you feel nervous or anxious?",
      options: [
        { text: "Never", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
        { text: "Always", score: 4 },
      ],
    },
    {
      id: 2,
      text: "Do you find it difficult to relax?",
      options: [
        { text: "Never", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
        { text: "Always", score: 4 },
      ],
    },
    {
      id: 3,
      text: "How often do you experience racing thoughts?",
      options: [
        { text: "Never", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
        { text: "Always", score: 4 },
      ],
    },
  ];

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  // Handle option change
  const handleOptionChange = (questionId, score) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: score,
    }));
  };

  // Calculate and display the result
  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);

    let recommendation = "";
    if (totalScore <= 3) {
      recommendation = "You seem to be experiencing low levels of stress.";
    } else if (totalScore <= 6) {
      recommendation = "You might be experiencing moderate stress. Consider some relaxation techniques.";
    } else {
      recommendation = "High levels of stress detected. It might be helpful to consult a mental health professional.";
    }

    setResult({ score: totalScore, recommendation });

    // Store the result in localStorage
    localStorage.setItem("assessmentResult", JSON.stringify({ score: totalScore, recommendation }));
  };

  return (
    <Container className="self-assessment my-5">
      <h1 className="text-center mb-4">Self-Assessment for Stress</h1>
      <Card className="p-4 shadow">
        {questions.map((question) => (
          <Form.Group key={question.id} className="mb-3">
            <Form.Label className="h5">{question.text}</Form.Label>
            {question.options.map((option) => (
              <Form.Check
                key={option.text}
                type="radio"
                label={option.text}
                name={`question-${question.id}`}
                value={option.score}
                onChange={() => handleOptionChange(question.id, option.score)}
                checked={answers[question.id] === option.score}
              />
            ))}
          </Form.Group>
        ))}
        <Button variant="primary" onClick={calculateResult} className="w-100">Submit</Button>

        {result && (
          <div className="mt-4">
            <h2>Your Score: {result.score}</h2>
            <p>{result.recommendation}</p>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default SelfAssessment;
