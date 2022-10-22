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
    var copy = list;
    copy.push(text);
    setList(copy);
  };

  return (
    <div className="wishlist">
      <h5>My Wishlist</h5>
      <div className="form">
        <input onChange={handleTextChange} type="text" />
        <button onClick={addList}>Add</button>
      </div>

      <div className="all">
        <ul>
          {list.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WishList;
