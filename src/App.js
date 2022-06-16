import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CATEGORIES from './constants/categories';
import Category from './components/Category';
import QuestionBox from './components/QuestionBox';
import questionsSport from './data/sport.json';

function App() {
    const [category, setCategory] = useState(null);
    const [questions, setQuestions] = useState([]);

    const setCurrentCategory = category => {
        setCategory(category);

        switch (category.name) {
            case CATEGORIES.art.name:
                setQuestions(questionsSport);
                break;
        }
    };

    return (
        <Container>
            <Row className="my-5">
                <Col className="text-center">
                    <h1 onClick={() => setCategory(null)}>React Quiz</h1>
                </Col>
            </Row>
            {category ? (
                <>
                    <Row className="d-flex justify-content-center mb-4">
                        <Col md={4} className="text-center">
                            <Category category={category} size="sm" onSelect={setCurrentCategory} />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col md={4} className="text-center">
                            <QuestionBox questions={questions} />
                        </Col>
                    </Row>
                </>
            ) : (
                <>
                    {Object.values(CATEGORIES).map((c, i) => (
                        <Row key={i} className="d-flex justify-content-center mb-5">
                            <Col md={4}>
                                <Category category={c} onSelect={setCurrentCategory} />
                            </Col>
                        </Row>
                    ))}
                </>
            )}
        </Container>
    );
}

export default App;