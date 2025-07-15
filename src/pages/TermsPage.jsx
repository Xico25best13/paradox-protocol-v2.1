import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users,
  Award,
  Lock,
  AlertTriangle,
  Mail,
  Calendar,
  BrainCircuit,
  CreditCard,
  RefreshCw,
  Gavel,
  Trophy
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';

const TermsPage = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      heroTitle: "Termos e Condições do Paradox Protocol",
      heroSubtitle: "Bem-vindo ao Paradox Protocol. Ao aceder e utilizar o nosso website e participar nos nossos desafios, concorda em cumprir e estar vinculado aos seguintes termos e condições. Por favor, leia-os atentamente.",
      
      natureTitle: "1. Natureza dos Desafios: Mérito e Habilidade",
      natureText: "A Paradox Protocol oferece desafios intelectuais, enigmas e experimentos que exigem raciocínio lógico, criatividade e persistência para serem resolvidos. É fundamental que o utilizador compreenda que a resolução dos desafios e a atribuição de prémios são baseadas exclusivamente no mérito e na habilidade dos participantes, e não em sorte, sorteios ou qualquer forma de jogo de azar.",
      
      eligibilityTitle: "2. Participação e Elegibilidade",
      eligibilityText: "Para participar nos desafios, o utilizador deverá registar-se na plataforma e adquirir os bilhetes de entrada para as temporadas ou desafios específicos. A participação está aberta a indivíduos que cumpram os requisitos de idade mínima legal na sua jurisdição para participar em atividades que envolvam prémios monetários.",
      
      paymentsTitle: "3. Pagamentos e Gateways de Pagamento",
      paymentsText: "Todos os pagamentos para aquisição de bilhetes de entrada são processados através de gateways de pagamento seguros e fiáveis. A Paradox Protocol não armazena diretamente informações financeiras sensíveis dos utilizadores.",
      
      refundTitle: "4. Política de Reembolso",
      refundText: "Bilhetes de entrada adquiridos não são elegíveis para reembolso, exceto em casos de falha técnica comprovada da nossa plataforma que impeça a participação do utilizador no desafio para o qual o bilhete foi adquirido. No caso de cancelamento de uma temporada/desafio antes do seu início, todos os bilhetes serão integralmente reembolsados.",
      
      intellectualPropertyTitle: "5. Propriedade Intelectual",
      intellectualPropertyText: "Todo o conteúdo presente na plataforma Paradox Protocol é propriedade da Paradox Protocol ou dos seus fornecedores de conteúdo e é protegido pelas leis de direitos de autor e propriedade intelectual. É estritamente proibido partilhar, divulgar, reproduzir ou distribuir os enigmas ou as suas soluções antes da conclusão oficial do desafio.",
      
      conductTitle: "6. Conduta do Utilizador",
      conductText: "O utilizador concorda em utilizar a plataforma de forma ética e legal. É proibido o uso de bots, scripts, automação ou qualquer método desleal para obter vantagem nos desafios. Qualquer tentativa de fraude resultará na desqualificação imediata e permanente.",
      
      limitationTitle: "7. Limitação de Responsabilidade",
      limitationText: "A Paradox Protocol não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar a plataforma, incluindo perda de lucros, dados ou outras perdas intangíveis.",
      
      changesTitle: "8. Alterações aos Termos e Condições",
      changesText: "A Paradox Protocol reserva-se o direito de modificar estes Termos e Condições a qualquer momento. As alterações entrarão em vigor imediatamente após a sua publicação na plataforma.",
      
      lawTitle: "9. Lei Aplicável e Jurisdição",
      lawText: "Estes Termos e Condições serão regidos e interpretados de acordo com as leis de Portugal. Qualquer disputa será submetida à jurisdição exclusiva dos tribunais de Lisboa.",
      
      prizeTitle: "10. Condições de Atribuição do Prémio",
      prizeText: "O valor total do prémio monetário de uma temporada ou desafio poderá estar condicionado à venda de um número mínimo de bilhetes. Caso esse mínimo não seja atingido, a Paradox Protocol reserva-se o direito de ajustar o valor do prémio proporcionalmente ou cancelar o desafio.",
      
      contactTitle: "Contacto",
      contactText: "Para questões sobre estes termos ou qualquer aspeto do Paradox Protocol, contacte-nos:",
      
      lastUpdated: "Última atualização: 20 de junho de 2025"
    },
    
    en: {
      heroTitle: "Paradox Protocol Terms and Conditions",
      heroSubtitle: "Welcome to Paradox Protocol. By accessing and using our website and participating in our challenges, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.",
      
      natureTitle: "1. Nature of Challenges: Merit and Skill",
      natureText: "Paradox Protocol offers intellectual challenges, puzzles, and experiments that require logical reasoning, creativity, and persistence to solve. It is essential that the user understands that challenge resolution and prize allocation are based solely on participants' merit and skill, not on luck, draws, or any form of gambling.",
      
      eligibilityTitle: "2. Participation and Eligibility",
      eligibilityText: "To participate in challenges, users must register on the platform and purchase entry tickets for specific seasons or challenges. Participation is open to individuals who meet the legal minimum age requirements in their jurisdiction to participate in activities involving monetary prizes.",
      
      paymentsTitle: "3. Payments and Payment Gateways",
      paymentsText: "All payments for ticket purchases are processed through secure and reliable payment gateways. Paradox Protocol does not directly store sensitive financial information of users.",
      
      refundTitle: "4. Refund Policy",
      refundText: "Purchased entry tickets are not eligible for refund, except in cases of proven technical failure of our platform that prevents user participation. If a season/challenge is canceled before its start, all tickets will be fully refunded.",
      
      intellectualPropertyTitle: "5. Intellectual Property",
      intellectualPropertyText: "All content on the Paradox Protocol platform is property of Paradox Protocol or its content suppliers and is protected by copyright and intellectual property laws. It is strictly prohibited to share, disclose, reproduce, or distribute puzzles or their solutions before the official completion of the challenge.",
      
      conductTitle: "6. User Conduct",
      conductText: "The user agrees to use the platform ethically and legally. The use of bots, scripts, automation, or any unfair method to gain advantage in challenges is prohibited. Any fraud attempt will result in immediate and permanent disqualification.",
      
      limitationTitle: "7. Limitation of Liability",
      limitationText: "Paradox Protocol shall not be liable for any direct, indirect, incidental, special or consequential damages resulting from the use or inability to use the platform, including loss of profits, data or other intangible losses.",
      
      changesTitle: "8. Changes to Terms and Conditions",
      changesText: "Paradox Protocol reserves the right to modify these Terms and Conditions at any time. Changes will take effect immediately upon publication on the platform.",
      
      lawTitle: "9. Governing Law and Jurisdiction",
      lawText: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Portugal. Any dispute shall be submitted to the exclusive jurisdiction of the courts of Lisbon.",
      
      prizeTitle: "10. Prize Award Conditions",
      prizeText: "The total monetary prize value for a season or challenge may be subject to selling a minimum number of tickets. If this minimum is not met, Paradox Protocol reserves the right to adjust the prize value proportionally or cancel the challenge.",
      
      contactTitle: "Contact",
      contactText: "For questions about these terms or any aspect of Paradox Protocol, contact us:",
      
      lastUpdated: "Last updated: June 20, 2025"
    },
    
    es: {
      heroTitle: "Términos y Condiciones del Paradox Protocol",
      heroSubtitle: "Bienvenido al Paradox Protocol. Al acceder y utilizar nuestro sitio web y participar en nuestros desafíos, acepta cumplir y estar sujeto a los siguientes términos y condiciones. Por favor, léelos cuidadosamente.",
      
      natureTitle: "1. Naturaleza de los Desafíos: Mérito y Habilidad",
      natureText: "Paradox Protocol ofrece desafíos intelectuales, enigmas y experimentos que requieren razonamiento lógico, creatividad y persistencia para resolverse. Es fundamental que el usuario comprenda que la resolución de desafíos y la asignación de premios se basan exclusivamente en el mérito y habilidad de los participantes, no en suerte, sorteos o cualquier forma de juego de azar.",
      
      eligibilityTitle: "2. Participación y Elegibilidad",
      eligibilityText: "Para participar en los desafíos, el usuario debe registrarse en la plataforma y adquirir entradas para temporadas o desafíos específicos. La participación está abierta a personas que cumplan con los requisitos de edad mínima legal en su jurisdicción para participar en actividades que involucren premios monetarios.",
      
      paymentsTitle: "3. Pagos y Pasarelas de Pago",
      paymentsText: "Todos los pagos para la compra de entradas se procesan a través de pasarelas de pago seguras y confiables. Paradox Protocol no almacena directamente información financiera sensible de los usuarios.",
      
      refundTitle: "4. Política de Reembolso",
      refundText: "Las entradas compradas no son elegibles para reembolso, excepto en casos de fallo técnico comprobado de nuestra plataforma que impida la participación del usuario. Si se cancela una temporada/desafío antes de su inicio, todas las entradas serán reembolsadas íntegramente.",
      
      intellectualPropertyTitle: "5. Propiedad Intelectual",
      intellectualPropertyText: "Todo el contenido en la plataforma Paradox Protocol es propiedad de Paradox Protocol o sus proveedores de contenido y está protegido por leyes de derechos de autor y propiedad intelectual. Está estrictamente prohibido compartir, divulgar, reproducir o distribuir enigmas o sus soluciones antes de la finalización oficial del desafío.",
      
      conductTitle: "6. Conducta del Usuario",
      conductText: "El usuario acepta utilizar la plataforma de manera ética y legal. Se prohíbe el uso de bots, scripts, automatización o cualquier método injusto para obtener ventaja en los desafíos. Cualquier intento de fraude resultará en descalificación inmediata y permanente.",
      
      limitationTitle: "7. Limitación de Responsabilidad",
      limitationText: "Paradox Protocol no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes resultantes del uso o incapacidad de usar la plataforma, incluyendo pérdida de ganancias, datos u otras pérdidas intangibles.",
      
      changesTitle: "8. Cambios en los Términos y Condiciones",
      changesText: "Paradox Protocol se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en la plataforma.",
      
      lawTitle: "9. Ley Aplicable y Jurisdicción",
      lawText: "Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de Portugal. Cualquier disputa se someterá a la jurisdicción exclusiva de los tribunales de Lisboa.",
      
      prizeTitle: "10. Condiciones de Adjudicación del Premio",
      prizeText: "El valor monetario total del premio para una temporada o desafío puede estar sujeto a la venta de un número mínimo de entradas. Si no se alcanza este mínimo, Paradox Protocol se reserva el derecho de ajustar el valor del premio proporcionalmente o cancelar el desafío.",
      
      contactTitle: "Contacto",
      contactText: "Para preguntas sobre estos términos o cualquier aspecto de Paradox Protocol, contáctenos:",
      
      lastUpdated: "Última actualización: 20 de junio de 2025"
    },
    
    fr: {
      heroTitle: "Conditions Générales du Paradox Protocol",
      heroSubtitle: "Bienvenue au Paradox Protocol. En accédant et utilisant notre site web et en participant à nos défis, vous acceptez de vous conformer et d'être lié par les conditions générales suivantes. Veuillez les lire attentivement.",
      
      natureTitle: "1. Nature des Défis : Mérite et Compétence",
      natureText: "Paradox Protocol propose des défis intellectuels, des énigmes et des expériences qui nécessitent un raisonnement logique, de la créativité et de la persévérance pour être résolus. Il est essentiel que l'utilisateur comprenne que la résolution des défis et l'attribution des prix sont basées exclusivement sur le mérite et la compétence des participants, et non sur la chance, des tirages ou toute forme de jeu de hasard.",
      
      eligibilityTitle: "2. Participation et Éligibilité",
      eligibilityText: "Pour participer aux défis, l'utilisateur doit s'inscrire sur la plateforme et acheter des billets d'entrée pour des saisons ou défis spécifiques. La participation est ouverte aux personnes remplissant les conditions d'âge légal minimal dans leur juridiction pour participer à des activités impliquant des prix monétaires.",
      
      paymentsTitle: "3. Paiements et Passerelles de Paiement",
      paymentsText: "Tous les paiements pour l'achat de billets sont traités via des passerelles de paiement sécurisées et fiables. Paradox Protocol ne stocke pas directement les informations financières sensibles des utilisateurs.",
      
      refundTitle: "4. Politique de Remboursement",
      refundText: "Les billets d'entrée achetés ne sont pas remboursables, sauf en cas de défaillance technique avérée de notre plateforme empêchant la participation de l'utilisateur. Si une saison/défi est annulée avant son début, tous les billets seront intégralement remboursés.",
      
      intellectualPropertyTitle: "5. Propriété Intellectuelle",
      intellectualPropertyText: "Tout le contenu de la plateforme Paradox Protocol est la propriété de Paradox Protocol ou de ses fournisseurs de contenu et est protégé par les lois sur le droit d'auteur et la propriété intellectuelle. Il est strictement interdit de partager, divulguer, reproduire ou distribuer des énigmes ou leurs solutions avant l'achèvement officiel du défi.",
      
      conductTitle: "6. Conduite de l'Utilisateur",
      conductText: "L'utilisateur accepte d'utiliser la plateforme de manière éthique et légale. L'utilisation de bots, de scripts, d'automatisation ou de toute méthode déloyale pour obtenir un avantage dans les défis est interdite. Toute tentative de fraude entraînera une disqualification immédiate et permanente.",
      
      limitationTitle: "7. Limitation de Responsabilité",
      limitationText: "Paradox Protocol ne sera pas responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser la plateforme, y compris la perte de profits, de données ou d'autres pertes intangibles.",
      
      changesTitle: "8. Modifications des Conditions Générales",
      changesText: "Paradox Protocol se réserve le droit de modifier ces Conditions Générales à tout moment. Les modifications entreront en vigueur immédiatement après leur publication sur la plateforme.",
      
      lawTitle: "9. Droit Applicable et Juridiction",
      lawText: "Ces Conditions Générales seront régies et interprétées conformément aux lois du Portugal. Tout litige sera soumis à la juridiction exclusive des tribunaux de Lisbonne.",
      
      prizeTitle: "10. Conditions d'Attribution du Prix",
      prizeText: "La valeur monétaire totale du prix pour une saison ou un défi peut être soumise à la vente d'un nombre minimum de billets. Si ce minimum n'est pas atteint, Paradox Protocol se réserve le droit d'ajuster la valeur du prix proportionnellement ou d'annuler le défi.",
      
      contactTitle: "Contact",
      contactText: "Pour des questions sur ces conditions ou tout aspect du Paradox Protocol, contactez-nous :",
      
      lastUpdated: "Dernière mise à jour : 20 juin 2025"
    },
    
    de: {
      heroTitle: "Allgemeine Geschäftsbedingungen des Paradox Protocol",
      heroSubtitle: "Willkommen beim Paradox Protocol. Durch den Zugriff auf und die Nutzung unserer Website und die Teilnahme an unseren Herausforderungen stimmen Sie zu, die folgenden Allgemeinen Geschäftsbedingungen einzuhalten und an sie gebunden zu sein. Bitte lesen Sie sie sorgfältig.",
      
      natureTitle: "1. Art der Herausforderungen: Verdienst und Geschick",
      natureText: "Paradox Protocol bietet intellektuelle Herausforderungen, Rätsel und Experimente, die logisches Denken, Kreativität und Ausdauer zur Lösung erfordern. Es ist wichtig, dass der Benutzer versteht, dass die Lösung von Herausforderungen und die Vergabe von Preisen ausschließlich auf Verdienst und Können der Teilnehmer basieren und nicht auf Glück, Verlosungen oder irgendeiner Form von Glücksspiel.",
      
      eligibilityTitle: "2. Teilnahme und Berechtigung",
      eligibilityText: "Um an Herausforderungen teilzunehmen, muss sich der Benutzer auf der Plattform registrieren und Eintrittskarten für bestimmte Staffeln oder Herausforderungen erwerben. Die Teilnahme steht Personen offen, die in ihrer Gerichtsbarkeit das gesetzliche Mindestalter für die Teilnahme an Aktivitäten mit Geldpreisen erfüllen.",
      
      paymentsTitle: "3. Zahlungen und Zahlungsgateways",
      paymentsText: "Alle Zahlungen für den Ticketkauf werden über sichere und zuverlässige Zahlungsgateways abgewickelt. Paradox Protocol speichert keine sensiblen Finanzdaten der Benutzer direkt.",
      
      refundTitle: "4. Rückgaberecht",
      refundText: "Gekaufte Eintrittskarten sind nicht erstattungsfähig, es sei denn, es liegt ein nachgewiesener technischer Fehler unserer Plattform vor, der die Teilnahme des Benutzers verhindert. Wenn eine Staffel/Herausforderung vor ihrem Beginn abgesagt wird, werden alle Tickets vollständig erstattet.",
      
      intellectualPropertyTitle: "5. Geistiges Eigentum",
      intellectualPropertyText: "Alle Inhalte auf der Paradox Protocol Plattform sind Eigentum von Paradox Protocol oder dessen Inhaltslieferanten und durch Urheberrechts- und geistige Eigentumsgesetze geschützt. Es ist strengstens verboten, Rätsel oder deren Lösungen vor dem offiziellen Abschluss der Herausforderung zu teilen, offenzulegen, zu reproduzieren oder zu verbreiten.",
      
      conductTitle: "6. Nutzerverhalten",
      conductText: "Der Benutzer erklärt sich damit einverstanden, die Plattform ethisch und legal zu nutzen. Die Verwendung von Bots, Skripten, Automatisierung oder unfairen Methoden, um einen Vorteil in Herausforderungen zu erlangen, est verboten. Jeder Betrugsversuch führt zur sofortigen und dauerhaften Disqualifikation.",
      
      limitationTitle: "7. Haftungsbeschränkung",
      limitationText: "Paradox Protocol haftet nicht für direkte, indirekte, zufällige, besondere, Folge- oder exemplarische Schäden, die sich aus der Nutzung oder Unfähigkeit zur Nutzung der Plattform ergeben, einschließlich Verlust von Gewinnen, Daten oder anderen immateriellen Verlusten.",
      
      changesTitle: "8. Änderungen der Allgemeinen Geschäftsbedingungen",
      changesText: "Paradox Protocol behält sich das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit zu ändern. Änderungen werden sofort nach ihrer Veröffentlichung auf der Plattform wirksam.",
      
      lawTitle: "9. Anwendbares Recht und Gerichtsstand",
      lawText: "Diese Allgemeinen Geschäftsbedingungen unterliegen den Gesetzen Portugals und werden nach diesen ausgelegt. Alle Streitigkeiten unterliegen der ausschließlichen Zuständigkeit der Gerichte von Lissabon.",
      
      prizeTitle: "10. Bedingungen für die Preisvergabe",
      prizeText: "Der Gesamtwert des Geldpreises für eine Staffel oder Herausforderung kann vom Verkauf einer Mindestanzahl von Tickets abhängig sein. Wenn dieses Minimum nicht erreicht wird, behält sich Paradox Protocol das Recht vor, den Preiswert proportional anzupassen oder die Herausforderung abzusagen.",
      
      contactTitle: "Kontakt",
      contactText: "Bei Fragen zu diesen Bedingungen oder jedem Aspekt von Paradox Protocol kontaktieren Sie uns:",
      
      lastUpdated: "Zuletzt aktualisiert: 20. Juni 2025"
    }
  };

  const currentContent = content[language] || content.pt;

  const sections = [
    {
      id: "nature",
      title: currentContent.natureTitle,
      content: currentContent.natureText,
      icon: BrainCircuit
    },
    {
      id: "eligibility",
      title: currentContent.eligibilityTitle,
      content: currentContent.eligibilityText,
      icon: Users
    },
    {
      id: "payments",
      title: currentContent.paymentsTitle,
      content: currentContent.paymentsText,
      icon: CreditCard
    },
    {
      id: "refund",
      title: currentContent.refundTitle,
      content: currentContent.refundText,
      icon: RefreshCw
    },
    {
      id: "intellectual_property",
      title: currentContent.intellectualPropertyTitle,
      content: currentContent.intellectualPropertyText,
      icon: FileText
    },
    {
      id: "conduct",
      title: currentContent.conductTitle,
      content: currentContent.conductText,
      icon: Shield
    },
    {
      id: "limitation",
      title: currentContent.limitationTitle,
      content: currentContent.limitationText,
      icon: AlertTriangle
    },
    {
      id: "changes",
      title: currentContent.changesTitle,
      content: currentContent.changesText,
      icon: Calendar
    },
    {
      id: "law",
      title: currentContent.lawTitle,
      content: currentContent.lawText,
      icon: Gavel
    },
    {
      id: "prize",
      title: currentContent.prizeTitle,
      content: currentContent.prizeText,
      icon: Trophy
    }
  ];

  return (
    <div className="pt-16 min-h-screen starfield">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FileText className="w-20 h-20 mx-auto text-blue-400 mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              {currentContent.heroTitle}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {currentContent.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="premium-card p-8">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <section.icon className="w-8 h-8 text-purple-400 flex-shrink-0" />
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="premium-card p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <Mail className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">{currentContent.contactTitle}</h2>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  {currentContent.contactText}
                </p>
                
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>Email: suporte@paradoxprotocol.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span>Discord: https://discord.gg/GY3dcsPPNV</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span>Telegram: https://t.me/paradoxprotocol</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <span>{currentContent.lastUpdated}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;