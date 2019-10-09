import React, { Component } from 'react'

 class ListPost extends Component {
    render() {
        return (
            <div className="list-group">
                  <a href="garden-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="w-100 justify-content-between">
                          <img src="assets/upload/garden_sq_09.jpg" alt="" className="img-fluid float-left" />
                          <h5 className="mb-1">5 Beautiful buildings you need to before dying</h5>
                          <small>12 Jan, 2016</small>
                      </div>
                  </a>

                  <a href="garden-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="w-100 justify-content-between">
                          <img src="assets/upload/garden_sq_06.jpg" alt="" className="img-fluid float-left" />
                          <h5 className="mb-1">Let's make an introduction for creative life</h5>
                          <small>11 Jan, 2016</small>
                      </div>
                  </a>

                  <a href="garden-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="w-100 last-item justify-content-between">
                          <img src="assets/upload/garden_sq_02.jpg" alt="" className="img-fluid float-left" />
                          <h5 className="mb-1">Did you see the most beautiful sea in the world?</h5>
                          <small>07 Jan, 2016</small>
                      </div>
                  </a>
              </div>
        )
    }
}

export default ListPost



