import { createThemeToggle } from "./ThemeToggle.js";
import { createFontSizeToggle } from "./FontSizeToggle.js";

document.getElementById("main-nav").append(createThemeToggle(), createFontSizeToggle());
