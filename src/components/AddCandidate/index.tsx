import { useState, type SyntheticEvent } from "react"

interface AddCandidateProps {
    candidates: string[],
    setCandidates: React.Dispatch<React.SetStateAction<string[]>>
}

const AddCandidate = ({ candidates, setCandidates }: AddCandidateProps) => {
    const [candidate, setCandidate] = useState<string>("")
    
    // on form submit, add candidate to candidates array and clear input field
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        const updatedCandidates = [...candidates, candidate]
        setCandidates(updatedCandidates)
        setCandidate("")
    }

    return (
        <div className="add-candidate-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Candidate name"
                    value={candidate}
                    onChange={({ target }) => setCandidate(target.value)}
                />
                <button type="submit">Add Candidate</button>
            </form>
        </div>
    )
}

export default AddCandidate
