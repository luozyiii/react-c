import React, { useState, useEffect } from 'react';

import Header from './components/Header';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  const addUndoItem = () => {};

  return (
    <div>
      <Header addUndoItem={addUndoItem} />
    </div>
  );
}
