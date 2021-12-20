import { useEffect, useState } from "react";
import Square from "./Square";
import "./App.css";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setplayer] = useState("X");

  useEffect(() => {
    winGame(board);
    tieGame(board);
    if (player === "O") {
      setplayer("X");
    } else {
      setplayer("O");
    }
  }, [board]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }
        return val;
      })
    );
  };

  const winGame = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        alert(`The winner is ${player}`);
        setBoard(["", "", "", "", "", "", "", "", ""]);
      }
    }
  };
  const reStart = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setplayer("O");
  };

  const tieGame = (board) => {
    if (board.indexOf("") === -1) {
      alert("Tie");
      setBoard(["", "", "", "", "", "", "", "", ""]);
    }
  };

  return (
    <div className="App">
      <div className="bord">
        <div className="row">
          <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
          <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
          <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />
        </div>
        <div className="row">
          <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
          <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
          <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />
        </div>
        <div className="row">
          <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
          <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
          <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />
        </div>
      </div>
      <button
        onClick={() => {
          reStart();
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default App;
