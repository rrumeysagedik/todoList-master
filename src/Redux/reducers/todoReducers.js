import {ADD_ITEM, REMOVE_ITEM,UPDATE_ITEM} from './../types';

const INITIAL_STATE = {
  list: [
    {
      id: 0,
      title: 'First Item',
      desc: 'loremadfghjkl',
      date: '12 Haziran',
    },
    {
      id: 1,
      title: 'Second Item',
      desc: 'loremadfghjkl',
      date: '12 Haziran',
    },
    {
      id: 2,
      title: 'Third Item',
      desc: 'loremadfghjkl',
      date: '12 Haziran',
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        list: removeItemFromArray(state.list, state.list[action.payload]),
      };

        case ADD_ITEM:
        return {
          ...state,
          list: addItemFromArray(state.list, state.list[action.payload]),
        };

        case UPDATE_ITEM:
        return {
          ...state,
          list: updateItemFromArray(state.list, state.list[action.payload]),
        };

    default:
      return state;
  };
};


var removeItemFromArray = function (array, item) {
  /* assign a empty array */
  var tmp = [];
  /* loop over all array items */
  for (var index in array) {
    if (array[index] !== item) {
      /* push to temporary array if not like item */
      tmp.push(array[index]);
    }
  }
  /* return the temporary array */
  return tmp;
};
var addItemFromArray = function (array, item) {
  /* assign a empty array */
  var tmp = [];
  /* loop over all array items */
  for (var index in array) {
    if (array[index] !== item) {
      /* push to temporary array if not like item */
      tmp.push(array[index]);
    }
  }
  /* return the temporary array */
  return tmp;
};
var updateItemFromArray = function (array, item) {
  /* assign a empty array */
  var tmp = [];
  /* loop over all array items */
  for (var index in array) {
    if (array[index] !== item) {
      /* push to temporary array if not like item */
      tmp.push(array[index]);
    }
  }
  /* return the temporary array */
  return tmp;
};