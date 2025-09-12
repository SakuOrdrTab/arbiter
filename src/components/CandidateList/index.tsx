interface CandidateListProps {
    candidates: string[]
}

const CandidateList = ({ candidates }: CandidateListProps) => (
    <div className="candidate-list">
        <h2>Candidates</h2>
        <ul>
            {candidates.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    </div>
)

export default CandidateList