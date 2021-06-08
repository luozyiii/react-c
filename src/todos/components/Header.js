import React, { useState, useEffect } from 'react';

export default function (props) {
  const [value, setValue] = useState('');

  useEffect(() => {}, []);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputKeyUp = (e) => {
    if (e.keyCode === 13 && value) {
      props.addUndoItem(value);
    }
  };

  return (
    <div>
      <input data-test="input" value={value} onChange={handleInputChange} onKeyUp={handleInputKeyUp} />
    </div>
  );
}
