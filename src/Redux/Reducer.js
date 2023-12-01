import { ADD_DATA_TO_PROJECT, ADD_POJECTS, UPDATE_POJECT, UPDATE_SINGLE_PROJECT, UPDATE_USER } from "./actionTypes"

const initialState = {
    user:{username:'',email:''},
    project:[],
    singleProject:{}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case UPDATE_USER:
    return { ...state, user: payload}

  case UPDATE_POJECT:
    return { ...state, "project": [...state.project,payload]}

  case ADD_POJECTS:
    return { ...state, "project":payload}

  case UPDATE_SINGLE_PROJECT:
    return { ...state, "singleProject":payload}

  case ADD_DATA_TO_PROJECT:
    return { ...state, "singleProject":{...state.singleProject,...payload}}

  default:
    return state
  }
}