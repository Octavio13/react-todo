import React from "react";

export const ListItem = ({ item, i, onDone, onRemove }) => {
  return (
    <li key={i}>
      <span
        style={{
          color: item.isDone ? "green" : "black",
          textDecoration: item.isDeleted ? "line-through" : "normal"
        }}
      >
        {item.name}
      </span>

      <button
        type="button"
        style={{ marginLeft: 5 }}
        onClick={x => onDone(item)}
        disabled={item.isDone}
      >
        Done!
      </button>

      <button
        type="button"
        style={{ marginLeft: 5 }}
        onClick={x => onRemove(item)}
        disabled={item.isDeleted}
      >
        delete
      </button>
    </li>
  );
};
