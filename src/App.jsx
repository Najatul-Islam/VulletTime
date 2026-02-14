import { useState, useRef } from "react";
import valentine from "./assets/valentine.png" 
import './App.css'
import Container from './Container'

function App() {
    const [yesClicked, setYesClicked] = useState(false);
    const [yesTwoClicked, setYesTwoClicked] = useState(false);

  const [name, setName] = useState("");
  
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });

  const moveNoButton = () => {
    const newTop = Math.floor(Math.random() * 80) + "%";
    const newLeft = Math.floor(Math.random() * 80) + "%";
    setNoPosition({ top: newTop, left: newLeft });
  };

  return (
   <>
  <div
    className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-3 sm:px-6"
    style={{ backgroundImage: `url(${valentine})` }}
  >
    <Container>
      <h1 className=" m-auto text-center font-bit font-medium text-[5px] sm:text-sm md:text-sm text-rose-800">Najatul Islam</h1>
      <h1 className=" m-auto text-center font-bit font-medium text-sm sm:text-sm md:text-sm text-rose-800">Ridika</h1>
      {!yesClicked ? (
        <div className="bg-pink-100 w-full max-w-[500px] my-10 sm:my-20 py-16 sm:py-32 px-4 sm:px-8 rounded-3xl shadow-xl text-center">

          <h1 className="font-bit font-medium text-xl sm:text-2xl md:text-3xl text-rose-400">
            Will you Marryyy MEEE???
          </h1>

          <p className="font-dm mt-3 text-base sm:text-lg text-rose-700">
            Enter your name & accept the permisssion 😭💖
          </p>

          <input
            className="mt-6 p-3 w-full sm:w-[80%] rounded-2xl outline-0 text-lg sm:text-xl text-center"
            placeholder="Your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Buttons */}
          <div className="relative flex justify-center items-center mt-10 h-[140px]">

            {/* YES Button */}
            <button
              className="px-6 py-4 sm:px-8 sm:py-5 text-lg sm:text-xl duration-500 bg-pink-400 rounded-2xl font-bit font-medium text-white hover:text-rose-600 hover:border-2 hover:border-pink-800 hover:bg-transparent"
              onClick={() => setYesClicked(true)}
            >
              Yes 💘
            </button>

            {/* NO Button */}
            <button
              className="px-6 py-4 sm:px-8 sm:py-5 text-lg sm:text-xl duration-500 bg-pink-400 rounded-2xl font-bit font-medium text-white hover:text-rose-600 hover:border-2 hover:border-pink-800 hover:bg-transparent"
              style={{
                top: noPosition.top,
                left: noPosition.left,
                position: "absolute",
              }}
              onMouseEnter={moveNoButton}
            >
              No 😢
            </button>
          </div>
        </div>
      ) : !yesTwoClicked ? (
        <div className="bg-rose-200 w-full max-w-[500px] my-10 sm:my-20 py-16 sm:py-32 px-4 sm:px-8 rounded-3xl shadow-xl text-center">

          <h1 className="font-bit font-medium text-2xl sm:text-3xl text-rose-400">
            YAYYYYY 😭💖
          </h1>

          <h2 className="font-bit mt-5 text-base sm:text-lg md:text-xl text-rose-700">
            {name ? name : "My Valentine"}, you are mine ,also I'm Yours  
            mine ValentTine 💘🌹
          </h2>

          <p className="font-dm mt-4 text-base sm:text-lg text-pink-700">
            Sending hugs,kissess & chocolates 🍫💕
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <button
              className="px-6 py-4 text-lg sm:text-xl duration-500 bg-pink-400 rounded-2xl font-bit font-medium text-white hover:text-rose-600 hover:border-2 hover:border-pink-800 hover:bg-transparent"
              onClick={() => setYesTwoClicked(true)}
            >
              You are Mine
            </button>

            <button
              className="px-6 py-4 text-lg sm:text-xl duration-500 bg-pink-400 rounded-2xl font-bit font-medium text-white hover:text-rose-600 hover:border-2 hover:border-pink-800 hover:bg-transparent"
            >
              I'am Yours
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-rose-200 w-full max-w-[500px] my-10 sm:my-20 py-16 sm:py-32 px-6 sm:px-10 rounded-3xl shadow-xl text-center font-bit text-base sm:text-lg text-rose-700">
          Ulta palta kicchu dekhbo direct mere felbo  
          kech kech  
          ami apnr hobar age apni amr bujhsen  
          jonmogoto single thkben  
          aaa reminder I am a psychopath he he ha ha
        </div>
      )}
    </Container>
  </div>
</>

  ) 
};

export default App








