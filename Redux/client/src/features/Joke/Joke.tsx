import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../app/hooks"; 
import { selectJoke, setJoke } from "./JokeSlice";
const Joke = () => {
  const dispatch = useAppDispatch(); 
  const Joke = useAppSelector(selectJoke); 

  async function handlegetjoke() {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    const joke = data.value;
    if (joke) {
    dispatch(setJoke(joke))
    }
  }
  return (
    <div>
      <h1>{Joke}</h1>
      <button onClick={handlegetjoke}>get joke</button>
    </div>
  );
};

export default Joke;
