export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: 'Eate Pizza', complete: false }]
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case 'ADD_TODO': {
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data //data: data
      };
    }
  }
  return state;
}
