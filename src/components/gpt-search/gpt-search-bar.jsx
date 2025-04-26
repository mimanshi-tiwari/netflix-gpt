import { useRef } from "react";
import { LOGIN_BACKDROP } from "../../shared/constants";
import openai from "../../openai/open-ai";
import { SEARCH_MOVIE } from "../../shared/api-endpoints";
import { useDispatch } from "react-redux";
import { addGptSearchResults } from "../../slice/gptSlice";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesTMDB = async (movieName) => {
    const response = await fetch(
      SEARCH_MOVIE.replace("{{MOVIE_NAME}}", movieName)
    );
    return await response.json();
  };

  const handleAskGPT = async () => {
    try {
      const gptQuery =
        "Act as a Movie Recommendation system. Suggest some movies for the query, " +
        searchText.current.value +
        ". give names of 10 movies only at max. List movies as comma separated. Like the example given ahead. Example Result: Plup Fiction, Reservoir Dogs, Its a wonderful life, God Father etc";
      const gptResults = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "developer", content: "Talk like a pirate." },
          { role: "user", content: gptQuery },
        ],
      });
      const suggestedMovies =
        gptResults?.choices?.[0]?.message?.content?.split(",");
      if (suggestedMovies) {
        const promiseArray = suggestedMovies.map(searchMoviesTMDB);
        const searchedTMDBMovies = await Promise.all(promiseArray);
          dispatch(addGptSearchResults({movieNames: suggestedMovies, tmdbResults: searchedTMDBMovies}))
      }
    } catch (err) {
      console.error("Movie suggestion failed", err);
    }
  };

  return (
    <div className="relative">
      <img alt="backdrop-image" className="-z-10" src={LOGIN_BACKDROP} />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex gap-4 w-5/12 absolute top-[80px] left-[30%] px-4 py-2 bg-black text-white rounded bg-opacity-80"
      >
        <input
          type="text"
          ref={searchText}
          placeholder="Can't decide what to watch?"
          className="w-2/3 p-2 rounded bg-gray-900 border border-gray-300 bg-opacity-80"
        />
        <button
          className="w-1/3 px-4 py-2 bg-[#e50914] rounded font-semibold"
          onClick={handleAskGPT}
        >
          ASK GPT
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
