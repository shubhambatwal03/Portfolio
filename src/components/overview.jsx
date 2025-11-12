const Overview = ({ darkMode }) => {
  const experiences = [
    {
      title: "Here's a little Background",
      icon: "👋",
      content: "Hi, I am Shubham Batwal, a Full-stack Web Developer. I am proficient in ReactJS and looking for new opportunities to implement and increase my skills in software development.",
    },
    {
      title: "Work Experience",
      icon: "💼",
      duration: "Fresher",
      content: "Looking for my first opportunity to work as a Full-stack Web Developer.",
    },
    {
      title: "Education",
      icon: "🎓",
      items: [
        {
          duration: "2022 - 2025",
          degree: "B.Sc. Computer Science",
          institution: "G.M.D. Arts Commerce Science College Sinnar, Nashik (Under Savitribai Phule Pune University)",
        },
        {
          duration: "2025 - 2027",
          degree: "M.Sc. Computer Science",
          institution: "PES's Modern Arts Commerce Science College Pune",
        },
      ],
    },
  ];

  return (
    <section
      id="overview"
      className={`py-20 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-amber-500 text-5xl font-bold mb-1.5 text-center">OVERVIEW</h2>
        <h5 className="text-center mb-12">Full-Stack Web Developer</h5>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-5 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                darkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{exp.icon}</span>
                <h3 className="text-2xl font-bold text-amber-500">
                  {exp.title}
                </h3>
              </div>

              {exp.duration && (
                <p className={`mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  {exp.duration}
                </p>
              )}

              {exp.content && (
                <p className={`${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  {exp.content}
                </p>
              )}

              {exp.items && (
                <div className="space-y-6 mt-4">
                  {exp.items.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-amber-500 pl-4">
                      <p className="font-semibold mb-1">{item.degree}</p>
                      <p className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {item.duration}
                      </p>
                      <p className={`${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}>
                        {item.institution}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;