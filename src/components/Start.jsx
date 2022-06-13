import { useRef } from "react";


export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <>
      <div className="start">
        <h1>KBC Lite</h1>
        <input className="startInput"placeholder="enter your name"ref={inputRef}/>  
        <button className="startButton" onClick={handleClick}>
          Start
        </button>
         <div className="centre">
            <h2>
              <a className="social" href="https://munnaportfolio.ml/">Munna Kumar</a>
              <a className="social" href="https://www.facebook.com/Munnakumar27" target="_blank" rel="noreferrer"><i class="bi bi-facebook"></i></a>
              <a className="social" href="https://www.linkedin.com/in/munnakumar27/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
              <a className="social" href="https://www.instagram.com/munnakumar_27/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
              <a className="social" href="https://github.com/MunnaKumar27"><i class="bi bi-github" target="_blank"></i></a>
            </h2>
        </div>
      </div>
    </>
  );
}
