import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

import { Router } from './routes/Router';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { dark } from './configs/themes';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <Router />
    </ThemeProvider>

  </React.StrictMode>,
)
