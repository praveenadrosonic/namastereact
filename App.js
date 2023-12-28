import React from "react";
import ReactDOM from "react-dom";

/* 
<div id = "mainparent">
<div id='parent'>
    <div id = 'child'>
        <div className="sib1"></div>
        <div className="sib2"></div>
    </div>
</div>
<div id='parent'>
    <div id = 'child'>
        <div className="sib1"></div>
        <div className="sib2"></div>
    </div>
</div>
</div>
*/

const element1 = React.createElement("h1",{id:"parent"},
    React.createElement("h1",{id:"child"},[React.createElement("h1",{},'sib1'),React.createElement("h1",{},'sib2')]
));

const element2 = React.createElement("h1",{id:"parent"},
    React.createElement("h1",{id:"child"},[React.createElement("h1",{},'sib3'),React.createElement("h1",{},'sib4')]
)); 

const element = React.createElement('div',{id:'mainparent'},[element1,element2]);

const roots = ReactDOM.createRoot(document.getElementById('root')); //browser realted so comes from second library 
//
roots.render(element); //

const jsxHeading = 'this is a jsx heading ...'
roots.render(jsxHeading);