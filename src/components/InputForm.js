const InputForm = (props) => {
  return (
    <div>
      <label for="">Name: </label>
      <input type="text" ref={props.name} />
      <br />
      <br />
      <label for="">Price: </label>
      <input type="text" ref={props.price} />
      <br />
      <br />
    </div>
  )
}

export default InputForm
