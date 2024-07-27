import { useState, MouseEvent} from "react";
import Square from "./square";

let players = ["O", "X"]

function placeSign(e:MouseEvent, turn:string, setTurn:React.Dispatch<React.SetStateAction<string>>) {
  (e.target as HTMLDivElement).innerText = turn
  setTurn(players[Math.abs(players.indexOf(turn) - 1)])
}

function App() {
  const [turn, setTurn] = useState("X");
  return (
    <>
      <h1 className="text-slate-400 font-black text-xl">It's {turn} turn</h1>
      <div id="board" className="grid grid-cols-3 grid-rows-3">
        {[...Array(9)].map((_, i) => (
          <Square
            key={i}
            index={i}
            player=""
            selected={(e) => placeSign(e, turn, setTurn)}
          ></Square>
        ))}
      </div>
    </>
  );
}

export default App;
