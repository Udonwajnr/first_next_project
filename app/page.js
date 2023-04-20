import Movie from "./Movie"

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const res = await data.json()
  console.log(res)
  
  return (
    <main className="min-h-screen  p-24">
      <h1 className='text-red-500 text-4xl font-bold'>Movies</h1>
        <div className="grid gap-16 grid-cols-fluid">
            {
              res.results.map((movie)=>{
                return(
                  <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path = {movie.poster_path}
                  release_date ={movie.release_date}
                  />
                )
              })
            }      
        </div>
    </main>
  )
}
