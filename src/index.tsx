import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './styles/index.css'


const container = document.getElementById('app') as Element;
const root = createRoot(container);

root.render(<App />);
