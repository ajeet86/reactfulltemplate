import React,{Component} from 'react';

class Section extends Component{
        render(){
               return(
                <section class="section first-section">
                <div class="container-fluid">
                    <div class="masonry-blog clearfix">
                        <div class="left-side">
                            <div class="masonry-box post-media">
                                 <img src="assets/upload/garden_cat_01.jpg" alt="" class="img-fluid" />
                                 <div class="shadoweffect">
                                    <div class="shadow-desc">
                                        <div class="blog-meta">
                                            <span class="bg-aqua"><a href="blog-category-01.html" title="">Gardening</a></span>
                                        <h4><a href="garden-single.html" title="">How to choose high quality soil for your gardens</a></h4>
                                            <small><a href="garden-single.html" title="">21 July, 2017</a></small>
                                            <small><a href="#" title="">by Amanda</a></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="center-side">
                            <div class="masonry-box post-media">
                                 <img src="assets/upload/garden_cat_02.jpg" alt="" class="img-fluid" />
                                 <div class="shadoweffect">
                                    <div class="shadow-desc">
                                        <div class="blog-meta">
                                            <span class="bg-aqua"><a href="blog-category-01.html" title="">Outdoor</a></span>
                                    <h4><a href="garden-single.html" title="">You can create a garden with furniture in your home</a></h4>
                                            <small><a href="garden-single.html" title="">19 July, 2017</a></small>
                                            <small><a href="#" title="">by Amanda</a></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="right-side hidden-md-down">
                            <div class="masonry-box post-media">
                                 <img src="assets/upload/garden_cat_03.jpg" alt="" class="img-fluid" />
                                 <div class="shadoweffect">
                                    <div class="shadow-desc">
                                        <div class="blog-meta">
                                            <span class="bg-aqua"><a href="blog-category-01.html" title="">Indoor</a></span>
                                            <h4><a href="garden-single.html" title="">The success of the 10 companies in the vegetable sector</a></h4>
                                            <small><a href="garden-single.html" title="">03 July, 2017</a></small>
                                            <small><a href="#" title="">by Jessica</a></small>
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