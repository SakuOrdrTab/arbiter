import { useState } from 'react'

import Headline from './components/Headline'
import CandidateList from './components/CandidateList'
import AddCandidate from './components/AddCandidate'
import Lottery from './components/Lottery'

import './App.css'

const App = () => {

  const [candidates, setCandidates] = useState<string[]>([])
  // if a winner has been decided, it resides in this state
  const [winner, setWinner] = useState<string | null>(null)

  return (
    <div className="main-container">
      <Headline />
      <CandidateList candidates={candidates} setCandidates={setCandidates} />
      <AddCandidate candidates={candidates} setCandidates={setCandidates} />
      <Lottery candidates={candidates} winner={winner} setWinner={setWinner} />
    </div>
  )
}

export default App
