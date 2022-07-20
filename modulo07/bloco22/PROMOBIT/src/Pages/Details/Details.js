import axios from 'axios'
import ReactPlayer from 'react-player/youtube';
import 'react-circular-progressbar/dist/styles.css';
import Movie from "../../Components/Movies/Movies";
import imgNotFound from '../../Assets/imagenotfound.png';
import imgVideoNotFound from '../../Assets/videonotfound.png';


import {
    Content,
    CastCard,
    NameCast,
    Synopsis,
    CastTitle,
    Container,
    InfoMovie,
    Assessment,
    MovieCover,
    TitleMovie,
    InfoPeople,
    MovieDetail,
    ContentMidia,
    MovieTrailer,
    TextSynopsis, 
    TitlePeople,
    TrailerTitle,
    CastContainer,
    NameCharacter,
    PeopleMovieContent,
    RecommendationsTitle,
    PeopleMovieContainer,
    MovieRecommendationsContainer,
        } from "./style";

import {
    useEffect,
    useState
        } from "react";

import {
    BASE_URL,
    API_KEY,
    BASE_IMAGE_URL,
    BASE_YT_URL
        } from "../../Constants/base_url";

import {
    Link,
    useParams
        } from "react-router-dom";

import {
    CircularProgressbar,
    buildStyles
        } from 'react-circular-progressbar';

import {
    getYear,
    format
        } from "date-fns";


export default function MovieDetails(props) {
  const { id }  = useParams();

 
  const [
    movieDetails,
    setMovieDetails
        ] = useState([]);

  const [
    movieCurrent,
    setMovieCurrent
        ] = useState([]);

  const [
    movieRecommendations,
    setMovieRecommendations
        ] = useState([]);

  const [
    realeseDate,
    setRealeaseDate
        ] = useState({});

  const [
    castInfo,
    setCastInfo
        ] = useState([]);

  const [
    crewInfo,
    setCrewInfo
        ] = useState([]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
      try {
          axios.get(`${BASE_URL}${id}?${API_KEY}&append_to_response=videos&language=pt-BR`)
          .then(response => setMovieDetails((response.data)))
          
          await axios.get(`${BASE_URL}${id}/release_dates?${API_KEY}`)
          .then(response => {
              const data = response.data.results;
              
              for(let obj of data) {
                  if (obj.iso_3166_1 === "BR") {
                      // console.log(obj)
                      setRealeaseDate(obj)
                      break
                  }
              }
          })
          
          await axios.get(`${BASE_URL}${id}/credits?${API_KEY}&language=pt-BR`)
          .then(response => setCastInfo(response.data.cast))

          await axios.get(`${BASE_URL}${id}/credits?${API_KEY}&language=pt-BR`)
          .then(response => {
              const data = response.data.crew
              let filteredData = [];

              for(let obj of data) {
                  if (["Characters","Director","Writer"]
                  .includes(obj.job)) {
                      filteredData.push(obj);
                  }
              }
              setCrewInfo(filteredData);
          })

          await axios.get(`${BASE_URL}${id}/recommendations?${API_KEY}&language=en-US&page=1`)
          .then(response => setMovieRecommendations(response.data.results))
      } catch (error) {
          console.log(error)
      }
          
  }, [id, movieCurrent]);
  
  const {
    title,
    poster_path,
    vote_average,
    release_date,
    runtime,
    genres,
    videos
        } = movieDetails;

  const dateFormated = release_date ? format(new Date(release_date), "dd/MM/yyyy") : "";
  const year = release_date ? getYear(new Date(release_date)): "";
  const movieHour = runtime ? Math.floor(runtime/60) : "";
  const movieMin = runtime ? runtime % 60 : "";

  return (
      <Container>
       
          <Content>
          <MovieCover src={`${BASE_IMAGE_URL}original/${poster_path}`} alt={title} />
          <MovieDetail>
              <TitleMovie>{title} ({year})</TitleMovie>
              <InfoMovie> 
                  {realeseDate && realeseDate.iso_3166_1 ? realeseDate.release_dates[0].certification : ""} anos 
                  - 
                  {dateFormated} -  (BR)  - 
                  {genres ? genres.map((genre, index) => (` ${genre.name}${index + 1 === genres.length ? " " : ", "}`)): ""}- 
                  {movieHour}h {movieMin}m
              </InfoMovie>
              <Assessment>
                  <div style={{ width: 65, height: 65 }}>
                      <CircularProgressbar 
                          value={vote_average / 100} 
                          maxValue={1} 
                          text={`${vote_average * 10}%`} 
                          styles={buildStyles({
                              pathColor: '#FFF',
                              textColor: '#14FF00',
                              trailColor: '#14FF00',
                              backgroundColor: '#14FF00',
                          })}
                      
                      />   
                  </div>
                  <p>Avaliação dos <br /> usuários</p>
              </Assessment>
          
              <Synopsis>Sinopse</Synopsis>
              <TextSynopsis>{movieDetails ? movieDetails.overview : "Não encontrado"}</TextSynopsis>
          
                  <PeopleMovieContainer>
                      {
                          crewInfo.map(crew => (
                              <PeopleMovieContent key={crew.id}>
                                  <TitlePeople>{crew.name}</TitlePeople>
                                  <InfoPeople>{crew.job}</InfoPeople>
                              </PeopleMovieContent>
                          ))
                      }

                  </PeopleMovieContainer>

          </MovieDetail> 
          </Content>
          <ContentMidia>
          <CastTitle>Elenco original</CastTitle>   
          <CastContainer>
              {
                  castInfo.map(cast => (
                      <CastCard key={cast.id}>
                      <img src={cast.profile_path === null ? imgNotFound : `${BASE_IMAGE_URL}original/${cast.profile_path}`} alt={cast.name} />
                      <NameCast>{cast.name}</NameCast>
                      <NameCharacter>{cast.character}</NameCharacter>
                      </CastCard>
                  ))
              }
          </CastContainer>
          <TrailerTitle>
              Trailer
          </TrailerTitle>

          <MovieTrailer>
              {videos && videos.results.length ? (
                  <ReactPlayer width='100%' height='100%' url={`${BASE_YT_URL}${videos ? videos.results[0].key : ""}`} controls={true} />
              ) : (
                  <>
                      <img src={imgVideoNotFound} alt="VideoNotFounded"/>
                  </>
              )}
          </MovieTrailer>

          <RecommendationsTitle>Recomendações</RecommendationsTitle>
          <MovieRecommendationsContainer>
             {
                  movieRecommendations.map(movie => (
                  <Link style={{textDecoration:'none'}} onClick={() => setMovieCurrent(movie.id)} key={movie.id} to={`/moviedetails/${movie.id}`}>
                      <Movie 
                          title={movie.title} 
                          imagePath={movie.poster_path} 
                          dateRelease={movie.release_date} 
                      >
                      </Movie>
                  </Link>
                  ))
             }
          </MovieRecommendationsContainer>
          </ContentMidia>
      </Container>
  )
}