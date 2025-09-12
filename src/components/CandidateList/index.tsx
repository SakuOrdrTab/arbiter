import Candidate from "./Candidate"

interface CandidateListProps {
    candidates: string[]
    setCandidates: React.Dispatch<React.SetStateAction<string[]>>
}

const CandidateList = ({ candidates, setCandidates }: CandidateListProps) => {

    // remove candidate from candidates array
    const handleRemove = (name: string) => {
        const updatedCandidates = candidates.filter((candidate) => candidate !== name)
        setCandidates(updatedCandidates)
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