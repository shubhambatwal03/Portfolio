import React from "react";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`py-20 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-amber-500 text-5xl font-bold mb-1.5 text-center">
          CONTACT
        </h2>
        <h5 className="text-center mb-12">Get in touch with me anytime.</h5>
        <form className={`$->{
          darkMode ? "bg-gray-700" : "bg-white"
        } p-8 rounded-lg shadow-md`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-4 py-2 rounded-md border ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-2 rounded-md border ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={`w-full px-4 py-2 rounded-md border ${
                  darkMode
                    ? "bg-gray-600 border-gray-500 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="message"
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`w-full px-4 py-2 rounded-md border ${
                darkMode
                  ? "bg-gray-600 border-gray-500 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              required
            ></textarea>
          </div>
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
