import { btnStyles } from "./Styles"
const RandomBtn = ({quotes, getRandom}) => {
  return (
    <button id="new-quote" 
    onClick ={() => getRandom(quotes)} 
    className ={ btnStyles }>New Quote</button>
  )
}

export default RandomBtn