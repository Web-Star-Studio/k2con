'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Shield, Target, Building, Users, Phone, Mail, CheckCircle, Star, ArrowRight, Sparkles, Menu, X, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ReactNode } from "react";
import ThemeToggle from "./components/ThemeToggle";

// TypeWriter Component
const TypeWriter = ({ words, typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000 }: { 
  words: string[]; 
  typingSpeed?: number; 
  deletingSpeed?: number; 
  pauseTime?: number; 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentText !== word) {
        // Typing
        setCurrentText(word.substring(0, currentText.length + 1));
      } else if (!isDeleting && currentText === word) {
        // Pause before deleting
        setIsCompleted(true);
        setTimeout(() => {
          setIsDeleting(true);
          setIsCompleted(false);
        }, pauseTime);
      } else if (isDeleting && currentText !== '') {
        // Deleting
        setCurrentText(word.substring(0, currentText.length - 1));
      } else if (isDeleting && currentText === '') {
        // Move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-block relative">
      {currentText}
      <motion.span
        className="inline-block w-1 h-full bg-brand-orange ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ 
          duration: 0.8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ 
          height: '1em',
          verticalAlign: 'text-bottom'
        }}
      />
    </span>
  );
};

// Innovative Navigation Component
const InnovativeNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#inicio', description: 'Página principal' },
    { name: 'Sobre Nós', href: '#sobre', description: 'Nossa história e missão' },
    { name: 'Operações', href: '#operacoes', description: 'Estratégias estruturadas' },
    { name: 'Investimento', href: '#investimento', description: 'Oportunidades de crescimento' },
    { name: 'Mercado', href: '#mercado', description: 'Análises e tendências' },
    { name: 'Contato', href: '#contato', description: 'Fale conosco' }
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

  // Smooth scroll function
  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Header with Blur Effect */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-2 transition-all duration-300 ${
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
          <div className="relative flex items-center justify-center px-2 py-1">
            <Image
              src="/ChatGPT Image 2 de jun. de 2025, 12_56_39.png"
              alt="K2CON Consórcios"
              width={360}
              height={135}
              className="h-24 md:h-36 w-auto drop-shadow-lg"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side - Three Buttons Aligned */}
        <div className="flex items-center gap-4">
          {/* 1. Fale Conosco Button */}
          <motion.button 
            onClick={() => scrollToSection('#contato')}
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
                      onClick={() => scrollToSection(item.href)}
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
  const [scrollY, setScrollY] = useState(0);

  // Track scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply elegant custom cursor via CSS
  useEffect(() => {
    // Create SVG cursor data URI
    const cursorSVG = `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="%23f59e0b" stroke-width="2" fill="rgba(245,158,11,0.1)"/><circle cx="12" cy="12" r="2" fill="%23f59e0b"/></svg>`;
    
    // Apply custom cursor styles
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: url("${cursorSVG}") 12 12, auto !important;
      }
      
      a, button, [role="button"], input, textarea, select, .cursor-pointer {
        cursor: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='12' r='10' stroke='%23f59e0b' stroke-width='2.5' fill='rgba(245,158,11,0.2)'/><circle cx='12' cy='12' r='3' fill='%23f59e0b'/></svg>") 12 12, pointer !important;
      }
    `;
    
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

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

  // Words for typewriter effect
  const typewriterWords = [
    'Inteligência',
    'Estratégia',
    'Eficiência', 
    'Inovação',
    'Resultados',
    'Segurança'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 relative overflow-hidden transition-colors duration-300">
      {/* Innovative Navigation */}
      <InnovativeNavigation />

      {/* Clean Parallax Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden mb-20 pt-16">
        {/* Simplified Parallax Background Layers */}
        <div className="absolute inset-0">
          {/* Layer 1: Background Image - subtle movement */}
          <div 
            className="absolute inset-0 parallax-layer"
            style={{
              transform: `translate3d(0, ${scrollY * 0.5}px, 0)`,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              alt="K2CON Consórcios - Edifício Corporativo"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>

          {/* Layer 2: Clean Overlay - minimal gradient */}
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Layer 3: Subtle Brand Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent" />
        </div>

        {/* Clean Hero Content */}
        <div 
          className="relative z-20 text-center text-white max-w-5xl mx-auto px-6 md:px-12"
          style={{
            transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Clean Main Title */}
            <motion.h1 
              className="font-display font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="block text-4xl md:text-6xl lg:text-7xl text-white mb-2">
                Seu Patrimônio com
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl text-brand-orange font-black min-h-[1.2em]">
                <TypeWriter 
                  words={typewriterWords}
                  typingSpeed={120}
                  deletingSpeed={80}
                  pauseTime={2500}
                />
              </span>
            </motion.h1>
            
            {/* Clean Subtitle */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl font-body leading-relaxed text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Transforme sua estratégia financeira com{" "}
              <span className="text-brand-orange font-medium">
                consórcios inteligentes
              </span>{" "}
              e operações estruturadas para máxima rentabilidade
            </motion.p>
          </motion.div>
        </div>

        {/* Simple Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{
            transform: `translate(-50%, ${scrollY * 0.3}px)`,
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/60 cursor-pointer group"
          >
            <span className="text-sm font-body mb-2 group-hover:text-brand-orange transition-colors">
              Explore
            </span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-brand-orange/50 transition-colors">
              <motion.div
                className="w-1 h-3 bg-white/40 rounded-full mt-2 group-hover:bg-brand-orange transition-colors"
                animate={{ 
                  opacity: [0.4, 1, 0.4],
                  y: [0, 6, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content with clean design */}
      <motion.main 
        className="relative z-10 px-6 md:px-12 bg-gray-50 dark:bg-gray-950"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* About Section with Clean Cards */}
        <section id="sobre" className="section-padding bg-white dark:bg-gray-900 rounded-2xl relative shadow-lg dark:shadow-none border border-gray-200 dark:border-transparent">
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
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange-bright rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      whileHover={{ scale: 1.05 }}
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

        {/* Operations Section - NEW */}
        <section id="operacoes" className="section-padding relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-title font-display text-gray-900 dark:text-gray-100 mb-4 accent-line inline-block">
                  Nossas Operações
                </h2>
                <p className="text-subtitle font-body max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                  Estruturamos operações especializadas que transformam consórcios em ferramentas estratégicas 
                  de investimento e alavancagem patrimonial.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <ScrollReveal delay={0.2}>
                <div className="space-y-8">
                  {[
                    {
                      icon: Building,
                      title: "Grupos Exclusivos",
                      description: "Formação de grupos fechados com empresas e investidores qualificados para operações estruturadas"
                    },
                    {
                      icon: Target,
                      title: "Estratégias Personalizadas",
                      description: "Desenvolvimento de planos customizados baseados no perfil de risco e objetivos de cada cliente"
                    },
                    {
                      icon: TrendingUp,
                      title: "Alavancagem Inteligente",
                      description: "Utilização do consórcio como ferramenta de alavancagem para maximizar o potencial de investimento"
                    }
                  ].map((operation, index) => (
                    <motion.div 
                      key={operation.title}
                      className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-xl hover:shadow-brand-orange/10 dark:hover:shadow-brand-orange/20 transition-all duration-300"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange-bright rounded-lg flex items-center justify-center flex-shrink-0">
                        <operation.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          {operation.title}
                        </h3>
                        <p className="font-body text-gray-600 dark:text-gray-300">
                          {operation.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Right Content */}
              <ScrollReveal delay={0.4}>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg dark:shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Processo Estruturado
                  </h3>
                  <div className="space-y-6">
                    {[
                      { step: "01", title: "Análise de Perfil", description: "Avaliação detalhada do perfil de investimento e objetivos" },
                      { step: "02", title: "Estruturação", description: "Desenvolvimento da estratégia mais adequada ao seu caso" },
                      { step: "03", title: "Implementação", description: "Execução do plano com acompanhamento integral" },
                      { step: "04", title: "Monitoramento", description: "Acompanhamento contínuo e ajustes conforme necessário" }
                    ].map((process, index) => (
                      <div key={process.step} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {process.step}
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            {process.title}
                          </h4>
                          <p className="text-sm font-body text-gray-600 dark:text-gray-300">
                            {process.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Investment Options with Clean Cards */}
        <section id="investimento" className="section-padding relative">
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
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="flex items-start gap-6">
          <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange-bright rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        {item.number}
          </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-gray-100 mb-3">{item.title}</h3>
                        <p className="font-body text-gray-600 dark:text-gray-300">{item.description}</p>
                        {item.featured && (
          <div className="flex items-center mt-4 text-brand-orange text-sm font-medium">
                            <span className="inline-block w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                            <span className="font-semibold">Destaque Premium</span>
                          </div>
                        )}
                      </div>
            </div>
          </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Market Stats with Clean Cards */}
        <section id="mercado" className="section-padding bg-gray-900 dark:bg-gray-900 text-white rounded-2xl relative overflow-hidden shadow-2xl">
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
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
            <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange-bright rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      whileHover={{ scale: 1.05 }}
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

        {/* Contact Section with Clean Card */}
        <section id="contato" className="section-padding relative">
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
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-brand-orange to-brand-orange-bright rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <Phone className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="text-2xl font-display font-bold text-gray-900 dark:text-gray-100 mb-2">Sanzio Diniz</div>
                    <div className="text-gray-600 dark:text-gray-300 font-body mb-4 text-lg">Consultor Especializado</div>
                    <motion.a 
                      href="tel:+5531997682676" 
                      className="inline-flex items-center gap-3 text-brand-orange hover:text-brand-orange-bright transition-colors font-semibold text-lg bg-gray-50 dark:bg-gray-700/50 px-6 py-3 rounded-xl hover:bg-brand-orange/10 dark:hover:bg-brand-orange/10 border border-gray-200 dark:border-gray-600"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
          <p className="font-body text-gray-400 mb-6">
            Seu patrimônio com inteligência
          </p>
          
          {/* Development Credit Section */}
          <div className="border-t border-gray-700 pt-6 mb-6">
            <p className="text-sm font-body text-gray-500 mb-2">
              Desenvolvido com ❤️ por
            </p>
            <motion.a 
              href="https://www.webstar.studio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange-bright transition-colors font-semibold text-lg group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-body">WebStar Studio</span>
              <motion.div
                className="w-4 h-4 text-brand-orange group-hover:text-brand-orange-bright"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
              </motion.div>
            </motion.a>
          </div>
          
          <div className="text-sm text-gray-500 font-body">
            © 2024 K2CON Consórcios. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
