import React ,{Component} from 'react';
import ListPost from './ListPost';

class Blog extends Component{

    
   render(){

    /*const add10 = (num) => {
        return num + 10
      }
      console.log(add10(5)) // 15
      const add5 = async (num) => num + 5;
      console.log(add5(5)) // Promise {<resolved>: 10}

      const processDataAsycn = async (num) => {  
        if(typeof num === 'number') {  
          return 2*num;  
        } else {  
          throw new Error('Something went wrong');  
        }  
      };  
      processDataAsycn('21s').then((data) => {  
        console.log('Data from processDataAsycn() with async( When promise gets resolved ): ' + data);  
      }).catch((error) => {  
        console.log('Error from processDataAsycn() with async( When promise gets rejected ): ' + error);  
      });

      
    console.log('sdsds');
          console.log(this.props);
          */
          return( <div className="widget">
          <h2 className="widget-title">Recent Posts by {this.props.author}</h2>
          <div className="blog-list-widget">
              <ListPost />
          </div>
      </div>)
   }

}

export default Blog;