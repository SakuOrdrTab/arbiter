
import Headline from './components/Headline'
import CandidateList from './components/CandidateList'

import './App.css'

const debugList = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank']

function App() {

  return (
    <>
      <Headline />
      <CandidateList candidates={debugList} />
    </>
  )
}

export default App
