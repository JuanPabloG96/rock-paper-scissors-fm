import '@styles/ui/Score.css';

type Props = {
  score: number
}

export function Score({ score }: Props) {
  return (
    <div className="score-container">
      <span>Score <strong>{score}</strong></span>
    </div>
  )
}
