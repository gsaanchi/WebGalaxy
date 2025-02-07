import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPrediction } from "./api";
import { useNavigate } from "react-router-dom";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

const Page2 = () => {
  const editorRef = useRef(null);
  const location = useLocation();
    const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleReimagine = () => {
    navigate("/page2", { state: { text } });
  };
  const [templateHTML, setTemplateHTML] = useState(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generated Website</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>loading...</h1>
        
    </body>
    </html>
    `);
  const [templateCSS, setTemplateCSS] = useState("");

  useEffect(() => {
    if (location.state?.text) {
      getPrediction(location.state.text).then((response) => {
        setTemplateHTML(response.html);
        setTemplateCSS(response.css);
        // Log the HTML and CSS to the console
        console.log("HTML content:\n", response.html);
        console.log("CSS content:\n", response.css);
      });
    }
  }, [location.state]);

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
      //const fetchFiles = async () => {
        // try {
        //   const htmlRes = await fetch(
        //     "http://127.0.0.1:5500/backend/generated/index.html"
        //   );
        //   const cssRes = await fetch(
        //     "http://127.0.0.1:5500/backend/generated/assets/css/style.css"
        //   );

        //   const htmlText = await htmlRes.text();
        //   const cssText = await cssRes.text();

        //   setTemplateHTML(htmlText);
        //   setTemplateCSS(cssText);

        //   // Log HTML and CSS to the console
        //   console.log("HTML Content:", htmlText);
        //   console.log("CSS Content:", cssText);
        // } catch (error) {
        //   console.error("Error fetching HTML/CSS files:", error);
        // }

      //};
      // fetchFiles();
      editorRef.current = grapesjs.init({
        container: "#grapesjs-editor",
        height: "100%",
        width: "90%",
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
        style: templateCSS, // Inject the CSS directly

        blockManager: {
          appendTo: "#blocks",

          blocks: [
            {
              id: "Video",
              label: `
                <div style="display: flex; align-items: center; gap: 8px;">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                    style="width: 24px; height: 24px;"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6.75v10.5a1.5 1.5 0 0 1-2.314 1.27l-4.398-2.75a1.5 1.5 0 0 1 0-2.54l4.398-2.75A1.5 1.5 0 0 1 15.75 6.75ZM19.5 4.5h-15a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5Z"
                    />
                  </svg>
                  <span><b>Video</b></span>
                </div>
              `,
              content: {
                type: "video",
                src: "https://www.example.com/sample-video.mp4",
              },
              category: "Media",
            },

            {
              id: "section",
              label: `
                <div style="display: flex; align-items: center; gap: 8px;">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>

                  <span>
                    <b>Section</b>
                  </span>
                </div>
              `,
              content:
                "<section><h1>You can insert a section here</h1></section>",
              category: "Basic",
            },
            {
              id: "image",
              label: `
                <div style="display: flex; align-items: center; gap: 8px;">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>

                  <span>
                    <b>Image</b>
                  </span>
                </div>
              `,
              content: {
                type: "image",
                src: "https://via.placeholder.com/350x150",
                attributes: {
                  placeholder: "Double click to upload",
                  class: "image-placeholder",
                },
              },

              category: "Media",
            },
            {
              id: "button",
              label: `
                <div style="display: flex; align-items: center; gap: 8px;">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                    />
                  </svg>

                  <span>
                    <b>Button</b>
                  </span>
                </div>
              `,
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
  }, [templateHTML, templateCSS]);
  const exportWebsite = () => {
    const editor = editorRef.current;

    if (!editor) {
      alert("Editor not initialized!");
      return;
    }

    // Export HTML and CSS content
    const htmlContent = editor.getHtml();
    const cssContent = editor.getCss();

    // Download the exported files
    downloadFile("index.html", htmlContent);
    downloadFile("style.css", cssContent);
  };

  // Helper function to download a file
  const downloadFile = (filename, content) => {
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="flex flex-col h-screen bg-[#1F1F1F]">
      {/* Header */}
      <div className="w-full bg-black py-4 px-6 flex justify-between items-center shadow-xl shadow-[#3f3f3f]">
        <h1 className="text-3xl font-bold text-white">WebGalaxy</h1>
        <button
          onClick={exportWebsite}
          className="px-6 py-3 bg-[#0049F3] hover:bg-blue-700 rounded-lg border-none text-white"
        >
          Download Code
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-grow">
        {/* Sidebar for Blocks */}
        <div
          // id="blocks"
          className="w-1/4 bg-[#1F1F1F] border-t-2 border-[#3f3f3f] text-white"
        >
          <div
            id="blocks"
            classname="grid grid-cols-2 gap-4 p-4 bg-[#2a2a2a] border border-gray-700 rounded-lg"
          ></div>

          <div className="w-[320px] bg-[#1F1F1F] border border-gray-500 rounded-lg p-4 space-y-4 mt-20">
            {/* Placeholder Text */}
            <p className="text-gray-400 text-sm">
              Not satisfied? Ask galaxy for modifications.
            </p>

            {/* Input Box */}
            <textarea
              className="w-full h-20 bg-[#1F1F1F] border-none text-white placeholder-gray-500 focus:outline-none resize-none"
              placeholder=""
              
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
              
            />

            {/* Reimagine Button */}
            <button 
            onClick={handleReimagine}
            className="w-full flex items-center justify-center gap-2 bg-[#0049F3] hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="white"
              >
                <path
                  d="M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              Reimagine
            </button>
          </div>
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