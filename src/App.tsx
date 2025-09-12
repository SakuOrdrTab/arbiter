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

  // For not rendering the lottery button when there is <= 1 candidates
  const tooFewCandidates = candidates.length <= 1

  return (
    <div className="main-container">
      <Headline />
      <CandidateList candidates={candidates} setCandidates={setCandidates} />
      {!winner && <AddCandidate candidates={candidates} setCandidates={setCandidates} />}
      {!tooFewCandidates && <Lottery candidates={candidates} winner={winner} setWinner={setWinner} />}
    </div>
  )
}

export default App
