import { useState, useEffect } from "react";
import "./Timer.css"

function Timer(props) {

  const [duration, setDuration] = useState(props.duration)

  useEffect(() => {
    // This runs only on mount (when the component appears)
    const key = setInterval(() => {
      setDuration(duration => duration > 0 ? duration - 1 : duration);
    }, 1000);
    return () => {
      clearInterval(key);
    }
  }, []);

  const pad = (s) => {
    s = s.toString();
    s = (s.length < 2) ? s = "0" + s : s;
    return s;
  }

  const initialDisplay = (duration) => {
    const minute = Math.floor(duration / 60)
    const second = duration % 60
    return `${minute}:${pad(second)}`
  }

  if(duration == 0){
    console.log(duration)
    props.timesUp()
  }

  return (
    <section id="timer">
      <span>{initialDisplay(duration)}</span>
    </section>
  )
}

export default Timer
