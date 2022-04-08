import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  
  constructor(){
    super();
    this.state={
      articles:[],
      page:1

    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2c5fa987c6c544c08c9e0e7aa647e221"
    let data = await fetch(url);
    let parsedData = await data.json()
    
    this.setState({articles:parsedData.articles})
  }
  
  handlePrev= async ()=>{
    console.log("next")
       let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2c5fa987c6c544c08c9e0e7aa647e221${this.stage.page +1}`
       let data = await fetch(url);
       let parsedData = await data.json()
       this.setState({articles:parsedData.articles})
  }
  handlePrev= async ()=>{
    console.log("pre")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2c5fa987c6c544c08c9e0e7aa647e221${this.stage.page - 1}`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles:parsedData.articles})
}
  render() {

    
   
    return (<>
      <div className="container ">
        <h2 className='head'>
          Latest News
        </h2>
        <div className="row news-layout">
          {this.state.articles.map((element)=>{
            return    <div className="col-md-12" key={element.url}>
            <NewsItem title={element.title} description={element.description} imagURL={element.urlToImage} newsUrl={element.url}/>
                       </div>
            
          })}
        </div>
        <div className='d-flex justify-content-between'>        
        <button onClick={this.handlePrev}  type="button" class="btn btn-dark ">Prev</button>
        <button   onClick={this.handleNext} type="button" class="btn btn-dark">Next</button>
        </div>
      </div>


    
      </>
    )
  }
}
