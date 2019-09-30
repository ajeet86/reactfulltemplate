import React, {Component} from 'react';

class Meadheadr extends Component{
     render(){
           return(
            <header class="header">
            <div class="container">
                <nav class="navbar navbar-inverse navbar-toggleable-md">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Forest Timemenu" aria-controls="Forest Timemenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-md-center" id="Forest Timemenu">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link color-green-hover" href="garden-index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link color-green-hover" href="garden-category.html">Gardening</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link color-green-hover" href="garden-category.html">Outdoor Living</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link color-green-hover" href="garden-category.html">Indoor Living</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link color-green-hover" href="garden-category.html">Shopping Guides</a>
                            </li>  
                            <li class="nav-item">
                                <a class="nav-link color-green-hover" href="garden-contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
           )
     }

}

export default Meadheadr;