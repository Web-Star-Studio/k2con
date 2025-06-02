"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug logging
  useEffect(() => {
    console.log("Theme Debug:", { theme, systemTheme, currentTheme });
  }, [theme, systemTheme, currentTheme]);

  if (!mounted) return null;

  const handleThemeToggle = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    console.log("Switching theme from", currentTheme, "to", newTheme);
    setTheme(newTheme);
  };

  return (
    <motion.button
      onClick={handleThemeToggle}
      className="relative w-12 h-12 rounded-xl glass-premium border border-white/20 hover:border-brand-orange/50 flex items-center justify-center group transition-all duration-300 hover:scale-105"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.35, duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-brand-orange/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div
        initial={false}
        animate={{ rotate: currentTheme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative z-10"
      >
        {currentTheme === "dark" ? (
          <Sun className="w-5 h-5 text-brand-orange" />
        ) : (
          <Moon className="w-5 h-5 text-brand-orange" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 