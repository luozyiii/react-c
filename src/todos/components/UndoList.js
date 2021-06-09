import React, { Component } from 'react';

export default class UndoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { list, deleteItem } = this.props;
    return (
      <div className="undo-list">
        <div className="undo-list-title">
          正在进行
          <div className="undo-list-count" data-test="count">
            {list.length}
          </div>
        </div>
        <ul className="undo-list-content">
          {list.map((item, index) => (
            <li className="undo-list-item" data-test="list-item" key={index}>
              {item}
              <div
                className="undo-list-delete"
                data-test="delete-item"
                onClick={() => {
                  deleteItem(index);
                }}
              >
                -
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
