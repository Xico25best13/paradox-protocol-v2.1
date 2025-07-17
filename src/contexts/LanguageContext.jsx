// LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  // ==================== PORTUGUÊS ====================
  pt: {
    // Navegação
    home: 'Início',
    about: 'Sobre',
    trust: 'Confiança',
    terms: 'Termos',

    // Hero (Homepage)
    heroTitle: 'O Protocolo que Desafia as Mentes Mais Brilhantes',
    heroSubtitle: 'CONSEGUES OUVIR O ECO DO ORÁCULO?',
    heroDescription: 'Uma experiência única para intelectos excepcionais. Bem-vindo ao futuro dos enigmas.',

    // Estatísticas
    totalPrize: 'Prémio Total',
    activeMinds: 'Mentes Ativas',
    satisfactionRate: 'Taxa de Satisfação',

    // Botões Gerais
    startJourney: 'Iniciar Jornada',
    joinDiscord: 'Juntar ao Discord',
    followTelegram: 'Seguir no Telegram',
    backToHome: 'Voltar ao Início',

    // Tickets (Homepage)
    ticketsTitle: 'Escolha a Sua Jornada Intelectual',
    ticketsSubtitle: 'Cada bilhete é uma porta para um universo de possibilidades. Quanto mais investe, maior o prémio e mais recursos exclusivos recebe!',

    explorer: 'Explorador',
    decoder: 'Decifrador',
    master: 'Mestre',
    completeKit: 'Kit Completo',

    explorerDesc: 'Perfeito para começar a sua jornada no Paradox Protocol',
    decoderDesc: 'O mais escolhido! Equilíbrio perfeito entre investimento e recompensas',
    masterDesc: 'Para mentes ambiciosas que procuram os maiores desafios',
    completeKitDesc: 'MELHOR VALOR! Todos os bilhetes por menos de metade do preço',

    mostPopular: 'MAIS POPULAR',
    bestValue: 'MELHOR VALOR',

    // Funcionalidades dos Tickets
    explorerFeature1: 'Acesso ao Enigma Principal',
    explorerFeature2: 'Suporte da Comunidade',
    explorerFeature3: 'Certificado Digital de Participação',
    explorerFeature4: 'Comunidade Exclusiva',

    decoderFeature1: 'Tudo do Explorador',
    decoderFeature2: 'Pistas Exclusivas',
    decoderFeature3: 'Acesso Prioritário',
    decoderFeature4: 'Análise Detalhada',
    decoderFeature5: 'Webinars Exclusivos',

    masterFeature1: 'Tudo do Decifrador',
    masterFeature2: 'Enigmas Bónus',
    masterFeature3: 'Acesso VIP',
    masterFeature4: 'Reconhecimento Público',
    masterFeature5: 'Sessões 1-on-1',
    masterFeature6: 'Acesso Antecipado',

    completeKitFeature1: 'Todos os Enigmas',
    completeKitFeature2: 'Acesso Vitalício',
    completeKitFeature3: 'Suporte Premium',
    completeKitFeature4: 'Rede de Elite',
    completeKitFeature5: 'Máximas Hipóteses de Ganhar',
    completeKitFeature6: 'Mentoria Exclusiva',
    completeKitFeature7: 'Recursos Ilimitados',

    // Enigma (Homepage e Enigma Page)
    enigmaTitle: 'Decifra o Enigma Ancestral',
    enigmaSubtitle: 'Três símbolos antigos guardam a chave. Consegues desvendar o mistério?',
    enigmaHint: 'Dica: Os símbolos representam letras de uma palavra em inglês...', 
    enigmaPlaceholder: 'Introduz a palavra-chave...', 
    decipherEnigma: 'Decifrar Enigma',
    wrongAnswer: 'Resposta incorreta! Tenta novamente.',
    correctAnswer: 'Parabéns! Decifraste o enigma!',
    attempts: 'Tentativas',

    // Discount Page
    congratulations: 'Parabéns! Decifraste o enigma!',
    discountActive: 'Recebe 15% de desconto na tua primeira compra!',
    discountPageSubtitle: 'Agora que provaste o teu valor, aproveita o desconto exclusivo e escolhe o bilhete perfeito para a tua aventura!',
    chooseNow: 'Escolher Agora',
    limitedTimeOffer: 'Oferta por Tempo Limitado',
    discountValidity: 'Desconto válido apenas para esta sessão',
    discountTitle: '15% de Desconto na Primeira Compra!',
    discountDesc: 'Resolve o Enigma Zero e obtém desconto imediato em qualquer bilhete. Demonstra o teu valor!',

    // Enigma Zero
    enigmaZeroTitle: 'Enigma Zero: A Porta de Entrada',
    enigmaZeroSubtitle: 'Demonstra o teu valor resolvendo este pequeno enigma.',
    enigmaMarketingTitle: 'Desvenda o Enigma, Desbloqueia o Futuro!',
    enigmaMarketingDesc: 'A tua inteligência é a chave para desvendar os segredos do Paradox Protocol.',
    challengeTitle: 'O Teu Desafio',
    challengeQuestion: 'Que palavra está escrita nestes três símbolos?',
    challengeExplanation: 'Observa bem os símbolos e forma a palavra secreta!',
    solveThis: 'Resolve Isto',
    clickToEnlarge: 'Clica para ver em detalhe',
    ancientSymbols: 'Guia Completo dos Símbolos',
    ancientSymbolsDesc: 'Estes pergaminhos contêm o alfabeto completo para te ajudar.',
    solutionHints: 'Dicas da Solução',
    solutionHintsDesc: 'Aqui estão as letras específicas que precisas...', 
    yourAnswer: 'A Tua Resposta',
    needHelp: 'Precisas de ajuda?',
    scrollForClues: 'Faz scroll para ver as pistas',
    parchment1Title: 'Pergaminho I: A-F',
    parchment1Desc: 'Primeiras letras do alfabeto ancestral',
    parchment2Title: 'Pergaminho II: G-L',
    parchment2Desc: 'Continuação do alfabeto perdido',
    parchment3Title: 'Pergaminho III: M-R',
    parchment3Desc: 'Símbolos do meio do alfabeto',
    parchment4Title: 'Pergaminho IV: S-Z',
    parchment4Desc: 'Últimas letras da sequência',

    // Trust Page
    trustTitle: 'Fator de Confiança: Mérito, Não Sorte',
    trustSubtitle: 'Confiança construída sobre transparência e lógica.',
    trustMetricsTitle: 'Métricas de Confiança',
    trustPrinciplesTitle: 'Princípios Fundamentais',
    trustCertificationsTitle: 'Certificações e Segurança',
    satisfiedParticipants: 'Participantes Satisfeitos',
    satisfiedParticipantsDesc: 'Mentes brilhantes que confiaram em nós',
    prizesDistributed: 'Prémios Distribuídos',
    prizesDistributedDesc: 'Recompensas justas baseadas no mérito',
    supportAvailable: 'Suporte Disponível',
    supportAvailableDesc: 'Apoio contínuo a todos os participantes',
    deterministicStructureTitle: 'Estrutura Determinística',
    deterministicStructureDesc: 'Sistemas fechados e determinísticos...', 
    noRandomnessTitle: 'Sem Aleatoriedade',
    noRandomnessDesc: 'Eliminamos elementos aleatórios.',
    cognitiveSkillsTitle: 'Competências Cognitivas',
    cognitiveSkillsDesc: 'Pensamento crítico, lógica e atenção ao detalhe.',
    validationProcessTitle: 'Processo de Validação',
    validationProcessDesc: 'Rigoroso processo interno de validação.',
    independentAuditTitle: 'Auditoria Independente',
    independentAuditDesc: 'Auditado por entidades externas.',
    dataSecurityTitle: 'Segurança de Dados',
    dataSecurityDesc: 'Encriptação de nível militar.',
    gdprComplianceTitle: 'Conformidade RGPD',
    gdprComplianceDesc: 'Cumprimos regulamentos da UE.',

    // About Page
    aboutTitle: 'Sobre o Paradox Protocol',
    aboutSubtitle: 'Revolução no desafio à inteligência humana',
    aboutDescription: 'Nasce da convicção de que a verdadeira inteligência merece ser reconhecida e recompensada.',
    missionTitle: 'A Nossa Missão',
    missionDesc: 'Criar desafios que testem os limites da mente humana.',
    visionTitle: 'A Nossa Visão',
    visionDesc: 'Ser a plataforma de referência mundial para intelectos excepcionais.',
    valuesTitle: 'Os Nossos Valores',
    meritValue: 'Mérito',
    meritValueDesc: 'Sucesso através de capacidade e esforço.',
    transparencyValue: 'Transparência',
    transparencyValueDesc: 'Processos abertos e auditáveis.',
    excellenceValue: 'Excelência',
    excellenceValueDesc: 'Procura permanente do mais alto padrão.',
    innovationValue: 'Inovação',
    innovationValueDesc: 'Pioneiros em desafios à mente humana.',

    // Checkout Page
    checkoutTitle: 'Finalizar Compra',
    checkoutPromoTitle: '🧩 Prémio Especial',
    checkoutPersuasiveMessage1: 'Participe neste desafio e habilite-se a ganhar até',
    checkoutPersuasiveMessage2: '€ 5 000',
    checkoutPersuasiveMessage3: 'de prémios incríveis!',
    mentalChallenge: 'Desafio Mental',
    realPrizes: 'Prémios Reais',
    loading: 'A carregar...', 
    orderSummary: 'Resumo da Encomenda',
    originalPrice: 'Preço Original',
    finalPrice: 'Preço Final',
    potentialPrize: 'Prémio Potencial: {{amount}}',
    whatsIncluded: 'O que está incluído',
    chooseYourTicket: 'Escolha o Seu Bilhete',
    securePaymentMethods: 'Métodos de Pagamento Seguros',
    visa: 'Visa',
    mastercard: 'Mastercard',
    apple_pay: 'Apple Pay',
    paypal: 'PayPal',
    processedByStripe: 'Processado por Stripe',
    sslEncryption: 'Encriptação SSL 256 bits',
    whatParticipantsSay: 'O Que Dizem os Participantes',
    participantTestimonial1: '“Incrível desafio – a componente lógica é brutal!”',
    stripeRedirectMessage: 'Serás redirecionado para Stripe para concluir o pagamento.',
    joinWinnersMessage: 'Junte-se aos vencedores!',
    priceKitComplete: '€ 49,90'
  },

  // ==================== INGLÊS ====================
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    trust: 'Trust',
    terms: 'Terms',

    // Hero
    heroTitle: 'The Protocol that Challenges the Brightest Minds',
    heroSubtitle: 'CAN YOU HEAR THE ORACLE’S ECHO?',
    heroDescription: 'A unique experience for exceptional intellects. Welcome to the future of puzzles.',

    // Stats
    totalPrize: 'Total Prize',
    activeMinds: 'Active Minds',
    satisfactionRate: 'Satisfaction Rate',

    // Buttons
    startJourney: 'Start Journey',
    joinDiscord: 'Join Discord',
    followTelegram: 'Follow on Telegram',
    backToHome: 'Back to Home',

    // Tickets
    ticketsTitle: 'Choose Your Intellectual Journey',
    ticketsSubtitle: 'Each ticket is a door to a universe of possibilities. The more you invest, the bigger the prize and more exclusive resources you receive!',

    explorer: 'Explorer',
    decoder: 'Decoder',
    master: 'Master',
    completeKit: 'Complete Kit',

    explorerDesc: 'Perfect to start your journey in Paradox Protocol',
    decoderDesc: 'Most chosen! Perfect balance between investment and rewards',
    masterDesc: 'For ambitious minds seeking the greatest challenges',
    completeKitDesc: 'BEST VALUE! All tickets for less than half the price',

    mostPopular: 'MOST POPULAR',
    bestValue: 'BEST VALUE',

    // Ticket Features
    explorerFeature1: 'Access to Main Enigma',
    explorerFeature2: 'Community Support',
    explorerFeature3: 'Digital Participation Certificate',
    explorerFeature4: 'Exclusive Community',

    decoderFeature1: 'Everything from Explorer',
    decoderFeature2: 'Exclusive Clues',
    decoderFeature3: 'Priority Access',
    decoderFeature4: 'Detailed Analysis',
    decoderFeature5: 'Exclusive Webinars',

    masterFeature1: 'Everything from Decoder',
    masterFeature2: 'Bonus Enigmas',
    masterFeature3: 'VIP Access',
    masterFeature4: 'Public Recognition',
    masterFeature5: '1-on-1 Sessions',
    masterFeature6: 'Early Access',

    completeKitFeature1: 'All Enigmas',
    completeKitFeature2: 'Lifetime Access',
    completeKitFeature3: 'Premium Support',
    completeKitFeature4: 'Elite Network',
    completeKitFeature5: 'Maximum Winning Chances',
    completeKitFeature6: 'Exclusive Mentorship',
    completeKitFeature7: 'Unlimited Resources',

    // Enigma
    enigmaTitle: 'Decipher the Ancient Enigma',
    enigmaSubtitle: 'Three ancient symbols guard the key. Can you unravel the mystery?',
    enigmaHint: 'Hint: The symbols represent letters of an English word...', 
    enigmaPlaceholder: 'Enter the key word...', 
    decipherEnigma: 'Decipher Enigma',
    wrongAnswer: 'Wrong answer! Try again.',
    correctAnswer: 'Congratulations! You deciphered the enigma!',
    attempts: 'Attempts',

    // Discount
    congratulations: 'Congratulations! You deciphered the enigma!',
    discountActive: 'Get 15% discount on your first purchase!',
    discountPageSubtitle: 'Now that you have proven your worth, take advantage of the exclusive discount and choose the perfect ticket for your adventure!',
    chooseNow: 'Choose Now',
    limitedTimeOffer: 'Limited Time Offer',
    discountValidity: 'Your 15% discount is valid only for this session',
    discountTitle: '15% Discount on First Purchase!',
    discountDesc: 'Solve Enigma Zero and get immediate discount on any ticket. Prove your worth!',

    // Enigma Zero
    enigmaZeroTitle: 'Enigma Zero: The Gateway',
    enigmaZeroSubtitle: 'Prove your worth by solving this small enigma.',
    enigmaMarketingTitle: 'Unravel the Enigma, Unlock the Future!',
    enigmaMarketingDesc: 'Your intellect is the key to unraveling the secrets of Paradox Protocol.',
    challengeTitle: 'Your Challenge',
    challengeQuestion: 'What word is written in these three symbols?',
    challengeExplanation: 'Look at the symbols and form the secret word!',
    solveThis: 'Solve This',
    clickToEnlarge: 'Click to view in detail',
    ancientSymbols: 'Complete Symbol Guide',
    ancientSymbolsDesc: 'These parchments contain the full symbol alphabet to help you decipher.',
    solutionHints: 'Solution Hints',
    solutionHintsDesc: 'Here are the specific letters you need...', 
    yourAnswer: 'Your Answer',
    needHelp: 'Need help?',
    scrollForClues: 'Scroll down to see the clues',
    parchment1Title: 'Parchment I: A-F',
    parchment1Desc: 'First letters of the ancestral alphabet',
    parchment2Title: 'Parchment II: G-L',
    parchment2Desc: 'Continuation of the lost alphabet',
    parchment3Title: 'Parchment III: M-R',
    parchment3Desc: 'Middle symbols of the alphabet',
    parchment4Title: 'Parchment IV: S-Z',
    parchment4Desc: 'Final letters of the sequence',

    // Trust
    trustTitle: 'Trust Factor: Merit, Not Luck',
    trustSubtitle: 'Trust built on transparency and logic.',
    trustMetricsTitle: 'Trust Metrics',
    trustPrinciplesTitle: 'Fundamental Principles',
    trustCertificationsTitle: 'Certifications & Security',
    satisfiedParticipants: 'Satisfied Participants',
    satisfiedParticipantsDesc: 'Brilliant minds who trusted our process',
    prizesDistributed: 'Prizes Distributed',
    prizesDistributedDesc: 'Fair rewards based on merit',
    supportAvailable: 'Support Available',
    supportAvailableDesc: 'Continuous support for all participants',
    deterministicStructureTitle: 'Deterministic Structure',
    deterministicStructureDesc: 'Closed, deterministic systems...', 
    noRandomnessTitle: 'No Randomness',
    noRandomnessDesc: 'We eliminate random elements.',
    cognitiveSkillsTitle: 'Cognitive Skills',
    cognitiveSkillsDesc: 'Critical thinking, logic, attention to detail.',
    validationProcessTitle: 'Validation Process',
    validationProcessDesc: 'Rigorous internal validation process.',
    independentAuditTitle: 'Independent Audit',
    independentAuditDesc: 'Audited by external entities.',
    dataSecurityTitle: 'Data Security',
    dataSecurityDesc: 'Military-grade encryption.',
    gdprComplianceTitle: 'GDPR Compliance',
    gdprComplianceDesc: 'We comply with EU data regulations.',

    // About
    aboutTitle: 'About Paradox Protocol',
    aboutSubtitle: 'A revolution in challenging human intelligence',
    aboutDescription: 'Born from the belief that true intelligence deserves recognition.',
    missionTitle: 'Our Mission',
    missionDesc: 'Create challenges that test the human mind.',
    visionTitle: 'Our Vision',
    visionDesc: 'Be the world’s leading platform for exceptional intellects.',
    valuesTitle: 'Our Values',
    meritValue: 'Merit',
    meritValueDesc: 'Success through ability and effort.',
    transparencyValue: 'Transparency',
    transparencyValueDesc: 'Open and auditable processes.',
    excellenceValue: 'Excellence',
    excellenceValueDesc: 'Pursuit of the highest standard.',
    innovationValue: 'Innovation',
    innovationValueDesc: 'Pioneers in mind-challenging puzzles.',

    // Checkout
    checkoutTitle: 'Checkout',
    checkoutPromoTitle: '🧩 Special Prize',
    checkoutPersuasiveMessage1: 'Join this challenge and stand a chance to win up to',
    checkoutPersuasiveMessage2: '€ 5,000',
    checkoutPersuasiveMessage3: 'in amazing rewards!',
    mentalChallenge: 'Mental Challenge',
    realPrizes: 'Real Prizes',
    loading: 'Loading...', 
    orderSummary: 'Order Summary',
    originalPrice: 'Original Price',
    finalPrice: 'Final Price',
    potentialPrize: 'Potential Prize: {{amount}}',
    whatsIncluded: "What's Included",
    chooseYourTicket: 'Choose Your Ticket',
    securePaymentMethods: 'Secure Payment Methods',
    visa: 'Visa',
    mastercard: 'Mastercard',
    apple_pay: 'Apple Pay',
    paypal: 'PayPal',
    processedByStripe: 'Processed by Stripe',
    sslEncryption: 'SSL Encryption',
    whatParticipantsSay: 'What Participants Say',
    participantTestimonial1: '"Incredible puzzle – the logic was mind-blowing!"',
    stripeRedirectMessage: 'You will be redirected to Stripe to complete payment.',
    joinWinnersMessage: 'Join the Winners!',
    priceKitComplete: '€ 49.90'
  },

  // ==================== ESPAÑOL ====================
  es: {
    // Navegación
    home: 'Inicio',
    about: 'Acerca',
    trust: 'Confianza',
    terms: 'Términos',

    // Hero
    heroTitle: 'El Protocolo que Desafía las Mentes Más Brillantes',
    heroSubtitle: '¿PUEDES OÍR EL ECO DEL ORÁCULO?',
    heroDescription: 'Una experiencia única para intelectos excepcionales. Bienvenido al futuro de los enigmas.',

    // Estadísticas
    totalPrize: 'Premio Total',
    activeMinds: 'Mentes Activas',
    satisfactionRate: 'Tasa de Satisfacción',

    // Botones
    startJourney: 'Iniciar Viaje',
    joinDiscord: 'Unirse a Discord',
    followTelegram: 'Seguir en Telegram',
    backToHome: 'Volver al Inicio',

    // Tickets
    ticketsTitle: 'Elige Tu Viaje Intelectual',
    ticketsSubtitle: 'Cada boleto es una puerta a un universo de posibilidades. ¡Cuanto más inviertas, mayor será el premio y más recursos exclusivos recibirás!',

    explorer: 'Explorador',
    decoder: 'Decodificador',
    master: 'Maestro',
    completeKit: 'Kit Completo',

    explorerDesc: 'Perfecto para comenzar tu viaje en Paradox Protocol',
    decoderDesc: '¡El más elegido! Equilibrio perfecto entre inversión y recompensas',
    masterDesc: 'Para mentes ambiciosas que buscan los mayores desafíos',
    completeKitDesc: '¡MEJOR VALOR! Todos los boletos por menos de la mitad del precio',

    mostPopular: 'MÁS POPULAR',
    bestValue: 'MEJOR VALOR',

    // Funcionalidades de Tickets
    explorerFeature1: 'Acceso al Enigma Principal',
    explorerFeature2: 'Soporte de la Comunidad',
    explorerFeature3: 'Certificado Digital de Participación',
    explorerFeature4: 'Comunidad Exclusiva',

    decoderFeature1: 'Todo del Explorador',
    decoderFeature2: 'Pistas Exclusivas',
    decoderFeature3: 'Acceso Prioritario',
    decoderFeature4: 'Análisis Detallado',
    decoderFeature5: 'Webinars Exclusivos',

    masterFeature1: 'Todo del Decodificador',
    masterFeature2: 'Enigmas Bónus',
    masterFeature3: 'Acceso VIP',
    masterFeature4: 'Reconocimiento Público',
    masterFeature5: 'Sesiones 1-a-1',
    masterFeature6: 'Acceso Anticipado',

    completeKitFeature1: 'Todos los Enigmas',
    completeKitFeature2: 'Acceso de por Vida',
    completeKitFeature3: 'Soporte Premium',
    completeKitFeature4: 'Red de Élite',
    completeKitFeature5: 'Máximas Posibilidades de Ganar',
    completeKitFeature6: 'Mentoría Exclusiva',
    completeKitFeature7: 'Recursos Ilimitados',

    // Enigma
    enigmaTitle: 'Descifra el Enigma Ancestral',
    enigmaSubtitle: 'Tres símbolos antiguos guardan la clave. ¿Puedes desentrañar el misterio?',
    enigmaHint: 'Pista: Los símbolos representan letras de una palabra en inglés...', 
    enigmaPlaceholder: 'Introduce la palabra clave...', 
    decipherEnigma: 'Descifrar Enigma',
    wrongAnswer: '¡Respuesta incorrecta! Inténtalo de nuevo.',
    correctAnswer: '¡Felicidades! ¡Descifraste el enigma!',
    attempts: 'Intentos',

    // Página de Descuento
    congratulations: '¡Felicidades! ¡Descifraste el enigma!',
    discountActive: '¡Obtén 15% de descuento en tu primera compra!',
    discountPageSubtitle: 'Ahora que has demostrado tu valor, aprovecha el descuento exclusivo y elige el boleto perfecto para tu aventura!',
    chooseNow: 'Elegir Ahora',
    limitedTimeOffer: 'Oferta por Tiempo Limitado',
    discountValidity: 'Descuento válido solo para esta sesión',
    discountTitle: '¡15% de Descuento en la Primera Compra!',
    discountDesc: '¡Resuelve el Enigma Zero y obtén descuento inmediato en cualquier boleto!',

    // Enigma Zero
    enigmaZeroTitle: 'Enigma Zero: La Puerta de Entrada',
    enigmaZeroSubtitle: 'Demuestra tu valía resolviendo este pequeño enigma.',
    enigmaMarketingTitle: '¡Desvela el Enigma, Desbloquea el Futuro!',
    enigmaMarketingDesc: 'Tu intelecto es la clave para desentrañar los secretos del Paradox Protocol.',
    challengeTitle: 'Tu Desafío',
    challengeQuestion: '¿Qué palabra está escrita en estos tres símbolos?',
    challengeExplanation: 'Observa bien los símbolos y forma la palabra secreta.',
    solveThis: 'Resolver Esto',
    clickToEnlarge: 'Haz clic para ver en detalle',
    ancientSymbols: 'Guía Completa de Símbolos',
    ancientSymbolsDesc: 'Estos pergaminos contienen el alfabeto completo para ayudarte.',
    solutionHints: 'Pistas de la Solución',
    solutionHintsDesc: 'Aquí tienes las letras específicas que necesitas...', 
    yourAnswer: 'Tu Respuesta',
    needHelp: '¿Necesitas ayuda?',
    scrollForClues: 'Desplázate para ver las pistas',
    parchment1Title: 'Pergamino I: A-F',
    parchment1Desc: 'Primeras letras del alfabeto ancestral',
    parchment2Title: 'Pergamino II: G-L',
    parchment2Desc: 'Continuación del alfabeto perdido',
    parchment3Title: 'Pergamino III: M-R',
    parchment3Desc: 'Símbolos del medio del alfabeto',
    parchment4Title: 'Pergamino IV: S-Z',
    parchment4Desc: 'Últimas letras de la secuencia',

    // Trust
    trustTitle: 'Factor de Confianza: Mérito, No Suerte',
    trustSubtitle: 'Confianza basada en transparencia y lógica.',
    trustMetricsTitle: 'Métricas de Confianza',
    trustPrinciplesTitle: 'Principios Fundamentales',
    trustCertificationsTitle: 'Certificaciones y Seguridad',
    satisfiedParticipants: 'Participantes Satisfechos',
    satisfiedParticipantsDesc: 'Mentes brillantes que confiaron en nuestro proceso',
    prizesDistributed: 'Premios Distribuidos',
    prizesDistributedDesc: 'Recompensas justas basadas en mérito',
    supportAvailable: 'Soporte Disponible',
    supportAvailableDesc: 'Apoyo continuo para todos los participantes',
    deterministicStructureTitle: 'Estructura Determinística',
    deterministicStructureDesc: 'Sistemas cerrados y determinísticos...', 
    noRandomnessTitle: 'Sin Aleatoriedad',
    noRandomnessDesc: 'Eliminamos elementos aleatorios.',
    cognitiveSkillsTitle: 'Habilidades Cognitivas',
    cognitiveSkillsDesc: 'Pensamiento crítico, lógica y detalle.',
    validationProcessTitle: 'Proceso de Validación',
    validationProcessDesc: 'Proceso interno riguroso.',
    independentAuditTitle: 'Auditoría Independiente',
    independentAuditDesc: 'Auditado externamente.',
    dataSecurityTitle: 'Seguridad de Datos',
    dataSecurityDesc: 'Encriptación de nivel militar.',
    gdprComplianceTitle: 'Cumplimiento RGPD',
    gdprComplianceDesc: 'Cumplimos regulaciones de la UE.',

    // About
    aboutTitle: 'Acerca de Paradox Protocol',
    aboutSubtitle: 'Revolución en desafiar la inteligencia humana',
    aboutDescription: 'Nacido de la convicción de que la verdadera inteligencia merece reconocimiento.',
    missionTitle: 'Nuestra Misión',
    missionDesc: 'Crear desafíos que prueben los límites de la mente.',
    visionTitle: 'Nuestra Visión',
    visionDesc: 'Ser la plataforma líder mundial para intelectos excepcionales.',
    valuesTitle: 'Nuestros Valores',
    meritValue: 'Mérito',
    meritValueDesc: 'Éxito por capacidad y esfuerzo.',
    transparencyValue: 'Transparencia',
    transparencyValueDesc: 'Procesos abiertos y auditables.',
    excellenceValue: 'Excelencia',
    excellenceValueDesc: 'Siempre el más alto estándar.',
    innovationValue: 'Innovación',
    innovationValueDesc: 'Pioneros en desafíos mentales.',

    // Checkout
    checkoutTitle: 'Finalizar Compra',
    checkoutPromoTitle: '🧩 Premio Especial',
    checkoutPersuasiveMessage1: 'Participa y podrás ganar hasta',
    checkoutPersuasiveMessage2: '€ 5 000',
    checkoutPersuasiveMessage3: 'en premios increíbles!',
    mentalChallenge: 'Desafío Mental',
    realPrizes: 'Premios Reales',
    loading: 'Cargando...', 
    orderSummary: 'Resumen del Pedido',
    originalPrice: 'Precio Original',
    finalPrice: 'Precio Final',
    potentialPrize: 'Premio Potencial: {{amount}}',
    whatsIncluded: 'Lo que incluye',
    chooseYourTicket: 'Elige tu boleto',
    securePaymentMethods: 'Métodos de Pago Seguros',
    visa: 'Visa',
    mastercard: 'Mastercard',
    apple_pay: 'Apple Pay',
    paypal: 'PayPal',
    processedByStripe: 'Procesado por Stripe',
    sslEncryption: 'Encriptación SSL',
    whatParticipantsSay: 'Opiniones de Participantes',
    participantTestimonial1: '“¡Increíble desafío – la lógica es alucinante!”',
    stripeRedirectMessage: 'Serás redirigido a Stripe.',
    joinWinnersMessage: '¡Únete a los Ganadores!',
    priceKitComplete: '€ 49,90'
  },

  // ==================== FRANÇAIS ====================
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À Propos',
    trust: 'Confiance',
    terms: 'Conditions',

    // Hero
    heroTitle: 'Le Protocole qui Défie les Esprits les Plus Brillants',
    heroSubtitle: 'ENTENDEZ-VOUS L’ÉCHO DE L’ORACLE?',
    heroDescription: 'Une expérience unique pour les intellects exceptionnels. Bienvenue dans le futur des énigmes.',

    // Stats
    totalPrize: 'Prix Total',
    activeMinds: 'Esprits Actifs',
    satisfactionRate: 'Taux de Satisfaction',

    // Buttons
    startJourney: 'Commencer le Voyage',
    joinDiscord: 'Rejoindre Discord',
    followTelegram: 'Suivre sur Telegram',
    backToHome: 'Retour à l’Accueil',

    // Tickets
    ticketsTitle: 'Choisissez Votre Voyage Intellectuel',
    ticketsSubtitle: 'Chaque billet est une porte vers un univers de possibilités. Plus vous investissez, plus le prix est important et plus vous recevez de ressources exclusives!',

    explorer: 'Explorateur',
    decoder: 'Décodeur',
    master: 'Maître',
    completeKit: 'Kit Complet',

    explorerDesc: 'Parfait pour commencer votre voyage dans Paradox Protocol',
    decoderDesc: 'Le plus choisi ! Équilibre parfait entre investissement et récompenses',
    masterDesc: 'Pour les esprits ambitieux qui recherchent les plus grands défis',
    completeKitDesc: 'MEILLEURE VALEUR ! Tous les billets pour moins de la moitié du prix',

    mostPopular: 'PLUS POPULAIRE',
    bestValue: 'MEILLEURE VALEUR',

    // Ticket Features
    explorerFeature1: 'Accès à l’Énigme Principale',
    explorerFeature2: 'Support de la Communauté',
    explorerFeature3: 'Certificat Numérique de Participation',
    explorerFeature4: 'Communauté Exclusive',

    decoderFeature1: 'Tout de l’Explorateur',
    decoderFeature2: 'Indices Exclusifs',
    decoderFeature3: 'Accès Prioritaire',
    decoderFeature4: 'Analyse Détaillée',
    decoderFeature5: 'Webinaires Exclusifs',

    masterFeature1: 'Tout du Décodeur',
    masterFeature2: 'Énigmes Bonus',
    masterFeature3: 'Accès VIP',
    masterFeature4: 'Reconnaissance Publique',
    masterFeature5: 'Sessions 1-à-1',
    masterFeature6: 'Accès Anticipé',

    completeKitFeature1: 'Toutes les Énigmes',
    completeKitFeature2: 'Accès à Vie',
    completeKitFeature3: 'Support Premium',
    completeKitFeature4: 'Réseau d’Élite',
    completeKitFeature5: 'Chances Maximales de Gagner',
    completeKitFeature6: 'Mentorat Exclusif',
    completeKitFeature7: 'Ressources Illimitées',

    // Enigma
    enigmaTitle: 'Déchiffrez l’Énigme Ancestrale',
    enigmaSubtitle: 'Trois symboles anciens gardent la clé. Pouvez-vous percer le mystère ?',
    enigmaHint: 'Indice : Les symboles représentent des lettres d’un mot anglais...', 
    enigmaPlaceholder: 'Entrez le mot-clé...', 
    decipherEnigma: 'Déchiffrer l’Énigme',
    wrongAnswer: 'Mauvaise réponse ! Essayez encore.',
    correctAnswer: 'Félicitations ! Vous avez déchiffré l’énigme !',
    attempts: 'Tentatives',

    // Discount
    congratulations: 'Félicitations ! Vous avez déchiffré l’énigme !',
    discountActive: 'Obtenez 15 % de réduction sur votre premier achat !',
    discountPageSubtitle: 'Maintenant que vous avez prouvé votre valeur, profitez de la réduction exclusive et choisissez votre billet !',
    chooseNow: 'Choisir Maintenant',
    limitedTimeOffer: 'Offre à Durée Limitée',
    discountValidity: 'Votre réduction de 15 % n’est valable que pour cette session',
    discountTitle: '15 % de Réduction sur le Premier Achat !',
    discountDesc: 'Résolvez l’Énigme Zéro et obtenez une remise immédiate sur n’importe quel billet.',

    // Enigma Zero
    enigmaZeroTitle: 'Énigme Zéro : La Porte d’Entrée',
    enigmaZeroSubtitle: 'Prouvez votre valeur en résolvant cette énigme.',
    enigmaMarketingTitle: 'Démêlez l’Énigme, Débloquez l’Avenir !',
    enigmaMarketingDesc: 'Votre intellect est la clé pour percer les secrets du Paradox Protocol.',
    challengeTitle: 'Votre Défi',
    challengeQuestion: 'Quel mot est écrit dans ces trois symboles ?',
    challengeExplanation: 'Observez les symboles et formez le mot secret.',
    solveThis: 'Résoudre Ceci',
    clickToEnlarge: 'Cliquez pour voir en détail',
    ancientSymbols: 'Guide Complet des Symboles',
    ancientSymbolsDesc: 'Ces parchemins contiennent l’alphabet complet pour vous aider.',
    solutionHints: 'Indices de Solution',
    solutionHintsDesc: 'Voici les lettres spécifiques dont vous avez besoin...',  
    yourAnswer: 'Votre Réponse',
    needHelp: 'Besoin d’aide ?',
    scrollForClues: 'Faites défiler pour voir les indices',
    parchment1Title: 'Parchemin I : A-F',
    parchment1Desc: 'Premières lettres de l’alphabet ancestral',
    parchment2Title: 'Parchemin II : G-L',
    parchment2Desc: 'Suite de l’alphabet perdu',
    parchment3Title: 'Parchemin III : M-R',
    parchment3Desc: 'Symboles du milieu de l’alphabet',
    parchment4Title: 'Parchemin IV : S-Z',
    parchment4Desc: 'Dernières lettres de la séquence',

    // Trust
    trustTitle: 'Facteur de Confiance : Mérite, Pas Chance',
    trustSubtitle: 'Confiance fondée sur transparence et logique.',
    trustMetricsTitle: 'Métriques de Confiance',
    trustPrinciplesTitle: 'Principes Fondamentaux',
    trustCertificationsTitle: 'Certifications & Sécurité',
    satisfiedParticipants: 'Participants Satisfaits',
    satisfiedParticipantsDesc: 'Esprits brillants qui nous ont fait confiance',
    prizesDistributed: 'Prix Distribués',
    prizesDistributedDesc: 'Récompenses justes basées sur le mérite',
    supportAvailable: 'Support Disponible',
    supportAvailableDesc: 'Assistance continue pour tous les participants',
    deterministicStructureTitle: 'Structure Déterministe',
    deterministicStructureDesc: 'Systèmes fermés et déterministes...', 
    noRandomnessTitle: 'Pas d’Aléatoire',
    noRandomnessDesc: 'Nous éliminons tout hasard.',
    cognitiveSkillsTitle: 'Compétences Cognitives',
    cognitiveSkillsDesc: 'Pensée critique, logique et souci du détail.',
    validationProcessTitle: 'Processus de Validation',
    validationProcessDesc: 'Processus interne rigoureux.',
    independentAuditTitle: 'Audit Indépendant',
    independentAuditDesc: 'Audit externe régulier.',
    dataSecurityTitle: 'Sécurité des Données',
    dataSecurityDesc: 'Chiffrement militaire.',
    gdprComplianceTitle: 'Conformité RGPD',
    gdprComplianceDesc: 'Conformité aux régulations de l’UE.',

    // About
    aboutTitle: 'À Propos de Paradox Protocol',
    aboutSubtitle: 'Révolution dans le défi de l’intelligence humaine',
    aboutDescription: 'Né de la conviction que la véritable intelligence mérite reconnaissance et récompense.',
    missionTitle: 'Notre Mission',    
    missionDesc: 'Créer des défis intellectuels qui repoussent les limites du mental.',    
    visionTitle: 'Notre Vision',    
    visionDesc: 'Être la plateforme de référence mondiale pour les intellects d’exception.',    
    valuesTitle: 'Nos Valeurs',    
    meritValue: 'Mérite',    
    meritValueDesc: 'Succès par capacité et effort.',    
    transparencyValue: 'Transparence',    
    transparencyValueDesc: 'Processus ouverts et auditables.',    
    excellenceValue: 'Excellence',    
    excellenceValueDesc: 'Toujours le plus haut standard.',    
    innovationValue: 'Innovation',    
    innovationValueDesc: 'Pionniers en énigmes mentales.',    

    // Checkout
    checkoutTitle: 'Paiement',    
    checkoutPromoTitle: '🧩 Prix Spécial',    
    checkoutPersuasiveMessage1: 'Participez et tentez de gagner jusqu’à',    
    checkoutPersuasiveMessage2: '€ 5 000',    
    checkoutPersuasiveMessage3: 'de récompenses incroyables !',    
    mentalChallenge: 'Défi Mental',    
    realPrizes: 'Récompenses Réelles',    
    loading: 'Chargement…',    
    orderSummary: 'Récapitulatif',    
    originalPrice: 'Prix Initial',    
    finalPrice: 'Prix Final',    
    potentialPrize: 'Prix Potentiel : {{amount}}',    
    whatsIncluded: 'Ce qui est inclus',    
    chooseYourTicket: 'Choisissez votre billet',    
    securePaymentMethods: 'Moyens de Paiement Sécurisés',    
    visa: 'Visa',    
    mastercard: 'Mastercard',    
    apple_pay: 'Apple Pay',    
    paypal: 'PayPal',    
    processedByStripe: 'Traité par Stripe',    
    sslEncryption: 'Chiffrement SSL',    
    whatParticipantsSay: 'Avis des Participants',    
    participantTestimonial1: '« Puzzle incroyable – la logique est époustouflante ! »',    
    stripeRedirectMessage: 'Vous serez redirigé vers Stripe.',    
    joinWinnersMessage: 'Rejoignez les Gagnants !',    
    priceKitComplete: '€ 49,90'    
  },

  // ==================== DEUTSCH ====================
  de: {
    // Navigation
    home: 'Startseite',
    about: 'Über',
    trust: 'Vertrauen',
    terms: 'Bedingungen',

    // Hero
    heroTitle: 'Das Protokoll, das die Brillantesten Köpfe Herausfordert',
    heroSubtitle: 'KANNST DU DAS ECHO DES ORAKELS HÖREN?',
    heroDescription: 'Eine einzigartige Erfahrung für außergewöhnliche Intellekte. Willkommen in der Zukunft der Rätsel.',

    // Stats
    totalPrize: 'Gesamtpreis',
    activeMinds: 'Aktive Köpfe',
    satisfactionRate: 'Zufriedenheitsrate',

    // Buttons
    startJourney: 'Reise Beginnen',
    joinDiscord: 'Discord Beitreten',
    followTelegram: 'Auf Telegram Folgen',
    backToHome: 'Zurück zur Startseite',

    // Tickets
    ticketsTitle: 'Wählen Sie Ihre Intellektuelle Reise',
    ticketsSubtitle: 'Jedes Ticket ist eine Tür zu einem Universum voller Möglichkeiten. Je mehr Sie investieren, desto größer der Preis und desto mehr exklusive Ressourcen erhalten Sie!',

    explorer: 'Entdecker',
    decoder: 'Entschlüsseler',
    master: 'Meister',
    completeKit: 'Komplettes Kit',

    explorerDesc: 'Perfekt, um Ihre Reise im Paradox Protocol zu beginnen',
    decoderDesc: 'Am meisten gewählt! Perfekte Balance zwischen Investition und Belohnungen',
    masterDesc: 'Für ehrgeizige Köpfe, die die größten Herausforderungen suchen',
    completeKitDesc: 'BESTER WERT! Alle Tickets für weniger als die Hälfte des Preises',

    mostPopular: 'AM BELIEBTESTEN',
    bestValue: 'BESTER WERT',

    // Ticket Features
    explorerFeature1: 'Zugang zum Haupträtsel',
    explorerFeature2: 'Community-Unterstützung',
    explorerFeature3: 'Digitales Teilnahmezertifikat',
    explorerFeature4: 'Exklusive Gemeinschaft',

    decoderFeature1: 'Alles vom Entdecker',
    decoderFeature2: 'Exklusive Hinweise',
    decoderFeature3: 'Prioritätszugang',
    decoderFeature4: 'Detaillierte Analyse',
    decoderFeature5: 'Exklusive Webinare',

    masterFeature1: 'Alles vom Entschlüsseler',
    masterFeature2: 'Bonus-Rätsel',
    masterFeature3: 'VIP-Zugang',
    masterFeature4: 'Öffentliche Anerkennung',
    masterFeature5: '1-zu-1-Sitzungen',
    masterFeature6: 'Früher Zugang',

    completeKitFeature1: 'Alle Rätsel',
    completeKitFeature2: 'Lebenslanger Zugang',
    completeKitFeature3: 'Premium-Support',
    completeKitFeature4: 'Elite-Netzwerk',
    completeKitFeature5: 'Maximale Gewinnchancen',
    completeKitFeature6: 'Exklusives Mentoring',
    completeKitFeature7: 'Unbegrenzte Ressourcen',

    // Enigma
    enigmaTitle: 'Entschlüsseln Sie das Uralte Rätsel',
    enigmaSubtitle: 'Drei alte Symbole hüten den Schlüssel. Können Sie das Geheimnis lüften?',
    enigmaHint: 'Hinweis: Die Symbole stellen Buchstaben eines englischen Wortes dar...', 
    enigmaPlaceholder: 'Geben Sie das Schlüsselwort ein...', 
    decipherEnigma: 'Rätsel Entschlüsseln',
    wrongAnswer: 'Falsche Antwort! Versuchen Sie es erneut.',
    correctAnswer: 'Glückwunsch! Sie haben das Rätsel entschlüsselt!',
    attempts: 'Versuche',

    // Discount
    congratulations: 'Glückwunsch! Sie haben das Rätsel entschlüsselt!',
    discountActive: 'Erhalten Sie 15% Rabatt auf Ihren ersten Kauf!',
    discountPageSubtitle: 'Jetzt, da Sie Ihren Wert bewiesen haben, nutzen Sie den exklusiven Rabatt und wählen Sie Ihr Ticket!',
    chooseNow: 'Jetzt Wählen',
    limitedTimeOffer: 'Zeitlich Begrenztes Angebot',
    discountValidity: 'Ihr 15%-Rabatt ist nur für diese Sitzung gültig',
    discountTitle: '15% Rabatt auf den Ersten Kauf!',
    discountDesc: 'Lösen Sie Enigma Zero und erhalten Sie sofortigen Rabatt auf jedes Ticket.',

    // Enigma Zero
    enigmaZeroTitle: 'Enigma Null: Das Tor',
    enigmaZeroSubtitle: 'Beweisen Sie Ihren Wert mit diesem kleinen Rätsel.',
    enigmaMarketingTitle: 'Entschlüsseln Sie das Rätsel, Entsperren Sie die Zukunft!',
    enigmaMarketingDesc: 'Ihr Intellekt ist der Schlüssel zu den Geheimnissen des Paradox Protocol.',
    challengeTitle: 'Ihre Herausforderung',
    challengeQuestion: 'Welches Wort ist in diesen drei Symbolen geschrieben?',
    challengeExplanation: 'Betrachten Sie die Symbole und bilden Sie das geheime Wort!',
    solveThis: 'Lösen',
    clickToEnlarge: 'Zum Vergrößern klicken',
    ancientSymbols: 'Vollständiger Symbolführer',
    ancientSymbolsDesc: 'Diese Pergamente enthalten das komplette Alphabet zur Unterstützung.',
    solutionHints: 'Lösungshinweise',
    solutionHintsDesc: 'Hier sind die Buchstaben, die Sie benötigen...', 
    yourAnswer: 'Ihre Antwort',
    needHelp: 'Brauchen Sie Hilfe?',
    scrollForClues: 'Scrollen Sie, um die Hinweise zu sehen',
    parchment1Title: 'Pergament I: A-F',
    parchment1Desc: 'Erste Buchstaben des Alphabets',
    parchment2Title: 'Pergament II: G-L',
    parchment2Desc: 'Fortsetzung des Alphabets',
    parchment3Title: 'Pergament III: M-R',
    parchment3Desc: 'Mittlere Symbole',
    parchment4Title: 'Pergament IV: S-Z',
    parchment4Desc: 'Letzte Symbole',

    // Trust
    trustTitle: 'Vertrauensfaktor: Verdienst, Nicht Glück',
    trustSubtitle: 'Vertrauen basiert auf Transparenz und Logik.',
    trustMetricsTitle: 'Vertrauensmetriken',
    trustPrinciplesTitle: 'Grundprinzipien',
    trustCertificationsTitle: 'Zertifizierungen & Sicherheit',
    satisfiedParticipants: 'Zufriedene Teilnehmer',
    satisfiedParticipantsDesc: 'Brillante Köpfe vertrauten uns',
    prizesDistributed: 'Preise Vergeben',    
    prizesDistributedDesc: 'Faire Belohnungen basierend auf Verdienst',    
    supportAvailable: 'Support Verfügbar',    
    supportAvailableDesc: 'Kontinuierliche Unterstützung für alle Teilnehmer',    
    deterministicStructureTitle: 'Deterministische Struktur',    
    deterministicStructureDesc: 'Geschlossene, deterministische Systeme...',    
    noRandomnessTitle: 'Keine Zufälligkeit',    
    noRandomnessDesc: 'Wir eliminieren Zufallselemente.',    
    cognitiveSkillsTitle: 'Kognitive Fähigkeiten',    
    cognitiveSkillsDesc: 'Kritisches Denken, Logik und Detail.',    
    validationProcessTitle: 'Validierungsprozess',    
    validationProcessDesc: 'Rigoroser interner Prozess.',    
    independentAuditTitle: 'Unabhängige Prüfung',    
    independentAuditDesc: 'Audit durch externe Stellen.',    
    dataSecurityTitle: 'Datensicherheit',    
    dataSecurityDesc: 'Militärische Verschlüsselung.',    
    gdprComplianceTitle: 'DSGVO-Konformität',    
    gdprComplianceDesc: 'Einhaltung der EU-Datenschutzvorschriften.',    

    // About
    aboutTitle: 'Über Paradox Protocol',    
    aboutSubtitle: 'Revolution im Herausfordern der menschlichen Intelligenz',    
    aboutDescription: 'Geboren aus der Überzeugung, dass wahre Intelligenz Anerkennung verdient.',    
    missionTitle: 'Unsere Mission',    
    missionDesc: 'Herausforderungen schaffen, die den Geist testen.',    
    visionTitle: 'Unsere Vision',    
    visionDesc: 'Die weltweit führende Plattform für außergewöhnliche Intellekte sein.',    
    valuesTitle: 'Unsere Werte',    
    meritValue: 'Verdienst',    
    meritValueDesc: 'Erfolg durch Fähigkeit und Einsatz.',    
    transparencyValue: 'Transparenz',    
    transparencyValueDesc: 'Offene und prüfbare Prozesse.',    
    excellenceValue: 'Exzellenz',    
    excellenceValueDesc: 'Streben nach höchstem Standard.',    
    innovationValue: 'Innovation',    
    innovationValueDesc: 'Pioniere in Denkrätseln.',    

    // Checkout
    checkoutTitle: 'Bezahlen',    
    checkoutPromoTitle: '🧩 Sonderpreis',    
    checkoutPersuasiveMessage1: 'Nehmen Sie teil und gewinnen Sie bis zu',    
    checkoutPersuasiveMessage2: '€ 5 000',    
    checkoutPersuasiveMessage3: 'an großartigen Preisen!',    
    mentalChallenge: 'Geistige Herausforderung',    
    realPrizes: 'Echte Preise',    
    loading: 'Laden…',    
    orderSummary: 'Bestellübersicht',    
    originalPrice: 'Ursprünglicher Preis',    
    finalPrice: 'Endpreis',    
    potentialPrize: 'Potenzieller Gewinn: {{amount}}',    
    whatsIncluded: 'Inklusive',    
    chooseYourTicket: 'Ticket wählen',    
    securePaymentMethods: 'Sichere Zahlungsmethoden',    
    visa: 'Visa',    
    mastercard: 'Mastercard',    
    apple_pay: 'Apple Pay',    
    paypal: 'PayPal',    
    processedByStripe: 'Verarbeitet durch Stripe',    
    sslEncryption: 'SSL-Verschlüsselung',    
    whatParticipantsSay: 'Teilnehmermeinungen',    
    participantTestimonial1: '„Unglaubliches Rätsel – die Logik ist beeindruckend!“',    
    stripeRedirectMessage: 'Sie werden zu Stripe weitergeleitet.',    
    joinWinnersMessage: 'Werden Sie Gewinner!',    
    priceKitComplete: '€ 49,90'    
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    const stored = localStorage.getItem('lang');
    if (stored && translations[stored]) {
      setLanguage(stored);
    }
  }, []);

  const t = (key, params) => {
    let text = translations[language]?.[key] ?? key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{{${k}}}`, v);
      });
    }
    return text;
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('lang', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
