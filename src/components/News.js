import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  
  constructor(){
    super();
    this.state={
      articles:[],
      page:1,
      loading:false
      
    }
  }
  async componentDidMount(){

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2c5fa987c6c544c08c9e0e7aa647e221&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    if(this.state.loading){
      
    }
    let data = await fetch(url);
    let parsedData = await data.json()
    
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    })
  }
  
  handlePrev= async ()=>{
    
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2c5fa987c6c544c08c9e0e7aa647e221&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles:parsedData.articles})
    this.setState({
      page:this.state.page-1,
      loading:false
    })
    
       
  }
  handleNext= async ()=>{
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2c5fa987c6c544c08c9e0e7aa647e221&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    
      
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles:parsedData.articles,
      page:this.state.page +1,
      loading:false})
    
    
}
  render() {

    
    
   
    return (<>
      <div className="container ">
        <h2 className='head'>
          Latest News
        </h2>

        {this.state.loading && <Spinner/>}
        <div className=" row ">
          
          {!this.state.loading && this.state.articles.map((element)=>{
            return    (
              
            <div className="col-md-12  " key={element.url}>
            <NewsItem title={element.title} description={element.description} imagURL={element.urlToImage} newsUrl={element.url}/>
            </div>
           )
            
          })}
        </div>
        <div className='btnmag container d-flex justify-content-between'>        
        <button disabled={this.state.page <=1} onClick={this.handlePrev}  type="button" className="btn btn-dark "> &laquo; Prev</button>
        <button  disabled={(this.state.page +1 > Math.ceil(this.state.totalResults/this.state.pageSize))} onClick={this.handleNext} type="button" className="btn btn-dark">Next &raquo; </button>
        </div>
      </div>


    
      </>
    )
  }
  }
