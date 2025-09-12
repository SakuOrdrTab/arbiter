import './lottery.css'

interface LotteryProps {
    candidates: string[]
    winner: string | null
    setWinner: React.Dispatch<React.SetStateAction<string | null>>
}

const Lottery = ({ candidates, winner, setWinner }: LotteryProps) => {
    
    // lottery logic here
    const handleDrawLottery = () => {
        console.log("Drawing lottery...")
        console.log("Candidates:", candidates)

        // Check if the candidates array is empty
        if (candidates.length === 0) {
            console.log("No candidates to draw from. Please add candidates.")
            return
        }

        // pick random index from length of candidates array
        const randomIndex = Math.floor(Math.random() * candidates.length)
        // set winner
        const selectedWinner = candidates[randomIndex]
        setWinner(selectedWinner)

        console.log("Winner selected:", selectedWinner)
    }

    // if no winner, return button to draw lottery
    if (!winner) {
        return (
            <div className="lottery-container">
                <button className="lottery-button" onClick={handleDrawLottery}>Draw Lottery</button>
            </div>
        )
    }

    // if winner, return winner display
    return (
        <div className="lottery-container">
            <div className="winner-confetti">
                🎉
                <h2>Winner: {winner}</h2>
            </div>
        </div>
    )
}

export default Lottery
