import { useState } from 'react'

import Headline from './components/Headline'
import CandidateList from './components/CandidateList'
import AddCandidate from './components/AddCandidate'

import './App.css'

const App = () => {

  const [candidates, setCandidates] = useState<string[]>([])

  return (
    <>
      <Headline />
      <CandidateList candidates={candidates} setCandidates={setCandidates} />
      <AddCandidate candidates={candidates} setCandidates={setCandidates} />
    </>
  )
}

export default App
