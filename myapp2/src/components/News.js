import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'

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
  articles =[]
    constructor(){
      super();

        this.state = {
            articles:this.articles,
            loading:false,
            page:1,
            
        }
        // document.title = `${this.capitalizerFirstLetter(this.props.category)} - News`;
      }
      
      async componentDidMount(){
        console.log("I am mount")
        document.title = `${this.props.category} - News`



      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ad5f13d939314fb5929670fb94452ea5&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data = await fetch(url)
      let response_data = await data.json()
      this.setState({loading:false})

      console.log(response_data)
      this.setState({articles:response_data.articles,totalResults:response_data.totalResults})
    }
    onHandlePrev = async()=>{
      console.log("Previos")

      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ad5f13d939314fb5929670fb94452ea5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url)
      let response_data = await data.json()
      this.setState({loading:false})

      this.setState({
        page:this.state.page - 1,
        articles:response_data.articles
      })
    }
    onHandleNext = async() =>{
      console.log("Next")
      console.log(this.state.totalResults)


      if(this.state.page + 1 < Math.ceil(this.state.totalResults/this.props.pageSize)){

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ad5f13d939314fb5929670fb94452ea5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})

        let data = await fetch(url)
        let response_data = await data.json()
        this.setState({loading:false})

        this.setState({
          page:this.state.page + 1,
          articles:response_data.articles,

        })
        console.log("Last next")
      }


    }
  render() {
    return (
         <>
        <div className='container text-center my-8 py-8 px-4'>
            <div className="my-8">
            <h1 className='text-4xl text-bold'>News Api</h1>
            <div className="flex justify-center align-items-center">
            { this.state.loading && <Loading/>}

            </div>
            <div className="container my-12 grid grid-cols-3">
            { !(this.state.loading) && this.state.articles.map((element)=>{
            return <div className="container px-4 col-span-1" key={element.url}>
            <NewsItem title={element.author} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>


           </div>
            })}



            </div>



           </div>
        <div>
        <div class="flex justify-around">
        <button onClick={this.onHandlePrev} disabled={this.state.page<=1} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-l ">
          Prev
        </button>
        <button onClick={this.onHandleNext} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-l">
          Next
        </button>
        </div>

        </div>
        </div>
      </>
    )
  }
}
