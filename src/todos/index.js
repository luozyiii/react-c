import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import './style.less';

export default function (props) {
  const [undoList, setUndoList] = useState([]);

  useEffect(() => {}, []);

  const addUndoItem = (value) => {
    setUndoList([...undoList, value]);
  };

  return (
    <div>
      <Header addUndoItem={addUndoItem} />
      <div>
        <p>未完成列表</p>
        <ul>
          {undoList.map((item) => (
            <p>{item}</p>
          ))}
        </ul>
      </div>
    </div>
  );
}
