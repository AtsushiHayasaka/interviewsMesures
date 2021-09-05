import React, { useContext, useState }  from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../contexts/AppContext';
import Question from './Question'

// import QuestionForm from './QuestionForm';
// import Questions from './Questions.js';

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const [question, setQuestion] = useState('')

  const addQuestion = (e) => {
    e.preventDefault()
    if(question === '') {
      return
    }
    dispatch({
      type: 'ADD_QUESTION',
      question
    })
    setQuestion('')
  }

  
  return(
    <>
      <div>
          <h4 className="page__title fs_l">面接質問作成フォーム</h4>
          <form>
            <div className="form__group mt">
              <label className="form__label" htmlFor="formEventTitle">質問を入力してね</label>
              <textarea
                className="form__input mt"
                id="formEventTitle"
                onChange={(e) => setQuestion(e.target.value)}
                value={question}
              />
            </div>
            <button
          className="btn mt"
          // disabled={unCreatable}
          onClick={addQuestion}
        >
          質問を作成する
        </button>
        </form>
        <table className="questions">
          {/* <thead>
            <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th></th>
            </tr>
          </thead> */}
          <tbody>
            {state.map((q, index) => (
              <Question key={index} q={q} />
            ))}
          </tbody>
        </table>
        <div className="button-area">
          <Link className=" btn button__link" to="/practice">Start</Link>
        </div>
      </div>
    </>
  )
}

export default Home;