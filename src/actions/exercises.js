import * as api from "../api/exercises"

export const fetchExercises = () => async (dispatch) => {
    const { data } = api.fetchExercises()
    dispatch({ type: "FETCHEXERCISES", payload: data })
}