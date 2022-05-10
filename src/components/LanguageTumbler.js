import React from "react";

function LanguageTumbler({ arr, handleFunc, className }) {
  return (
    <div className={`${className}-box`}>
      {arr.map(({ name, code }) => (
        <button
          className={`${className}-btn`}
          onClick={(event) => handleFunc(event)}
          key={code}
          value={code}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default LanguageTumbler;
