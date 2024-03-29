import React,{Component} from 'react';


class Section extends Component{
        render(){
               console.log(this.props.name);
               let hrefLink = '#';
               return(

                <section className="section first-section">
                <div className="container-fluid">
                    <div className="masonry-blog clearfix">
                        <div className="left-side">
                            <div className="masonry-box post-media">
                                 <img src="assets/upload/garden_cat_01.jpg" alt="" className="img-fluid" />
                                 <div className="shadoweffect">
                                    <div className="shadow-desc">
                                        <div className="blog-meta">
                                            <span className="bg-aqua"><a href="blog-category-01.html" title="">Gardening</a></span>
                                        <h4><a href="garden-single.html" title="">How to choose high quality soil for your gardens</a></h4>
                                            <small><a href="garden-single.html" title="">21 July, 2017</a></small>
                                            <small><a href={hrefLink} title="">{this.props.name}by Amanda</a></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="center-side">
                            <div className="masonry-box post-media">
                                 <img src="assets/upload/garden_cat_02.jpg" alt="" className="img-fluid" />
                                 <div className="shadoweffect">
                                    <div className="shadow-desc">
                                        <div className="blog-meta">
                                            <span className="bg-aqua"><a href="blog-category-01.html" title="">Outdoor</a></span>
                                    <h4><a href="garden-single.html" title="">You can create a garden with furniture in your home</a></h4>
                                            <small><a href="garden-single.html" title="">19 July, 2017</a></small>
                                            <small><a href={hrefLink} title="">by Amanda</a></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="right-side hidden-md-down">
                            <div className="masonry-box post-media">
                                 <img src="assets/upload/garden_cat_03.jpg" alt="" className="img-fluid" />
                                 <div className="shadoweffect">
                                    <div className="shadow-desc">
                                        <div className="blog-meta">
                                            <span className="bg-aqua"><a href="blog-category-01.html" title="">Indoor</a></span>
                                            <h4><a href="garden-single.html" title="">The success of the 10 companies in the vegetable sector</a></h4>
                                            <small><a href="garden-single.html" title="">03 July, 2017</a></small>
                                            <small><a href={hrefLink} title="">by Jessica</a></small>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
               )
        }
}

export default Section;