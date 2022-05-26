import React, { useState } from 'react'

const Palindrome = () => {
  const [userInput, SetUserInput] = useState('')
  const [Palindrome, SetPalindrome] = useState('')

  const handleInput = e => {
    SetUserInput(e.target.value)
  }
  const isPalindrome = () => {
    let backwards = userInput
    backwards = backwards.split('').reverse().join('')
    if (userInput === backwards) {
      SetPalindrome('True')
    } else {
      SetPalindrome('False')
    }
  }
  return (
    <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
      <input type="text" className="inputLine" onChange={handleInput} />
      <button className="confirmationButton" onClick={isPalindrome}></button>
      <span className="resultsBox">{JSON.stringify(Palindrome)}</span>
    </div>
  )
}

export default Palindrome
