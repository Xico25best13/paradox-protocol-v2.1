import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Trophy,
  Users,
  Star,
  Zap,
  Clock,
  Shield,
  Target,
  Award,
  CheckCircle,
  XCircle,
  AlertTriangle,
  X,
  Search,
  Crown
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '../contexts/LanguageContext'
import { useNavigate } from 'react-router-dom'
import enigmaImage from '../assets/enigma-symbols.png'
import logoImage from '../assets/logo_animated.gif'

const HomePage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 44,
    seconds: 21
  })
  const [enigmaAnswer, setEnigmaAnswer] = useState('')
  const [enigmaState, setEnigmaState] = useState('idle') // 'idle', 'success', 'error'
  const [attempts, setAttempts] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [zoomedImage, setZoomedImage] = useState(null)

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleEnigmaSubmit = (e) => {
    e.preventDefault()
    setAttempts(prev => prev + 1)
    setShowFeedback(true)
    
    if (enigmaAnswer.toLowerCase().trim() === 'key') {
      setEnigmaState('success')
      setTimeout(() => {
        navigate('/discount-checkout/kit-completo?discount=true') // Redirect to discount checkout page
      }, 2000)
    } else {
      setEnigmaState('error')
      setTimeout(() => {
        setShowFeedback(false)
        setEnigmaState('idle')
      }, 3000)
    }
  }

  const scrollToTickets = () => {
    document.getElementById('tickets-section').scrollIntoView({ behavior: 'smooth' })
  }

  const tickets = [
    {
      name: t('explorer'),
      slug: 'explorador',
      price: "€9.90",
      prize: "€600",
      description: t('explorerDesc'),
      features: [
        t('explorerFeature1'),
        t('explorerFeature2'),
        t('explorerFeature3')
      ],
      buttonClass: "cta-button",
      popular: false,
      checkoutLink: "https://buy.stripe.com/28E14o6oQfrt2zweHNgnK01"
    },
    {
      name: t('decoder'),
      slug: 'decifrador',
      price: "€15.90",
      prize: "€1,500",
      description: t('decoderDesc'),
      features: [
        t('decoderFeature1'),
        t('decoderFeature2'),
        t('decoderFeature3'),
        t('decoderFeature4')
      ],
      buttonClass: "cta-button",
      popular: true,
      badge: t('mostPopular'),
      checkoutLink: "https://buy.stripe.com/14AdRabJafrteie2Z5gnK05"
    },
    {
      name: t('master'),
      slug: 'mestre',
      price: "€23.90",
      prize: "€5,000",
      description: t('masterDesc'),
      features: [
        t('masterFeature1'),
        t('masterFeature2'),
        t('masterFeature3'),
        t('masterFeature4')
      ],
      buttonClass: "cta-button",
      popular: false,
      checkoutLink: "https://buy.stripe.com/28EbJ25kM7Z1b62dDJgnK03"
    },
    {
      name: t('completeKit'),
      slug: 'kit-completo',
      price: "€39.99",
      originalPrice: "€69.78",
      prize: t('totalAccess'),
      description: t('completeKitDesc'),
      features: [
        t('completeKitFeature1'),
        t('completeKitFeature2'),
        t('completeKitFeature3'),
        t('completeKitFeature4'),
        t('completeKitFeature5')
      ],
      buttonClass: "cta-button",
      popular: false,
      bestValue: true,
      badge: t('bestValue'),
      savings: "€29.79",
      checkoutLink: "https://buy.stripe.com/dRm5kEcNe1AD7TQeHNgnK06"
    }
  ]

  const glyphs = [
    {
      symbol: "✕",
      title: "K",
      description: t('glyphKDesc')
    },
    {
      symbol: "🌊",
      title: "E", 
      description: t('glyphEDesc')
    },
    {
      symbol: "🌳",
      title: "Y",
      description: t('glyphYDesc')
    }
  ]

  return (
    <div className="min-h-screen starfield">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo centralizado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="mb-12"
          >
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Paradox Protocol Logo" 
                  className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.5)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.3))'
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6">
              Paradox Protocol - O Desafio das Mentes Brilhantes
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              ✨ {t('heroSubtitle')} ✨
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {t('heroDescription')}
            </p>
          </motion.div>

          {/* Stats - Otimizado para mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 px-2"
          >
            <div className="premium-card p-4 md:p-6 text-center">
              <Trophy className="w-8 h-8 md:w-12 md:h-12 mx-auto text-yellow-400 mb-2 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">€10,000</div>
              <div className="text-gray-400 text-sm md:text-base">{t("totalPrize")}</div>
            </div>
            <div className="premium-card p-4 md:p-6 text-center">
              <Users className="w-8 h-8 md:w-12 md:h-12 mx-auto text-purple-400 mb-2 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">1,247</div>
              <div className="text-gray-400 text-sm md:text-base">{t("activeMinds")}</div>
            </div>
            <div className="premium-card p-4 md:p-6 text-center">
              <Star className="w-8 h-8 md:w-12 md:h-12 mx-auto text-pink-400 mb-2 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">98%</div>
              <div className="text-gray-400 text-sm md:text-base">{t("satisfactionRate")}</div>
            </div>
            <p className="text-yellow-400 font-semibold mt-4 text-sm md:text-base col-span-full">Milhares já aceitaram o desafio. Estás pronto para ser o próximo?</p>
          </motion.div>

          {/* CTA Buttons - Melhor layout mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-4"
          >
            <Button 
              onClick={scrollToTickets}
              className="cta-button px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold w-full sm:w-auto"
            >
              ✨ {t('startJourney')}
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-500 text-purple-300 hover:bg-purple-500/20 px-4 md:px-6 py-3 md:py-4 w-full sm:w-auto"
              onClick={() => window.open('https://discord.gg/GY3dcsPPNV', '_blank')}
            >
              💬 {t('joinDiscord')}
            </Button>
            <Button 
              variant="outline" 
              className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/20 px-6 py-4"
              onClick={() => window.open('https://t.me/paradoxprotocol', '_blank')}
            >
              📱 {t('followTelegram')}
            </Button>
          </motion.div>

          {/* Mensagem Persuasiva em Caixas Animadas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 mb-8 md:mb-16 px-4"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 text-center">
              Não Apenas um Site. Uma Oportunidade. O Teu Próximo Nível.
            </h3>
            
            {/* Grid de Caixas Persuasivas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
              
              {/* Caixa 1: Exploração */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-purple-900/40 border border-purple-500/30 rounded-xl p-4 md:p-6 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-purple-300">Exploração</h4>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Estás a navegar, a explorar... mas e se houvesse mais? Muito mais. Este não é um mero scroll. 
                  É um convite para desvendar um desafio que pode mudar o jogo para ti.
                </p>
              </motion.div>

              {/* Caixa 2: Urgência */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-900/40 via-red-900/40 to-orange-900/40 border border-orange-500/30 rounded-xl p-4 md:p-6 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-orange-300">O Tempo Corre</h4>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Cada segundo que passas a pensar, é um segundo que te afasta da descoberta. 
                  Os outros já estão a avançar. Vais ficar para trás?
                </p>
              </motion.div>

              {/* Caixa 3: Exclusividade */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-900/40 via-green-900/40 to-emerald-900/40 border border-emerald-500/30 rounded-xl p-4 md:p-6 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Crown className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-emerald-300">Exclusividade</h4>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Poucos terão a visão para ir além. Tu podes ser um deles. E a recompensa? 
                  Não é apenas conhecimento. É algo tangível, valioso, que te espera no final.
                </p>
              </motion.div>

              {/* Caixa 4: Ação */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-900/40 via-amber-900/40 to-yellow-900/40 border border-yellow-500/30 rounded-xl p-4 md:p-6 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-yellow-300">Ação Agora</h4>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  A curiosidade é boa, mas a ação é que transforma. Clica, explora, decifra. 
                  O teu futuro no Paradox Protocol começa com um simples passo. Estás pronto?
                </p>
              </motion.div>
            </div>

            {/* Call to Action Final */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 md:mt-12 bg-gradient-to-r from-red-600/30 via-pink-600/30 to-red-600/30 border-2 border-red-400/50 rounded-lg p-4 md:p-6 max-w-4xl mx-auto text-center"
            >
              <h4 className="text-xl md:text-2xl font-bold text-red-300 mb-3">
                ⚡ Não Percas Esta Oportunidade Única
              </h4>
              <p className="text-gray-200 text-sm md:text-base mb-4 leading-relaxed">
                Oportunidades como esta são raras. Garante o teu lugar entre os que ousam vencer.
              </p>
              <Button 
                className="bg-gradient-to-r from-red-500 via-pink-500 to-red-500 hover:from-red-600 hover:via-pink-600 hover:to-red-600 text-white border-0 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('enigma-section').scrollIntoView({ behavior: 'smooth' })}
              >
                🚀 Reclamar o Meu Lugar
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Secção de Impacto e Confiança */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6">
              🏆 Transforma a Tua Mente, Conquista Prémios Reais
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
              Mais de <span className="text-yellow-400 font-bold">10.000 participantes</span> já descobriram o poder dos enigmas do Paradox Protocol. 
              Alguns ganharam prémios que <span className="text-green-400 font-bold">mudaram as suas vidas para sempre</span>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">€2.3M Distribuídos</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Em prémios reais pagos aos nossos participantes mais brilhantes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">87% Taxa de Sucesso</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Dos participantes que completam os desafios conquistam prémios
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">4.9★ Avaliação</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Baseada em mais de 3.000 avaliações de participantes satisfeitos
              </p>
            </motion.div>
          </div>

          {/* Testemunhos Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 md:p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">MR</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Miguel R.</h4>
                  <p className="text-gray-400 text-xs">Vencedor de €5,000</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                "Nunca pensei que resolver enigmas pudesse mudar a minha vida financeira. O prémio de €5,000 permitiu-me investir no meu negócio!"
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 md:p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Ana S.</h4>
                  <p className="text-gray-400 text-xs">Vencedora de €1,500</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                "Os enigmas são viciantes! Ganhei €1,500 e descobri uma paixão que nem sabia que tinha. Recomendo a todos!"
              </p>
            </div>
          </motion.div>

          {/* Call to Action Persuasivo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-orange-600/30 via-red-600/30 to-pink-600/30 border-2 border-orange-400/50 rounded-lg p-6 md:p-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-orange-300 mb-4">
              🧠 Tens o Que É Preciso Para Ser o Próximo Vencedor?
            </h3>
            <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed">
              Apenas <span className="text-yellow-300 font-bold">3% das pessoas</span> conseguem resolver os nossos enigmas mais desafiantes. 
              Mas aqueles que conseguem... <span className="text-green-300 font-bold">ganham prémios que mudam vidas</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white border-0 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('enigma-section').scrollIntoView({ behavior: 'smooth' })}
              >
                🧩 Aceitar o Desafio Grátis
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-orange-400 text-orange-300 hover:bg-orange-500 hover:text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold"
                onClick={scrollToTickets}
              >
                💰 Ver Prémios Disponíveis
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enigma Zero Section - Agora em destaque */}
      <section id="enigma-section" className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6">
              🔮 {t("enigmaZeroTitle")} 🔮
            </h2>
            <p className="text-yellow-400 font-semibold mt-4 text-base md:text-lg mb-6">
              Resolve este enigma e desbloqueia um desconto exclusivo! Apenas para mentes brilhantes.
            </p>
            
            {/* Marketing Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-8"
            >
              <div className="premium-card p-4 md:p-6 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-purple-900/50 border-2 border-yellow-400/30">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4">
                  ✨ {t("enigmaMarketingTitle")} ✨
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {t("enigmaMarketingDesc")}
                </p>
              </div>
            </motion.div>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto px-2">
              {t("enigmaZeroSubtitle")}
            </p>

            {/* Countdown - Compacto em mobile */}
            <div className="mb-8 md:mb-12">
              <p className="text-yellow-400 font-semibold mb-3 md:mb-4 text-sm md:text-base">{t("nextChallenge")}:</p>
              <div className="countdown-timer max-w-xs md:max-w-md mx-auto">
                <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
                  <div>
                    <div className="countdown-digit text-lg md:text-2xl">{String(timeLeft.days).padStart(2, "0")}</div>
                    <div className="text-xs text-gray-400 mt-1">{t("days")}</div>
                  </div>
                  <div>
                    <div className="countdown-digit text-lg md:text-2xl">{String(timeLeft.hours).padStart(2, "0")}</div>
                    <div className="text-xs text-gray-400 mt-1">{t("hours")}</div>
                  </div>
                  <div>
                    <div className="countdown-digit text-lg md:text-2xl">{String(timeLeft.minutes).padStart(2, "0")}</div>
                    <div className="text-xs text-gray-400 mt-1">{t("minutes")}</div>
                  </div>
                  <div>
                    <div className="countdown-digit text-lg md:text-2xl">{String(timeLeft.seconds).padStart(2, "0")}</div>
                    <div className="text-xs text-gray-400 mt-1">{t("seconds")}</div>
                  </div>
                </div>
              </div>
              <p className="text-yellow-400 font-semibold mt-4 text-sm md:text-base">O tempo para desvendar os segredos está a esgotar-se. Não deixes que esta oportunidade única te escape.</p>
            </div>
          </motion.div>

          {/* Challenge Explanation - Mais compacto em mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12 flex justify-center"
          >
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/50 rounded-xl p-4 md:p-8 max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mr-2 md:mr-3" />
                <span className="text-purple-400 font-bold text-lg md:text-xl">{t("challengeTitle")}</span>
                <Target className="w-6 h-6 md:w-8 md:h-8 text-purple-400 ml-2 md:ml-3" />
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                {t("challengeQuestion")}
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                {t("challengeExplanation")}
              </p>
              <img 
                src={enigmaImage} 
                alt="Enigma Symbols" 
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg mb-6"
                onClick={() => setZoomedImage(enigmaImage)}
                style={{ cursor: "pointer" }}
              />
              <form onSubmit={handleEnigmaSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Input
                  type="text"
                  placeholder={t("enterAnswerHint")}
                  value={enigmaAnswer}
                  onChange={(e) => setEnigmaAnswer(e.target.value)}
                  className="w-full sm:w-auto max-w-xs bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500"
                />
                <Button type="submit" className="cta-button px-6 py-3 w-full sm:w-auto">
                  {t("decipherEnigma")}
                </Button>
              </form>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 text-sm font-semibold ${enigmaState === "success" ? "text-green-400" : "text-red-400"}`}
                >
                  {enigmaState === "success" ? (
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-2" /> {t("correctAnswer")}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <XCircle className="w-5 h-5 mr-2" /> {t("wrongAnswer")} ({t("attempts")}: {attempts})
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Full Symbol Guide */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6">
              📚 {t("ancientSymbols")} 📚
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto px-2">
              {t("ancientSymbolsDesc")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/parchment_page_1.png" 
                alt="Parchment Page 1" 
                className="w-full rounded-lg shadow-lg cursor-pointer"
                onClick={() => setZoomedImage("/parchment_page_1.png")}
              />
              <img 
                src="/parchment_page_2.png" 
                alt="Parchment Page 2" 
                className="w-full rounded-lg shadow-lg cursor-pointer"
                onClick={() => setZoomedImage("/parchment_page_2.png")}
              />
              <img 
                src="/parchment_page_3.png" 
                alt="Parchment Page 3" 
                className="w-full rounded-lg shadow-lg cursor-pointer"
                onClick={() => setZoomedImage("/parchment_page_3.png")}
              />
              <img 
                src="/parchment_page_4.png" 
                alt="Parchment Page 4" 
                className="w-full rounded-lg shadow-lg cursor:pointer"
                onClick={() => setZoomedImage("/parchment_page_4.png")}
              />
            </div>
          </motion.div>

          {/* Solution Hints */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6">
              💡 {t("solutionHints")} 💡
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto px-2">
              {t("solutionHintsDesc")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {glyphs.map((glyph, index) => (
                <div key={index} className="premium-card p-6 text-center">
                  <div className="text-5xl mb-4">{glyph.symbol}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{glyph.title}</h3>
                  <p className="text-gray-400 text-sm">{glyph.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tickets Section - Após o enigma como alternativa */}
      <section id="tickets-section" className="py-12 md:py-20 px-4 bg-gradient-to-r from-gray-900/50 via-purple-900/30 to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6">
              🎫 Não Conseguiste Resolver? Não Há Problema!
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto px-2 mb-6">
              Mesmo os génios precisam de ajuda às vezes. Escolhe o teu bilhete e acede aos enigmas com dicas e soluções.
            </p>
            <div className="bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 border-2 border-blue-400/50 rounded-lg p-4 md:p-6 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-3">
                💡 Cada Bilhete É Uma Oportunidade de Ganhar Até €5,000
              </h3>
              <p className="text-gray-200 text-sm md:text-base">
                Não é apenas sobre resolver enigmas. É sobre <span className="text-yellow-300 font-bold">transformar a tua mente</span>, 
                desenvolver competências únicas e <span className="text-green-300 font-bold">conquistar prémios reais</span> que podem mudar a tua vida.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {tickets.map((ticket, index) => (
              <motion.div
                key={ticket.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card className="ticket-card h-full p-4 md:p-6">
                  {ticket.badge && (
                    <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 badge text-xs md:text-sm ${ticket.popular ? 'popular' : ticket.bestValue ? 'best-value' : ''}`}>
                      {ticket.badge}
                    </div>
                  )}
                  
                  <CardContent className="space-y-4 md:space-y-6 p-0">
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{ticket.name}</h3>
                      <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{ticket.description}</p>
                      
                      <div className="mb-3 md:mb-4">
                        {ticket.originalPrice && (
                                <div className="text-gray-500 line-through text-xs md:text-sm">{t("was")}: {ticket.originalPrice}</div>
                        )}
                        <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1 md:mb-2">{ticket.price}</div>
                        <div className="text-yellow-400 font-semibold text-sm md:text-base">
                          {t('prize')}: {ticket.prize}
                        </div>
                        {ticket.savings && (
                          <div className="text-green-400 font-semibold mt-1 text-sm">
                            {t('save')} {ticket.savings}!
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 md:space-y-3">
                      {ticket.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full ${ticket.buttonClass} py-3`}
                      onClick={() => navigate(`/checkout/${ticket.slug}`)}
                    >
                      🧩 Conquistar {ticket.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <img src={zoomedImage} alt="Zoomed Enigma" className="max-w-full max-h-screen object-contain" />
            <Button 
              className="absolute top-4 right-4 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2"
              onClick={() => setZoomedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Paradox Protocol. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default HomePage








