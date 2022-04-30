const data = {
  sk: {
    helmet: {
      title: "Lukac Tomas | Resumé",
      description:
        "Tomas Lukac, resumé, cv, programovanie, React, Git a co ešte?",
    },
    title: "🚀Tomáš Lukáč",
    jobs: [
        {
          title: "Software Engineer",
          date:{
            from: 2022,
            to: "súčasnosť"
          },
          description: "Programovanie React, Java",
          supervisor: {
            name: "Siemens Healthineers",
            location: "Bratislava"
          }
        },
      {
        title: "Učiteľ",
        date: {
          from: 2012,
          to: 2022,
        },
        description:
          "Učiteľ na čiastočný úväzok pre odborné predmety ako elektronika, programovanie, pneumatika, hydraulika. Plný úväzok od septembra 2020",
        supervisor: {
          name: "SPŠ strojnícka",
          location: "Bratislava",
        },
      },
      {
        title: "Lektor / Tréner / Poradca",
        date: {
          from: 2013,
          to: 2020,
        },
        description:
          "Lektor a tréner a poradca pre kurzy ako pneumatika a elektropneumatika, hydraulika, elektronika, frekvenčné meniče a pod...",
        supervisor: {
          name: "Festo",
          location: "Bratislava",
        },
      },
    ],
    school: [
      {
        title: "Elektronika a rádioelektronika",
        date: {
          from: 2007,
          to: 2012,
        },
        description:
          "Bakalársky program elektronika na fakulte elektrotechnika a informatiky. Inžiniersky program rádioelektronika",
        supervisor: {
          name: "Slovenská technická univezita",
          location: "Bratislava",
        },
      },
    ],
  },

  en: {
    helmet: {
      title: "Lukac Tomas | Resume",
      description:
        "Tomas Lukac, resume, CV, programming, React, Git and what else?",
    },
    title: "Tomas Lukac",
    jobs: [
      {
        title: "Software Engineer",
        date:{
          from: 2022,
          to: "present"
        },
        description: "Programming in React, Java",
        supervisor: {
          name: "Siemens Healthineers",
          location: "Bratislava"
        }
      },
      {
        title: "Teacher",
        date: {
          from: 2012,
          to: 2022,
        },
        description:
          "Part-time teacher of vocational subject i.e.: electronics, programming, automation, mechatronics. Full time-teacher from 2020",
        supervisor: {
          name: "SPŠ strojnícka",
          location: "Bratislava",
        },
      },
      {
        title: "Lector / Trainer / Advaisor",
        date: {
          from: 2013,
          to: 2020,
        },
        description:
          "Lecturer / trainer/ advisor for courses pneumatics, hydraulics, electrotechnics, frequency converters etc.",
        supervisor: {
          name: "Festo",
          location: "Bratislava",
        },
      },
    ],
    school: [
      {
        title: "Elektronics and radioelektronics",
        date: {
          from: 2007,
          to: 2012,
        },
        description:
          "Bachelor degree in electronics at Faculty of Electrical Engineering. Master’s degree in radio-electronics at Faculty of Electrical Engineering",
        supervisor: {
          name: "Slovak Univesity of Technology",
          location: "Bratislava",
        },
      },
    ],
  },
};

export const useData = (lang) => {
  return data[lang];
};
