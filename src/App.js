import imageRickMorthy from './img/rick-morty.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morthy</h1>
        <img src={imageRickMorthy} alt='Rick & Morthy' className='img-home'/>
      </header>
    </div>
  );
}

export default App;
