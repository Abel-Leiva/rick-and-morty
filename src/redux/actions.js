import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";

export const add_favorite = (personaje) => {
  return { type: ADD_FAVORITE, payload: personaje };
};
export const delete_favorite = (id) => {
  return { type: DELETE_FAVORITE, payload: id };
};
