import React, { Component } from "react";
import News from "./News";
import newsimg from './Null.jpg'

export default class extends Component {
  render() {
    let { title, description, newsUrl,imagURL,author,time,source} = this.props;
    return (<>
      <div className="container ">
        <div className="card newsbg"  />
        
        <img 
          style={{    height: "250px",
                      width: "370px"}}


          src={imagURL ? imagURL : newsimg}
          className="card-img-top img-margin"
          alt="..."
          />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href= {newsUrl}  target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date (time).toGMTString()}</small></p>
          
        </div>
        
      </div>
     
      </>
    );
  }
}
