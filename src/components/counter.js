import React,{Component} from "react";
import Child from "./child";

class Parent extends Component{
       constructor(props){
            super(props)
            this.state={
                    inputval:'go for integer'
            }
            this.handeler=this.handeler.bind(this);
            this.increment=this.increment.bind(this);
       }
         handeler(targetvalue){
               // alert(targetvalue.target.value);
            this.setState({
                inputval: targetvalue.target.value 
            })
         }

         increment(){
                alert('sdsdsds');
         }

        render(){
              //console.log(this.props);
              return( 
                     <div> 
                         <h2>You are inside Parent Component</h2> 
                         <Child name="User" userId = "5555" parentdata={this.state.inputval}  childclick={this.increment} /> 
                         <input type="text" onChange={this.handeler} value={this.state.inputval} />
                         
                     </div> 
                 ); 
        }
}





export default Parent;


