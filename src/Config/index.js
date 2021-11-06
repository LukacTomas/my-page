export const paths = {
  en: {
    Home: { route: "/en/home/", icon: "🏠", id: "Home" },
    //Blog: { route: "/en/blog/", icon: "📚", id: "Blog" },
    //Course: { route: "/en/course/", icon: "🎓", id: "Course" },
    Resume: { route: "/en/resume", icon: "📋", id: "Resume" },
  },
  sk: {
    Domov: { route: "/sk/home/", icon: "🏠", id: "Home" },
    //Blog: { route: "/sk/blog/", icon: "📚", id: "Blog" },
    //Kurz: { route: "/sk/course/", icon: "🎓", id: "Course" },
    Resumé: { route: "/sk/resume", icon: "📋", id: "Resume" },
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
