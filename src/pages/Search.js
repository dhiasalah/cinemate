import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
export const Search = ({apiPath}) => {
  const[searchParams]=useSearchParams();
  const queryTerm=searchParams.get("q");

  const {data :movies}=useFetch(apiPath,queryTerm);
  useEffect(()=>{
    document.title=`Search Result for ${queryTerm} /Cinemate`
  });
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white ">{movies.length===0?`no result found for '${queryTerm}'`:`Result for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7 other:justify-evenly">
        <div className="flex justify-start flex-wrap">
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
