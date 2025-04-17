export const initialState = {
  data: [],
  isLoading: false,
  error: null
}

export const ACTION_TYPES = {
  SAVEDATA: "SAVEDATA",
  SETLOADING: "SETLOADING",
  SETERROR: "SETERROR",

}


function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVEDATA: return { ...state, data: action.payload, isLoading: false }
    case ACTION_TYPES.SETLOADING: return { ...state, isLoading: action.payload }
    case ACTION_TYPES.SETERROR: return { ...state, isLoading: false, error: action.payload }


    default: return state

  }

}
export default reducer;
