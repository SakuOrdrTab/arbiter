import Candidate from "./Candidate"

import './CandidateList.css'

interface CandidateListProps {
    candidates: string[]
    setCandidates: React.Dispatch<React.SetStateAction<string[]>>
    winners: string[]
    setWinners: React.Dispatch<React.SetStateAction<string[]>>
}

const CandidateList = ({ candidates, setCandidates, winners, setWinners }: CandidateListProps) => {

    // remove candidate from candidates array and winners array if present
    const handleRemove = (name: string) => {
        const updatedCandidates = candidates.filter((candidate) => candidate !== name)
        setCandidates(updatedCandidates)
        
        // Also remove from winners if they were selected
        const updatedWinners = winners.filter((winner) => winner !== name)
        setWinners(updatedWinners)
    }

    return (
    <div className="candidate-list">
        <h2>Candidates</h2>
        <ul>
            {candidates.map((name) => (
                <Candidate key={name} name={name} onRemove={handleRemove} />
            ))}
        </ul>
    </div>
)}

export default CandidateList