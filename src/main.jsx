import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/Children/App'
import ThemeLayouts from './Layouts/ThemeLayouts'
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from './components/ErrrorComponent/ErrorComponent';


createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={ErrorComponent} >
    <ThemeLayouts>
      <App />
    </ThemeLayouts>
  </ErrorBoundary>
)
