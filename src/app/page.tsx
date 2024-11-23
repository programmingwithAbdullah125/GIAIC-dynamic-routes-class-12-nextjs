import Link from "next/link"

interface BooksType {
  id : number
  name : string
}


export default async function Home() {
  const response = await fetch('https://simple-books-api.glitch.me/books')
  const data : BooksType[] = await response.json();
  return(
    <div>
      <h1 className="flex justify-center items-center font-bold mt-4">Programming with Abdullah</h1>
      <div className="flex flex-col gap-10">
        {
      data.map((books, index)=>(
        <div key={index}>
          <Link href={`/bog/${books.id}`} >
            {books.name}
          </Link>
        </div>
      ))
        
        }
      </div>
    </div>
  )
}