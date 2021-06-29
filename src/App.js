
import './index.css'
import Row from './components/Row'
import requests from './requests'
import Banner from './components/Banner'
import Nav from './components/Nav'







const App = () => {
 

  return (
    <div className= "app">
      {/* navbar */}
      <Nav/>
      {/* banner */}
      <Banner/>
      <Row title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow= {true}/>
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      {/* do for remaining rows l8r */}
    </div>
    

      
    
  )
}

export default App
