export default function Title({ description, titleblack, titlegreen, text }) {
  return (
    <div className="relative -mt-2 bg-red-300 inline-block">
      <h5 className="text-9xl -top-3/4 left-0 absolute text-gray-400 opacity-10 capitalize font-bold text-stroke ">
        {text}
      </h5>
      <p className="font-semibold capitalize text-orange-400 ">{description}</p>
      <h2>
        {titleblack}
        {titlegreen}
      </h2>
    </div>
  );
}
