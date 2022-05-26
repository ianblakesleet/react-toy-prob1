import React, { useState } from 'react'

const FilterString = () => {
  const [unfilteredArray, SetUnfilteredArray] = useState([
    'Ian',
    'Savannah',
    'Snyder',
    'Andrew',
    'Mason',
    'Lexi',
    'Janae',
  ])
  const [userInput, SetUserInput] = useState('')
  const [filteredArray, SetFilteredArray] = useState([])

  const handleInput = e => {
    SetUserInput(e.target.value)
  }

  const handleClick = () => {
    let result = []
    unfilteredArray.forEach(elem => {
      if (elem.includes(userInput)) {
        result.push(elem)
      }
    })
    // let result = []
    // unfilteredArray.map(person => {
    //   person.includes(userInput) && result.push(person)
    // })
    SetFilteredArray(result)
  }

  return (
    <div className="puzzleBox filterStringPB">
      <h4>filter string</h4>
      <span className="puzzleText">{JSON.stringify(unfilteredArray)}</span>
      <input type="text" className="inputLine" onChange={handleInput} />
      <buton className="confirmationButton" onClick={handleClick}></buton>
      <span className="resultsBox filterStringRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  )
}

export default FilterString
