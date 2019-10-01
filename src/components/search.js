import React,{Component} from "react";

class Search extends Component{
        render(){
               return( <div className="widget">
               <h2 className="widget-title">Search</h2>
               <form className="form-inline search-form">
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Search on the site" />
                   </div>
                   <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
               </form>
           </div>);
        }
}

export default Search;

