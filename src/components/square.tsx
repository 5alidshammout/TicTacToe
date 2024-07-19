import { MouseEvent } from "react";

interface props {
  index: number;
  selected: (e: MouseEvent) => void;
}

function Square({ index, selected }: props) {
  let [row, col] = [(index % 3) + 1, Math.floor(index / 3) + 1];
  return (
    <>
      <div
        className={
          "size-20 border-slate-400 " +
          (row !== 1 ? "border-l-4 " : "") +
          (row !== 3 ? "border-r-4 " : "") +
          (col !== 1 ? "border-t-4 " : "") +
          (col !== 3 ? "border-b-4 " : "")
        }
        onClick={(e) => selected(e)}
      ></div>
    </>
  );
}
export default Square;
