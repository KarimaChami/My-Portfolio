
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-5 right-5 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-md hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20 transition-all duration-300"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-300 transition-all" />
        ) : (
          <Moon className="h-5 w-5 text-purple-600 transition-all" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
