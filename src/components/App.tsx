import Square from "./square";

function App() {
  return (
    <>
      <h1 className="text-slate-400 font-black text-xl">It's X turn</h1>
      <div id="board" className="grid grid-cols-3 grid-rows-3">
        {[...Array(9)].map((_, i) => (
          <Square
            key={i}
            index={i}
            selected={(e) => console.log(i, e)}
          ></Square>
        ))}
      </div>
    </>
  );
}

export default App;
