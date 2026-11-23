const STORAGE_KEY = "fontSize";

export function getInitialFontSize() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "normal" || saved === "large") return saved;
  } catch {
    /* localStorage no disponible */
  }
  return "normal";
}

export function applyFontSize(size) {
  document.documentElement.dataset.fontsize = size;
  try {
    localStorage.setItem(STORAGE_KEY, size);
  } catch {
    /* ignorar */
  }
}

export function createFontSizeToggle() {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "nav-toggle";

  const render = (size) => {
    const isLarge = size === "large";
    button.setAttribute("aria-pressed", String(isLarge));
    button.setAttribute("aria-label", "Tamaño de fuente");
    button.textContent = isLarge ? "🔠 Grande" : "🔤 Normal";
  };

  let size = getInitialFontSize();
  applyFontSize(size);
  render(size);

  button.addEventListener("click", () => {
    size = size === "large" ? "normal" : "large";
    applyFontSize(size);
    render(size);
  });

  return button;
}
