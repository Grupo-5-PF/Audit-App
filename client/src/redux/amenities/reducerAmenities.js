const initialState = [];

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case "sampleAction":

        return state.concat(action.payload)

    default: return state;
  }
}

export default reducer;