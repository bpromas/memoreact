import './YesButton.css'

function YesButton(props) {

  return (
    <section id="yes-button" onClick={props.handleClick}>
      <span>Y</span>
    </section>
  )
}

export default YesButton