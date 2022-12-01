import { createContext, useEffect, useState } from "react";
import { getMovies } from "../Movie";

export const StoreContext = createContext()

export function StoreProvider(props) {

    const [movies, setMovie] = useState([])

    useEffect(() => {
        //console.log(getMovies())
        getMovies().then((response) => {
            //console.log(response)
            setMovie(response)
        })
    
    }, [])

    return (
        <StoreContext.Provider value={{
            movies: movies,
            setMovie: setMovie
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}