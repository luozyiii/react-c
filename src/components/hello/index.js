import React, { useState, useEffect } from 'react';

import './index.less';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="title" data-test="hello">
      hello, this is React Component
    </div>
  );
}
