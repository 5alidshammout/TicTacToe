import { useState} from "react";
import Square from "./square";

let players = ["O", "X"]

function placeSign(i:number, val:string, turn:string, setTurn:React.Dispatch<React.SetStateAction<string>>, Squares:string[], setSquares:React.Dispatch<React.SetStateAction<string[]>>) {
  if (val !== "") { return }
  let tmp = [...Squares]
  tmp[i] = turn
  setSquares(tmp)
  setTurn(players[Math.abs(players.indexOf(turn) - 1)])
}

function App() {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  
  return (
    <>
      <h1 className="text-slate-400 font-black text-xl">It's {turn} turn</h1>
      <div id="board" className="grid grid-cols-3 grid-rows-3">
        {squares.map((val, i) => 
          <Square
            key={i}
            index={i}
            player=""
            selected={() => placeSign(i, val, turn, setTurn, squares, setSquares)}
          ></Square>
          )}
      </div>
    </>
  );
}

export default App;
