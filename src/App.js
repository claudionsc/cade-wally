import MouseTracker from "./components/MouseTracker";
import RenderText from "./components/RenderText";
import './components/global.css'
import RenderImg from "./components/RenderImg";
import RenderDicas from "./components/RenderDicas";



function App() {
  return (
    <div className="App">
      <MouseTracker render = {(mouse) => <RenderText mouse={mouse} /> } 
      img = {() => <RenderImg  render ={(msg) => <RenderDicas msg={msg} /> } /> }
      />
      
    </div>
  );
}

export default App;
