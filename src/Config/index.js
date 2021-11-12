export const paths = {
  en: {
    Home: {
      route: "/en/home/",
      icon: "🏠",
      id: "Home",
      title: "Home",
    },
    //Blog: { route: "/en/blog/", icon: "📚", id: "Blog", title:"Blog"  },
    //Course: { route: "/en/course/", icon: "🎓", id: "Course", title:"Course" },
    Game: {
      route: "/en/game",
      icon: "🎮",
      id: "Game",
      title: "Game",
    },

    Resume: {
      route: "/en/resume",
      icon: "📋",
      id: "Resume",
      title: "Resume",
    },
  },
  sk: {
    Domov: {
      route: "/sk/home/",
      icon: "🏠",
      id: "Home",
      title: "Domov",
    },
    //Blog: { route: "/sk/blog/", icon: "📚", id: "Blog" },
    //Kurz: { route: "/sk/course/", icon: "🎓", id: "Course" },
    Game: {
      route: "/sk/game",
      icon: "🎮",
      id: "Game",
      title: "Game",
    },
    Resumé: {
      route: "/sk/resume",
      icon: "📋",
      id: "Resume",
      title: "Resumé",
    },
  },
};

export const routes = [
  {
    path: "/en/home/",
    exact: true,
    component: <h1>en/home</h1>,
  },
  {
    path: "/en/resume/",
    exact: true,
    component: <h1>end/resume</h1>,
  },
  {
    path: "/sk/home/",
    exact: true,
    component: <h1>sk/home</h1>,
  },
  {
    path: "/sk/resume/",
    exact: true,
    component: <h1>sk/resume</h1>,
  },
];
