import React from 'react';
// const getMonth = =>{
//     const newDate = new Date();
//     return newDate.getFullYear();
// }
 

class Header extends React.Component{

    state ={
        title:"you are typing.........",
        key:""
    }
    inputChangeHandler=(event)=>{
        this.setState({
         key:event.target.value 
        })
       
        
    }


render (){
    console.log(this.state.key);
    return (  
<header>
  <div className="logo" 
  onClick= { () =>{ console.log("i was clicked");}}>Dyanamic text</div>
  <input type="text" onChange= {this.inputChangeHandler}></input>
  <div>{this.state.title}</div>
  <div>{this.state.key}</div>
</header>
    )
    }
}
export default Header;