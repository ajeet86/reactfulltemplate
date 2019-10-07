import React,{Component} from 'react'
// Child Component 
class Child extends React.Component{ 
      constructor(){
            super()
      }
    render(){ 
        console.log(this.props); 
        return( 
                <div> 
                    <h2>Hello, {this.props.name}</h2> 
                    <h3>You are inside Child Component</h3> 
                    <h3>Your user id is: {this.props.userId}</h3> 
                </div> 
            ); 
    } 
} 

export default Child