import React, { createRef } from 'react'
import { connect } from 'react-redux'

const Item = ({ name, price }) => (
  <li>
    {name}, $ {price}
  </li>
)

const App = (props) => {
  let nameRef = createRef()
  let priceRef = createRef()

  const add = () => {
    props.add(
      props.items.length + 1,
      nameRef.current.value,
      priceRef.current.value,
    )
  }

  return (
    <div>
      <h1>Hello React-Redux</h1>
      <ul>
        {props.items.map((i) => (
          <Item key={i.id} name={i.name} price={i.price} />
        ))}
      </ul>
      <label for="">Name: </label>
      <input type="text" ref={nameRef} />
      <br />
      <br />
      <label for="">Price: </label>
      <input type="text" ref={priceRef} />
      <br />
      <br />
      <button onClick={add} style={{ marginLeft: 100 }}>
        {' '}
        Add
      </button>
    </div>
  )
}

const stateToProps = (state) => {
  return {
    items: state,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    add: (id, name, price) => {
      dispatch({ type: 'ADD', item: { id, name, price } })
    },
  }
}

const ReduxApp = connect(stateToProps, dispatchToProps)(App)

export default ReduxApp
