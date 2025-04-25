import { Info, Play } from "lucide-react";

const MovieDetails = ({ title, overview }) => {
  return (
    <div className="absolute flex flex-col p-6 top-56 text-white">
      <p className="text-6xl font-bold italic"> {title}</p>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex gap-6">
        <button className="bg-white text-black rounded px-6 py-3 flex gap-2 font-semibold hover:bg-opacity-80"><Play className="text-black fill-black"/>Play</button>
        <button className="text-white bg-gray-400 bg-opacity-25 px-6 py-3 rounded flex gap-2 font-semibold hover:bg-opacity-80"><Info className="text-white"/>  More Info</button>
      </div>
    </div>
  );
};

export default MovieDetails;
