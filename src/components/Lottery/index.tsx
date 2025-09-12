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
            <h2>Winner: {winner}</h2>
        </div>
    )
}

export default Lottery
