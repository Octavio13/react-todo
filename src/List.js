import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ list, onDone, onRemove }) => {
  return (
    <ul>
      {list
        .sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        })
        .map((item, i) => (
          <ListItem
            item={item}
            i={i}
            onDone={onDone}
            onRemove={onRemove}
          ></ListItem>
        ))}
    </ul>
  );
};
