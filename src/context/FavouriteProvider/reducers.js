export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      const {favouriteJob} = action.payload;
      return {
        ...state,
        favouriteJob: [...state.favouriteJob, favouriteJob],
      };
    case 'REMOVE_FAVOURITE':
      return {
        favouriteJob: [
          ...state.favouriteJob.filter(job => job !== action.payload.job),
        ],
      };
    default:
      return state;
  }
};
