import React, { useState } from 'react';
import "./Quiz.css"
import { Link } from 'react-router-dom';
const Quiz = () => {

	const questions = [
		{
			questionText: 'What is the founder of Samsung?',
			answerOptions: [
				{ answerText: 'Kee Kun Lee', isCorrect: false },
				{ answerText: 'James Green', isCorrect: false },
				{ answerText: 'Seo-Hyoun', isCorrect: true },
				{ answerText: 'Lee Byung-chul', isCorrect: false },
			],
		},
		{
			questionText: 'What is the founder of Google?',
			answerOptions: [
				{ answerText: 'Jeff & Yung', isCorrect: false },
				{ answerText: 'Schmidt', isCorrect: false },
				{ answerText: 'Sundar Pichai', isCorrect: true },
				{ answerText: 'Lary Page & Sergey Brin', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]



	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	
	};

	return (

		<div className='quiz-container'>
			<div className="quiz">
				{showScore ? (
					<div className='score-section'>
					
					{
						score === 1 ? `you have scored ${score} of ${questions.length} so you should study a Partner course such as Dance.` : score ===  2 ? `you have scored ${score} of ${questions.length} so you should study an Social science Degree.`: score === 3 ? `you have scored ${score} of ${questions.length} so you should study an Creative Industry Degree` : score === 4 ? `you have scored ${score} of ${questions.length} so you should study an Business Degree.`: score === 5 ? `you have scored ${score} of ${questions.length} so you should study an Education Degree`: score === 6 ? `you have scored ${score} of ${questions.length} so you should study an Technology  Degree`: score === 0 ? "please do the quiz so you can get a result because you haven't scored a mark":""
					}
					<br />
						{/* You scored {score} out of {questions.length}<br /> */}

						<Link className="" to="/">
							<button className="butn">
								Home&nbsp;
              <i className="fas fa-home" />
							</button>


						</Link>
						<br />


						<button className="butn" onClick={() => window.location.reload()}>Restart Quiz</button>
					</div>
				) : (
						<>
							<div className="main">
								<div className='question-section'>
									<div className='question-count'>
										<span>Question {currentQuestion + 1}</span> / {questions.length}
									</div>
									<div className='question-text'>{questions[currentQuestion].questionText}</div>
								</div>
								<div className='answer-section'>
									{questions[currentQuestion].answerOptions.map((answerOption) => (
										<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
									))}
								</div>
							</div>
						</>
					)}
			</div>

		</div>

	);
}



export default Quiz;
