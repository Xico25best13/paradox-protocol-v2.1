// TrustPage.jsx
import { motion } from 'framer-motion'
import { 
  Shield, 
  Target, 
  Award,
  CheckCircle,
  Lock,
  Eye,
  Brain,
  Zap,
  Star,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '../contexts/LanguageContext'

const TrustPage = () => {
  const { t } = useLanguage()

  const trustMetrics = [
    {
      icon: Users,
      value: "50,000+",
      label: t("satisfiedParticipants"),
      description: t("satisfiedParticipantsDesc")
    },
    {
      icon: Award,
      value: "98%",
      label: t("satisfactionRate"),
      description: t("satisfactionRateDesc")
    },
    {
      icon: TrendingUp,
      value: "€2.5M",
      label: t("prizesDistributed"),
      description: t("prizesDistributedDesc")
    },
    {
      icon: Clock,
      value: "24/7",
      label: t("supportAvailable"),
      description: t("supportAvailableDesc")
    }
  ]

  const principles = [
    {
      icon: Target,
      title: t("deterministicStructureTitle"),
      description: t("deterministicStructureDesc")
    },
    {
      icon: Shield,
      title: t("noRandomnessTitle"),
      description: t("noRandomnessDesc")
    },
    {
      icon: Brain,
      title: t("cognitiveSkillsTitle"),
      description: t("cognitiveSkillsDesc")
    },
    {
      icon: Eye,
      title: t("validationProcessTitle"),
      description: t("validationProcessDesc")
    }
  ]

  const certifications = [
    {
      title: t("independentAuditTitle"),
      description: t("independentAuditDesc"),
      icon: CheckCircle
    },
    {
      title: t("dataSecurityTitle"),
      description: t("dataSecurityDesc"),
      icon: Lock
    },
    {
      title: t("gdprComplianceTitle"),
      description: t("gdprComplianceDesc"),
      icon: Shield
    }
  ]

  return (
    <div className="pt-16 min-screen starfield">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="w-20 h-20 mx-auto text-green-400 mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              {t("trustHeroTitle")}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t("trustHeroSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="premium-card h-full p-6 text-center">
                  <CardContent className="space-y-4">
                    <metric.icon className="w-12 h-12 mx-auto text-purple-400" />
                    <div className="text-3xl font-bold text-white">{metric.value}</div>
                    <div className="text-lg font-semibold text-purple-300">{metric.label}</div>
                    <p className="text-gray-400 text-sm">{metric.description}</p>
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
            <Brain className="w-16 h-16 mx-auto text-yellow-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {t("philosophyTitle")}
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
                  {t("philosophyText")}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="premium-card h-full p-6">
                  <CardContent className="space-y-4">
                    <principle.icon className="w-12 h-12 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">{principle.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{principle.description}</p>
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
            <Eye className="w-16 h-16 mx-auto text-cyan-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {t("transparencyTitle")}
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
                  {t("transparencyText")}
                </p>
              </CardContent>
            </Card>
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
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {t("certificationsSecurity")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="premium-card h-full p-6 text-center">
                  <CardContent className="space-y-4">
                    <cert.icon className="w-16 h-16 mx-auto text-green-400" />
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
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
            <Star className="w-16 h-16 mx-auto text-pink-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {t("successTitle")}
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
                  {t("successText")}
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
              {t("ctaTitle")}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t("ctaText")}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="cta-button px-8 py-4 rounded-lg text-lg font-semibold text-white"
                onClick={() => window.location.href = '/'}
              >
                {t("startChallenge")}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TrustPage

