interface props {
  fn: () => void;
}
function PlayAgain({ fn }: props) {
  return (
    <button className="bg-slate-400 p-4 rounded-xl" onClick={() => fn()}>
      Play Again!
    </button>
  );
}
export default PlayAgain;
