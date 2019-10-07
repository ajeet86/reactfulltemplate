import React,{Component} from "react";
import Child from "./child";

class Parent extends Component{
        render(){
              return( 
                     <div> 
                         <h2>You are inside Parent Component</h2> 
                         <Child name="User" userId = "5555"/> 
                     </div> 
                 ); 
        }
}





export default Parent;