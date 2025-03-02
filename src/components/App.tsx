import '../styles/App.css'
import { Token } from './ui/Token';
import { tokens } from '../ts/constants';

export function App() {
  console.log(tokens);
  return (
    <>
      {
        Object.values(tokens).map((token) => {
          return (
            <Token key={token.name} name={token.name} url={token.url} />
          )
        })
      }
    </>
  )
} 
