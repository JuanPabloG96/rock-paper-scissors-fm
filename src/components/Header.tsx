import '@styles/Header.css';

export function Header({ children }: any) {
  return (
    <header>
      <img src="images/logo-bonus.svg" alt="logo"></img>
      {children}
    </header>
  )
}
