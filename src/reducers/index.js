/**
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

const questions = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_QUESTION':
      const question = action.question;
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, question }];
    case 'DELETE_QUESTION':
      const deleteId = action.id;
      const newState = state.filter((q) => deleteId !== q.id);
      return [...newState];
  }
};

export default questions;
