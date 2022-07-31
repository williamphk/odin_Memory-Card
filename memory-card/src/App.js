import logo from "./logo.svg";
import react, { useState, useEffect } from "react";
import "./App.css";

const cardMap = {
  "🍅": "1",
  "🍆": "2",
  "🍇": "3",
  "🍈": "4",
  "🍉": "5",
  "🍊": "6",
  "🍋": "7",
  "🍌": "8",
  "🍍": "9",
  "🍎": "10",
  "🍏": "11",
  "🍐": "12",
  "🍑": "13",
  "🍒": "14",
  "🍓": "15",
  "😀": "1",
  "😁": "2",
  "😂": "3",
  "😃": "4",
  "😄": "5",
  "😅": "6",
  "😆": "7",
  "😇": "8",
  "😉": "9",
  "😊": "10",
  "😋": "11",
  "😌": "12",
  "😍": "13",
  "😎": "14",
  "😏": "15",
  "😐": "16",
  "😑": "17",
  "😒": "18",
  "😓": "19",
  "😔": "20",
};

function App() {
  const [cards, setCards] = useState([
    "🍅",
    "🍆",
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
  ]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [isFinalLevel, setIsFinalLevel] = useState(false);
  const [isInitialLevel, setIsInitialLevel] = useState(true);

  const handleClick = (e, i) => {
    //console.log(i);
    handleClickedCards(e);

    handleshuffle();
    handleScore();
  };

  useEffect(() => {
    if (isWin || isDuplicate) {
      setIsDisable(true);
    } else if (!isWin || !isDuplicate) {
      setIsDisable(false);
    }
  }, [isWin, isDuplicate, isDisable]);

  const handleshuffle = () => {
    let cardsCopy = [...cards];
    let currentIndex = cardsCopy.length,
      randomIndex;

    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [cardsCopy[currentIndex], cardsCopy[randomIndex]] = [
        cardsCopy[randomIndex],
        cardsCopy[currentIndex],
      ];
    }

    setCards(cardsCopy);
  };

  const handleScore = () => {
    let newScore = score;
    newScore++;
    setScore(newScore);
  };

  useEffect(() => {
    if (isWin || isDuplicate) {
      if (bestScore < score) {
        setBestScore(score);
      }
    }
  }, [isWin, isDuplicate, score, bestScore]);

  const handleClickedCards = (e) => {
    let newclickedCards = [...clickedCards];
    let clickedCardID = e.target.id;
    newclickedCards = [...newclickedCards, cards[clickedCardID]];
    setClickedCards(newclickedCards);
  };

  useEffect(() => {
    let unique = Array.from(new Set(clickedCards));
    if (clickedCards.length !== unique.length) {
      setIsDuplicate(true);
      setIsWin(false);
    } else setIsDuplicate(false);
  }, [clickedCards]);

  useEffect(() => {
    if (score === cards.length) {
      setIsWin(true);
      setIsDuplicate(false);
    } else setIsWin(false);
  }, [cards.length, score]);

  useEffect(() => {
    console.log(clickedCards, isDuplicate);
  }, [clickedCards, isDuplicate]);

  const handleRestart = () => {
    setScore(0);
    setIsDuplicate(false);
    setClickedCards([]);
    handleshuffle();
    setIsWin(false);
  };

  const handleNextLevel = () => {
    setScore(0);
    setBestScore(0);
    setIsDuplicate(false);
    setClickedCards([]);
    handleshuffle();
    setIsWin(false);
    setCards([
      "😀",
      "😁",
      "😂",
      "😃",
      "😄",
      "😅",
      "😆",
      "😇",
      "😉",
      "😊",
      "😋",
      "😌",
      "😍",
      "😎",
      "😏",
      "😐",
      "😑",
      "😒",
      "😓",
      "😔",
    ]);
    setIsFinalLevel(true);
    setIsInitialLevel(false);
  };

  const handlePreviousLevel = () => {
    setScore(0);
    setBestScore(0);
    setIsDuplicate(false);
    setClickedCards([]);
    handleshuffle();
    setIsWin(false);
    setCards([
      "🍅",
      "🍆",
      "🍇",
      "🍈",
      "🍉",
      "🍊",
      "🍋",
      "🍌",
      "🍍",
      "🍎",
      "🍏",
      "🍐",
      "🍑",
      "🍒",
      "🍓",
    ]);
    setIsInitialLevel(true);
    setIsFinalLevel(false);
  };

  return (
    <div className="App">
      <div>Memory Game (React Hook)</div>
      <div>Get points by clicking on an card but don't click on any more than once!</div>
      <div>Score: {score}</div>
      <div>Best score: {bestScore}</div>
      <div>{isDuplicate && !isWin ? "You Lose" : null}</div>
      <div>{isWin && !isDuplicate ? "You Win" : null}</div>
      {!isFinalLevel && <button onClick={handleNextLevel}>Next Level</button>}
      {!isInitialLevel && <button onClick={handlePreviousLevel}>Previous Level</button>}
      {isDuplicate ? <button onClick={handleRestart}>Restart</button> : null}
      <div className="Cards">
        {cards.map((element, index) => {
          return (
            <button
              className="Card"
              id={index}
              data-testid={cardMap[element]}
              onClick={(e) => handleClick(e, cardMap[element])}
              disabled={isDisable}
              //style={{ backgroundColor: clickedCards.includes(element) ? "black" : "green" }}
            >
              {element}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
