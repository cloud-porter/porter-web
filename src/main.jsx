import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'antd/dist/reset.css'
import './index.css'
import App from './App.jsx'
import theme from './theme.js'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ConfigProvider theme={theme}> */}
      <App />
    {/* </ConfigProvider> */}
  </StrictMode>,
)
