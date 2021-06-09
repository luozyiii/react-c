import React, { Component } from 'react';

import Header from './components/Header';
import './style.less';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      undoList: [],
    };
    this.addUndoItem = this.addUndoItem.bind(this);
  }

  addUndoItem(value) {
    const { undoList } = this.state;
    this.setState({
      undoList: [...undoList, value],
    });
  }

  render() {
    const { undoList } = this.state;
    return (
      <div>
        <Header addUndoItem={this.addUndoItem} />
        <div>
          <p>正在进行</p>
          <ul>
            {undoList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
