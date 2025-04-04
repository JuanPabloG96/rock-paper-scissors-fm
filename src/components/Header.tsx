import { Score } from '@components/ui/Score';

export function Header() {
  return (
    <header>
      <img src="images/logo.svg" alt="logo"></img>
      <Score score={0} />
    </header>
  )
}
