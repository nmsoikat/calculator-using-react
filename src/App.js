import React, { useState } from "react"
import "./App.css"
// 5 + 5 -

// operator click
// push operator on arr;
// operator length === 2 then calculate;
// result + second-operator

const App = () => {
  const [result, setResult] = useState("")
  const [operators, setOperators] = useState([])

  const calculate = () => {
    try {
      setResult(eval(result).toString())
      // setResult(eval(result).toString() + operators[1])
      setOperators([])
    } catch {
      setResult("Error")
    }
  }

  const keypadHandel = async (e) => {
    let input = e.target.name
    let str = result
    str += input
    setResult(str)

    if ("+-*/".includes(input)) {
      let currentOperators = [...operators]
      currentOperators.push(input)
      setOperators(currentOperators)

      console.log(operators)
      if (operators.length === 1) {
        calculate()
      }
    }
  }

  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  const clearScreen = () => {
    setResult("")
  }

  return (
    <>
      <div className="container">
        <form>
          <input type="text" name="result" id="result" value={result} />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={clearScreen} id="clearBtn">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspaceBtn">
            C
          </button>
          <button className="highlight" onClick={keypadHandel} name="/">
            &divide;
          </button>
          <button onClick={keypadHandel} name="7">
            7
          </button>
          <button onClick={keypadHandel} name="8">
            8
          </button>
          <button onClick={keypadHandel} name="9">
            9
          </button>
          <button className="highlight" onClick={keypadHandel} name="*">
            &times;
          </button>
          <button onClick={keypadHandel} name="4">
            4
          </button>
          <button onClick={keypadHandel} name="5">
            5
          </button>
          <button onClick={keypadHandel} name="6">
            6
          </button>
          <button className="highlight" onClick={keypadHandel} name="-">
            &ndash;
          </button>
          <button onClick={keypadHandel} name="1">
            1
          </button>
          <button onClick={keypadHandel} name="2">
            2
          </button>
          <button onClick={keypadHandel} name="3">
            3
          </button>
          <button className="highlight" onClick={keypadHandel} name="+">
            +
          </button>
          <button onClick={keypadHandel} name="0">
            0
          </button>
          <button onClick={keypadHandel} name=".">
            .
          </button>
          <button className="highlight" onClick={calculate} id="equalBtn">
            =
          </button>
        </div>
      </div>
    </>
  )
}

export default App
