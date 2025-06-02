'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Shield, Target, Building, Users, Phone, Mail, CheckCircle, Star, ArrowRight, Sparkles, Menu, X, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ReactNode } from "react";
import ThemeToggle from "./components/ThemeToggle";

// Innovative Navigation Component
const InnovativeNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#', description: 'Página principal' },
    { name: 'Sobre Nós', href: '#', description: 'Nossa história e missão' },
    { name: 'Operações', href: '#', description: 'Estratégias estruturadas' },
    { name: 'Investimento', href: '#', description: 'Oportunidades de crescimento' },
    { name: 'Mercado', href: '#', description: 'Análises e tendências' },
    { name: 'Contato', href: '#', description: 'Fale conosco' }
  ];

  // Scroll detection for backdrop blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -50,
      y: 20
    },
    open: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    closed: {
      clipPath: "circle(0% at top right)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    open: {
      clipPath: "circle(150% at top right)",
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Fixed Header with Blur Effect */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-950/90 backdrop-blur-md shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo with enhanced styling */}
        <motion.div 
          className="relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <div className="absolute inset-0 bg-brand-orange/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative text-white text-3xl md:text-4xl font-display font-bold tracking-tight drop-shadow-lg px-4 py-2">
            K2CON
          </div>
        </motion.div>

        {/* Right Side - Three Buttons Aligned */}
        <div className="flex items-center gap-4">
          {/* 1. Fale Conosco Button */}
          <motion.button 
            className="hidden md:flex items-center gap-2 glass-premium text-white border border-white/20 hover:border-brand-orange/50 px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 group"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform" />
            <span className="text-sm">Fale Conosco</span>
          </motion.button>

          {/* 2. Theme Toggle Button */}
          <ThemeToggle />
          
          {/* 3. Menu Toggle Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-12 h-12 rounded-xl glass-premium border border-white/20 hover:border-brand-orange/50 flex items-center justify-center group transition-all duration-300 hover:scale-105"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-brand-orange/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative z-10"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </motion.header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={backgroundVariants}
          >
            {/* Sophisticated Background */}
            <div className="absolute inset-0 bg-gray-950/95 backdrop-blur-2xl">
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 via-transparent to-brand-orange-bright/10"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(245, 158, 11, 0.2) 0%, transparent 50%, rgba(252, 211, 77, 0.1) 100%)",
                    "linear-gradient(225deg, rgba(245, 158, 11, 0.1) 0%, transparent 50%, rgba(252, 211, 77, 0.2) 100%)",
                    "linear-gradient(45deg, rgba(245, 158, 11, 0.2) 0%, transparent 50%, rgba(252, 211, 77, 0.1) 100%)"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Floating orbs for ambient effect */}
              <div className="absolute top-20 right-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
              <div className="absolute bottom-32 left-20 w-96 h-96 bg-brand-orange-bright/5 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-orange/8 rounded-full blur-2xl" />
            </div>

            {/* Menu Content */}
            <motion.div 
              className="relative h-full flex items-center justify-center p-8"
              variants={menuVariants}
            >
              <div className="max-w-4xl w-full">
                {/* Menu Title */}
                <motion.div 
                  className="text-center mb-16"
                  variants={itemVariants}
                >
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                    Navegação
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-orange-bright mx-auto rounded-full" />
                </motion.div>

                {/* Navigation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="group relative"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="relative glass-premium p-8 rounded-2xl border border-white/10 hover:border-brand-orange/30 transition-all duration-300 overflow-hidden">
                        {/* Background effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/0 via-brand-orange/5 to-brand-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Content */}
                        <div className="relative flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-display font-semibold text-white mb-2 group-hover:text-brand-orange-bright transition-colors duration-300">
                              {item.name}
                            </h3>
                            <p className="text-gray-400 font-body text-sm group-hover:text-gray-300 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                          
                          <motion.div
                            className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange/30 transition-colors duration-300"
                            whileHover={{ rotate: 45, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          >
                            <ChevronRight className="w-4 h-4 text-brand-orange" />
                          </motion.div>
                        </div>

                        {/* Number indicator */}
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center">
                          <span className="text-xs font-bold text-brand-orange">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Optimized Floating Orbs Component for Dark Mode
const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large background orbs with enhanced dark mode animations */}
      <motion.div
        className="floating-orb w-96 h-96"
        style={{ 
          position: 'absolute',
          top: '10%', 
          right: '5%',
        }}
        animate={{
          y: [0, -30, 15, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.2, 0.4, 0.3, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="floating-orb-orange w-64 h-64"
        style={{ 
          position: 'absolute',
          bottom: '15%', 
          left: '8%',
        }}
        animate={{
          y: [0, 25, -10, 0],
          x: [0, 15, -8, 0],
          scale: [1, 0.9, 1.1, 1],
          opacity: [0.3, 0.5, 0.2, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Smaller accent orbs */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="floating-orb w-6 h-6"
          style={{
            position: 'absolute',
            top: `${25 + i * 20}%`,
            left: `${15 + i * 15}%`,
          }}
          animate={{
            y: [0, -15, 8, 0],
            opacity: [0.1, 0.3, 0.2, 0.1],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Animated Counter
const AnimatedCounter = ({ target, duration = 2, prefix = "", suffix = "" }: { target: number; duration?: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = target / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// Scroll-triggered reveal animation - Fixed TypeScript error
const ScrollReveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 relative overflow-hidden transition-colors duration-300">
      {/* Innovative Navigation */}
      <InnovativeNavigation />

      {/* Simplified Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mb-20 pt-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="K2CON Consórcios - Edifício Corporativo"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Simplified gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/15 via-transparent to-brand-orange-dark/20" />
        </div>

        {/* Simplified Hero Content - Only Title and Subtitle */}
        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-6 md:px-12">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight">
              Seu Patrimônio com
              <span className="block text-brand-orange-bright drop-shadow-lg">
                Inteligência
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-body max-w-4xl mx-auto text-gray-200 leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Transforme sua estratégia financeira com consórcios inteligentes e operações estruturadas para máxima rentabilidade
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with proper spacing */}
      <motion.main 
        className="relative z-10 px-6 md:px-12 bg-gray-50 dark:bg-gray-950"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Dynamic Grid Background - enhanced for both modes */}
        <div className="absolute inset-0 minimal-grid opacity-20 dark:opacity-30" />
        
        {/* Floating Orbs - Ambient Layer for content sections */}
        <FloatingOrbs />
        
        {/* Background Elements for content sections - optimized for both modes */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-brand-orange/15 to-brand-orange-bright/8 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-brand-orange/10 to-brand-orange-light/5 rounded-full blur-2xl opacity-50" />
        </div>

        {/* About Section with Premium Cards */}
        <section className="section-padding bg-white dark:bg-gray-900 rounded-2xl relative shadow-lg dark:shadow-none border border-gray-200 dark:border-transparent">
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-title font-display text-gray-900 dark:text-gray-100 mb-4 accent-line inline-block">
                  Sobre a K2CON
                </h2>
                <p className="text-subtitle font-body max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                  O consórcio é uma ferramenta estratégica que utilizamos para aquisição e investimento, 
                  permitindo ampliar o patrimônio de forma planejada e segura.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Segurança e Confiança",
                  description: "Operações estruturadas com foco em oferecer o melhor custo-benefício do mercado"
                },
                {
                  icon: TrendingUp,
                  title: "Crescimento Planejado",
                  description: "Desenvolvemos grupos exclusivos para empresas e investidores utilizarem o consórcio como alavancagem"
                },
                {
                  icon: Target,
                  title: "Resultados Maximizados",
                  description: "Modelo seguro e eficiente que cria oportunidades para otimizar recursos e maximizar resultados"
                }
              ].map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.2}>
        <motion.div 
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-lg dark:hover:shadow-xl hover:shadow-brand-orange/10 dark:hover:shadow-brand-orange/20 transition-all duration-300 hover:border-brand-orange/30"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange-bright rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-gray-100 mb-3">{feature.title}</h3>
                    <p className="font-body text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Options with Innovative Cards */}
        <section className="section-padding relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-title font-display text-gray-900 dark:text-gray-100 mb-4 accent-line inline-block">
                  Como Rentabilizar
                </h2>
                <p className="text-subtitle font-body max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                  Oferecemos múltiplas formas de rentabilização, todas pensadas para maximizar seus resultados
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  number: "01",
                  title: "Recompra Garantida",
                  description: "A K2con garante a recompra da cota no momento da contemplação por um valor previamente definido na adesão ao plano.",
                  featured: true
                },
                {
                  number: "02",
                  title: "Renda Passiva Imobiliária",
                  description: "Compra de imóvel atrelado à receita de aluguel. Indicamos empreendimentos que geram receita acima da média nacional.",
                  featured: false
                },
                {
                  number: "03",
                  title: "Aplicação 100% CDI",
                  description: "Aplicação automática do valor contemplado em investimento que rende 100% do CDI, com rendimentos que podem superar a parcela.",
                  featured: false
                },
                {
                  number: "04",
                  title: "Resgate em Espécie",
                  description: "Devido às correções anuais superiores à taxa de administração, mesmo no pior cenário você resgata valor superior ao investido.",
                  featured: true
                }
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
            <motion.div 
                    className={`${
                      item.featured 
                        ? 'bg-gradient-to-br from-brand-orange/10 to-brand-orange-bright/5 border-brand-orange/30 dark:from-brand-orange/20 dark:to-brand-orange-bright/10 dark:border-brand-orange/50' 
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                    } border backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg dark:hover:shadow-xl hover:shadow-brand-orange/10 dark:hover:shadow-brand-orange/20 transition-all duration-300 hover:border-brand-orange/40`}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="flex items-start gap-6">
          <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange-bright rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        {item.number}
          </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-gray-100 mb-3">{item.title}</h3>
                        <p className="font-body text-gray-600 dark:text-gray-300">{item.description}</p>
                        {item.featured && (
          <motion.div 
                            className="flex items-center mt-4 text-brand-orange text-sm font-medium"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            <span className="font-semibold">Destaque Premium</span>
                          </motion.div>
                        )}
                      </div>
            </div>
          </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Market Stats with Enhanced Cards for both modes */}
        <section className="section-padding bg-gray-900 dark:bg-gray-900 text-white rounded-2xl relative overflow-hidden shadow-2xl">
          {/* Background Elements - enhanced for both modes */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-10 right-10 w-64 h-64 bg-brand-orange rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-brand-orange-bright rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-orange-light rounded-full blur-3xl opacity-60"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-title font-display mb-4 text-white">
                  Mercado em Crescimento
                </h2>
                <p className="text-subtitle text-gray-300 max-w-3xl mx-auto">
                  Em 2024, o mercado de consórcios apresentou um forte crescimento, 
                  refletindo o aumento na procura por essa modalidade de investimento
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Users, 
                  value: 11, 
                  suffix: "+ milhões", 
                  label: "Participantes Ativos",
                  description: "Novo recorde histórico" 
                },
                { 
                  icon: TrendingUp, 
                  value: 7.8, 
                  suffix: "%", 
                  label: "Crescimento das Adesões",
                  description: "Janeiro a outubro 2024" 
                },
                { 
                  icon: Building, 
                  value: 200, 
                  prefix: "R$ ", 
                  suffix: "bi", 
                  label: "Volume Imobiliário",
                  description: "Créditos comercializados" 
                }
              ].map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 0.2}>
        <motion.div 
                    className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-gray-800/70 hover:border-brand-orange/30 transition-all duration-300"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
            <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange-bright rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="text-4xl font-display font-bold mb-2 text-brand-orange-bright">
                      <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
                    <div className="text-lg font-body font-medium mb-2 text-white">{stat.label}</div>
                    <div className="text-sm text-gray-400 font-body">{stat.description}</div>
            </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section with Premium Card */}
        <section className="section-padding relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <div>
                <h2 className="text-title font-display text-gray-900 dark:text-gray-100 mb-4 accent-line inline-block">
                  Atendimento Personalizado
                </h2>
                <p className="text-subtitle font-body text-gray-600 dark:text-gray-300 mb-8">
                  Oferecemos um atendimento personalizado, focado em compreender o perfil e as necessidades de cada cliente
                </p>
                
        <motion.div 
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 backdrop-blur-sm rounded-2xl p-8 inline-block hover:shadow-lg dark:hover:shadow-xl hover:shadow-brand-orange/10 dark:hover:shadow-brand-orange/20 transition-all duration-300 hover:border-brand-orange/30 max-w-md mx-auto"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-brand-orange to-brand-orange-bright rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <Phone className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="text-2xl font-display font-bold text-gray-900 dark:text-gray-100 mb-2">Sanzio Diniz</div>
                    <div className="text-gray-600 dark:text-gray-300 font-body mb-4 text-lg">Consultor Especializado</div>
                    <motion.a 
                      href="tel:+5531997682676" 
                      className="inline-flex items-center gap-3 text-brand-orange hover:text-brand-orange-bright transition-colors font-semibold text-lg bg-gray-50 dark:bg-gray-700/50 px-6 py-3 rounded-xl hover:bg-brand-orange/10 dark:hover:bg-brand-orange/10 border border-gray-200 dark:border-gray-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
                      <span className="font-body">+55 31 99768-2676</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  </div>
        </motion.div>
          </div>
            </ScrollReveal>
          </div>
        </section>
      </motion.main>

      {/* Enhanced Footer for both modes */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden border-t border-gray-800">
      <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="font-display text-2xl font-bold mb-4 text-brand-orange-bright">K2CON CONSÓRCIOS</div>
          <p className="font-body text-gray-400 mb-6">
            Seu patrimônio com inteligência
          </p>
          <div className="text-sm text-gray-500 font-body">
            © 2024 K2CON Consórcios. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
