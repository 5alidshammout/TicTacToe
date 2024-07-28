import { useState } from "react";
import Square from "./square";

let players = ["O", "X"];

function placeSign(
  coli: number,
  rowi: number,
  val: string,
  turn: string,
  setTurn: React.Dispatch<React.SetStateAction<string>>,
  Squares: string[][],
  setSquares: React.Dispatch<React.SetStateAction<string[][]>>
) {
  if (val !== "") {
    return;
  }
  let tmp = Squares.map((r) => [...r]);
  tmp[rowi][coli] = turn;
  setSquares(tmp);
  if (tmp.some((x) => x.some((y) => y === ""))) {
    setTurn(players[Math.abs(players.indexOf(turn) - 1)]);
  } else {
    setTurn("");
  }
}

function App() {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState<string[][]>(
    Array(3).fill(Array(3).fill(""))
  );

  return (
    <>
      <h1 className="text-slate-400 font-black text-xl">
        {turn === "" ? "Game over" : `It's ${turn} turn`}
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
    </>
  );
}

export default App;
