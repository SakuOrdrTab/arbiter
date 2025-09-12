import { useState, type SyntheticEvent } from "react"

import './AddCandidate.css'

interface AddCandidateProps {
    candidates: string[],
    setCandidates: React.Dispatch<React.SetStateAction<string[]>>
}

const AddCandidate = ({ candidates, setCandidates }: AddCandidateProps) => {
    const [candidate, setCandidate] = useState<string>("")
    
    // on form submit, add candidate to candidates array and clear input field
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()

        // No duplicates to allowed in candidates array
        if (candidates.includes(candidate)) {
            console.log("Candidate already exists, not added!")
            return
        }

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
                <button className="add-candidate-button" type="submit">Add Candidate</button>
            </form>
        </div>
    )
}

export default AddCandidate
