const data = {
  sk: {
    helmet: {
      description:
        "Domovská stránka Tomáša Lukáča, učiteľ, programátor, študent ",
      title: "Lukac Tomas | Domov",
    },
    page: {
      callToAction: "Zisti viac",
      jobs: ["Programátor", "Lektor", "Webista", "Celoživotný učenec"],
      name: "Tomáš Lukáč",
      popUpText: "Použi šípky k navigácii",
      text: `Zapoj sa do súťaže o to, kto získa moju pozornosť čo najrýchlejšie. Rád hrám šachy, riešim problémy a hádanky. Poďme riešiť spolu...`,
    },
  },
  en: {
    helmet: {
      description: "Tomas Lukac Homepage teacher, programmer, student ",
      title: "Lukac Tomas | Home",
    },
    page: {
      callToAction: "Learn More",
      jobs: ["Programmer", "Teacher", "Web Developer", "Lifelong Lerner"],
      name: "Tomas Lukac",
      popUpText: "Use arrow keys to navigate",
      text: "Join the race to get my attention as fast as you can. I like playing chess, solving puzzles and mysteries, Let`s do that together...",
    },
  },
};

export const useData = (lang) => {
  return data[lang];
};
