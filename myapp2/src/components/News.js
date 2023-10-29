import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles =[
            {
            source: {
            id: "wired",
            name: "Wired"
            },
            author: "Gideon Lichfield, Lauren Goode",
            title: "Where Does Crypto Go From Here?",
            description: "We talk with Michael Casey, the chief content officer of CoinDesk, almost one year after the news site brought down Sam Bankman-Fried’s cryptocurrency empire FTX.",
            url: "https://www.wired.com/story/have-a-nice-future-podcast-24/",
            urlToImage: "https://media.wired.com/photos/6525c8ac419624284be05210/191:100/w_1280,c_limit/HANF-Michael%20Casey.jpg",
            publishedAt: "2023-10-11T11:00:00Z",
            content: "Gideon Lichfield: You said just now that what Sam Bankman-Fried did was allegedly illegal. Is there a world in which it wasn't illegal?",
            },
            {
            source: {
            id: null,
            name: "Gizmodo.com"
            },
            author: "Maxwell Zeff",
            title: "Crypto Exchanges, Not Just FTX, Are All a Mess Right Now",
            description: "The founders of cryptocurrency exchanges face a mountain of regulatory challenges and billions in personal losses. Binance CEO Changpeng Zhao personally lost $12 billion this year as trading volumes on Binance declined, according to a Bloomberg report Friday.…",
            url: "https://gizmodo.com/crypto-exchanges-ftx-binance-genesis-gemini-are-a-mess-1850968083",
            urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/46326bbf3c33c4ddb3f18069c82167d7.jpg",
            publishedAt: "2023-10-27T20:10:00Z",
            content: "The founders of cryptocurrency exchanges face a mountain of regulatory challenges and billions in personal losses. Binance CEO Changpeng Zhao personally lost $12 billion this year as trading volumes … [+1852 chars]"
            },
            {
            source: {
            id: "business-insider",
            name: "Business Insider"
            },
            author: "Matthew Fox",
            title: "Bitcoin briefly spiked 10% after a false report said the SEC approved BlackRock's spot bitcoin ETF",
            description: "We apologize for a tweet that led to the dissemination of inaccurate information regarding the Blackrock Bitcoin ETF, CoinTelegraph said.",
            url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-false-report-said-sec-approved-spot-bitcoin-etf-2023-10",
            urlToImage: "https://i.insider.com/652d698c55f52b01b3606b6c?width=1200&format=jpeg",
            publishedAt: "2023-10-16T16:51:00Z",
            content: "NurPhoto / Contributor",
            }
            
            
             ]
    constructor(){
        super();
        this.state = {
            articles:this.articles,
            loading:false
        }
    }
  render() {
    return (
      <div className='container text-center my-8 py-8 px-4'>
        <div className="my-8">
        <h1 className='text-4xl text-bold'>News Api</h1>
        <div className="container my-12 grid grid-cols-3">
        {this.state.articles.map((element)=>{
            console.log(element)
        return <div className="container px-4 col-span-1" key={element.url}>
        <NewsItem title={element.author} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>


      </div>
        })}



        </div>
        </div>


        
      </div>
    )
  }
}
