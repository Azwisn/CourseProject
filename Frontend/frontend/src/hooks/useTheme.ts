import { useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState<"light" | "dark">(() => (localStorage.getItem("theme") as "light" | "dark") || "light");
    const toggle = () => { const next = theme === "light" ? "dark" : "light"; setTheme(next); localStorage.setItem("theme", next); document.documentElement.setAttribute("data-theme", next); };
    return { theme, toggle };
}
