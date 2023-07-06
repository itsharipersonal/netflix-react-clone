import React from 'react'
import './HomeScreen.css'
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import Row from '../Row/Row'
import Request from '../../Requests'
const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <NavBar />
      <Banner />
      <Row title='Netflix originals' fetchUrl={Request.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title='Action movies' fetchUrl={Request.fetchActionMovies}/>
      <Row title='Top Rated' fetchUrl={Request.fetchTopRated}/>
      <Row title='Comedy Movies' fetchUrl={Request.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={Request.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={Request.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={Request.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen