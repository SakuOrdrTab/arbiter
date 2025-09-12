interface CandidateProps {
    name: string
    onRemove: (name: string) => void
}

const Candidate = ({ name, onRemove }: CandidateProps) => (
    <li className="candidate-item">
        {name}
        <button className="remove-button" onClick={() => onRemove(name)}>Remove</button>
    </li>
)

export default Candidate
