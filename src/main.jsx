import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Layout from './layouts/Layout.jsx'
import SummaryCM from './routes/SummaryCM.jsx'
import CreateCM from './routes/CreateCM.jsx'
import Home from './routes/Home.jsx'
import NotFound from './routes/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        
        <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />}/>
            <Route path="/create" element={<CreateCM />} />
            <Route path="/summary" element={<SummaryCM />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)
