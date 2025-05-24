import '@styles/Token.css';

type Props = {
  className: string,
  img: string,
  onClick: () => void
}

export function Token(Props: Props) {
  return (
    <picture className={Props.className + " token"} onClick={Props.onClick}>
      <img src={Props.img} alt={Props.className + " image"} />
    </picture>
  )
}
