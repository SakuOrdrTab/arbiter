import { useState } from 'react'

import Headline from './components/Headline'
import CandidateList from './components/CandidateList'
import AddCandidate from './components/AddCandidate'
import Lottery from './components/Lottery'

import './App.css'

const App = () => {

  const [candidates, setCandidates] = useState<string[]>([])
  // Track multiple winners
  const [winners, setWinners] = useState<string[]>([])

  // For not rendering the lottery button when there are no remaining candidates
  const tooFewCandidates = candidates.length <= 1

  return (
    <div className="main-container">
      <Headline />
      <CandidateList candidates={candidates} setCandidates={setCandidates} />
      <AddCandidate candidates={candidates} setCandidates={setCandidates} />
      {!tooFewCandidates && <Lottery candidates={candidates} winners={winners} setWinners={setWinners} />}
    </div>
  )
}

export default App
