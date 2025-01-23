import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

const Page2 = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Load the external CSS dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://unpkg.com/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    if (!editorRef.current) {
      const templateHTML = `
        <header class="header">
          <nav class="nav">
            <h3 class="nav__logo">Rosie.dev</h3>
            <div class="nav__menu">
              <ul class="nav__list">
                <li><a href="#home" class="nav__link active-link">Home</a></li>
                <li><a href="#skills" class="nav__link">Skills</a></li>
                <li><a href="#connect" class="nav__link">Links</a></li>
                <li><a href="#contact" class="nav__button">Login</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <section class="hero" id="home">
          <div class="hero__container">
            <div class="hero__content">
              <h1 class="hero__title">
                Hi, I'm Rosie.
                <span class="hero__title-highlight">a full-stack web developer</span>
              </h1>
              <p class="hero__description">
                Hi, I'm Rosie — a full-stack developer specializing in creating
                robust and scalable web applications using MongoDB, Express,
                React, and Node.js.
              </p>
              <div class="hero__buttons">
                <a href="#connect" class="button">Let's Talk</a>
                <a href="#skills" class="button button--ghost">View Skills</a>
              </div>
            </div>
          </div>
        </section>
      `;

      const templateCSS = `
        
 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  background-color: #f8fafc;
  color: #0f172a;
  line-height: 1.6;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

/* ===== REUSABLE CLASSES ===== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 8rem 0;
}

.section__title {
  font-size: 2.75rem;
  color: #0f172a;
  text-align: center;
  margin-bottom: 4rem;
}


.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2563eb;
}

.nav__list {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav__link {
  font-weight: 700;
}

.nav__link:hover {
  border-bottom: 2px solid #2563eb;
  padding-bottom: 10px;
}

.nav__button {
  background-color: #2563eb;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
}

.nav__button:hover {
  background-color: #3b82f6;
}


.hero {
  padding: 8rem 0;
}

.hero__container {
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  align-items: center;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero__title {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero__title-highlight {
  color: #2563eb;
  display: block;
  margin-top: 0.5rem;
}

.hero__description {
  color: #64748b;
  margin-bottom: 2.5rem;
}

.hero__buttons {
  display: flex;
  gap: 1rem;
}

.button {
  background-color: #2563eb;
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
}

.button--ghost {
  background-color: transparent;
  border: 2px solid #2563eb;
  color: #2563eb;
}


.skills__container {
  max-width: 1000px;
  margin: 0 auto;
}

.skills__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skills__info {
  margin-bottom: 3rem;
  max-width: 500px;
}

.skills__subtitle {
  font-size: 2rem;
  color: #0f172a;
  margin-bottom: 1rem;
  font-weight: 600;
}

.skills__description {
  color: #64748b;
  line-height: 1.8;
}

.skills__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skills__card {
  background: linear-gradient(145deg, #ffffff, #e3e9ef);
  padding: 1.75rem;
  border-radius: 1.25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.skills__card-header {
  margin-bottom: 1rem;
}

.skills__card-title {
  font-size: 1.25rem;
  color: #0f172a;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.skills__card-description {
  color: #64748b;
  margin-bottom: 1.25rem;
}

.skills__icon {
  font-size: 2rem;
}

.skills__percentage-text {
  font-size: 1.5rem;
  font-weight: 600;
}

.skills__bar {
  height: 0.4rem;
  background-color: #e2e8f0;
  border-radius: 1rem;
  margin-top: auto;
}

.skills__percentage {
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  border-radius: 1rem;
}

.skills__image {
  margin-top: 150px;
}

.skills__image img {
  width: 90%;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

/* ===== FOOTER ===== */
.footer {
  background-color: #0f172a;
  color: #ffffff;
  padding: 4rem 0 2rem;
}

.footer__title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.footer__social {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer__link {
  font-size: 1.5rem;
}

.footer__copy {
  text-align: center;
  font-size: 0.875rem;
  color: #64748b;
}
      `;

      editorRef.current = grapesjs.init({
        container: "#grapesjs-editor",
        height: "100%",
        width: "100%",
        storageManager: { type: null },
        plugins: ["gjs-preset-webpage"],
        pluginsOpts: {
          "gjs-preset-webpage": {
            blocksBasicOpts: {
              blocks: ["link-block", "quote", "text-basic"],
            },
          },
        },
        components: templateHTML, // Load the template HTML
        //   components: templateHTML,
        style: templateCSS, // Inject the CSS directly

        blockManager: {
          appendTo: "#blocks",
          blocks: [
            {
              id: "section",
              label: "<b>Section</b>",
              content: "<section><h1>This is a section</h1></section>",
              category: "Basic",
            },
            {
              id: "image",
              label: "<b>Image</b>",
              content:
                '<img src="https://via.placeholder.com/350x150" alt="Placeholder"/>',
              category: "Basic",
            },
            {
              id: "button",
              label: "<b>Button</b>",
              content: '<button class="btn btn-primary">Click Me</button>',
              category: "Basic",
            },
          ],
        },
        styleManager: {
          sectors: [
            {
              name: "General",
              open: true,
              buildProps: ["width", "min-height", "padding"],
            },
            {
              name: "Typography",
              open: false,
              buildProps: [
                "font-family",
                "font-size",
                "font-weight",
                "color",
                "text-align",
              ],
              properties: [
                {
                  property: "text-align",
                  type: "radio",
                  options: [
                    { value: "left", className: "fa fa-align-left" },
                    { value: "center", className: "fa fa-align-center" },
                    { value: "right", className: "fa fa-align-right" },
                    { value: "justify", className: "fa fa-align-justify" },
                  ],
                },
              ],
            },
            {
              name: "Decorations",
              open: false,
              buildProps: ["border-radius", "box-shadow", "background-color"],
            },
          ],
        },
      });
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-50 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Folio</h1>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
          Your Profile
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-grow">
        {/* Sidebar for Blocks */}
        <div
          id="blocks"
          className="w-1/4 bg-gradient-to-b from-indigo-900 to-indigo-700 p-6 text-white"
        >
          <h2 className="text-lg font-semibold mb-4">Blocks</h2>
          {/* Blocks will automatically populate here */}
        </div>

        {/* GrapesJS Editor */}
        <div
          id="grapesjs-editor"
          className="flex-grow bg-white overflow-hidden"
        ></div>
      </div>
    </div>
  );
};

export default Page2;
