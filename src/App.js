import React, { createRef } from 'react'
import { connect } from 'react-redux'
import Button from './components/Button'
import InputForm from './components/InputForm'
import Item from './components/Items'
import { stateToProps, dispatchToProps } from './redux'

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
      <InputForm name={nameRef} price={priceRef} />
      <Button click={add} />
    </div>
  )
}

const ReduxApp = connect(stateToProps, dispatchToProps)(App)

export default ReduxApp
