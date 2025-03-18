import { Routes, Route } from 'react-router-dom'

import './assets/style/theme.css'
import Home from './pages/Home'
import About from './pages/About'
import EmailPage from './pages/EmailPage'
import Email from './components/Email'

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/email' element={<EmailPage />} />
      <Route path='/email/inscription' element={<Email type={'inscription'}/>} />
      <Route path='/email/confirmation' element={<Email type={'confirmation'}/>} />
    </Routes>
  )

}
