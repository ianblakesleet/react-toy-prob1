import React, { useState } from 'react'

const Sum = () => {
  const [inputOne, SetInputOne] = useState('')
  const [inputTwo, SetInputTwo] = useState('')
  const [sum, SetSum] = useState('')

  const handleInputOne = e => {
    SetInputOne(e.target.value)
  }
  const handleInputTwo = e => {
    SetInputTwo(e.target.value)
  }
  const sumOfTwo = () => {
    let answer = parseInt(inputOne) + parseInt(inputTwo)
    SetSum(answer)
  }
  return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input type="number" className="inputLine" onChange={handleInputOne} />

      <input type="number" className="inputLine" onChange={handleInputTwo} />

      <button className="confirmationButton" onClick={sumOfTwo}></button>
      <span className="resultsBox">{JSON.stringify(sum)}</span>
    </div>
  )
}

export default Sum
