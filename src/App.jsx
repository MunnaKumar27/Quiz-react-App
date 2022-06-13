import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/kbc";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "'OS' computer abbreviation usually means ?",
      answers: [
        {
          text: "Order of Significance",
          correct: false,
        },
        {
          text: "Open Software",
          correct: false,
        },
        {
          text: "Operating System",
          correct: true,
        },
        {
          text: "Optical Sensor",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "'.MOV' extension refers usually to what kind of file?",
      answers: [
        {
          text: "Image file",
          correct: false,
        },
        {
          text: "Animation/movie file",
          correct: true,
        },
        {
          text: "Audio file",
          correct: false,
        },
        {
          text: "MS Office document",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who developed Yahoo?",
      answers: [
        {
          text: "Dennis Ritchie & Ken Thompson",
          correct: false,
        },
        {
          text: "David Filo & Jerry Yang",
          correct: true,
        },
        {
          text: "Vint Cerf & Robert Kahn",
          correct: false,
        },
        {
          text: "Steve Case & Jeff Bezos",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Sometimes computers and cache registers in a foodmart are connected to a UPS system. What does UPS mean?",
      answers: [
        {
          text: "United Parcel Service",
          correct: false,
        },
        {
          text: "Uniform Product Support",
          correct: false,
        },
        {
          text: "Under Paneling Storage",
          correct: false,
        },
        {
          text: "Uninterruptable Power Supply",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Who co-founded Hotmail in 1996 and then sold the company to Microsoft?",
      answers: [
        {
          text: "Shawn Fanning",
          correct: false,
        },
        {
          text: "Ada Byron Lovelace",
          correct: false,
        },
        {
          text: "Sabeer Bhatia",
          correct: true,
        },
        {
          text: "Ray Tomlinson",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "In what year was the '@' chosen for its use in e-mail addresses?",
      answers: [
        {
          text: "1976",
          correct: false,
        },
        {
          text: "1972",
          correct: true,
        },
        {
          text: "1980",
          correct: false,
        },
        {
          text: "1984",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What was the first ARPANET message?",
      answers: [
        {
          text: "'lo'",
          correct: true,
        },
        {
          text: "hello world",
          correct: false,
        },
        {
          text: "mary had a little lamb",
          correct: false,
        },
        {
          text: "cyberspace, the final frontier",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who built the world's first binary digit computer: Z1...?",
      answers: [
        {
          text: "Konrad Zuse",
          correct: true,
        },
        {
          text: "Ken Thompson",
          correct: false,
        },
        {
          text: "Alan Turing",
          correct: false,
        },
        {
          text: "George Boole",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Compact discs, (according to the original CD specifications) hold how many minutes of music?",
      answers: [
        {
          text: "74 mins",
          correct: true,
        },
        {
          text: "	72 mins",
          correct: false,
        },
        {
          text: "	71 mins",
          correct: false,
        },
        {
          text: "	44 mins",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who co-created the UNIX operating system in 1969 with Dennis Ritchie?",
      answers: [
        {
          text: "Bjarne Stroustrup",
          correct: false,
        },
        {
          text: "	Steve Wozniak",
          correct: false,
        },
        {
          text: "Ken Thompson",
          correct:true,
        },
        {
          text: "	Niklaus Wirth",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "The input used by an antenna or cable to a TV set uses frequencies called...?",
      answers: [
        {
          text: "IF",
          correct: false,
        },
        {
          text: "RF",
          correct:true,
        },
        {
          text: "AF",
          correct:false,
        },
        {
          text: "SAP",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "what was ans of first question",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
