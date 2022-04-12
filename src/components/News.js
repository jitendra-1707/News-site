import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export default class News extends Component {
  static defaultProps ={
      country:"in",
      pageSize:"12",
      category:"general"
      
    }
  static propTypes={
    country : PropTypes.string,
    pageSize: PropTypes.number,
    category : PropTypes.string
  }
  constructor(){
    super();
    this.state={
      articles:[],
      page:1,
      loading:false
      
    }
  }
   updateNews=async ()=>{
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=2c5fa987c6c544c08c9e0e7aa647e221&pageSize=${this.props.pageSize}`
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
  async componentDidMount(){
    this.updateNews()
  }
  
  handlePrev= async ()=>{
    this.setState({
      page:this.state.page-1})
      this.updateNews()
       
  }
  handleNext= async ()=>{
    
    this.setState({
      page:this.state.page+1})
      this.updateNews()
    
    
}
  render() {

    
    
   
    return (<>
      <div className="container ">
        <h2 className='head text-center ' style={{margin:"10px 0px 40px 0px" }} >
          Latest News
        </h2>

        {this.state.loading && <Spinner/>}
        
        <div className=" row ">
          
          {!this.state.loading && this.state.articles.map((element)=>{
            return    (
              
            <div className="col-md-4  "  key={element.url}>
            <NewsItem title={element.title} description={element.description} imagURL={element.urlToImage } newsUrl={element.url} 
            author={element.author} time={element.publishedAt} />
            </div>
           )
            
          })}
        </div>
        
      </div>

         
          <div className='btnmag container d-flex justify-content-between'>        
        <button disabled={this.state.page <=1} onClick={this.handlePrev}  type="button" className="btn btn-dark "> &laquo; Prev</button>
        <button disabled={(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))} onClick={this.handleNext} type="button" className="btn btn-dark">Next &raquo; </button>
        </div>
        
      </>
    )
  }
  }
