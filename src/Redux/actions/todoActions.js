import {ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM} from './../types';


export const addItem = (item) =>  {
return {
  type:ADD_ITEM,
  Payload:item

  };
};

export const removeItem = (index) => {
  return {
    type: REMOVE_ITEM,
    payload: index
  };
};

export const updateItem = (item) => {
  return {

    type:UPDATE_ITEM,
    payload:item
  };
};
