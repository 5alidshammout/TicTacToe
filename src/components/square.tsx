interface props {
  rowi: number;
  coli: number;
  selected: () => void;
  player: "O" | "X" | "";
}

function Square({ rowi, coli, selected, player }: props) {
  return (
    <>
      <div
        className={
          "size-20 border-slate-400 flex items-center justify-center text-4xl " +
          (coli !== 0 ? "border-l-4 " : "") +
          (coli !== 2 ? "border-r-4 " : "") +
          (rowi !== 0 ? "border-t-4 " : "") +
          (rowi !== 2 ? "border-b-4 " : "")
        }
        onClick={(_) => selected()}
      >
        <h1 className="text-slate-400">{player}</h1>
      </div>
    </>
  );
}
export default Square;
