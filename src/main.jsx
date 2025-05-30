import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TooltipProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </TooltipProvider>
  </StrictMode>
);
