import logo from './logo.svg';
import './App.css';
import Img from './imageInSrc.jpg'
function App() {
  return (
    <div className="App">
      
      <>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Khalil Ben Zina</h1>
    <br />
    <img src={Img}/>
    <br />
    <img src="/imageInPublic.jpg" />
  </div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/7fPXI_MnBOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</>

    </div>
  );
}

export default App;
