import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <About name=' Md Maruf Hassan' age='22' job='Web Developer'></About>
      <About name=' Razu' age='15' job='Student'></About>
      <About name=' Rasel' age='28' job='cricket Player'></About>
      </header>
    </div>
  );
}
function About(props){
  const styleSheet={
    border:'2px solid red', 
    margin:'10px',
    padding: '5px'
  }
  return (
    <div style={styleSheet}>
      <p >Name:{props.name} </p>
      <p >Age:{props.age} </p>
      <p>Profession:{props.job} </p>
    </div>
  ) 
}
export default App;
