import React from 'react';

const Rank = ({name , entries}) => {
  return(
  <div>
      <div className = "white f3 center ">{`${name} , Your Current Rank is ${entries} `}</div>
      <div className = "white f1 center">{entries}  </div>
  </div>
  )
}
export default Rank;