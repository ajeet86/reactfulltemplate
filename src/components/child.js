import React,{Component} from 'react'
// Child Component 
class Child extends React.Component{ 
      constructor(props){
            super(props);
            this.state = {date: new Date(), counter:'0'};
      }

      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    
      tick() {
        this.setState({
          date: new Date(),
          counter:'1'

        });
      }

    render(){ 
      // console.log(this.props); 
        return( 
                <div> 
                    <h2>Hello, {this.props.name}</h2> 
                    <h3>You are inside Child Component {this.state.date.toLocaleTimeString()}</h3> 
                    <h2>object second parameter:{this.state.counter}</h2>
                    <h3>Your user id is: {this.props.userId}</h3> 
                    <h3>data comming from parent : {this.props.parentdata}</h3> 
                </div> 
            ); 
    } 
} 

export default Child