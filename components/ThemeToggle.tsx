"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border-gray-600 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "light" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-gray-900" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-gray-100" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
