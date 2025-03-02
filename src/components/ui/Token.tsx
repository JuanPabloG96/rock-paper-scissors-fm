import '../../styles/Token.css'

type TokenProps = {
  name: string
  url: string
}

export function Token(props: TokenProps) {
  return (
    <picture className="token " id={props.name}>
      <img src={props.url} alt={props.name + ' token image'} />
    </picture>
  )
}
