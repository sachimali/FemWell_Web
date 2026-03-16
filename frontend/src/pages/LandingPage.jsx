import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Heart, Sparkles, Apple, Dumbbell, Brain, 
  Shield, Users, Award, Calendar,
  BarChart3, MessageCircle, Zap, Check, X,
  Flower2, Star, ChevronDown, Activity, Droplet,
  Globe, ArrowRight, CheckCircle2, Moon
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const LandingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const problemRef = useRef(null);
  const featuresRef = useRef(null);
  
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const problemInView = useInView(problemRef, { once: true, amount: 0.2 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.1 });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 }
  };

  const globalStats = [
    { value: "1 in 10", label: "women worldwide have PCOS", icon: <Activity className="w-6 h-6" />, color: "rose" },
    { value: "84%", label: "experience menstrual irregularities", icon: <Calendar className="w-6 h-6" />, color: "lavender" },
    { value: "70%", label: "struggle with hormonal acne", icon: <Droplet className="w-6 h-6" />, color: "sage" },
    { value: "200M+", label: "affected by thyroid disorders", icon: <Heart className="w-6 h-6" />, color: "peach" }
  ];

  const problems = [
    {
      stat: "68%",
      text: "of women feel their cycle affects daily performance, yet most fitness plans ignore it completely."
    },
    {
      stat: "1 in 3",
      text: "women struggle with body image, fueled by apps that glorify weight loss over wellness."
    },
    {
      stat: "Only 12%",
      text: "of women understand their hormonal phases and how to work with them."
    }
  ];

  const features = [
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Know Your Body Deeply",
      subtitle: "8-Step Personalized Onboarding",
      description: "PCOS? Thyroid issues? Irregular cycles? We see you. Our onboarding captures your unique health profile - without judgment, just compassion.",
      color: "rose",
      image: "https://images.unsplash.com/photo-1584473456274-16c1ad2326c6"
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Track Everything, Shame Nothing",
      subtitle: "Comprehensive Daily Trackers",
      description: "Water, period, sleep, skin, hair, meals, and yes - even 'off' days. Your wellness journey is personal. Track what matters to YOU.",
      color: "lavender",
      image: "https://images.pexels.com/photos/14466078/pexels-photo-14466078.jpeg"
    },
    {
      icon: <Dumbbell className="w-7 h-7" />,
      title: "Move With Your Cycle",
      subtitle: "AI-Powered Cycle-Synced Workouts",
      description: "Intense strength during follicular phase, restorative yoga during menstruation. Smart. Science-backed. Simple.",
      color: "sage",
      image: "https://images.unsplash.com/photo-1606372952197-19697804e569"
    },
    {
      icon: <Apple className="w-7 h-7" />,
      title: "Eat For Hormonal Balance",
      subtitle: "Personalized Meal Plans",
      description: "Nutrition tailored to your BMR, health conditions (PCOS-friendly!), and cycle phase. Fuel your power.",
      color: "peach",
      image: "https://images.unsplash.com/photo-1575883107884-4735c43fc29c"
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: "Predict Before Problems Hit",
      subtitle: "ML-Powered Insights",
      description: "Our AI learns YOUR patterns. Predict acne spikes, energy dips, and sleep issues before they happen.",
      color: "rose",
      image: null
    },
    {
      icon: <MessageCircle className="w-7 h-7" />,
      title: "Ask Anything, Anytime",
      subtitle: "AI Wellness Assistant",
      description: "'Why am I so bloated?' 'Best foods for ovulation?' Get instant, science-backed, compassionate answers 24/7.",
      color: "lavender",
      image: null
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Celebrate Your Progress",
      subtitle: "Private Analytics Dashboard",
      description: "Weekly wellness reports and insights that honor YOUR growth. We measure energy and joy - not just pounds.",
      color: "sage",
      image: null
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "You're Not Alone",
      subtitle: "Supportive Community",
      description: "Connect with women navigating similar journeys. Built by women, for women, with women.",
      color: "peach",
      image: "https://images.pexels.com/photos/4672259/pexels-photo-4672259.jpeg"
    }
  ];

  const pricingPlans = [
    {
      name: "Free Forever",
      price: "$0",
      description: "Start your wellness journey",
      features: [
        { name: "Basic cycle tracking", included: true },
        { name: "Daily wellness trackers", included: true },
        { name: "Standard workout plans", included: true },
        { name: "Community access", included: true },
        { name: "ML-powered insights", included: false },
        { name: "Unlimited AI assistant", included: false },
        { name: "Cycle automation", included: false },
        { name: "Barcode scanner", included: false }
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "/month",
      description: "Unlock your full potential",
      features: [
        { name: "Everything in Free", included: true },
        { name: "Advanced ML insights & predictions", included: true },
        { name: "Unlimited AI wellness chat", included: true },
        { name: "Full cycle automation", included: true },
        { name: "Barcode nutrition scanner", included: true },
        { name: "PDF export & reports", included: true },
        { name: "Priority support", included: true },
        { name: "Early access to new features", included: true }
      ],
      cta: "Go Premium",
      popular: true
    }
  ];

  const impactStats = [
    { value: "15%", label: "of profits donated", icon: <Heart className="w-8 h-8" /> },
    { value: "100%", label: "transparent receipts", icon: <Shield className="w-8 h-8" /> },
    { value: "4+", label: "initiatives supported", icon: <Users className="w-8 h-8" /> }
  ];

  const causes = [
    { name: "PCOS Awareness Programs", icon: <Flower2 className="w-5 h-5" /> },
    { name: "Girls' Education Funds", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Women's Mental Health", icon: <Heart className="w-5 h-5" /> },
    { name: "Body Positivity Movements", icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 header-glass"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Flower2 className="w-8 h-8 text-rose" />
            <span className="text-2xl font-bold text-rose-dark">FemWell</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="nav-link">Why FemWell</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#impact" className="nav-link">Impact</a>
          </nav>
          <Button className="bg-gradient-rose text-white hover-scale">Download App</Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="hero-section-enhanced relative overflow-hidden" ref={heroRef}>
        <div className="hero-texture"></div>
        <div className="hero-gradient-orb"></div>
        <div className="hero-gradient-orb-2"></div>
        
        <motion.div 
          className="container mx-auto max-w-7xl px-6 pt-32 pb-20"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Sparkles className="w-4 h-4 text-rose" />
                <span>For women, by women, with women</span>
              </motion.div>
              
              <h1 className="hero-title-new mb-6">
                Your Cycle. <br />
                Your Body. <br />
                <span className="hero-title-gradient">Your Power.</span>
              </h1>
              
              <p className="hero-subtitle mb-10">
                FemWell isn't about shrinking. It's about <strong className="text-rose-dark">strength, balance, and confidence</strong>. 
                Work with your hormonal cycle, not against it. Join a movement where wellness means feeling powerful - at any size.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-rose text-white px-8 py-6 text-lg rounded-2xl hover-lift shadow-rose">
                  <Apple className="w-5 h-5 mr-2" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-rose text-rose-dark px-8 py-6 text-lg rounded-2xl hover:bg-rose/10 transition-all">
                  <Zap className="w-5 h-5 mr-2" />
                  Download for Android
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sage" />
                  <span>Free forever plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sage" />
                  <span>No credit card needed</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="mockup-container-enhanced">
                <motion.div 
                  className="mockup-phone-new mockup-left"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="phone-notch"></div>
                  <div className="phone-content"></div>
                </motion.div>
                <motion.div 
                  className="mockup-phone-new mockup-center"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="phone-notch"></div>
                  <div className="phone-content-center"style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1606372951626-5cd1f22cc302)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                </motion.div>
                <motion.div 
                  className="mockup-phone-new mockup-right"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  <div className="phone-notch"></div>
                  <div className="phone-content"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center pb-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-rose mx-auto" />
        </motion.div>
      </section>

      {/* Global Stats Section - The Problem */}
      <section className="py-20 px-6 relative overflow-hidden" ref={statsRef}>
        <div className="absolute inset-0 bg-gradient-problem"></div>
        <div className="pattern-dots"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full mb-6 border border-rose/20"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="w-4 h-4 text-rose" />
              <span className="text-sm font-semibold text-rose-dark">Women's Health: The Global Reality</span>
            </motion.div>
            <h2 className="section-title-new mb-6">
              Millions of Women Are <br />
              <span className="text-gradient-rose">Silently Struggling</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Hormonal health challenges affect <strong>hundreds of millions</strong> of women worldwide. 
              Yet most wellness apps ignore the very biology that makes us who we are.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            animate={statsInView ? "animate" : "initial"}
          >
            {globalStats.map((stat, index) => (
              <motion.div
                key={index}
                className={`stat-card-glass stat-${stat.color}`}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`stat-icon-wrapper bg-${stat.color}/15`}>
                  {stat.icon}
                </div>
                <div className={`stat-value text-${stat.color}-dark`}>{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-20 px-6 bg-gradient-subtle-dark" ref={problemRef}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title-new mb-6">Here's What We Know</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The fitness industry ignores women's biology. The result? Burnout, frustration, and shame.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            animate={problemInView ? "animate" : "initial"}
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="problem-card"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
              >
                <div className="problem-stat">{problem.stat}</div>
                <div className="problem-text">{problem.text}</div>
                <div className="problem-line"></div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={problemInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="solution-card">
              <Sparkles className="w-12 h-12 text-rose mb-4 mx-auto" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                It's Time For a Different Approach
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                What if there was an app that <strong className="text-rose-dark">understood your hormones</strong>, 
                celebrated your body, and adapted to your unique cycle? 
                <span className="block mt-3 text-xl font-semibold">That's FemWell.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section id="features" className="py-24 px-6 relative overflow-hidden" ref={featuresRef}>
        <div className="floating-shapes"></div>
        
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-badge px-5 py-2 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Simple Steps. Powerful Results.</span>
            </motion.div>
            <h2 className="section-title-new mb-6">
              Everything Your Body <br />
              <span className="text-gradient-rose">Actually Needs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive wellness tools designed specifically for women's bodies, hormonal cycles, and real-life challenges
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate={featuresInView ? "animate" : "initial"}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`feature-card-enhanced feature-${feature.color}`}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                {feature.image && (
                  <div className="feature-image-wrapper">
                    <div 
                      className="feature-image"
                      style={{
                        backgroundImage: `url(${feature.image})`,
                      }}
                    ></div>
                    <div className="feature-overlay"></div>
                  </div>
                )}
                <div className={`feature-content ${!feature.image ? 'feature-content-full' : ''}`}>
                  <div className={`feature-icon-new bg-${feature.color}/15`}>
                    {feature.icon}
                  </div>
                  <div className="feature-subtitle text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                    {feature.subtitle}
                  </div>
                  <h3 className="feature-title-new mb-3">{feature.title}</h3>
                  <p className="feature-description-new">{feature.description}</p>
                  <motion.div 
                    className={`feature-arrow text-${feature.color}`}
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="section-title-new mb-6">Choose Your Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free forever, or unlock advanced features with Premium
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`pricing-card-new ${plan.popular ? 'pricing-popular' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                {plan.popular && (
                  <div className="pricing-badge-new">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 text-lg">{plan.period}</span>}
                  </div>

                  <Button 
                    className={`w-full py-6 text-lg rounded-2xl mb-8 ${
                      plan.popular 
                        ? 'bg-gradient-rose text-white hover-lift shadow-rose' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 px-6 relative overflow-hidden">
        <div className="impact-bg-pattern"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 bg-rose/10 px-5 py-2 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-4 h-4 text-rose" />
              <span className="text-sm font-semibold text-rose-dark">Building a Better World Together</span>
            </motion.div>
            <h2 className="section-title-new mb-6">
              Profit With <span className="text-gradient-rose">Purpose</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-rose-dark">15% of all profits</strong> go directly to women empowerment initiatives. 
              Every subscription funds PCOS research, girls' education, and mental health programs.
              <span className="block mt-4 font-semibold text-lg">Full transparency. Public receipts. Real impact.</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {impactStats.map((stat, index) => (
              <motion.div 
                key={index}
                className="impact-card-new"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="impact-icon-new">
                  {stat.icon}
                </div>
                <div className="impact-value-new">{stat.value}</div>
                <div className="impact-label-new">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="glass-card-new p-10 rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Organizations We Support</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {causes.map((cause, index) => (
                <motion.div 
                  key={index} 
                  className="cause-item-new"
                  whileHover={{ x: 5, backgroundColor: 'rgba(196, 116, 138, 0.12)' }}
                >
                  <div className="cause-icon-new">{cause.icon}</div>
                  <span className="cause-name-new">{cause.name}</span>
                  <CheckCircle2 className="w-5 h-5 text-sage ml-auto" />
                </motion.div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button 
                variant="outline" 
                className="border-2 border-rose text-rose-dark hover:bg-rose/10 px-8 py-6 text-lg rounded-2xl"
              >
                View Donation Reports
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section - NEW */}
      <section className="py-24 px-6 bg-gradient-community">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="community-image-wrapper">
                <img 
                  src="https://images.pexels.com/photos/6539885/pexels-photo-6539885.jpeg"
                  alt="Women supporting women"
                  className="community-image"
                />
                <div className="community-overlay"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-4 h-4 text-lavender" />
                <span className="text-sm font-semibold text-gray-800">By Women, For Women, With Women</span>
              </motion.div>
              
              <h2 className="section-title-new mb-6">
                Join a Movement, <br />
                <span className="text-gradient-lavender">Not Just an App</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                FemWell isn't just software - it's a <strong>community of women</strong> who refuse to be defined by 
                unrealistic standards. Share your journey, find support, celebrate wins, and normalize the struggles.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose/15 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-rose" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Safe Space Guaranteed</div>
                    <div className="text-sm text-gray-600">Zero body shaming. Zero judgment. Just real women, real talk.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-lavender/15 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-lavender" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Expert-Led Discussions</div>
                    <div className="text-sm text-gray-600">Monthly talks with nutritionists, trainers, and therapists.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-sage" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Connection & Accountability</div>
                    <div className="text-sm text-gray-600">Find workout buddies, cycle twins, and lifelong friends.</div>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-lavender text-white px-8 py-6 text-lg rounded-2xl hover-lift shadow-lavender">
                Join Our Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-blush">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title-new mb-4">Questions?</h2>
            <p className="text-xl text-gray-600">We've got answers</p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="faq-item-new">
              <AccordionTrigger className="faq-trigger-new">
                Is FemWell a weight-loss app?
              </AccordionTrigger>
              <AccordionContent className="faq-content-new">
                <strong>No.</strong> FemWell is a wellness app focused on strength, energy, hormonal health, and confidence. 
                While some users may experience body composition changes as a side effect of better health, our goal is to help you feel powerful - not smaller.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="faq-item-new">
              <AccordionTrigger className="faq-trigger-new">
                How does cycle-synced fitness work?
              </AccordionTrigger>
              <AccordionContent className="faq-content-new">
                Your hormones fluctuate throughout your cycle, affecting energy, strength, and recovery. FemWell adjusts your workout intensity and type based on your phase - 
                pushing harder during follicular/ovulation when you're strongest, and focusing on gentler movement during luteal/menstrual phases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="faq-item-new">
              <AccordionTrigger className="faq-trigger-new">
                What health conditions does FemWell support?
              </AccordionTrigger>
              <AccordionContent className="faq-content-new">
                FemWell is designed with PCOS, thyroid conditions, irregular cycles, hormonal acne, and mental health challenges in mind. 
                During onboarding, we learn about your specific conditions and tailor recommendations accordingly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="faq-item-new">
              <AccordionTrigger className="faq-trigger-new">
                Where do donations actually go?
              </AccordionTrigger>
              <AccordionContent className="faq-content-new">
                15% of profits are split between vetted organizations: PCOS Challenge Inc., Malala Fund, The Loveland Foundation, and The Body Positive. 
                We publish quarterly reports with donation receipts, amounts, and impact metrics. Full transparency, always.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6 bg-gradient-founder">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="founder-card-new"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <div className="founder-avatar-new mx-auto mb-6"></div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">From the Founder</h2>
              <p className="text-rose font-medium">Sarah Chen, Creator of FemWell</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                I didn't build FemWell to "fix" women. I built it because I was <strong>tired of apps that treated our bodies like problems to solve</strong>.
              </p>
              <p>
                After years of fighting my body with restrictive diets and brutal workout plans that ignored my cycle, I realized: 
                <strong className="text-rose-dark"> my body wasn't broken. The approach was.</strong>
              </p>
              <p>
                FemWell exists to help you work <em>with</em> your hormones, celebrate your strength at any size, 
                and understand that wellness is about <strong>how you feel</strong>, not how you look in someone else's mirror.
              </p>
              <p className="text-xl font-semibold text-gray-900 pt-4">
                You are powerful. You are enough. Let's build strength together. 🌸
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section-new py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Feel Powerful?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join thousands of women who chose strength over shame
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button size="lg" className="bg-white text-rose-dark px-10 py-7 text-lg rounded-2xl hover-lift font-semibold">
                <Apple className="w-5 h-5 mr-2" />
                Download Now - It's Free
              </Button>
            </div>
            <p className="text-sm text-white/70">No credit card required • Start in 2 minutes</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-new py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flower2 className="w-7 h-7 text-rose" />
                <span className="text-xl font-bold text-white">FemWell</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering women through cycle-synced wellness and body positivity.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="text-gray-400 hover:text-rose transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-rose transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose transition-colors">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-rose transition-colors">About</a></li>
                <li><a href="#impact" className="text-gray-400 hover:text-rose transition-colors">Our Impact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-rose transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 FemWell. Built with 💜 for women, by women. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;