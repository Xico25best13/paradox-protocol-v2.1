// DiscountCheckoutPage.jsx
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, ArrowLeft, Trophy, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../contexts/LanguageContext'

const DiscountCheckoutPage = () => {
  const { t } = useLanguage()
  const { ticketType } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [paymentStatus, setPaymentStatus] = useState('idle')

  const tickets = {
    'explorador': {
      name: t('explorer'),
      description: t('explorerDesc'),
      price: '€8.49',
      originalPrice: '€9.90',
      savings: '€1.41',
      prize: '€600',
      checkoutLink: 'https://buy.stripe.com/fZucN6aF6frtgqm1V1gnK08',
      features: [
        t('featureAccessMainChallenge'),
        t('featureCommunitySupport'),
        t('featureParticipationCertificate'),
        '🎁 ' + t('exclusiveDiscountForSolving')
      ]
    },
    'decifrador': {
      name: t('decoder'),
      description: t('decoderDesc'),
      price: '€13.52',
      originalPrice: '€15.90',
      savings: '€2.38',
      prize: '€1,500',
      checkoutLink: 'https://buy.stripe.com/14A7sM4gIcfhgqm0QXgnK09',
      features: [
        t('featureAccessMainChallenge'),
        t('featureExclusiveHints'),
        t('featurePrioritySupport'),
        t('featureAdvancedCertificate'),
        '🎁 ' + t('exclusiveDiscountForSolving')
      ]
    },
    'mestre': {
      name: t('master'),
      description: t('masterDesc'),
      price: '€20.32',
      originalPrice: '€23.90',
      savings: '€3.58',
      prize: '€5,000',
      checkoutLink: 'https://buy.stripe.com/9B64gAbJaenpca61V1gnK0a',
      features: [
        t('featureAccessMainChallenge'),
        t('featureExclusiveHints'),
        t('featureVipSupport'),
        t('featureMentoringSessions'),
        t('featureMasterCertificate'),
        '🎁 ' + t('exclusiveDiscountForSolving')
      ]
    },
    'kit-completo': {
      name: t('completeKit'),
      description: t('completeKitDesc'),
      price: '€33.99',
      originalPrice: '€39.99',
      savings: '€6.00',
      prize: t('totalAccess'),
      checkoutLink: 'https://buy.stripe.com/cNieVe5kM4MPa1Y9ntgnK0b',
      features: [
        t('featureAllChallengesIncluded'),
        t('featureLifetimeAccess'),
        t('featureVipSupport'),
        t('featureMentoringSessions'),
        t('featurePremiumCertificate'),
        t('featureExclusiveBonuses'),
        '🎁 ' + t('exclusiveDiscountForSolving')
      ]
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const isDiscount = params.get('discount') === 'true'

    if (ticketType && tickets[ticketType]) {
      setSelectedTicket({
        ...tickets[ticketType],
        isDiscount: isDiscount
      })
    } else {
      setSelectedTicket({
        ...tickets['kit-completo'],
        isDiscount: true
      })
    }
  }, [ticketType, location.search, t])

  const handleCheckout = () => {
    if (selectedTicket && selectedTicket.checkoutLink) {
      window.open(selectedTicket.checkoutLink, '_blank')
      setPaymentStatus('success')
    } else {
      setPaymentStatus('failed')
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
        {paymentStatus === 'idle' && (
          <>
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4"
              >
                <Trophy className="w-10 h-10 text-white" />
              </motion.div>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                🎉 {t('congratulationsGenius')} 🎉
              </h1>
              <p className="text-xl text-yellow-400 font-semibold">
                {t('unlockedExclusiveDiscount')}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="bg-gradient-to-r from-green-900/50 via-emerald-900/50 to-green-900/50 border-2 border-green-400/50 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-3">
                  ✨ {t('provedYourValue')} ✨
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  {t('only3PercentSolve')} <span className="font-bold text-yellow-300">{t('eliteIntellectual')}</span>!
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-yellow-400 font-semibold">{t('brilliantMind')}</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 text-orange-400 mr-1" />
                    <span className="text-orange-400 font-semibold">{t('discountUnlocked')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <div className="bg-gradient-to-r from-orange-600/40 via-red-600/40 to-pink-600/40 border-2 border-orange-400/60 rounded-lg p-3 md:p-4 text-center shadow-lg shadow-orange-500/20">
                <h3 className="text-base md:text-lg font-bold text-orange-300 mb-2">
                  🧩 {t('unriddledEnigmaWin5000')} 🧩
                </h3>
                <p className="text-gray-200 text-xs md:text-sm">
                  {t('discountExpiresSoon')}
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">🏆 {t('achievementSummary')}</h2>
                <div className="bg-gray-800 p-6 rounded-lg mb-6 border-2 border-green-400/30">
                  <h3 className="text-xl font-bold text-purple-400 mb-2">{selectedTicket.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{selectedTicket.description}</p>
                  
                  <div className="bg-red-900/30 border border-red-500/50 rounded p-3 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{t('normalPrice')}:</span>
                      <span className="text-gray-500 line-through text-lg">{selectedTicket.originalPrice}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-400 font-bold text-lg">{t('discountedPrice')}:</span>
                      <span className="text-green-400 font-bold text-2xl">{selectedTicket.price}</span>
                    </div>
                    <div className="text-center">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {t('save')} {selectedTicket.savings}! 💰
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-yellow-400 font-semibold text-lg">🎯 {t('potentialPrize')}: €5,000</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-white font-semibold mb-2">✅ {t('whatsIncluded')}:</h4>
                    {selectedTicket.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">🎯 {t('chooseYourEliteLevel')}</h2>
                <div className="space-y-4 mb-6">
                  {Object.keys(tickets).map((key) => {
                    const ticket = tickets[key]
                    const isSelected = selectedTicket.name === ticket.name
                    return (
                      <div
                        key={key}
                        className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                          isSelected 
                            ? 'border-green-500 bg-green-900/30 shadow-lg shadow-green-500/20' 
                            : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                        }`}
                        onClick={() => setSelectedTicket({ ...ticket, isDiscount: true })}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg text-white">{ticket.name}</h3>
                          <div className="flex flex-col items-end">
                            {key === 'kit-completo' && (
                              <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">
                                {t('bestValue')}
                              </span>
                            )}
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">
                              -{((parseFloat(ticket.originalPrice.replace('€', '')) - parseFloat(ticket.price.replace('€', ''))) / parseFloat(ticket.originalPrice.replace('€', '')) * 100).toFixed(0)}%
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">{ticket.description}</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-gray-500 line-through text-sm mr-2">{ticket.originalPrice}</span>
                            <span className="text-green-400 font-bold text-lg">{ticket.price}</span>
                          </div>
                          <span className="text-yellow-400 text-sm">{t('prize')}: {ticket.prize}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-4 text-center">💳 {t('securePaymentMethods')}:</h3>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div 
                      onClick={handleCheckout}
                      className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                    >
                      <img src="/visa_icon.png" alt="Visa" className="w-6 h-4 mr-2 object-contain" />
                      <span className="text-white font-medium text-xs">Visa</span>
                    </div>
                    <div 
                      onClick={handleCheckout}
                      className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                    >
                      <img src="/mastercard_icon.png" alt="Mastercard" className="w-6 h-4 mr-2 object-contain" />
                      <span className="text-white font-medium text-xs">Mastercard</span>
                    </div>
                    <div 
                      onClick={handleCheckout}
                      className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                    >
                      <img src="/apple_pay_icon.png" alt="Apple Pay" className="w-6 h-4 mr-2 object-contain" />
                      <span className="text-white font-medium text-xs">Apple Pay</span>
                    </div>
                    <div 
                      onClick={handleCheckout}
                      className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                    >
                      <img src="/paypal_icon.png" alt="PayPal" className="w-6 h-4 mr-2 object-contain" />
                      <span className="text-white font-medium text-xs">PayPal</span>
                    </div>
                  </div>
                  <div 
                    onClick={handleCheckout}
                    className="flex items-center justify-center bg-purple-600/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-purple-500/30 cursor-pointer hover:bg-purple-600/30 transition-all"
                  >
                    <img src="/stripe_icon.png" alt="Stripe" className="w-5 h-5 mr-2 object-contain" />
                    <span className="text-white font-medium text-xs">{t('processedByStripe')}</span>
                  </div>
                  <p className="text-gray-400 text-xs text-center mt-2">
                    🔒 {t('sslEncryption')}
                  </p>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-4 mb-6">
                  <h4 className="text-purple-400 font-bold mb-2">👑 {t('masterTestimonial')}:</h4>
                  <p className="text-gray-300 text-sm italic">
                    {t('masterTestimonialQuote')}
                  </p>
                </div>

                <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 text-center">
                  🔒 {t('stripe100Secure')}
                </p>

                <Button
                  onClick={handleCheckout}
                  className="w-full text-base md:text-lg font-bold relative overflow-hidden group bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white border-0 px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    🧩 {t('conquerPrizeWin5000')}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-400/20 group-hover:from-yellow-400/30 group-hover:to-green-400/30 transition-all duration-300 animate-pulse"></div>
                </Button>
                
                <div className="mt-3 md:mt-4 text-center">
                  <p className="text-green-400 text-xs md:text-sm font-semibold">
                    🎉 {t('congratulationsUnriddle')}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {paymentStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">🎉 {t('paymentInitiatedSuccess')}</h2>
            <p className="text-gray-400 mb-4">{t('redirectStripeDiscount')}</p>
            <Button
              onClick={() => navigate('/')}
              className="cta-button px-6 py-3"
            >
              {t('backToHome')}
            </Button>
          </motion.div>
        )}

        {paymentStatus === 'failed' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">❌ {t('paymentError')}</h2>
            <p className="text-gray-400 mb-4">{t('paymentErrorMessage')}</p>
            <Button
              onClick={() => setPaymentStatus('idle')}
              className="cta-button px-6 py-3"
            >
              {t('tryAgain')}
            </Button>
          </motion.div>
        )}

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

export default DiscountCheckoutPage

