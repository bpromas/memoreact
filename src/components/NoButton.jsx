import "./NoButton.css"

function NoButton(props) {

  return (
    <section id="no-button" onClick={props.handleClick}>
      <span>N</span>
    </section>
  )
}

export default NoButton
