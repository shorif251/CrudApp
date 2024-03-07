export default function Button({
  type = "button",
  btnName="",
  btnStyle = "",
  onClick
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 cursor-pointer hover:ring-green-700 transition-all ${btnStyle}`}
    >
      {btnName}
    </button>
  );
}
