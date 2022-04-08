import React, { Component } from "react";
import News from "./News";

export default class extends Component {
  render() {
    let { title, description, newsUrl,imagURL} = this.props;
    return (<>
      <div className=" new-c ">
        <div className="card"  />
        <img
          src={imagURL}
          style={{ width: "30rem" }}
          className="card-img-top img-margin"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl}  target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
        
      </div>
     
      </>
    );
  }
}
