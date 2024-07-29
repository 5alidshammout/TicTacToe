import { useState } from "react";
import Square from "./square";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

let players = ["O", "X"];

function checkWinner(
  rowi: number,
  coli: number,
  turn: string,
  Squares: string[][]
) {
  let coord = [rowi, coli];
  if (Squares[rowi].every((el) => el === turn)) {
    return turn;
  } else if (Squares.map((row) => row[coli]).every((el) => el === turn)) {
    return turn;
  } else if (
    !(
      coord.filter((x) => x === 1).length === 1 &&
      coord.filter((x) => x !== 1).length === 1
    )
  ) {
    let d0: string[] = [];
    let d1: string[] = [];
    for (let i = 0; i < 3; i++) {
      d0.push(Squares[i][i]);
      d1.push(Squares[2 - i][i]);
    }
    if ([d0, d1].some((arr) => arr.every((el) => el === turn))) {
      return turn;
    }
  }
  return "";
}

function placeSign(
  coli: number,
  rowi: number,
  val: string,
  turn: string,
  setTurn: React.Dispatch<React.SetStateAction<string>>,
  Squares: string[][],
  setSquares: React.Dispatch<React.SetStateAction<string[][]>>
) {
  if (val !== "" || turn[0] === "-") {
    return;
  }
  let tmp = Squares.map((r) => [...r]);
  tmp[rowi][coli] = turn;
  setSquares(tmp);

  console.log(rowi, coli, turn, tmp);
  let winner = checkWinner(rowi, coli, turn, tmp);

  if (winner !== "") {
    setTurn(`-${turn}`);
  } else {
    if (tmp.some((x) => x.some((y) => y === ""))) {
      setTurn(players[Math.abs(players.indexOf(turn) - 1)]);
    } else {
      setTurn("");
    }
  }
}

function App() {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState<string[][]>(
    Array(3).fill(Array(3).fill(""))
  );
  const { width, height } = useWindowSize();

  return (
    <>
      <h1 className="text-slate-400 font-black text-xl">
        {turn === ""
          ? "Game over"
          : turn[0] === "-"
          ? `${turn[1]} WON!`
          : `It's ${turn} turn`}
      </h1>
      <div id="board" className="grid grid-cols-3 grid-rows-3">
        {squares.map((row, rowi) =>
          row.map((val, coli) => (
            <Square
              key={rowi * 3 + coli}
              rowi={rowi}
              coli={coli}
              player={val as "" | "O" | "X"}
              selected={() =>
                placeSign(coli, rowi, val, turn, setTurn, squares, setSquares)
              }
            ></Square>
          ))
        )}
      </div>
      {turn[0] === "-" && (
        <Confetti width={width} height={height} numberOfPieces={100} />
      )}
    </>
  );
}

export default App;
