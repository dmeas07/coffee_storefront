import "./wishlist.css";
import { useState } from "react";

const WishList = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleTextChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const addList = () => {
    let copy = [...list];
    copy.push(text);
    setText("");
    setList(copy);
  };

  return (
    <div className="wishlist">
      <h5>My Wishlist</h5>
      <div>
        <input type="text" onChange={handleTextChange} value={text} />
        <button onClick={addList}>Add</button>
      </div>

      <ul>
        {list.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
