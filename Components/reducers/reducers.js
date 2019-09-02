const initialState = {
  number: 0
};

const reducer = (state=initialState, action) => {
  const newState = {... state};

  switch (action.type) {
    case "NUMBER_PLUS":
      newState.number = newState.number + 1;
      break;
  }
  return newState;
}

export default reducer;