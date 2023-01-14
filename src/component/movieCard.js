import { Fragment } from "react";
export default function MovieCard(props) {
    const{list} =props
    const{image,genre,productYear,productCountry,time,rate,imdb,title,translate,dubbing}=list
    // function rand() {
    //     if (rate===true) {
    //         return <div>{`imdb ${imdb}`}</div> 
    //     }else return <Fragment/>
    // }
   

    return(
        <Fragment>
        <div className="small-box">
              
            <div className="movie-image"><a href="#"><img src={image} alt={title}/>
            <div className="movie-translate">{translate===true ? <div>{dubbing}</div> : <Fragment/>}</div> 
            <div className="hover-box digits">
                <div className="movie-genre">{genre}</div>
                <div className="movie-year-country">{`${productYear} ${productCountry}`}</div>
                <div className="movie-time">{time}</div>
                <div className="movie-imdb">{rate===true ? <div>{`IMDB ${imdb}`}</div> : <Fragment/>}</div>
            </div>
            </a>
            </div>
            
            <div className="movie-title">{title}</div>
        </div>
        </Fragment>
    )
}