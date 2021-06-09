import React, { Component } from 'react';

import Header from './components/Header';
import UndoList from './components/UndoList';
import './style.less';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      undoList: [],
    };
    this.addUndoItem = this.addUndoItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addUndoItem(value) {
    const { undoList } = this.state;
    this.setState({
      undoList: [...undoList, value],
    });
  }

  deleteItem(index) {
    const newList = [...this.state.undoList];
    newList.splice(index, 1);
    this.setState({
      undoList: newList,
    });
  }

  render() {
    const { undoList } = this.state;
    return (
      <div>
        <Header addUndoItem={this.addUndoItem} />
        <UndoList list={undoList} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
