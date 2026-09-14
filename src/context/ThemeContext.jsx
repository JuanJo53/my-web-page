import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);
const THEME_STORAGE_KEY = "jjfd-theme";

const getPreferredTheme = () => {
	if (typeof window === "undefined") {
		return "dark";
	}

	const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
	if (storedTheme === "light" || storedTheme === "dark") {
		return storedTheme;
	}

	return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(getPreferredTheme);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		window.localStorage.setItem(THEME_STORAGE_KEY, theme);
	}, [theme]);

	const handleToggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
	};

	const value = useMemo(
		() => ({
			theme,
			isDark: theme === "dark",
			handleToggleTheme
		}),
		[theme]
	);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
