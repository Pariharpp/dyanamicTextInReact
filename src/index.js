import React from 'react';
import ReactDOM from 'react-dom';
//component
import Header from './component/header'

const App = () =>{
   
    // return React.createElement('h1', {ClassName:'title'},React.createElement('div'));
 return (
         <div>
         <Header/>
         </div>
         
         )
}
ReactDOM.render(<App/>,document.getElementById('root'));