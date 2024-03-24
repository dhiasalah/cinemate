import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({apiPath,title}) => {
  const webTitle=useTitle(`${title}`);

  const {data :movies}=useFetch(apiPath);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 ">
        <div className="flex justify-start flex-wrap  other:justify-evenly">
          {
            movies.map((movie)=>{
              return <Card movie={movie} key={movie.id}/>
            })
          }
        </div>
      </section>
    </main>
  )
}
