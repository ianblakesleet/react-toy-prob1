import React, { useState } from 'react'

const EvenAndOdd = () => {
  const [evenArray, setEvenArray] = useState([])
  const [oddArray, setOddArray] = useState([])
  const [userInput, setUserInput] = useState('')

  const inputHandler = e => {
    setUserInput(e.target.value)
  }
  const clickHandler = () => {
    let even = []
    let odd = []
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] % 2 === 0) {
        even.push(userInput[i])
      } else {
        odd.push(userInput[i])
      }
    }
    setEvenArray(even)
    setOddArray(odd)
  }

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens And Odds</h4>
      <input type="text" className="inputLine" onChange={inputHandler} />
      <button className="confirmationButton" onClick={clickHandler}>
        even/odd
      </button>
      <span className="resultsBox">Evens:{evenArray}</span>
      <span className="resultsBox">Odds:{oddArray}</span>
    </div>
  )
}

export default EvenAndOdd
