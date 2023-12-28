import React from "react";
import ReactDOM from "react-dom/client";

const element1 = React.createElement("h1",{id:"parent"},
    React.createElement("h1",{id:"child"},[React.createElement("h1",{},'sib1'),React.createElement("h1",{},'sib2')]
));

const element2 = React.createElement("h1",{id:"parent"},
    React.createElement("h1",{id:"child"},[React.createElement("h1",{},'sib3'),React.createElement("h1",{},'sib4')]
)); 

const element = React.createElement('div',{id:'mainparent'},[element1,element2]);

const roots = ReactDOM.createRoot(document.getElementById('root')); //browser realted so comes from second library 

roots.render(element); 

const JsxHeading = () => {
    return (<div className = "mainparent">
        <div className ='parent'>
            <div className = 'child'>
                <div className="sib1">1</div>
                <div className="sib2">2</div>
            </div>
        </div>
        <div className ='parent'>
            <div className = 'child'>
                <div className="sib1">3</div>
                <div className="sib2">4</div>
            </div>
        </div>
    </div>)
}; // works as this string is treated as text node which is allowed in rendering 

const JsxComponent = () => {
    return JsxHeading;
}

roots.render(<JsxComponent/>);

const JsxC1 = () => {return <h1>this is a working component</h1>};
const JsxC2 = () => (<h1>This is also a working shorthand syntax for single line returns </h1>);

roots.render(<JsxHeading/>);

const JsxC = () => { 
    return ( 
        <div className="normal">
            NICE ONE 
            <JsxHeading/>
        </div>
    )
}


roots.render(<JsxC/>);

const element4 = (<h1>This is a jsx element only ...<JsxHeading/></h1>)

roots.render(element4);

const NewComponent = () => {
    return (<span>this is just a span in a component{title}</span>)
}

const title = (<h1>this is just a title</h1>);//understanding tdz and hoisting and closure related 
//concepts in JS in more details 


roots.render(<NewComponent/>);

//project related wireframe details 
/*
-Header 
 - logo 
 - Nav items 
-Body 
 - Search 
 - Restaurant Container 
  - Restaurant Card 
-footer 
 - Copyright 
 - Links 
 - Address 
 - Contact
*/


