import React, {useEffect} from 'react';
import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {


  const Alice = useWebAnimations({
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)'}   
    ],

    timing: {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity
    },

  });


  const Background1 = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }   
    ],

    timing: {
      duration: 36000,
      iterations: Infinity
    },
  });


  const Background2 = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }   
    ],

    timing: {
      duration: 36000,
      iterations: Infinity
    },
  });


  const Foreground1 = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }   
    ],

    timing: {
      duration: 12000,
      iterations: Infinity
    },
  });

  const Foreground2 = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }   
    ],

    timing: {
      duration: 12000,
      iterations: Infinity
    },
  });


  
  var SpeedUP = function() {

    Alice.getAnimation().playbackRate       *= 1.3;
    Foreground1.getAnimation().playbackRate *= 1.3;
    Foreground2.getAnimation().playbackRate *= 1.3;
    Background1.getAnimation().playbackRate *= 1.3;
    Background2.getAnimation().playbackRate *= 1.3;

    console.log("Speedup==>",Alice.getAnimation().playbackRate);
  }


  var SpeedDOWN = function() {

    Alice.getAnimation().playbackRate       /= 1.3;
    Foreground1.getAnimation().playbackRate /= 1.3;
    Foreground2.getAnimation().playbackRate /= 1.3;
    Background1.getAnimation().playbackRate /= 1.3;
    Background2.getAnimation().playbackRate /= 1.3;

    console.log("Speeddown==>",Alice.getAnimation().playbackRate);
  }


  useEffect(()=>{
    document.addEventListener("click", SpeedUP);
    setInterval( SpeedDOWN, 3000);
  // eslint-disable-next-line
  },[])




  return (
    <div>
      
      <div className="sky"></div>

      <div className="earth">

        <div id="red-queen_and_alice" >
          
          <img ref={Alice.ref}
            id="red-queen_and_alice_sprite"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            srcSet="
              https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x
            "
            alt="Alice and the Red Queen running to stay in place."
          />
        </div>
      </div>


      
      <div className="scenery" ref={Foreground1.ref} id="foreground1">
        <img
          id="palm3"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
          alt=" "
        />
      </div>

      <div className="scenery" ref={Foreground2.ref} id="foreground2">
        <img
          id="bush"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
          alt=" "
        />
        <img
          id="w_rook_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
          srcSet="
            https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x
          "
          alt=" "
        />
      </div>


      <div className="scenery" ref={Background1.ref} id="background1">
        <img
          id="r_pawn_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          srcSet="
            https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x
          "
          alt=" "
        />
        <img
          id="w_rook"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
          srcSet="
            https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x
          "
          alt=" "
        />
        <img
          id="palm1"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
          alt=" "
        />
      </div>



      <div className="scenery" ref={Background2.ref} id="background2">
        <img
          id="r_pawn"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
          srcSet="
            https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x
          "
          alt=" "
        />

        <img
          id="r_knight"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
          srcSet="
            https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x
          "
          alt=" "
        />
        <img
          id="palm2"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
          alt=" "
        />
      </div>

    </div>
    
  );
}

export default App;
