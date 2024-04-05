import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Searchbar() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null); 
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/Searched/' + input);
  };

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div className='topnav'>
        <form onSubmit={submitHandler}>
          <input
            ref={inputRef} 
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search after food here. . . "
            value={input}
            className='topnav'
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
