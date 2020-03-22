import React from "react";

// const Iteration1 = () => {
//   return (
//     <ul>
//       <li>string1</li>
//       <li>string2</li>
//       <li>string3</li>
//       <li>string4</li>
//     </ul>
//   );
// };

// // NOTE: if not set 'key', warning console log 
// const Iteration1 = () => {
//   const names = ["string1", "string2", "string3", "string4"];
//   const nameList = names.map(name => <li>{name}</li>);
//   return <ul>{nameList}</ul>;
// };

const Iteration1 = () => {
  const names = ["string1", "string2", "string3", "string4"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  return <ul>{nameList}</ul>;
};
export default Iteration1;
