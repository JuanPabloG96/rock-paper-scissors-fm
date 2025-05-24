import { useState } from 'react';
import { TOKEN_IMAGES } from '@constants/constants';

import { Header } from '@components/Header';
import { Score } from '@components/ui/Score';
import { Token } from '@components/Token';
import '@styles/App.css';

export function App() {
  const [score, setScore] = useState(0);
  const [userSelection, setUserSelection] = useState("");

  const handleClick = (event: any) => {
    setUserSelection(event.target.id);
  }

  return (
    <>
      <Header>
        <Score score={score} />
      </Header>
      <main>
        {
          TOKEN_IMAGES.map(token => (
            <Token
              key={token.id}
              className={token.token_name}
              img={token.img}
              onClick={() => handleClick(token)}
            />
          ))
        }
      </main>
    </>
  )
}
