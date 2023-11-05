import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsItem(props){
    let {title,description,imageUrl,newsUrl} = props
    return (
      <><div>


            
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#" className="w-100 h-100">
                    <img class="rounded-t-lg" src={imageUrl?imageUrl:"https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2023/10/29/775398-untitled.jpg"} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title?title.slice(0,40):""}..</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description?description.slice(0,137):""}...</p>
                    <Link to={newsUrl?newsUrl:""} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                      
                    </Link>
                </div>
            </div>

      </div>
      </>
    )
  }
