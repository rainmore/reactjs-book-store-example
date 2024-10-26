import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bulma/css/bulma.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.tsx'
import './main.scss'

library.add(fab, fas, far)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
