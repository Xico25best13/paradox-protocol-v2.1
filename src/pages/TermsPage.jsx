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
      heroSubtitle: "Bem-vindo à Paradox Protocol! Ao aceder e utilizar a nossa plataforma, o utilizador concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Por favor, leia-os atentamente. Se não concordar com qualquer parte destes termos, não deverá utilizar a nossa plataforma.",
      
      natureTitle: "1. Natureza dos Desafios: Mérito e Habilidade",
      natureText: "A Paradox Protocol oferece desafios intelectuais, enigmas e experimentos que exigem raciocínio lógico, criatividade e persistência para serem resolvidos. É fundamental que o utilizador compreenda que a resolução dos desafios e a atribuição de prémios são baseadas exclusivamente no mérito e na habilidade dos participantes, e não em sorte, sorteios ou qualquer forma de jogo de azar. O sucesso na nossa plataforma é uma consequência direta da capacidade intelectual e do esforço do participante.",
      
      eligibilityTitle: "2. Participação e Elegibilidade",
      eligibilityText: "2.1. Para participar nos desafios, o utilizador deverá registar-se na plataforma e adquirir os bilhetes de entrada para as temporadas ou desafios específicos.\n\n2.2. A participação está aberta a indivíduos que cumpram os requisitos de idade mínima legal na sua jurisdição para participar em atividades que envolvam prémios monetários. Ao aceitar estes termos, o utilizador declara que cumpre todos os requisitos de elegibilidade.\n\n2.3. A Paradox Protocol reserva-se o direito de verificar a elegibilidade dos participantes e de desqualificar qualquer participante que não cumpra os requisitos ou que viole estes Termos e Condições.",
      
      paymentsTitle: "3. Pagamentos e Gateways de Pagamento",
      paymentsText: "3.1. Todos os pagamentos para aquisição de bilhetes de entrada são processados através de gateways de pagamento seguros e fiáveis. A Paradox Protocol não armazena diretamente informações financeiras sensíveis dos utilizadores.\n\n3.2. Ao efetuar um pagamento, o utilizador concorda com os termos e condições do gateway de pagamento selecionado. A Paradox Protocol não se responsabiliza por quaisquer falhas ou problemas técnicos que possam ocorrer nos sistemas dos gateways de pagamento, embora envidemos todos os esforços para selecionar parceiros de confiança.\n\n3.3. Os preços dos bilhetes e os valores dos prémios são apresentados na moeda local aplicável e podem estar sujeitos a impostos e taxas, conforme a legislação em vigor.",
      
      refundTitle: "4. Política de Reembolso",
      refundText: "4.1. Bilhetes de Entrada: Uma vez adquirido um bilhete de entrada para uma temporada ou desafio, não são elegíveis para reembolso, exceto em casos de falha técnica comprovada da nossa plataforma que impeça a participação do utilizador no desafio para o qual o bilhete foi adquirido. Nestes casos, o reembolso será processado no prazo de 7 dias úteis para a forma de pagamento original.\n\n4.2. Prémios: Os prémios monetários são atribuídos ao participante que cumprir os critérios de resolução e submissão do relatório de forma mais rápida e precisa. Uma vez atribuído e pago, o prémio não é reembolsável.\n\n4.3. Cancelamento de Temporada/Desafio: No caso improvável de uma temporada ou desafio ser cancelado pela Paradox Protocol antes do seu início, todos os bilhetes de entrada adquiridos para essa temporada/desafio serão integralmente reembolsados.",
      
      intellectualPropertyTitle: "5. Propriedade Intelectual",
      intellectualPropertyText: "5.1. Conteúdo da Plataforma: Todo o conteúdo presente na plataforma Paradox Protocol, incluindo, mas não se limitando a, enigmas, textos, gráficos, logótipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade da Paradox Protocol ou dos seus fornecedores de conteúdo e é protegido pelas leis de direitos de autor e propriedade intelectual nacionais e internacionais.\n\n5.2. Submissões dos Participantes: Ao submeter relatórios de resolução, soluções ou qualquer outro conteúdo para a plataforma, o participante concede à Paradox Protocol uma licença não exclusiva, mundial, isenta de royalties, perpétua e irrevogável para usar, reproduzir, modificar, adaptar, publicar, traduzir, criar trabalhos derivados, distribuir e exibir tal conteúdo em qualquer meio. O participante declara e garante que possui todos os direitos necessários para conceder esta licença.\n\n5.3. Confidencialidade dos Enigmas: Os enigmas e desafios apresentados na plataforma são confidenciais e propriedade intelectual da Paradox Protocol. É estritamente proibido partilhar, divulgar, reproduzir ou distribuir os enigmas ou as suas soluções antes da conclusão oficial do desafio e da divulgação pública da solução pela Paradox Protocol. A violação desta cláusula poderá resultar na desqualificação do participante e em ações legais.",
      
      conductTitle: "6. Conduta do Utilizador",
      conductText: "6.1. O utilizador concorda em utilizar a plataforma de forma ética e legal, abstendo-se de qualquer conduta que possa prejudicar a Paradox Protocol, outros utilizadores ou terceiros.\n\n6.2. É proibido o uso de bots, scripts, automação ou qualquer método desleal para obter vantagem nos desafios. Qualquer tentativa de fraude resultará na desqualificação imediata e permanente do utilizador da plataforma.",
      
      limitationTitle: "7. Limitação de Responsabilidade",
      limitationText: "A Paradox Protocol não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar a plataforma, incluindo, mas não se limitando a, perda de lucros, dados ou outras perdas intangíveis.",
      
      changesTitle: "8. Alterações aos Termos e Condições",
      changesText: "A Paradox Protocol reserva-se o direito de modificar estes Termos e Condições a qualquer momento. As alterações entrarão em vigor imediatamente após a sua publicação na plataforma. É responsabilidade do utilizador rever periodicamente estes termos para estar ciente de quaisquer modificações.",
      
      lawTitle: "9. Lei Aplicável e Jurisdição",
      lawText: "Estes Termos e Condições serão regidos e interpretados de acordo com as leis de Portugal. Qualquer disputa decorrente ou relacionada com estes termos será submetida à jurisdição exclusiva dos tribunais de Lisboa.",
      
      prizeTitle: "10. Condições de Atribuição do Prémio",
      prizeText: "10.1. O valor total do prémio monetário de uma temporada ou desafio poderá estar condicionado à venda de um número mínimo ou percentagem de bilhetes de entrada. Caso o número de bilhetes vendidos não atinja o mínimo estipulado, a Paradox Protocol reserva-se o direito de ajustar o valor do prémio proporcionalmente ou de cancelar a temporada/desafio, conforme detalhado na descrição de cada evento.\n\n10.2. Esta condição será claramente comunicada na página de descrição de cada temporada ou desafio antes da aquisição do bilhete. Ao adquirir um bilhete, o participante aceita esta condição.\n\n10.3. É importante reiterar que, mesmo com esta condição, a atribuição do prémio continua a ser baseada exclusivamente no mérito e na perícia do participante que resolver o enigma primeiro e apresentar o relatório de resolução adequado, e não em qualquer elemento de sorte ou jogo de azar. Esta cláusula visa apenas a sustentabilidade do projeto e a viabilidade da atribuição de prémios de elevado valor.",
      
      concludingText: "Ao utilizar a plataforma Paradox Protocol, o utilizador reconhece que leu, compreendeu e concordou com estes Termos e Condições na sua totalidade.",
      
      contactTitle: "Contacto",
      contactText: "Para questões sobre estes termos ou qualquer aspeto do Paradox Protocol, contacte-nos:",
      
      lastUpdated: "Última atualização: 20 de junho de 2025"
    },
    
    en: {
      heroTitle: "Paradox Protocol Terms and Conditions",
      heroSubtitle: "Welcome to Paradox Protocol! By accessing and using our platform, you agree to comply with and be bound by the following terms and conditions of use. Please read them carefully. If you do not agree with any part of these terms, you should not use our platform.",
      
      natureTitle: "1. Nature of Challenges: Merit and Skill",
      natureText: "Paradox Protocol offers intellectual challenges, puzzles, and experiments that require logical reasoning, creativity, and persistence to solve. It is essential that the user understands that challenge resolution and prize allocation are based solely on participants' merit and skill, not on luck, draws, or any form of gambling. Success on our platform is a direct consequence of the participant's intellectual ability and effort.",
      
      eligibilityTitle: "2. Participation and Eligibility",
      eligibilityText: "2.1. To participate in challenges, users must register on the platform and purchase entry tickets for specific seasons or challenges.\n\n2.2. Participation is open to individuals who meet the legal minimum age requirements in their jurisdiction to participate in activities involving monetary prizes. By accepting these terms, the user declares that they meet all eligibility requirements.\n\n2.3. Paradox Protocol reserves the right to verify participants' eligibility and disqualify any participant who does not meet the requirements or violates these Terms and Conditions.",
      
      paymentsTitle: "3. Payments and Payment Gateways",
      paymentsText: "3.1. All payments for ticket purchases are processed through secure and reliable payment gateways. Paradox Protocol does not directly store users' sensitive financial information.\n\n3.2. When making a payment, the user agrees to the terms and conditions of the selected payment gateway. Paradox Protocol is not responsible for any failures or technical issues that may occur in payment gateway systems, although we make every effort to select trusted partners.\n\n3.3. Ticket prices and prize values are displayed in the applicable local currency and may be subject to taxes and fees according to applicable legislation.",
      
      refundTitle: "4. Refund Policy",
      refundText: "4.1. Entry Tickets: Once purchased, entry tickets for a season or challenge are not eligible for refund, except in cases of proven technical failure of our platform that prevents user participation. In such cases, refunds will be processed within 7 business days to the original payment method.\n\n4.2. Prizes: Monetary prizes are awarded to the participant who meets the resolution and report submission criteria most quickly and accurately. Once awarded and paid, the prize is non-refundable.\n\n4.3. Season/Challenge Cancellation: In the unlikely event that a season or challenge is canceled by Paradox Protocol before its start, all entry tickets purchased for that season/challenge will be fully refunded.",
      
      intellectualPropertyTitle: "5. Intellectual Property",
      intellectualPropertyText: "5.1. Platform Content: All content on the Paradox Protocol platform, including but not limited to puzzles, text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of Paradox Protocol or its content suppliers and is protected by national and international copyright and intellectual property laws.\n\n5.2. Participant Submissions: By submitting solution reports, solutions, or any other content to the platform, the participant grants Paradox Protocol a non-exclusive, worldwide, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, adapt, publish, translate, create derivative works, distribute, and display such content in any medium. The participant declares and warrants that they have all necessary rights to grant this license.\n\n5.3. Puzzle Confidentiality: The puzzles and challenges presented on the platform are confidential and intellectual property of Paradox Protocol. It is strictly prohibited to share, disclose, reproduce, or distribute puzzles or their solutions before the official completion of the challenge and public disclosure of the solution by Paradox Protocol. Violation of this clause may result in participant disqualification and legal action.",
      
      conductTitle: "6. User Conduct",
      conductText: "6.1. The user agrees to use the platform ethically and legally, refraining from any conduct that may harm Paradox Protocol, other users, or third parties.\n\n6.2. The use of bots, scripts, automation, or any unfair method to gain advantage in challenges is prohibited. Any fraud attempt will result in immediate and permanent disqualification of the user from the platform.",
      
      limitationTitle: "7. Limitation of Liability",
      limitationText: "Paradox Protocol shall not be liable for any direct, indirect, incidental, special or consequential damages resulting from the use or inability to use the platform, including but not limited to loss of profits, data or other intangible losses.",
      
      changesTitle: "8. Changes to Terms and Conditions",
      changesText: "Paradox Protocol reserves the right to modify these Terms and Conditions at any time. Changes will take effect immediately upon publication on the platform. It is the user's responsibility to periodically review these terms to be aware of any modifications.",
      
      lawTitle: "9. Governing Law and Jurisdiction",
      lawText: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Portugal. Any dispute arising from or related to these terms shall be submitted to the exclusive jurisdiction of the courts of Lisbon.",
      
      prizeTitle: "10. Prize Award Conditions",
      prizeText: "10.1. The total monetary prize value for a season or challenge may be subject to selling a minimum number or percentage of entry tickets. If the number of tickets sold does not reach the stipulated minimum, Paradox Protocol reserves the right to proportionally adjust the prize value or cancel the season/challenge, as detailed in each event's description.\n\n10.2. This condition will be clearly communicated on the description page of each season or challenge before ticket purchase. By purchasing a ticket, the participant accepts this condition.\n\n10.3. It is important to reiterate that, even with this condition, prize allocation continues to be based solely on the merit and skill of the participant who solves the puzzle first and submits the proper solution report, and not on any element of luck or gambling. This clause aims only at project sustainability and the feasibility of awarding high-value prizes.",
      
      concludingText: "By using the Paradox Protocol platform, the user acknowledges that they have read, understood, and agreed to these Terms and Conditions in their entirety.",
      
      contactTitle: "Contact",
      contactText: "For questions about these terms or any aspect of Paradox Protocol, contact us:",
      
      lastUpdated: "Last updated: June 20, 2025"
    },
    
    es: {
      heroTitle: "Términos y Condiciones del Paradox Protocol",
      heroSubtitle: "¡Bienvenido a Paradox Protocol! Al acceder y utilizar nuestra plataforma, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Por favor, léalos detenidamente. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestra plataforma.",
      
      natureTitle: "1. Naturaleza de los Desafíos: Mérito y Habilidad",
      natureText: "Paradox Protocol ofrece desafíos intelectuales, enigmas y experimentos que requieren razonamiento lógico, creatividad y persistencia para resolverse. Es fundamental que el usuario comprenda que la resolución de desafíos y la asignación de premios se basan exclusivamente en el mérito y habilidad de los participantes, no en suerte, sorteos o cualquier forma de juego de azar. El éxito en nuestra plataforma es una consecuencia directa de la capacidad intelectual y el esfuerzo del participante.",
      
      eligibilityTitle: "2. Participación y Elegibilidad",
      eligibilityText: "2.1. Para participar en los desafíos, el usuario debe registrarse en la plataforma y adquirir entradas para temporadas o desafíos específicos.\n\n2.2. La participación está abierta a personas que cumplan con los requisitos de edad mínima legal en su jurisdicción para participar en actividades que involucren premios monetarios. Al aceptar estos términos, el usuario declara que cumple con todos los requisitos de elegibilidad.\n\n2.3. Paradox Protocol se reserva el derecho de verificar la elegibilidad de los participantes y descalificar a cualquier participante que no cumpla con los requisitos o viole estos Términos y Condiciones.",
      
      paymentsTitle: "3. Pagos y Pasarelas de Pago",
      paymentsText: "3.1. Todos los pagos para la compra de entradas se procesan a través de pasarelas de pago seguras y confiables. Paradox Protocol no almacena directamente información financiera sensible de los usuarios.\n\n3.2. Al realizar un pago, el usuario acepta los términos y condiciones de la pasarela de pago seleccionada. Paradox Protocol no es responsable de fallas o problemas técnicos que puedan ocurrir en los sistemas de las pasarelas de pago, aunque hacemos todos los esfuerzos para seleccionar socios de confianza.\n\n3.3. Los precios de las entradas y los valores de los premios se muestran en la moneda local aplicable y pueden estar sujetos a impuestos y tasas según la legislación vigente.",
      
      refundTitle: "4. Política de Reembolso",
      refundText: "4.1. Entradas: Una vez adquirida una entrada para una temporada o desafío, no son elegibles para reembolso, excepto en casos de fallo técnico comprobado de nuestra plataforma que impida la participación del usuario. En tales casos, el reembolso se procesará en un plazo de 7 días hábiles al método de pago original.\n\n4.2. Premios: Los premios monetarios se otorgan al participante que cumpla con los criterios de resolución y envío del informe de manera más rápida y precisa. Una vez otorgado y pagado, el premio no es reembolsable.\n\n4.3. Cancelación de Temporada/Desafío: En el improbable caso de que una temporada o desafío sea cancelado por Paradox Protocol antes de su inicio, todas las entradas adquiridas para esa temporada/desafío serán reembolsadas íntegramente.",
      
      intellectualPropertyTitle: "5. Propiedad Intelectual",
      intellectualPropertyText: "5.1. Contenido de la Plataforma: Todo el contenido en la plataforma Paradox Protocol, incluyendo pero no limitado a enigmas, textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales, compilaciones de datos y software, es propiedad de Paradox Protocol o sus proveedores de contenido y está protegido por leyes nacionales e internacionales de derechos de autor y propiedad intelectual.\n\n5.2. Envíos de Participantes: Al enviar informes de solución, soluciones o cualquier otro contenido a la plataforma, el participante otorga a Paradox Protocol una licencia no exclusiva, mundial, libre de regalías, perpetua e irrevocable para usar, reproducir, modificar, adaptar, publicar, traducir, crear trabajos derivados, distribuir y mostrar dicho contenido en cualquier medio. El participante declara y garantiza que tiene todos los derechos necesarios para otorgar esta licencia.\n\n5.3. Confidencialidad de Enigmas: Los enigmas y desafíos presentados en la plataforma son confidenciales y propiedad intelectual de Paradox Protocol. Está estrictamente prohibido compartir, divulgar, reproducir o distribuir enigmas o sus soluciones antes de la finalización oficial del desafío y la divulgación pública de la solución por Paradox Protocol. La violación de esta cláusula puede resultar en la descalificación del participante y acciones legales.",
      
      conductTitle: "6. Conducta del Usuario",
      conductText: "6.1. El usuario acepta utilizar la plataforma de manera ética y legal, absteniéndose de cualquier conducta que pueda perjudicar a Paradox Protocol, otros usuarios o terceros.\n\n6.2. Se prohíbe el uso de bots, scripts, automatización o cualquier método injusto para obtener ventaja en los desafíos. Cualquier intento de fraude resultará en la descalificación inmediata y permanente del usuario de la plataforma.",
      
      limitationTitle: "7. Limitación de Responsabilidad",
      limitationText: "Paradox Protocol no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes resultantes del uso o incapacidad de usar la plataforma, incluyendo pero no limitado a pérdida de ganancias, datos u otras pérdidas intangibles.",
      
      changesTitle: "8. Cambios en los Términos y Condiciones",
      changesText: "Paradox Protocol se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en la plataforma. Es responsabilidad del usuario revisar periódicamente estos términos para estar al tanto de cualquier modificación.",
      
      lawTitle: "9. Ley Aplicable y Jurisdicción",
      lawText: "Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de Portugal. Cualquier disputa derivada o relacionada con estos términos se someterá a la jurisdicción exclusiva de los tribunales de Lisboa.",
      
      prizeTitle: "10. Condiciones de Adjudicación del Premio",
      prizeText: "10.1. El valor monetario total del premio para una temporada o desafío puede estar sujeto a la venta de un número mínimo o porcentaje de entradas. Si el número de entradas vendidas no alcanza el mínimo estipulado, Paradox Protocol se reserva el derecho de ajustar proporcionalmente el valor del premio o cancelar la temporada/desafío, según se detalle en la descripción de cada evento.\n\n10.2. Esta condición se comunicará claramente en la página de descripción de cada temporada o desafío antes de la compra de la entrada. Al adquirir una entrada, el participante acepta esta condición.\n\n10.3. Es importante reiterar que, incluso con esta condición, la adjudicación del premio sigue basándose exclusivamente en el mérito y la pericia del participante que resuelva el enigma primero y presente el informe de solución adecuado, y no en ningún elemento de suerte o juego de azar. Esta cláusula tiene como objetivo únicamente la sostenibilidad del proyecto y la viabilidad de la adjudicación de premios de alto valor.",
      
      concludingText: "Al utilizar la plataforma Paradox Protocol, el usuario reconoce que ha leído, comprendido y aceptado estos Términos y Condiciones en su totalidad.",
      
      contactTitle: "Contacto",
      contactText: "Para preguntas sobre estos términos o cualquier aspecto de Paradox Protocol, contáctenos:",
      
      lastUpdated: "Última actualización: 20 de junio de 2025"
    },
    
    fr: {
      heroTitle: "Conditions Générales du Paradox Protocol",
      heroSubtitle: "Bienvenue sur Paradox Protocol ! En accédant et utilisant notre plateforme, vous acceptez de vous conformer et d'être lié par les conditions générales d'utilisation suivantes. Veuillez les lire attentivement. Si vous n'acceptez aucune partie de ces conditions, vous ne devez pas utiliser notre plateforme.",
      
      natureTitle: "1. Nature des Défis : Mérite et Compétence",
      natureText: "Paradox Protocol propose des défis intellectuels, des énigmes et des expériences qui nécessitent un raisonnement logique, de la créativité et de la persévérance pour être résolus. Il est essentiel que l'utilisateur comprenne que la résolution des défis et l'attribution des prix sont basées exclusivement sur le mérite et la compétence des participants, et non sur la chance, des tirages ou toute forme de jeu de hasard. Le succès sur notre plateforme est une conséquence directe des capacités intellectuelles et des efforts du participant.",
      
      eligibilityTitle: "2. Participation et Éligibilité",
      eligibilityText: "2.1. Pour participer aux défis, l'utilisateur doit s'inscrire sur la plateforme et acheter des billets d'entrée pour des saisons ou défis spécifiques.\n\n2.2. La participation est ouverte aux personnes remplissant les conditions d'âge légal minimal dans leur juridiction pour participer à des activités impliquant des prix monétaires. En acceptant ces conditions, l'utilisateur déclare qu'il remplit tous les critères d'éligibilité.\n\n2.3. Paradox Protocol se réserve le droit de vérifier l'éligibilité des participants et de disqualifier tout participant ne remplissant pas les conditions ou violant ces Conditions Générales.",
      
      paymentsTitle: "3. Paiements et Passerelles de Paiement",
      paymentsText: "3.1. Tous les paiements pour l'achat de billets sont traités via des passerelles de paiement sécurisées et fiables. Paradox Protocol ne stocke pas directement les informations financières sensibles des utilisateurs.\n\n3.2. En effectuant un paiement, l'utilisateur accepte les conditions générales de la passerelle de paiement sélectionnée. Paradox Protocol n'est pas responsable des défaillances ou problèmes techniques pouvant survenir dans les systèmes des passerelles de paiement, bien que nous fassions tous les efforts pour sélectionner des partenaires de confiance.\n\n3.3. Les prix des billets et les valeurs des prix sont affichés dans la devise locale applicable et peuvent être soumis à des taxes et frais conformément à la législation en vigueur.",
      
      refundTitle: "4. Politique de Remboursement",
      refundText: "4.1. Billets d'entrée : Une fois acheté, un billet d'entrée pour une saison ou un défi n'est pas remboursable, sauf en cas de défaillance technique avérée de notre plateforme empêchant la participation de l'utilisateur. Dans ces cas, le remboursement sera traité dans un délai de 7 jours ouvrables sur le mode de paiement d'origine.\n\n4.2. Prix : Les prix monétaires sont attribués au participant qui remplit les critères de résolution et de soumission du rapport le plus rapidement et précisément. Une fois attribué et payé, le prix n'est pas remboursable.\n\n4.3. Annulation de Saison/Défi : Dans le cas improbable où une saison ou un défi serait annulé par Paradox Protocol avant son début, tous les billets d'entrée achetés pour cette saison/défi seront intégralement remboursés.",
      
      intellectualPropertyTitle: "5. Propriété Intellectuelle",
      intellectualPropertyText: "5.1. Contenu de la Plateforme : Tout le contenu de la plateforme Paradox Protocol, y compris mais sans s'y limiter, les énigmes, textes, graphiques, logos, icônes, images, clips audio, téléchargements numériques, compilations de données et logiciels, est la propriété de Paradox Protocol ou de ses fournisseurs de contenu et est protégé par les lois nationales et internationales sur le droit d'auteur et la propriété intellectuelle.\n\n5.2. Soumissions des Participants : En soumettant des rapports de solution, des solutions ou tout autre contenu à la plateforme, le participant accorde à Paradox Protocol une licence non exclusive, mondiale, perpétuelle, irrévocable et exempte de redevances pour utiliser, reproduire, modifier, adapter, publier, traduire, créer des œuvres dérivées, distribuer et afficher ce contenu sur tout support. Le participant déclare et garantit qu'il dispose de tous les droits nécessaires pour accorder cette licence.\n\n5.3. Confidentialité des Énigmes : Les énigmes et défis présentés sur la plateforme sont confidentiels et propriété intellectuelle de Paradox Protocol. Il est strictement interdit de partager, divulguer, reproduire ou distribuer les énigmes ou leurs solutions avant l'achèvement officiel du défi et la divulgation publique de la solution par Paradox Protocol. La violation de cette clause peut entraîner la disqualification du participant et des poursuites judiciaires.",
      
      conductTitle: "6. Conduite de l'Utilisateur",
      conductText: "6.1. L'utilisateur accepte d'utiliser la plateforme de manière éthique et légale, en s'abstenant de tout comportement pouvant nuire à Paradox Protocol, à d'autres utilisateurs ou à des tiers.\n\n6.2. L'utilisation de bots, de scripts, d'automatisation ou de toute méthode déloyale pour obtenir un avantage dans les défis est interdite. Toute tentative de fraude entraînera une disqualification immédiate et permanente de l'utilisateur de la plateforme.",
      
      limitationTitle: "7. Limitation de Responsabilité",
      limitationText: "Paradox Protocol ne sera pas responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser la plateforme, y compris, mais sans s'y limiter, la perte de profits, de données ou d'autres pertes immatérielles.",
      
      changesTitle: "8. Modifications des Conditions Générales",
      changesText: "Paradox Protocol se réserve le droit de modifier ces Conditions Générales à tout moment. Les modifications prendront effet immédiatement après leur publication sur la plateforme. Il est de la responsabilité de l'utilisateur de revoir périodiquement ces conditions pour prendre connaissance de toute modification.",
      
      lawTitle: "9. Droit Applicable et Juridiction",
      lawText: "Ces Conditions Générales seront régies et interprétées conformément aux lois du Portugal. Tout litige découlant de ou lié à ces conditions sera soumis à la juridiction exclusive des tribunaux de Lisbonne.",
      
      prizeTitle: "10. Conditions d'Attribution du Prix",
      prizeText: "10.1. La valeur monétaire totale du prix pour une saison ou un défi peut être soumise à la vente d'un nombre minimum ou d'un pourcentage de billets d'entrée. Si le nombre de billets vendus n'atteint pas le minimum stipulé, Paradox Protocol se réserve le droit d'ajuster proportionnellement la valeur du prix ou d'annuler la saison/le défi, comme détaillé dans la description de chaque événement.\n\n10.2. Cette condition sera clairement communiquée sur la page de description de chaque saison ou défi avant l'achat du billet. En achetant un billet, le participant accepte cette condition.\n\n10.3. Il est important de réitérer que, même avec cette condition, l'attribution du prix continue d'être basée exclusivement sur le mérite et l'expertise du participant qui résout l'énigme en premier et soumet le rapport de solution approprié, et non sur aucun élément de chance ou de jeu de hasard. Cette clause vise uniquement la durabilité du projet et la faisabilité de l'attribution de prix de grande valeur.",
      
      concludingText: "En utilisant la plateforme Paradox Protocol, l'utilisateur reconnaît avoir lu, compris et accepté ces Conditions Générales dans leur intégralité.",
      
      contactTitle: "Contact",
      contactText: "Pour des questions sur ces conditions ou tout aspect de Paradox Protocol, contactez-nous :",
      
      lastUpdated: "Dernière mise à jour : 20 juin 2025"
    },
    
    de: {
      heroTitle: "Allgemeine Geschäftsbedingungen des Paradox Protocol",
      heroSubtitle: "Willkommen bei Paradox Protocol! Durch den Zugriff auf und die Nutzung unserer Plattform erklären Sie sich damit einverstanden, die folgenden Nutzungsbedingungen einzuhalten und an sie gebunden zu sein. Bitte lesen Sie sie sorgfältig durch. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, sollten Sie unsere Plattform nicht nutzen.",
      
      natureTitle: "1. Art der Herausforderungen: Verdienst und Geschick",
      natureText: "Paradox Protocol bietet intellektuelle Herausforderungen, Rätsel und Experimente, die logisches Denken, Kreativität und Ausdauer zur Lösung erfordern. Es ist wichtig, dass der Benutzer versteht, dass die Lösung von Herausforderungen und die Vergabe von Preisen ausschließlich auf dem Verdienst und den Fähigkeiten der Teilnehmer basieren und nicht auf Glück, Verlosungen oder irgendeiner Form von Glücksspiel. Der Erfolg auf unserer Plattform ist eine direkte Folge der intellektuellen Fähigkeiten und Anstrengungen des Teilnehmers.",
      
      eligibilityTitle: "2. Teilnahme und Berechtigung",
      eligibilityText: "2.1. Um an Herausforderungen teilzunehmen, muss sich der Benutzer auf der Plattform registrieren und Eintrittskarten für bestimmte Staffeln oder Herausforderungen erwerben.\n\n2.2. Die Teilnahme steht Personen offen, die in ihrer Gerichtsbarkeit das gesetzliche Mindestalter für die Teilnahme an Aktivitäten mit Geldpreisen erfüllen. Durch die Annahme dieser Bedingungen erklärt der Benutzer, dass er alle Berechtigungsvoraussetzungen erfüllt.\n\n2.3. Paradox Protocol behält sich das Recht vor, die Berechtigung der Teilnehmer zu überprüfen und jeden Teilnehmer zu disqualifizieren, der die Anforderungen nicht erfüllt oder gegen diese Allgemeinen Geschäftsbedingungen verstößt.",
      
      paymentsTitle: "3. Zahlungen und Zahlungsgateways",
      paymentsText: "3.1. Alle Zahlungen für den Ticketkauf werden über sichere und zuverlässige Zahlungsgateways abgewickelt. Paradox Protocol speichert keine sensiblen Finanzdaten der Benutzer direkt.\n\n3.2. Bei einer Zahlung akzeptiert der Benutzer die Allgemeinen Geschäftsbedingungen des ausgewählten Zahlungsgateways. Paradox Protocol ist nicht verantwortlich für Fehler oder technische Probleme, die in den Systemen der Zahlungsgateways auftreten können, obwohl wir uns bemühen, vertrauenswürdige Partner auszuwählen.\n\n3.3. Die Ticketpreise und Preisgelder werden in der gültigen Landeswährung angezeigt und können gemäß der geltenden Gesetzgebung Steuern und Gebühren unterliegen.",
      
      refundTitle: "4. Rückgaberecht",
      refundText: "4.1. Eintrittskarten: Einmal gekaufte Eintrittskarten für eine Staffel oder Herausforderung sind nicht erstattungsfähig, es sei denn, es liegt ein nachgewiesener technischer Fehler unserer Plattform vor, der die Teilnahme des Benutzers verhindert. In solchen Fällen wird die Rückerstattung innerhalb von 7 Werktagen an die ursprüngliche Zahlungsmethode bearbeitet.\n\n4.2. Preise: Geldpreise werden dem Teilnehmer zuerkannt, der die Lösungskriterien und die Einreichung des Berichts am schnellsten und genauesten erfüllt. Einmal zuerkannt und ausgezahlt, ist der Preis nicht erstattungsfähig.\n\n4.3. Saison/Herausforderungsstornierung: Im unwahrscheinlichen Fall, dass eine Saison oder Herausforderung von Paradox Protocol vor ihrem Beginn abgesagt wird, werden alle für diese Saison/Herausforderung gekauften Eintrittskarten vollständig erstattet.",
      
      intellectualPropertyTitle: "5. Geistiges Eigentum",
      intellectualPropertyText: "5.1. Plattforminhalt: Alle Inhalte auf der Paradox Protocol Plattform, einschließlich, aber nicht beschränkt auf Rätsel, Texte, Grafiken, Logos, Symbole, Bilder, Audioclips, digitale Downloads, Datensammlungen und Software, sind Eigentum von Paradox Protocol oder seiner Inhaltslieferanten und durch nationale und internationale Urheberrechts- und geistige Eigentumsgesetze geschützt.\n\n5.2. Teilnehmereinreichungen: Durch die Einreichung von Lösungsberichten, Lösungen oder anderen Inhalten auf der Plattform gewährt der Teilnehmer Paradox Protocol eine nicht-exklusive, weltweite, gebührenfreie, unbefristete und unwiderrufliche Lizenz zur Nutzung, Vervielfältigung, Bearbeitung, Anpassung, Veröffentlichung, Übersetzung, Erstellung abgeleiteter Werke, Verbreitung und Anzeige solcher Inhalte in jedem Medium. Der Teilnehmer erklärt und garantiert, dass er alle erforderlichen Rechte besitzt, um diese Lizenz zu erteilen.\n\n5.3. Vertraulichkeit von Rätseln: Die auf der Plattform präsentierten Rätsel und Herausforderungen sind vertraulich und geistiges Eigentum von Paradox Protocol. Es ist strengstens verboten, Rätsel oder deren Lösungen vor dem offiziellen Abschluss der Herausforderung und der öffentlichen Bekanntgabe der Lösung durch Paradox Protocol zu teilen, offenzulegen, zu reproduzieren oder zu verbreiten. Die Verletzung dieser Klausel kann zur Disqualifikation des Teilnehmers und zu rechtlichen Schritten führen.",
      
      conductTitle: "6. Nutzerverhalten",
      conductText: "6.1. Der Benutzer verpflichtet sich, die Plattform ethisch und legal zu nutzen und sich jeglichen Verhaltens zu enthalten, das Paradox Protocol, anderen Benutzern oder Dritten schaden könnte.\n\n6.2. Die Verwendung von Bots, Skripten, Automatisierung oder unfairen Methoden, um einen Vorteil in Herausforderungen zu erlangen, ist verboten. Jeder Betrugsversuch führt zur sofortigen und dauerhaften Disqualifikation des Benutzers von der Plattform.",
      
      limitationTitle: "7. Haftungsbeschränkung",
      limitationText: "Paradox Protocol haftet nicht für direkte, indirekte, zufällige, besondere, Folge- oder exemplarische Schäden, die sich aus der Nutzung oder Unfähigkeit zur Nutzung der Plattform ergeben, einschließlich, aber nicht beschränkt auf Verlust von Gewinnen, Daten oder anderen immateriellen Verlusten.",
      
      changesTitle: "8. Änderungen der Allgemeinen Geschäftsbedingungen",
      changesText: "Paradox Protocol behält sich das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit zu ändern. Änderungen werden sofort nach ihrer Veröffentlichung auf der Plattform wirksam. Es liegt in der Verantwortung des Benutzers, diese Bedingungen regelmäßig zu überprüfen, um etwaige Änderungen zur Kenntnis zu nehmen.",
      
      lawTitle: "9. Anwendbares Recht und Gerichtsstand",
      lawText: "Diese Allgemeinen Geschäftsbedingungen unterliegen den Gesetzen Portugals und werden nach diesen ausgelegt. Alle Streitigkeiten aus oder im Zusammenhang mit diesen Bedingungen unterliegen der ausschließlichen Zuständigkeit der Gerichte von Lissabon.",
      
      prizeTitle: "10. Bedingungen für die Preisvergabe",
      prizeText: "10.1. Der Gesamtwert des Geldpreises für eine Staffel oder Herausforderung kann vom Verkauf einer Mindestanzahl oder eines Prozentsatzes an Eintrittskarten abhängig sein. Wenn die Anzahl der verkauften Tickets das festgelegte Minimum nicht erreicht, behält sich Paradox Protocol das Recht vor, den Preiswert proportional anzupassen oder die Staffel/Herausforderung abzusagen, wie in der Beschreibung jedes Ereignisses angegeben.\n\n10.2. Diese Bedingung wird auf der Beschreibungsseite jeder Staffel oder Herausforderung vor dem Ticketkauf klar kommuniziert. Durch den Kauf eines Tickets akzeptiert der Teilnehmer diese Bedingung.\n\n10.3. Es ist wichtig zu betonen, dass die Preisvergabe auch unter dieser Bedingung ausschließlich auf dem Verdienst und der Expertise des Teilnehmers basiert, der das Rätsel zuerst löst und den entsprechenden Lösungsbericht einreicht, und nicht auf einem Glücks- oder Glücksspielelement. Diese Klausel dient ausschließlich der Nachhaltigkeit des Projekts und der Durchführbarkeit der Vergabe von Preisen mit hohem Wert.",
      
      concludingText: "Durch die Nutzung der Paradox Protocol Plattform bestätigt der Benutzer, dass er diese Allgemeinen Geschäftsbedingungen vollständig gelesen, verstanden und akzeptiert hat.",
      
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
                  <div className="space-y-4">
                    {section.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-gray-300 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Concluding Statement */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="premium-card p-8">
              <CardContent>
                <p className="text-lg text-gray-300 leading-relaxed text-center italic">
                  {currentContent.concludingText}
                </p>
              </CardContent>
            </Card>
          </motion.div>
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

