const Skills = ({ darkMode }) => {
  const skills = [
    {
      id: 1,
      name: "C Language",
      docs: "https://en.wikipedia.org/wiki/C_(programming_language)",
      iconUrl:
        "https://img.icons8.com/?size=100&id=0tuwKqWwti2E&format=png&color=000000",
    },
    {
      id: 2,
      name: "HTML5",
      docs: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
      iconUrl:
        "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      id: 3,
      name: "CSS3 / Tailwind",
      docs: "https://tailwindcss.com/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
    },
    {
      id: 4,
      name: "JavaScript",
      docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      iconUrl:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    },
    {
      id: 5,
      name: "React.js",
      docs: "https://reactjs.org/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
    },

    {
      id: 6,
      name: "Node.js",
      docs: "https://nodejs.org/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
    },
    {
      id: 7,
      name: "Express.js",
      docs: "https://expressjs.com/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000",
    },
    {
      id: 8,
      name: "Restful APIs",
      docs: "https://en.wikipedia.org/wiki/Overview_of_RESTful_API_Description_Languages",
      iconUrl:
        "https://img.icons8.com/?size=100&id=MX92yo3ozHJD&format=png&color=000000",
    },

    {
      id: 9,
      name: "Git",
      docs: "https://git-scm.com/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    },

    {
      id: 10,
      name: "GitHub",
      docs: "https://docs.github.com/en",
      iconUrl:
        "https://img.icons8.com/?size=100&id=63777&format=png&color=000000",
    },
    {
      id: 11,
      name: "MongoDB",
      docs: "https://www.mongodb.com/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000",
    },
    {
      id: 12,
      name: "Prompt Engineering",
      docs: "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html",
      iconUrl:
        "https://img.icons8.com/?size=100&id=43988&format=png&color=000000",
    },
    {
      id: 13,
      name: "Python",
      docs: "https://www.python.org/",
      iconUrl:
        "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
    },
  ];

  return (
    <section
      id="skills"
      className={`min-h-screen py-20 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      } transition-colors duration-300`}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto ">
        <header className="mb-8">
          <h2
            id="skills-heading"
            className="text-amber-500 text-5xl font-bold mb-1.5 text-center"
          >
            EXPERTISE
          </h2>
          <p className="text-center mb-12">
            I am proficient in performing tasks related to all of the listed
            skills below.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <article
              key={s.id}
              className={`flex flex-col justify-between p-4 rounded-lg border ${
                darkMode
                  ? "border-gray-800 bg-gray-850"
                  : "border-gray-200 bg-white"
              } shadow-sm hover:shadow-md transition`}
              aria-label={`${s.name} skill card`}
            >
              <div className="flex items-center gap-4">
                <a
                  href={s.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 transition"
                  title={`Open ${s.name} docs`}
                >
                  <img
                    src={s.iconUrl}
                    alt={`${s.name} logo`}
                    className="w-7 h-7 object-contain"
                    loading="lazy"
                  />
                </a>

                <div className="min-w-0">
                  <a
                    href={s.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-amber-500 transition"
                  >
                    {s.name}
                  </a>
                  {/* <p
                    className={`text-xs mt-0.5 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Proficiency
                  </p> */}
                </div>

                {/* <div className="ml-auto text-sm font-semibold">{s.level}%</div> */}
              </div>

              {/* <div className="mt-4" aria-hidden="true">
                <div
                  className={`w-full h-2 rounded-full overflow-hidden ${
                    darkMode ? "bg-gray-800" : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.level}%`,
                      background: "linear-gradient(90deg,#f59e0b,#06b6d4)",
                    }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs">
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Novice
                  </span>
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Expert
                  </span>
                </div>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
