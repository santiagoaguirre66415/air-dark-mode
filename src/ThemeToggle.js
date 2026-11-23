import { getInitialTheme, applyTheme } from "./theme.js";

export function createThemeToggle() {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "nav-toggle";

  const render = (theme) => {
    const isDark = theme === "dark";
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", "Modo oscuro");
    button.textContent = isDark ? "🌙 Oscuro" : "☀️ Claro";
  };

  let theme = getInitialTheme();
  applyTheme(theme);
  render(theme);

  button.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    render(theme);
  });

  return button;
}
