export const paths = {
  en: {
    Home: {
      route: "/en/home/",
      icon: "๐ ",
      id: "Home",
      title: "Home",
    },
    //Blog: { route: "/en/blog/", icon: "๐", id: "Blog", title:"Blog"  },
    //Course: { route: "/en/course/", icon: "๐", id: "Course", title:"Course" },
    Game: {
      route: "/en/game",
      icon: "๐ฎ",
      id: "Game",
      title: "Game",
    },

    Resume: {
      route: "/en/resume",
      icon: "๐",
      id: "Resume",
      title: "Resume",
    },
  },
  sk: {
    Domov: {
      route: "/sk/home/",
      icon: "๐ ",
      id: "Home",
      title: "Domov",
    },
    //Blog: { route: "/sk/blog/", icon: "๐", id: "Blog" },
    //Kurz: { route: "/sk/course/", icon: "๐", id: "Course" },
    Game: {
      route: "/sk/game",
      icon: "๐ฎ",
      id: "Game",
      title: "Game",
    },
    Resumรฉ: {
      route: "/sk/resume",
      icon: "๐",
      id: "Resume",
      title: "Resumรฉ",
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
