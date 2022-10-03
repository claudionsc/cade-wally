import MouseTracker from "./components/MouseTracker";
import RenderText from "./components/RenderText";
import './components/global.css'
import RenderImg from "./components/RenderImg";
import RenderDicas from "./components/RenderDicas";



function App() {
  return (
    <div className="App">
      <MouseTracker render = {(mouse) => <RenderText mouse={mouse} /> } 
      img = {() => <RenderImg dicas={(dicas)=> <RenderDicas dicas={dicas} /> } /> }   
      />
      
      
      
    </div>
  );
}

export default App;
