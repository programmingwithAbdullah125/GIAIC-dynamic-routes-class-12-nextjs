import React from "react"
// import { useState, useEffect } from "react"

interface BooksType {
    id : number
    name : string
    author : string
  }

  interface post {
    id : number
    author : string
  }


 const Blogid = async ({params} : {params : {id : string} }) => {

    const response = await fetch(`https://simple-books-api.glitch.me/books/${params.id}`)
    const data : BooksType = await response.json();
    console.log(data)

    return (
        <div>
         {
            data.author
         }
        </div>
    )
 }

export default Blogid