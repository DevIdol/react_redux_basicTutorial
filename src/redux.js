export const stateToProps = (state) => {
    return {
      items: state,
    }
  }
  
  export const dispatchToProps = (dispatch) => {
    return {
      add: (id, name, price) => {
        dispatch({ type: 'ADD', item: { id, name, price } })
      },
    }
  }