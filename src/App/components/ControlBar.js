import React from 'react';

function ControlBar(props) {
 return (
  <div className="control-bar">
   <div className="show-bar">
    <i className="fas fa-th-large"></i>
    <i className="fas fa-th-large"></i>
   </div>
   <div className="pagination">
    <button value="1" className="page btn page-number">1</button>
    <button value="2" className="page btn page-number">2</button>
    <button value="3" className="page btn page-number">3</button>
   </div>
 </div>
 );
}

export default ControlBar;