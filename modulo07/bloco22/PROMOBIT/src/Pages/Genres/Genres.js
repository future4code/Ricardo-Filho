import { useContext } from "react"
import { IoCloseCircleSharp } from 'react-icons/io5'
import { Container, Content, GenreButton} from "./style"
import { MoviesContext } from "../../Components/Movies/GetMovies"


export default function Genres(){
   const {
      genres,
      filters,
      handleFilterGenres
         } = useContext(MoviesContext);

   return (
       <Container>
           <Content>
         <h1>Milhões de filmes, séries e pessoas para descobrir. <br/>Explore já.</h1>

            <p>Filtre por:</p>
            {genres.map(genre => (
               <GenreButton 
                  key={genre.id} 
                  type="button" 
                  marked={filters.includes(genre.id)}
                  onClick={() => handleFilterGenres(genre.id)}
               >
                  {genre.name}
                  {
                        filters.includes(genre.id) ?
                        (
                           <IoCloseCircleSharp color="#FFF" />
                        ) : (
                           <></>
                        )
                  }
               </GenreButton>
            ))}
         </Content>
      </Container>
   )
}