import './Lottery.css'

interface LotteryProps {
    candidates: string[]
    winners: string[]
    setWinners: React.Dispatch<React.SetStateAction<string[]>>
}

const Lottery = ({ candidates, winners, setWinners }: LotteryProps) => {
    
    // Get remaining candidates (exclude already selected winners)
    const remainingCandidates = candidates.filter(candidate => !winners.includes(candidate))

    // lottery logic here
    const handleDrawLottery = () => {
        console.log("Drawing lottery...")
        console.log("Remaining Candidates:", remainingCandidates)

        // Check if there are remaining candidates
        if (remainingCandidates.length === 0) {
            console.log("No more candidates to draw from.")
            return
        }

        // pick random index from length of remaining candidates array
        const randomIndex = Math.floor(Math.random() * remainingCandidates.length)
        // select winner
        const selectedWinner = remainingCandidates[randomIndex]
        setWinners([...winners, selectedWinner])

        console.log("Winner selected:", selectedWinner)
    }

    // if no winners yet, return button to draw lottery
    if (winners.length === 0) {
        return (
            <div className="lottery-container">
                <button className="lottery-button" onClick={handleDrawLottery}>Draw Lottery</button>
            </div>
        )
    }

    // if winners exist, return winner display and draw another button
    return (
        <div className="lottery-container">
            <div className="winner-confetti">
                <h2>{winners.length === 1 ? 'the Winner is:' : 'the Winners are:'}</h2><br />
                {winners.map((winner, index) => (
                    <div key={winner} className="winner-name">
                        {index + 1}. {winner}
                    </div>
                ))}
            </div>
            {remainingCandidates.length > 0 && (
                <button className="lottery-button draw-another-button" onClick={handleDrawLottery}>
                    Draw Another
                </button>
            )}
        </div>
    )
}

export default Lottery
