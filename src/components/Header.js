import React, {Component} from 'react';

 class Header extends Component {
    render(){
		let hrefLink = '#';
       		 return (   <div>
											<div className="collapse top-search" id="collapseExample">
											<div className="card card-block">
											<div className="newsletter-widget text-center">
											<form className="form-inline">
											<input type="text" className="form-control" placeholder="What you are looking for?" />
											<button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
											</form>
											</div>
											</div>
											</div>
											 <div className="topbar-section">
													<div className="container-fluid">
														<div className="row">
															<div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
																<div className="topsocial">
																	<a href={hrefLink} data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>
																	<a href={hrefLink} data-toggle="tooltip" data-placement="bottom" title="Youtube"><i className="fa fa-youtube"></i></a>
																	<a href={hrefLink} data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
																	<a href={hrefLink} data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
																	<a href={hrefLink} data-toggle="tooltip" data-placement="bottom" title="Flickr"><i className="fa fa-flickr"></i></a>
																	<a href={hrefLink} data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
																	<a href={hrefLink} data-toggle="tooltip" data-placement="bottom" title="Google+"><i className="fa fa-google-plus"></i></a>
																</div>
															</div>
										
															<div className="col-lg-4 hidden-md-down">
															</div>
										
															<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
																<div className="topsearch text-right">
																	<a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-search"></i> Search</a>
																</div>
															</div>
														</div>
													</div>
												</div>
												
												 <div className="header-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo">
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