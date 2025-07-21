// CheckoutPage.jsx
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../contexts/LanguageContext'

const CheckoutPage = () => {
  const { t } = useLanguage()
  const { ticketType } = useParams()
  const navigate = useNavigate()
  const [selectedTicket, setSelectedTicket] = useState(null)

  const tickets = {
    'explorador': {
      name: t('explorer'),
      description: t('explorerDesc'),
      price: '€9.90',
      prize: '€600',
      checkoutLink: 'https://buy.stripe.com/28E14o6oQfrt2zweHNgnK01',
      features: [
        t('featureAccessMainChallenge'),
        t('featureCommunitySupport'),
        t('featureParticipationCertificate')
      ]
    },
    'decifrador': {
      name: t('decoder'),
      description: t('decoderDesc'),
      price: '€15.90',
      prize: '€1,500',
      checkoutLink: 'https://buy.stripe.com/14AdRabJafrteie2Z5gnK05',
      features: [
        t('featureAccessMainChallenge'),
        t('featureExclusiveHints'),
        t('featurePrioritySupport'),
        t('featureAdvancedCertificate')
      ]
    },
    'mestre': {
      name: t('master'),
      description: t('masterDesc'),
      price: '€23.90',
      prize: '€5,000',
      checkoutLink: 'https://buy.stripe.com/28EbJ25kM7Z1b62dDJgnK03',
      features: [
        t('featureAccessMainChallenge'),
        t('featureExclusiveHints'),
        t('featureVipSupport'),
        t("featureMentoringSession"),
        t("featureMasterCertificate")      ]
    },
    'kit-completo': {
      name: t('completeKit'),
      description: t('completeKitDesc'),
      price: '€39.99',
      originalPrice: '€69.78',
      prize: t('totalAccess'),
      checkoutLink: 'https://buy.stripe.com/dRm5kEcNe1AD7TQeHNgnK06',
      features: [
        t('featureAllChallengesIncluded'),
        t('featureLifetimeAccess'),
        t('featureVipSupport'),        t("featureMentoringSession"),
        t("featurePremiumCertificate"),
        t('featureExclusiveBonuses')
      ]
    }
  }

  useEffect(() => {
    if (ticketType && tickets[ticketType]) {
      setSelectedTicket(tickets[ticketType])
    } else {
      setSelectedTicket(tickets['kit-completo'])
    } 
  }, [ticketType, t])

  const handleCheckout = () => {
    if (selectedTicket && selectedTicket.checkoutLink) {
      window.open(selectedTicket.checkoutLink, '_blank')
    }
  }

  if (!selectedTicket) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>{t('loading')}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="premium-card p-6 md:p-8 max-w-4xl w-full"
      >
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">
          {t('checkoutTitle')}
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 md:mb-6"
        >
          <div className="bg-gradient-to-r from-orange-600/40 via-red-600/40 to-pink-600/40 border-2 border-orange-400/60 rounded-lg p-3 md:p-4 text-center shadow-lg shadow-orange-500/20">
            <h3 className="text-base md:text-lg font-bold text-orange-300 mb-2">
              🧩 {t('unriddleEnigmaWinUpTo')} €5,000 🧩
            </h3>
            <p className="text-gray-200 text-xs md:text-sm leading-relaxed">
              {t('checkoutPersuasiveMessage1')} <span className="font-bold text-yellow-300">{t('checkoutPersuasiveMessage2')}</span>.
              {t('checkoutPersuasiveMessage3')}
            </p>
            <div className="mt-2 flex items-center justify-center space-x-4 text-xs">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full font-bold shadow-md">
                🧠 {t('mentalChallenge')}
              </span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-2 py-1 rounded-full font-bold shadow-md">
                💰 {t('realPrizes')}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          <div className="order-2 lg:order-1">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 text-center lg:text-left">📋 {t('orderSummary')}</h2>
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg mb-4 md:mb-6 border border-purple-500/30">
              <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-2 text-center lg:text-left">{selectedTicket.name}</h3>
              <p className="text-gray-400 text-sm mb-4 text-center lg:text-left">{selectedTicket.description}</p>
              
              {selectedTicket.originalPrice && (
                <div className="flex justify-between items-center mb-2 text-sm md:text-base">
                  <span className="text-gray-300">{t('originalPrice')}:</span>
                  <span className="text-gray-500 line-through">{selectedTicket.originalPrice}</span>
                </div>
              )}
              
              <div className="flex justify-between items-center mb-4 text-base md:text-lg">
                <span className="text-yellow-400 font-bold">{t('finalPrice')}:</span>
                <span className="text-white font-bold text-xl md:text-2xl">{selectedTicket.price}</span>
              </div>

              <div className="mb-4 text-center lg:text-left">
                <span className="text-green-400 font-semibold text-sm md:text-base">🎯 {t('potentialPrize')}: €5,000</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-semibold mb-2 text-center lg:text-left">✅ {t('whatsIncluded')}:</h4>
                {selectedTicket.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start text-xs md:text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 text-center lg:text-left">🎯 {t('chooseYourTicket')}</h2>
            <div className="space-y-3 mb-4 md:mb-6">
              {Object.keys(tickets).map((key) => {
                const ticket = tickets[key]
                const isSelected = selectedTicket.name === ticket.name
                return (
                  <div
                    key={key}
                    className={`p-3 md:p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                      isSelected 
                        ? 'border-purple-500 bg-purple-900/30 shadow-lg shadow-purple-500/20' 
                        : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                    }`}
                    onClick={() => setSelectedTicket(ticket)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-sm md:text-lg text-white">{ticket.name}</h3>
                      {key === 'kit-completo' && (
                        <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">
                          {t('bestValue')}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm mb-2">{ticket.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-400 font-bold text-sm md:text-lg">{ticket.price}</span>
                      <span className="text-green-400 text-xs md:text-sm">{t('prize')}: {ticket.prize}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mb-4 md:mb-6">
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-center">💳 {t('securePaymentMethods')}:</h3>
              <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
                <div 
                  onClick={handleCheckout}
                  className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-2 md:px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                >
                  <img src="/visa_icon.png" alt="Visa" className="w-5 md:w-6 h-3 md:h-4 mr-1 md:mr-2 object-contain" />
                  <span className="text-white font-medium text-xs">Visa</span>
                </div>
                <div 
                  onClick={handleCheckout}
                  className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-2 md:px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                >
                  <img src="/mastercard_icon.png" alt="Mastercard" className="w-5 md:w-6 h-3 md:h-4 mr-1 md:mr-2 object-contain" />
                  <span className="text-white font-medium text-xs">Mastercard</span>
                </div>
                <div 
                  onClick={handleCheckout}
                  className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-2 md:px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                >
                  <img src="/apple_pay_icon.png" alt="Apple Pay" className="w-5 md:w-6 h-3 md:h-4 mr-1 md:mr-2 object-contain" />
                  <span className="text-white font-medium text-xs">Apple Pay</span>
                </div>
                <div 
                  onClick={handleCheckout}
                  className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-2 md:px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                >
                  <img src="/paypal_icon.png" alt="PayPal" className="w-5 md:w-6 h-3 md:h-4 mr-1 md:mr-2 object-contain" />
                  <span className="text-white font-medium text-xs">PayPal</span>
                </div>
              </div>
              <div 
                onClick={handleCheckout}
                className="flex items-center justify-center bg-purple-600/20 backdrop-blur-sm px-2 md:px-3 py-2 rounded-lg border border-purple-500/30 cursor-pointer hover:bg-purple-600/30 transition-all"
              >
                <img src="/stripe_icon.png" alt="Stripe" className="w-4 md:w-5 h-4 md:h-5 mr-1 md:mr-2 object-contain" />
                <span className="text-white font-medium text-xs">{t('processedByStripe')}</span>
              </div>
              <p className="text-gray-400 text-xs text-center mt-2">
                🔒 {t('sslEncryption')}
              </p>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
              <h4 className="text-blue-400 font-bold mb-2 text-sm md:text-base text-center lg:text-left">💬 {t('whatParticipantsSay')}:</h4>
              <p className="text-gray-300 text-xs md:text-sm italic text-center lg:text-left">
                {t('participantTestimonial1')}
              </p>
            </div>

            <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 text-center">
              🔒 {t('stripeRedirectMessage')}
            </p>

            <Button
              onClick={handleCheckout}
              className="w-full text-base md:text-lg font-bold relative overflow-hidden group bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white border-0 px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center">
                🧩 {t('unriddleEnigmaWin5000')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 group-hover:from-yellow-400/30 group-hover:to-orange-400/30 transition-all duration-300 animate-pulse"></div>
            </Button>
            
            <div className="mt-3 md:mt-4 text-center">
              <p className="text-green-400 text-xs md:text-sm font-semibold">
                ✅ {t('joinWinnersMessage')}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-gray-700 text-gray-400 hover:bg-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> {t('backToHome')}
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default CheckoutPage

