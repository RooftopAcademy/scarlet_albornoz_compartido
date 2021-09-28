const toggleThemeBtn: HTMLButtonElement[] = Array.from(
    document.getElementsByClassName("dark-mode")
  ) as HTMLButtonElement[];
  
  toggleThemeBtn.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener("click", () => {
      let actualTheme: string = document.documentElement.getAttribute(
        "theme"
      ) as string;
      let targetTheme = "";
  
      actualTheme == "light" ? (targetTheme = "dark") : (targetTheme = "light");
  
      document.documentElement.setAttribute("theme", targetTheme);
    });
  });

export default toggleThemeBtn