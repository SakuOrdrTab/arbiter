interface CandidateProps {
    name: string
    onRemove: (name: string) => void
}

const Candidate = ({ name, onRemove }: CandidateProps) => (
    <li>
        {name}
        <button onClick={() => onRemove(name)}>Remove</button>
    </li>
)

export default Candidate
