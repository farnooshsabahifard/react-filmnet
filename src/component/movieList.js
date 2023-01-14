import { Fragment } from "react"
import MovieCard from "./movieCard"
import "./style1.css"

export default function MovieList(props) {
    // console.log( props)
    const{data ,title}=props
    // console.log(data)
    function renderFarm() {
      return data.map((item,i) =>{
        return <MovieCard list={item} key={i}></MovieCard>
      })
    }
    return(
      <Fragment>
      <h2 className="main-title">{title}</h2>
      <div className="movie-box" >{renderFarm()}</div>
      </Fragment>
    )

}