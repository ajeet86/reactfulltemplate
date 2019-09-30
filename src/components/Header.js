import React, {Component} from 'react';

 class Header extends Component {
    render(){
       		 return (   <div>
											<div class="collapse top-search" id="collapseExample">
											<div class="card card-block">
											<div class="newsletter-widget text-center">
											<form class="form-inline">
											<input type="text" class="form-control" placeholder="What you are looking for?" />
											<button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
											</form>
											</div>
											</div>
											</div>
											 <div class="topbar-section">
													<div class="container-fluid">
														<div class="row">
															<div class="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
																<div class="topsocial">
																	<a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
																	<a href="#" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i class="fa fa-youtube"></i></a>
																	<a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest"></i></a>
																	<a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
																	<a href="#" data-toggle="tooltip" data-placement="bottom" title="Flickr"><i class="fa fa-flickr"></i></a>
																	<a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
																	<a href="#" data-toggle="tooltip" data-placement="bottom" title="Google+"><i class="fa fa-google-plus"></i></a>
																</div>
															</div>
										
															<div class="col-lg-4 hidden-md-down">
															</div>
										
															<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
																<div class="topsearch text-right">
																	<a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-search"></i> Search</a>
																</div>
															</div>
														</div>
													</div>
												</div>
												
												 <div class="header-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="logo">
                            <a href="garden-index.html"><img src="assets/images/version/garden-logo.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>

					)
    }
 }


    export default Header;