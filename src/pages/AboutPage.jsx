// AboutPage.jsx
import { motion } from 'framer-motion'
import { 
  Brain, 
  Target, 
  Users, 
  Award,
  Lightbulb,
  Shield,
  Globe,
  Zap,
  Eye,
  Compass,
  Star
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '../contexts/LanguageContext'

const AboutPage = () => {
  const { t } = useLanguage()

  const values = [
    {
      title: t("intellectualExcellence"),
      description: t("intellectualExcellenceDesc"),
      icon: Award
    },
    {
      title: t("globalCommunity"),
      description: t("globalCommunityDesc"),
      icon: Globe
    },
    {
      title: t("constantInnovation"),
      description: t("constantInnovationDesc"),
      icon: Zap
    },
    {
      title: t("fullTransparency"),
      description: t("fullTransparencyDesc"),
      icon: Shield
    }
  ]

  const teamMembers = [
    {
      name: t("drElenaVasquez"),
      role: t("founderPuzzleArchitect"),
      description: t("drElenaVasquezDesc"),
      icon: Brain
    },
    {
      name: t("marcusChen"),
      role: t("cto"),
      description: t("marcusChenDesc"),
      icon: Target
    },
    {
      name: t("sofiaAndersson"),
      role: t("cognitivePsychologist"),
      description: t("sofiaAnderssonDesc"),
      icon: Lightbulb
    }
  ]

  return (
    <div className="pt-16 min-h-screen starfield">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              {t("aboutHeroTitle")}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t("aboutHeroSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Eye className="w-16 h-16 mx-auto text-purple-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {t("ourMission")}
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t("ourMissionDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="premium-card h-full p-6 text-center">
                  <CardContent className="space-y-4">
                    <value.icon className="w-12 h-12 mx-auto text-purple-400" />
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Users className="w-16 h-16 mx-auto text-yellow-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {t("whoWeAre")}
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t("whoWeAreDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="premium-card h-full p-6 text-center">
                  <CardContent className="space-y-4">
                    <member.icon className="w-16 h-16 mx-auto text-yellow-400" />
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-purple-300 font-semibold">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Compass className="w-16 h-16 mx-auto text-green-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {t("ourPhilosophy")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="premium-card p-8">
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {t("ourPhilosophyDesc")}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Star className="w-16 h-16 mx-auto text-pink-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {t("yourJourneyBegins")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="premium-card p-8">
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {t("yourJourneyBeginsDesc")}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">
              {t("areYouReady")}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t("yourJourneyBeginsNow")}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="cta-button px-8 py-4 rounded-lg text-lg font-semibold text-white"
                onClick={() => window.location.href = '/'}
              >
                {t("startNow")}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

