import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {
  
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
    
    
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }


    constructor(){
      super();

        this.state = {
            articles:[],
            loading:false,
            page:1,
            totalResults:0
            
            
        }
        // document.title = `${this.capitalizerFirstLetter(this.props.category)} - News`;
      }
      async updateNews(){
        


      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data = await fetch(url)
      let response_data = await data.json()
      this.setState({loading:false})

      console.log(response_data)
      this.setState({articles:response_data.articles,
        totalResults:response_data.totalResults,
    
      })
      }
      async componentDidMount(){
        console.log("I am mount")
        document.title = `${this.props.category} - News`
        this.updateNews()

    }
    fetchMoreData = async() => {
      this.setState({page:this.state.page + 1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
      let data = await fetch(url)
      let response_data = await data.json()

      console.log(response_data)
      this.setState({articles:this.state.articles.concat(response_data.articles),
        totalResults:response_data.totalResults,
        loading:false
      })
       };
    // onHandlePrev = async()=>{

     
    //   this.setState({
    //     page:this.state.page - 1,
    //   })
    //   this.updateNews()
    // }
    // onHandleNext = async() =>{
    //   console.log("Next")
    //   console.log(this.state.totalResults)


    //   if(this.state.page + 1 < Math.ceil(this.state.totalResults/this.props.pageSize)){

        
    //     this.setState({
    //       page:this.state.page + 1,
          
    //     })
    //     this.updateNews()
    //     console.log("Last next")
    //   }


    
  render() {
    return (
         <>
        <div className='container text-center my-8 py-8 px-4'>
            <div className="my-8">
            <h1 className='text-4xl text-bold'>News Api</h1>
            <div className="flex justify-center align-items-center">
            { this.state.loading && <Loading/>}

            </div>
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={ <Loading/>}>
            <div className="container my-12 grid grid-cols-3">
            {this.state.articles.map((element)=>{
            return <div className="container px-4 col-span-1 my-10" key={element.url}>
            <NewsItem title={element.author?element.author:"Admin"} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>


           </div>
            })}
            </div>
            </InfiniteScroll>





           </div>
        {/* <div>
        <div class="flex justify-around">
        <button onClick={this.onHandlePrev} disabled={this.state.page<=1} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-l ">
          Prev
        </button>
        <button onClick={this.onHandleNext} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-l">
          Next
        </button>
        </div>

        </div> */}
        </div>
      </>
    )
  }
}
