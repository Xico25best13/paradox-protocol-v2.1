import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TrustPage from './pages/TrustPage'
import TermsPage from './pages/TermsPage'
import DiscountPage from './pages/DiscountPage'
import CheckoutPage from './pages/CheckoutPage'
import DiscountCheckoutPage from './pages/DiscountCheckoutPage'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/confianca" element={<TrustPage />} />
            <Route path="/termos" element={<TermsPage />} />
            <Route path="/desconto" element={<DiscountPage />} />
            <Route path="/checkout/:ticketType" element={<CheckoutPage />} />
            <Route path="/discount-checkout/:ticketType" element={<DiscountCheckoutPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App

