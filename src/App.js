import logo from './logo.svg';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  const { ref, playState, getAnimation } = useWebAnimations({
    playbackRate: 1,
    keyframes: [
      {transform: "translate(0px)"},
      {transform: "translate(500px)"},
    ],

    timing: {
      duration: 2000,
      iterations: Infinity,
      direction: "alternate", 
      easing: "ease-in",
    }
  });

  const updatePlaybackRateup = (e) => {
    getAnimation().updatePlaybackRate(e.target.value++);
  };

  const updatePlaybackRatedown = (e) => {
    getAnimation().updatePlaybackRate(e.target.value--);
  };

  return (
    <div>
      <div ref={ref}>
      <h1>Hello Animation</h1>
      </div>
      <button onClick={updatePlaybackRateup}>speed up</button> { " | " }
      <button onClick={updatePlaybackRatedown}>speed down</button>
      </div>

  );
}

export default App;
