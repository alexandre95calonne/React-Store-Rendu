import { useContext } from "react"
import { StoreContext } from "../Providers/Store"
import { CardsContainer } from "../styles/Cards.style"

export default function Cards() {
    const { movies, setMovie } = useContext(StoreContext)

    function deleteMovie(ok) {
        movies.splice(ok, 1)    
        setMovie([...movies])
    }
    
    return (
        <CardsContainer>

            <h1>Movies List</h1>

            <p className="pages"> Nombre de pages actuellement : {movies.length}</p>

            <div className="ensemble-cards">
            {
                movies.map((movie, index) => {
                    return (
                        <div className="card">
                            <h5> Titre : {movie.title}</h5>
                            <p> Category: {movie.category} </p>
                            <img src={movie.image} alt="image-film"/>
                            <div className="button">
                                <button onClick={() => {
                                    deleteMovie(index)
                                }}>Delete this movie</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </CardsContainer>
    )
}