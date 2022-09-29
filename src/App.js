import MouseTracker from "./components/MouseTracker";
import RenderText from "./components/RenderText";
import './components/global.css'
import RenderImg from "./components/RenderImg";



function App() {
  return (
    <div className="App">
      <MouseTracker render = {(mouse) => <RenderText mouse={mouse} /> } 
      img = {(mouse) => <RenderImg mouse={mouse} /> }
      />
    </div>
  );
}

export default App;
