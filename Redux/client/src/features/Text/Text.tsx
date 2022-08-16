import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectText, setText } from "./textSlice";
const Text = () => {
  const dispatch = useAppDispatch();
  const text = useAppSelector(selectText);

  function handlegettext(ev: any) { //הפונקציה מקבלת את הערך של השם באינפוט
    ev.preventDefault();
    const text = ev.target.elements.text.value;
    console.log(text);
    dispatch(setText(text));
  }
  return (
    // התחלה מספר 1,המשתמש מכניס שם משתמש ומעביר לפונקציה
    <div> 
      <h1>{text}</h1> 
      <form onSubmit={handlegettext}> 
        <input type="text" name="text" />
        <input type="submit" value="get text" /> 
      </form>
    </div>
  );
};

export default Text;
