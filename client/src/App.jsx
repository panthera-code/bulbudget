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
      <Route path='/email/inscription' element={<Email type={'inscription'} name={'Panthera Code'} />} />
      <Route path='/email/confirmation' element={<Email type={'confirmation'} name={'Panthera Code'} />} />
      <Route path='/email/resetPassword' element={<Email type={'resetPassword'} name={'Panthera Code'} />} />
      <Route path='/email/updatePassword' element={<Email type={'updatePassword'} name={'Panthera Code'} />} />
      <Route path='/email/desactivate' element={<Email type={'desactivate'} name={'Panthera Code'} />} />
      <Route path='/email/admin' element={<Email type={'admin'} name={'Panthera Code'} />} />
      <Route path='/email/security' element={<Email type={'security'} name={'Panthera Code'} />} />
    </Routes>
  )

}
