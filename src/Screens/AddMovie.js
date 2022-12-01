import { useState } from "react"
import { AddMovieContainer } from "../styles/AddMovie.styles"
import { useContext } from "react"
import { StoreContext } from "../Providers/Store"

export default function AddFilm() {

    const [NewMovieTitle, setNewMovieTitle] = useState('')
    const [NewMovieCategory, setNewMovieCategory] = useState('')
    const [NewMovieImage, setNewMovieImage] = useState('')
    const { movies, setMovie } = useContext(StoreContext)

    function newMovie() {
        movies.push({id: movies.length + 1, title: NewMovieTitle, category: NewMovieCategory, image: NewMovieImage})
        setMovie([...movies])
    }

    return (
        <AddMovieContainer>
            <h1>Let's create a new movie !</h1>

            <p className="pages"> Nombre de pages actuellement : {movies.length}</p>

            <p></p>

                <input type="text" placeholder="Choose your title film..." onChange={(e) => {
                    setNewMovieTitle(e.target.value)
                }}/>
                <input type="text" placeholder="Select a category like Drama, Action, Comedy..." onChange={(e) => {
                    setNewMovieCategory(e.target.value)
                }}/>
                <input type="text" placeholder="Give your url image movie..." onChange={(e) => {
                    setNewMovieImage(e.target.value)
                }}/>
                <button onClick={() => {
                    newMovie()
                }}>Submit</button>
            
        </AddMovieContainer>
    )
}