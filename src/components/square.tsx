interface props {
  index: number;
  selected: () => void;
  player: "O" | "X" | "";
}

function Square({ index, selected, player }: props) {
  let [row, col] = [(index % 3) + 1, Math.floor(index / 3) + 1];
  return (
    <>
      <div
        className={
          "size-20 border-slate-400 flex items-center justify-center text-4xl " +
          (row !== 1 ? "border-l-4 " : "") +
          (row !== 3 ? "border-r-4 " : "") +
          (col !== 1 ? "border-t-4 " : "") +
          (col !== 3 ? "border-b-4 " : "")
        }
        onClick={_ => selected()}
      >
        <h1 className="text-slate-400 bg-red-700">{player}</h1>
      </div>
    </>
  );
}
export default Square;
