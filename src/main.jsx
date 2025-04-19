import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/hooks/useContext/App'
import ThemeLayouts from './Layouts/ThemeLayouts'
import { MyContext } from './components/hooks/useContext/contexts/MyContext'

createRoot(document.getElementById('root')).render(
  <ThemeLayouts>
    <MyContext value={{ secret: "abcd" }}>
      <App />
    </MyContext>
  </ThemeLayouts>
)
