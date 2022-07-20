import { useContext } from 'react';
import Genres from '../Genres/Genres';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Movie from '../../Components/Movies/Movies';
import { MoviesContext } from '../../Components/Movies/GetMovies';

import {
    Container,
    Content,
    StyledPaginateContainer
        } from './style';

export default function MovieList () {
    const {
        movies,
        filteredMovies,
        setPage
        } = useContext(MoviesContext);

    return (
        <>
        <Genres />    
        <Container>
            <Content>
            { 
                filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => (
                    <Link style={{textDecoration:'none'}} key={movie.id} to={`/moviedetails/${movie.id}`}>
                        <Movie 
                            title={movie.title} 
                            imagePath={movie.poster_path} 
                            dateRelease={movie.release_date} 
                        />
                    </Link>
                    ))
                ) : (
                    movies.map(movie => (
                    <Link style={{textDecoration:'none'}} key={movie.id} to={`/moviedetails/${movie.id}`}>
                        <Movie 
                           
                            title={movie.title} 
                            imagePath={movie.poster_path} 
                            dateRelease={movie.release_date} 
                        >
                        </Movie>
                    </Link>
                    ))
                )    
            }
            </Content>
                {
                    filteredMovies.length > 0 ? (
                        <></>
                    ) : (
                    <StyledPaginateContainer>
                        <ReactPaginate
                            previousLabel="<"
                            nextLabel=">"
                            breakLabel="..."
                            breakClassName="break-me"
                            pageCount={18}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={pagination => {
                                // console.log(pagination)
                                setPage(pagination.selected + 1)
                            }}
                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </StyledPaginateContainer>
                    )
                }
        </Container>
        </>
    )
}