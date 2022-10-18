export default function ButtonTwo({ label, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="px-8 py-5 text-lg text-white font-medium tracking-wider bg-transparent border-[1px] border-white hover:bg-white transition duration-1000 hover:text-lightOrange"
    >
      {label}
    </button>
  );
}
