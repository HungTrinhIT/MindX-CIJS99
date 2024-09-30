import React, { useRef } from 'react';

const DemoUseRef = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // if (inputRef && inputRef.current) {
    //   inputRef.current.focus();
    // }
    inputRef?.current?.focus();
  };

  return (
    <div>
      <div>
        <label htmlFor='search-bar'>
          Search bar
          <input id='search-bar' ref={inputRef} />
        </label>
      </div>
      <button onClick={handleClick}>Click me to focus input</button>
    </div>
  );
};

export default DemoUseRef;
