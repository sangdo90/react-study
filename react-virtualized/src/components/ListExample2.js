import React from 'react';

// List data as an array of strings
const list = [];

function createBulkList() {
    for (let i = 1; i <= 2500; i++) {
        list.push(`string${i}`);
    }
    return list;
}

const ListTest2 = () => {
    const mystyle = {
        minHeight : "320px",
        maxHeight : "513px",
        fontFamily: "Arial",
        overflowY : "auto"
    };
    return (
        <div style={mystyle}>
            {createBulkList().map(el => (
                <div key={el.id}>
                    {el}
                </div>
            ))}
        </div>
    );
}
export default ListTest2;