import React, { Component } from 'react';

export default class UndoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { list, deleteItem, changeStatus, handleBlur, changeValue } = this.props;
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
            <li
              className="undo-list-item"
              data-test="list-item"
              key={index}
              onClick={() => {
                changeStatus(index);
              }}
            >
              {item.status === 'div' ? item.value : <input className="undo-list-input" value={item.value} data-test="input" onBlur={() => handleBlur(index)} onChange={(e) => changeValue(index, e.target.value)} />}
              <div
                className="undo-list-delete"
                data-test="delete-item"
                onClick={(e) => {
                  e.stopPropagation();
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
