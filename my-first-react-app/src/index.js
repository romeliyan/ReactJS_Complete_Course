//import objects from react modules
import React from 'react';   
import ReactDOM from 'react-dom';

//define a constant element and set it to JSX expression
const element = <h1>Hello World</h1>;  //earlier only var but now we have const and let

//render inside real DOM
ReactDOM.render(element, document.getElementById('root'));  //second argument -> wehere in the real dom we want to render this

console.log(element);
