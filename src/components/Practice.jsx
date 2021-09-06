import React , { useContext,  useEffect,  useState }  from 'react';
import AppContext from '../contexts/AppContext';
import {Link} from 'react-router-dom';

const Practice = () => {
  const { state } = useContext(AppContext);
  let copy_s = [...state]
  let n = 0
  let questions = []
for(let i = 0; i < state.length; i++) {
   questions.push(copy_s.splice(Math.floor(Math.random()*copy_s.length),1)[0].question);
}
const [qu, setQu] = useState(questions[n])

// const [m, setM] = useState('')
// const [s, setS] = useState('')

// const set = () => {
//     const d = new Date(Date.now() - startTime);
//     setM(d.getMinutes()) 
//     setS(d.getSeconds()) 
// }
// useEffect(() => {
//   set();
// }, [n])


let startTime;
const time= document.getElementById('time')
// let m;
// let s
const timer = () =>  {
    const d = new Date(Date.now() - startTime)
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    console.log(m, s)
    time.innerText= `${m}:${s}`
    setTimeout(timer, 10)
}

const nextQuestion = () => {
  n++;
  console.log(n)
  setQu(questions[n])
  startTime = Date.now();
  time.innerText = ''
  timer()
  
}

  return(
    <>
      <div className="question__display">
        <div className="image__area">
          <img src="" alt=""/>
        </div>
        <p className="question">
         {qu}
        </p>
  {/* <p id="time" className="time mt">{`${m}:${s}`}</p> */}
  <p id="time" className="time mt">00:00</p>
        <button className="btn button__link next_mt" onClick={nextQuestion}>Next</button>
      </div>
    </>
  )
}

export default Practice;

