import React, { useContext, useState }  from 'react';
import AppContext from '../contexts/AppContext';

const Question = ({q}) => {
  const {dispatch} = useContext(AppContext);
  const id = q.id;
  const deleteQuestion = () => {
    dispatch({
      type: 'DELETE_QUESTION',
      id
    })
  }
  return (
    // <div className='questions__lists'>
    //   <p className='questions__list' >{q.question}</p>
    //   
    // </div>
    <tr className='questions__lists'>
      <td>{q.id}</td>
      <td className='questions__list'>{q.question}</td>
      <td><button className="btn btn-danger" onClick={deleteQuestion}>削除</button></td>
    </tr>
  )
}

export default Question;