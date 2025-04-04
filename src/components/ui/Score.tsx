type Props = {
  score: number
}

export function Score({ score }: Props) {
  return (
    <div>
      <span>Score: <strong>{score}</strong></span>
    </div>
  )
}
