import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function News(props){
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

   





    
        // document.title = `${this.capitalizerFirstLetter(this.props.category)} - News`;
      async function updateNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
      setloading(true)
      let data = await fetch(url)
      let response_data = await data.json()
      setloading(false)
      setarticles(response_data.articles)
      settotalResults(response_data.totalResults)
      }
      
      useEffect(() => {
        document.title = `${props.category} - News`
        updateNews()
        
      }, []);
  
      const fetchMoreData = async() => {
      setpage(page + 1)
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
      let data = await fetch(url)
      let response_data = await data.json()

      console.log(response_data)
      setarticles(articles.concat(response_data.articles))
      settotalResults(response_data.totalResults)
      setloading(false)


    
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


    
    return (
         <>
        <div className='container text-center my-8 py-8 px-4'>
            <div className="my-8">
            <h1 className='text-4xl text-bold'>News Api</h1>
            <div className="flex justify-center align-items-center">
            { loading && <Loading/>}

            </div>
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length < totalResults}
              loader="Loading ..."
              >
            <div className="container my-12 grid grid-cols-3">
            {articles.map((element)=>{
            return <div className="container px-4 col-span-1 my-10" key={element.id}>
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

News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
  
 News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general'
  
  
}