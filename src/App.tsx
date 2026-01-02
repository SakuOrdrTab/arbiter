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

  // Need at least 2 candidates to run a lottery
  const notEnoughForLottery = candidates.length <= 1

  return (
    <div className="main-container">
      <Headline />
      <CandidateList candidates={candidates} setCandidates={setCandidates} winners={winners} setWinners={setWinners} />
      <AddCandidate candidates={candidates} setCandidates={setCandidates} />
      {!notEnoughForLottery && <Lottery candidates={candidates} winners={winners} setWinners={setWinners} />}
    </div>
  )
}

export default App
