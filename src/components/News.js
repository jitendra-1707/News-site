import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


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
      loading:false,
      totalResults:0,
      
    }
  }
   updateNews=async ()=>{
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=2c5fa987c6c544c08c9e0e7aa647e221&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    
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
  
 

fetchMoreData = async() => {
      this.setState({page:this.state.page +1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=2c5fa987c6c544c08c9e0e7aa647e221&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    
    let data = await fetch(url);
    let parsedData = await data.json()
    
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
      loading:false
    })
};

  render() {

    
    
   
    return (<>
      
        <h2 className='head text-center ' style={{margin:"10px 0px 40px 0px" }} >
          Latest News - {this.props.category[0].toUpperCase()}{this.props.category.slice(1)}
        </h2>

        {/*this.state.loading && <Spinner/>*/}
        
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        > 
        <div className="container">
          <div className=" row ">
          
          { this.state.articles.map((element)=>{
            return    (
              
            <div className="col-md-4  "  key={element.url}>
            <NewsItem title={element.title} description={element.description} imagURL={element.urlToImage } newsUrl={element.url} 
            author={element.author} time={element.publishedAt} />
            </div>
           )
            
          })}
          </div>
          </div>
        
          </InfiniteScroll>
        
      

         
          
        
      </>
    )
  }
  }
