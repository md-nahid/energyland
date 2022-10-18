export default function ButtonOne({ label, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="px-8 py-5 text-lg text-white font-medium tracking-wider bg-lightGreen border-[1px] border-lightGreen hover:bg-lightOrange hover:border-lightOrange transition duration-1000"
    >
      {label}
    </button>
  );
}
