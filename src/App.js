import React, {useState, useEffect} from 'react'
import './App.css'
import ScreenComponent from './components/ScreenComponent'


const App = () => {
  const [questions, setQuestions] = useState([])


  const fetchQuestions = async() => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
    const responseData = await response.json()
    console.log(responseData.results)
    setQuestions(responseData.results)
  }

    useEffect(() => {
      fetchQuestions()
    }, [])


    

    return (
    <ScreenComponent questions={questions}/>
    )
  
}

export default App