import { useAppDispatch, useAppSelector } from "../../app/hooks"; //כאן אנחנו מייבאים את הדיספאצ והסלקטור מההוקס
import { selectText, setText } from "./textSlice"; // כאן אנו מייבאים את גם את הפונקציה שתעשה שינוי וגם את השם החדש שנקבל בטקסט
const Text = () => {
  const dispatch = useAppDispatch(); // נותנים ערך לדיפאצ שמשכנו מלמעלה
  const text = useAppSelector(selectText); // מספר 5 ,כאן אנו מקבלים את הערך החדש של הטקסט שהכנסנו

  //   מספר 2
  function handlegettext(ev: any) {
    //  הפונקציה מקבלת את הערך של השם ומעבירה אותה דרך הדיספאצ לאקשן
    ev.preventDefault();
    const text = ev.target.elements.text.value;
    dispatch(setText(text));
  }
  return (
    // התחלה מספר 1,המשתמש מכניס שם משתמש ומעביר לפונקציה
   // מספר 6 ,פה גם יקרה הסיום של כל המעגל ברגע שהחזרנו את הערך החדש אנחנו נרנדר אותו
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
