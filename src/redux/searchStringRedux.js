// selectors

export const getSearchString = ({state}, searchString) => state.filter(state => state.searchString == searchString); 

// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

