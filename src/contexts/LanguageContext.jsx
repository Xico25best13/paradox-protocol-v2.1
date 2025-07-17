// LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  pt: {
    // Navegação
    home: 'Início',
    about: 'Sobre',
    trust: 'Confiança',
    terms: 'Termos',

    // Hero
    heroTitle: 'O Protocolo que Desafia as Mentes Mais Brilhantes',
    heroSubtitle: 'CONSEGUES OUVIR O ECO DO ORÁCULO?',
    heroDescription: 'Uma experiência única para intelectos excepcionais. Bem-vindo ao futuro dos enigmas.',

    // Estatísticas
    totalPrize: 'Prémio Total',
    activeMinds: 'Mentes Ativas',
    satisfactionRate: 'Taxa de Satisfação',

    // Botões
    startJourney: 'Iniciar Jornada',
    joinDiscord: 'Juntar ao Discord',
    followTelegram: 'Seguir no Telegram',

    // Tickets
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

    // Badges
    mostPopular: 'MAIS POPULAR',
    bestValue: 'MELHOR VALOR',

    // Enigma
    enigmaTitle: 'Decifra o Enigma Ancestral',
    enigmaSubtitle: 'Três símbolos antigos guardam a chave. Consegues desvendar o mistério?',
    enigmaHint: 'Dica: Os símbolos representam letras de uma palavra em inglês...', 
    enigmaPlaceholder: 'Introduz a palavra-chave...', 
    decipherEnigma: 'Decifrar Enigma',
    wrongAnswer: 'Resposta incorreta! Tenta novamente.',
    correctAnswer: 'Parabéns! Decifraste o enigma!',
    attempts: 'Tentativas',

    // Discount
    congratulations: 'Parabéns! Decifraste o enigma!',
    discountActive: 'Recebe 15% de desconto na tua primeira compra!',
    discountPageSubtitle: 'Agora que provaste o teu valor, aproveita o desconto exclusivo e escolhe o bilhete perfeito para a tua aventura!',
    chooseNow: 'Escolher Agora',
    limitedTimeOffer: 'Oferta por Tempo Limitado',
    discountValidity: 'O teu desconto de 15% é válido apenas para esta sessão. Não percas!',
    discountTitle: '15% de Desconto na Primeira Compra!',
    discountDesc: 'Resolve o Enigma Zero e obtém desconto imediato em qualquer bilhete. Demonstra o teu valor!',

    // Enigma Zero
    enigmaZeroTitle: 'Enigma Zero: A Porta de Entrada',
    enigmaZeroSubtitle: 'Demonstra o teu valor resolvendo este pequeno enigma...', 
    enigmaMarketingTitle: 'Desvenda o Enigma, Desbloqueia o Futuro!',
    enigmaMarketingDesc: 'A tua inteligência é a chave para desvendar os segredos...', 
    challengeTitle: 'O Teu Desafio',
    challengeQuestion: 'Que palavra está escrita nestes três símbolos?',
    challengeExplanation: 'Observa bem os símbolos e forma a palavra secreta!',
    solveThis: 'Resolve Isto',
    clickToEnlarge: 'Clica para ver em detalhe',
    ancientSymbols: 'Guia Completo dos Símbolos',
    ancientSymbolsDesc: 'Estes pergaminhos contêm o alfabeto completo...', 
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

    // Trust
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
    cognitiveSkillsDesc: 'Pensamento crítico, lógica e detalhe.',
    validationProcessTitle: 'Processo de Validação',
    validationProcessDesc: 'Rigoroso processo interno de validação.',
    independentAuditTitle: 'Auditoria Independente',
    independentAuditDesc: 'Auditado por entidades externas.',
    dataSecurityTitle: 'Segurança de Dados',
    dataSecurityDesc: 'Encriptação de nível militar.',
    gdprComplianceTitle: 'Conformidade RGPD',
    gdprComplianceDesc: 'Cumprimos regulamentos da UE.',

    // About
    aboutTitle: 'Sobre o Paradox Protocol',
    aboutSubtitle: 'Revolução no desafio à inteligência humana',
    aboutDescription: 'Nasce da convicção de que a inteligência deve ser reconhecida.',
    missionTitle: 'A Nossa Missão',
    missionDesc: 'Criar desafios que testem os limites da mente humana.',
    visionTitle: 'A Nossa Visão',
    visionDesc: 'Ser a plataforma de referência mundial.',
    valuesTitle: 'Os Nossos Valores',
    meritValue: 'Mérito',
    meritValueDesc: 'Sucesso por capacidade e esforço.',
    transparencyValue: 'Transparência',
    transparencyValueDesc: 'Processos abertos e auditáveis.',
    excellenceValue: 'Excelência',
    excellenceValueDesc: 'Buscamos sempre o mais alto padrão.',
    innovationValue: 'Inovação',
    innovationValueDesc: 'Pioneiros em desafios à mente.',

    // Checkout
    checkoutTitle: 'Finalizar Compra',
    checkoutPromoTitle: '🧩 Prémio Especial',
    checkoutPersuasiveMessage1: 'Participe neste desafio e habilite-se a ganhar até',
    checkoutPersuasiveMessage2: '5 000 €',
    checkoutPersuasiveMessage3: 'de prémios incríveis!',
    mentalChallenge: 'Desafio Mental',
    realPrizes: 'Prémios Reais',
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
    participantTestimonial1: '“Incrível desafio – a lógica é brutal!”',
    stripeRedirectMessage: 'Será redirecionado para Stripe para concluir o pagamento.',
    unriddleEnigmaWin5000: 'Decifre o Enigma e Ganhe 5 000 €',
    joinWinnersMessage: 'Junte-se aos vencedores!',
    backToHome: 'Voltar ao Início',
    priceKitComplete: '€ 49,90'
  },

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

    // Badges
    mostPopular: 'MOST POPULAR',
    bestValue: 'BEST VALUE',

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
    discountValidity: 'Your 15% discount is valid only for this session. Don’t miss out!',
    discountTitle: '15% Discount on First Purchase!',
    discountDesc: 'Solve Enigma Zero and get immediate discount on any ticket. Prove your worth!',
    
    // Enigma Zero
    enigmaZeroTitle: 'Enigma Zero: The Gateway',
    enigmaZeroSubtitle: 'Prove your worth by solving this small enigma...', 
    enigmaMarketingTitle: 'Unravel the Enigma, Unlock the Future!',
    enigmaMarketingDesc: 'Your intellect is the key to unraveling the secrets...', 
    challengeTitle: 'Your Challenge',
    challengeQuestion: 'What word is written in these three symbols?',
    challengeExplanation: 'Look at the symbols and form the secret word!',
    solveThis: 'Solve This',
    clickToEnlarge: 'Click to view in detail',
    ancientSymbols: 'Complete Symbol Guide',
    ancientSymbolsDesc: 'These parchments contain the full symbol alphabet...', 
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
    excellenceValueDesc: 'Always the highest standard.',
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
    unriddleEnigmaWin5000: 'Unriddle & Win € 5,000',
    joinWinnersMessage: 'Join the Winners!',
    backToHome: 'Back to Home',
    priceKitComplete: '€ 49.90'
  },

  es: {
    // ... similar translations in Spanish
  },

  fr: {
    // ... similar translations in French
  },

  de: {
    // ... similar translations in German
  }
};
