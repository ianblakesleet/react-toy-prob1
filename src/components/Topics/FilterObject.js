import React, { useState } from 'react'

const FilterObject = () => {
  const [unfilteredArray, SetUnfilteredArray] = useState([
    {
      name: 'PC-principal',
      hair: 'black',
      age: 33,
      occupation: 'gangsta',
    },
    {
      name: 'Ian',
      height: '4ft 9inch',
      weight: 250,
      occupation: 'developer',
    },
    {
      name: 'savannah',
      age: 34,
      description: 'hot',
      hair: 'dirty blonde',
    },
  ])
  const [userInput, SetUserInput] = useState('')
  const [filteredArray, SetFilteredArray] = useState([])

  const handleInput = e => {
    SetUserInput(e.target.value)
  }
  const handleClick = () => {
    let results = []
    unfilteredArray.map(obj => {
      if (obj.hasOwnProperty(userInput)) results.push(obj)
    })
    SetFilteredArray(results)
  }

  return (
    <div className="puzzleBox FilterObjectPB">
      <h4>filter Object</h4>
      <span className="puzzleText">{JSON.stringify(unfilteredArray)}</span>
      <input type="text" className="inputLine" onChange={handleInput} />
      <button className="confirmationButton" onClick={handleClick}>
        filter
      </button>
      <span className="resultsBox filterObjectRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  )
}

export default FilterObject

// const obj = [
//   {
//     name: 'PC-principal',
//     hair: 'black',
//     age: 33,
//     occupation: 'gangsta',
//   },
//   {
//     name: 'Ian',
//     height: '4ft 9inch',
//     weight: 250,
//     occupation: 'developer',
//   },
//   {
//     name: 'savannah',
//     age: 34,
//     description: 'hot',
//     hair: 'dirty blonde',
//   },
// ]
