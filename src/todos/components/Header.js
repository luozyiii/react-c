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
      setValue('');
    }
  };

  return (
    <div className="header">
      <div className="header-content">
        Todos <input placeholder="add todo" className="header-input" value={value} onChange={handleInputChange} onKeyUp={handleInputKeyUp} data-test="input" />
      </div>
    </div>
  );
}
