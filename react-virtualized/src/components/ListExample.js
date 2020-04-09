import React from 'react';
import { List } from 'react-virtualized';

// List data as an array of strings
const list = [];

function createBulkList() {
    for (let i = 1; i <= 2500; i++) {
        list.push(`string${i}`);
    }
    return list;
  }
  

function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
}) {
    const myList = createBulkList()
    return (
        <div key={key} style={style}>
            {myList[index]}
        </div>
    );
}


const ListTest = () => {
    return (<List
        width={300}
        height={300}
        rowCount={createBulkList().length}
        rowHeight={20}
        rowRenderer={rowRenderer}
    />);
}
export default ListTest;