const data = {
  sk: {
    helmet: {
      description:
        "Hra s raketou a asteroidmi na ktorej pracujem pre moje deti",
      title: "Lukac Tomas | Game",
    },
    page: {},
  },
  en: {
    helmet: {
      description: "Game i am working on for my kids, rocket, steroids",
      title: "Lukac Tomas | Game",
    },
    page: {},
  },
};

export const useData = (lang) => {
  return data[lang];
};
