import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import ReactDOM from "react-dom";
function handleClick(e, data) {
  console.log(data.foo);
}

function ContextMenu2() {
  return (
    <div>
      <div>sdlfksdjflsdkj</div>
      <ContextMenuTrigger id="some_unique_identifier">
        <div className="well">Right click to see the menu</div>
      </ContextMenuTrigger>

      <ContextMenu id="some_unique_identifier">
        <MenuItem data={{ foo: 'bar' }} onClick={handleClick}>
          ContextMenu Item 1
        </MenuItem>
        <MenuItem data={{ foo: 'bar' }} onClick={handleClick}>
          ContextMenu Item 2
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={{ foo: 'bar' }} onClick={handleClick}>
          ContextMenu Item 3
        </MenuItem>
      </ContextMenu>
    </div>
  );
}
export default ContextMenu2;
