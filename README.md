# Text-to-Website Generator
[Watch the Demo Video](https://drive.google.com/file/d/1DWafjOChBdZRsGwRChY4fefQVfb13tlW/view?usp=drive_link)

## Overview
The **Text-to-Website Generator** is a web-based application designed to convert natural language descriptions into fully functional, responsive websites in real-time. This tool is tailored for users with minimal or no coding experience, allowing them to create professional-looking websites effortlessly. By leveraging advanced **AI-driven natural language processing (NLP)** and **predefined UI templates**, the platform translates user inputs into structured front-end code.

The system also includes a **drag-and-drop editor** for customization, **re-prompting capabilities** for refining the generated layout, and a **secure authentication mechanism** to save and manage projects.

## Features

### 1. Intuitive No-Code Interface
- Users can describe their website requirements in **simple, natural language** without any prior coding knowledge.
- A streamlined **input field** allows seamless interaction.
- **Real-time processing** ensures users see immediate results.
- The system supports **contextual understanding** of descriptions, improving accuracy and generating precise layouts.

### 2. Dynamic Website Generation
- The AI automatically translates user descriptions into a **fully functional, mobile-responsive website**.
- **Predefined color palettes and layouts** allow users to select styles that match their vision.
- The platform provides **clean, well-structured front-end code** (HTML, CSS, JavaScript) for further customization.
- AI models ensure **semantic correctness** in generated layouts, reducing manual adjustments.

### 3. Drag-and-Drop Customization
- Users can refine and modify their generated websites using an **intuitive drag-and-drop editor**.
- Components like **navigation bars, images, text blocks, buttons, and forms** can be added or rearranged effortlessly.
- **Custom styling options** for fonts, colors, and element sizes allow enhanced design flexibility.
- **Live preview mode** enables users to visualize modifications in real-time before finalizing their design.

### 4. Re-Prompting and Fine-Tuning
- Users can iteratively **refine their prompts** to make incremental adjustments.
- Fine-tuning allows modification of:
  - **Layout structure** to suit specific needs.
  - **Theme and color palette** for aesthetic coherence.
  - **Font styles and sizes** to match brand identity.
  - **Image placements** for better visual storytelling.
- The AI intelligently **suggests improvements** based on previous refinements and user preferences.

### 5. Fast Generation
- Optimized processing ensures website creation **within 5 minutes**, maintaining efficiency and usability.
- Backend API operations and AI models are fine-tuned for **low latency and quick response**.
- The system efficiently *caches reusable components*, accelerating rendering times for frequently requested designs.

### 6. Login & Signup Page
- Users can create an account and **save their generated websites** for future editing.
- Authentication is securely handled via Firebase, ensuring **data privacy**.
- Stored projects allow users to:
  - **Resume unfinished website generation.**
  - **Edit and refine previous designs.**
  - **Download front-end code** for further development and deployment.

---

## Product UI & Installation Guide

### Prerequisites
Before installing and running the application, ensure you have the following installed:

- **Node.js** (for front-end dependencies)
- **npm** (Node Package Manager)
- **Python** (for AI model processing, if required)
- **Git** (for cloning the repository)

### Installation Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kriti-Product-Development/WebGalaxy.git
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the application:**
   ```bash
   npm start
   ```

### Usage
1. Open the application in a web browser.
2. **Sign up or log in** to manage and save website projects.
3. Enter a **plain-text description** of the website you want to generate.
4. Click **"Generate"** to create a website based on your input.
5. Use the **drag-and-drop editor** to customize elements.
6. Select from **prebuilt templates** for quick modifications.
7. Download the **generated front-end code** if needed.

---

## Architecture Overview
The system is built using **a modular architecture** that ensures scalability and efficiency.

### 1. User Authentication
- **Firebase Console** manages user accounts, ensuring secure login/signup and data persistence.

### 2. Frontend
- Built using **React.js** for a dynamic and responsive UI.
- Styled with **Tailwind CSS** for a clean and consistent design.
- Includes a **drag-and-drop editor** for post-generation customization.

### 3. Backend
- **Node.js with Express.js** handles API requests and data flow efficiently.
- **Flask (Python-based AI processing)** interprets user prompts and structures the website dynamically.

### 4. AI Model
- **NLP Model (Gemini AI)** processes user descriptions and converts them into structured HTML/CSS components.
- Uses a **pretrained language model** for **semantic interpretation** of website requirements, improving accuracy.

### 5. Database
- **Firebase Database** for **real-time project storage, authentication credentials, and retrieval**.
---

## Tech Stack

### Frontend:
- **React.js** → For interactive UI components.
- **Tailwind CSS** → For efficient, responsive styling.

### Backend:
- **Node.js + Express.js** → Handles API calls and input processing.
- **Python (Flask)** → Runs the AI processing engine.

### AI/NLP Model:
- **Gemini AI** → Translates user inputs into structured web content.

### Database:
- **Firebase** → Stores user data, authentication credentials, and saved projects.
---
## Model UI
### Overview
This AI-powered tool enables the automated generation and enhancement of website templates using Google Gemini models. By analyzing user input, it intelligently modifies HTML, CSS, and images to produce optimized, modern web designs.

### Features
- AI-driven template selection and customization.
- Google Gemini API integration for content extraction and transformation.
- Automated HTML structure improvements.
- Dynamic color palette generation based on themes.
- Intelligent image selection via Unsplash API.
- Regeneration of existing templates using alternative matches.

### Installation
#### Prerequisites
Ensure you have Python installed
Set up the environment variables by creating a .env file or using product_development.env.
Set up Pipenv and install dependencies by running:
  pipenv shell
To generate a fresh requirements.txt file from an existing environment:
  pip freeze > requirements.txt
  

### Environment Setup
Create a `.env` file or use `product_development.env`:
```env
GEMINI_API_KEY_1=your_key_here
GEMINI_API_KEY_2=your_key_here
GEMINI_API_KEY_3=your_key_here
UNSPLASH_API_KEY=your_key_here
```
Load variables in Python:
```python
from dotenv import load_dotenv
load_dotenv("product_development.env")
```

### How to Start Website Generation (this is where the model runs)
#### 1. 
To generate a website based on user input, run:
```bash
python website_generator_model.py
```
Then, enter the prompt specifying the website you want to generate. The generated website will be stored in the generated folder.
#### 2. Website Regeneration
For regenerating templates with an alternative match:
```bash
python update_regenerate.py
```
Here, the user will enter the prompt either to regenerate the whole website or update specific sections based on the prompt. The updated website will be saved in the generated folder, where the user can run and check the modifications.

---

## Known Issues & Bug
- **Complex user prompts** may generate incorrect layouts, requiring manual adjustments.
- **Drag-and-drop editor responsiveness** may have issues on mobile devices.
- **Performance optimization** is ongoing to further reduce generation time.
- The **image content** does not always align with the **text description**.
- Images occasionally **fail to load**, causing display issues.
- At times, **changing the colour palette** results in **insufficient contrast** between the text and the background, affecting readability.
- The Gemini server may occasionally experience **downtime**, disrupting content generation.
-	When the Gemini API key **rate limit is exceeded**, it may cause the system to stop responding properly.
---

## Future Enhancements

### 1. AI-Driven Layout Generation
- Improve AI algorithms to generate even more **dynamic, adaptive layouts**.
- Enhance **semantic processing** to interpret **complex user inputs more accurately**.

### 2. Multi-Page Website Support
- Allow generation of **multi-page websites** with **seamless navigation linking**.

### 3. Prebuilt Templates & Themes
- Expand the gallery of **pre-designed templates** with *customizable themes**.

### 4. Cloud Storage Integration
- Enable users to save projects **on the cloud** for easy retrieval and collaboration.

### 5. Backend Code Generation
- Extend AI capabilities to generate **backend code for forms, authentication, and database storage**.

### 6. Mobile App Version
- Develop a **mobile application** to allow users to generate websites **on the go**.

---

## Conclusion
The **Text-to-Website Generator** is a powerful tool that democratizes website creation. By leveraging AI and intuitive UI design, it enables users of all skill levels to generate *custom websites effortlessly. With **future enhancements** such as backend generation and multi-page support, this platform aims to become a comprehensive **no-code web development solution**.
