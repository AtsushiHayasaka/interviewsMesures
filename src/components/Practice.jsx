import React , { useContext, useEffect, useState }  from 'react';
import AppContext from '../contexts/AppContext';
import {Link} from 'react-router-dom';

const Practice = () => {
  const { state, dispatch } = useContext(AppContext);
  let copy_s = [...state]
  console.log(state)
  console.log(copy_s)
  let questions = []
for(let i = 0; i<copy_s.length; i++) {
   questions.push(copy_s.splice(Math.floor(Math.random()*copy_s.length),1)[0].question);
}
  console.log(questions)
  

  // console.log(questions) //length 5
  // let qu = questions.splice(Math.floor(Math.random()*questions.length),1)[0].question;
  // console.log(qu)
  // console.log(questions) //length 4
  // const [qe, setQe] = useState(qu)
  const shuffleQuestion = () => {
    console.log(questions)
    // qu = questions.splice(Math.floor(Math.random()*questions.length),1)[0].question;
    // console.log(questions)
    // setQe(qu)
    // // setQe(q)
  }
  // console.log(stateCopy.splice(Math.floor(Math.random()*stateCopy.length),1)[0])
  return(
    <>
      <div>
        <p>
         {/* {qe} */}
        </p>
        <button onClick={shuffleQuestion}>Next</button>
      </div>
    </>
  )
}

export default Practice;

/**
 * 問題
 * questionsの変数が変更されない
 *
 * 現状
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */