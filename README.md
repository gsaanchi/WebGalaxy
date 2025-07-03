# Text-to-Website Generator
[Watch the Demo Video](https://drive.google.com/drive/u/0/folders/1kUdMGM_qRKRFeiOPI_epeayjD0lZarUT)

![WhatsApp Image](https://github.com/user-attachments/assets/cb15104a-b60a-4a79-8645-c812b304d939)

## Overview
The **Text-to-Website Generator** is a web-based application designed to convert natural language descriptions into fully functional, responsive websites in real time. This tool is tailored for users with minimal or no coding experience, allowing them to create professional-looking websites effortlessly. By leveraging advanced **AI-driven natural language processing (NLP)** and **predefined UI templates**, the platform translates user inputs into structured front-end code.

The system also includes a **drag-and-drop editor** for customization, **re-prompting capabilities** for refining the generated layout, and a **secure authentication mechanism** to save and manage projects.

## Features

### 1. Intuitive No-Code Interface
- Users describe their website requirements in plain language.
- Real-time generation with contextual understanding.
- Supports flexible prompt structures and multiple page intents.

### 2. Dynamic Website Generation
- The AI translates natural language into a complete, responsive HTML/CSS/JS website.
- Predefined template structures and color palettes align with user vision.
- Code is modular, semantic, and editable post-generation.

### 3. Drag-and-Drop Customization
- Users can visually customize their sites post-generation.
- UI components like navbars, buttons, forms, and text blocks are editable.
- Real-time preview helps visualize changes during editing.

### 4. Re-Prompting and Fine-Tuning
- Users can revise prompts to iteratively refine their generated websites.
- Changes affect:
  - Layout structure
  - Theme and palette
  - Font styles
  - Image positioning
- Smart suggestions are generated based on previous versions.

### 5. Fast Generation
- Sites are generated within 5 minutes.
- Low-latency architecture with caching and modular backend components.

### 6. Login & Signup Page
- Firebase-based authentication.
- Projects can be saved, edited, resumed, and downloaded.

## AI/NLP Pipeline (Python-Driven Backend)

This project includes a powerful Python NLP pipeline that interprets user prompts and orchestrates the entire generation process:

### Prompt Understanding
- User input is processed using the **Google Gemini API** (multi-model setup).
- The system extracts structured details like:
  - Theme
  - Features
  - Purpose
- These are stored in `result.json` for reproducibility and debugging.

### Keyword Extraction & Template Matching
- Gemini is used to extract relevant keywords.
- These keywords are embedded using `SentenceTransformer (MiniLM-L6-v2)` and matched against template descriptions via cosine similarity.
- The best template is selected from a cloned GitHub repository and copied locally for customization.

### HTML & CSS Modification
- HTML:
  - Gemini transforms base HTML to match the extracted theme and features.
  - Ensures semantic sectioning, accessibility, and proper UI structure.
- CSS:
  - Gemini adjusts the styling based on dynamically generated palettes.
  - Color schemes are generated using `thecolorapi.com` based on site purpose and theme.

### Image Handling
- Relevant image descriptions are generated using Gemini from prompt context and page sections.
- Images are fetched via the **Unsplash API**, resized, and inserted using `BeautifulSoup`.
- Both inline <img> tags and CSS background-image fields are replaced.

### Output Assembly
- The final website is stored in the `/generated` folder with fully updated:
  - HTML
  - CSS
  - Images
- This version is immediately viewable, downloadable, and editable.

## Product UI & Installation Guide

### Prerequisites
- Node.js
- npm
- Python
- Git

### Installation Steps
```bash
git clone https://github.com/Kriti-Product-Development/WebGalaxy.git
cd frontend
npm install
npm start
```

## Usage
1. Open the app in your browser.
2. Sign up or log in.
3. Enter a plain-text website description.
4. Click "Generate".
5. Edit using the drag-and-drop builder if needed.
6. Download the full front-end code.

## Architecture Overview

### User Authentication
- Managed with Firebase Auth and Firebase DB for storing user projects.

### Frontend
- Built in React.js with Tailwind CSS for responsive UI.
- Drag-and-drop editing interface included.

### Backend
- Node.js + Express handles user interaction, requests, and routing.
- Python + Flask handles NLP processing and template modification.

### AI Model Integration
- Three Gemini models with separate API keys handle:
  - Prompt interpretation
  - Feature extraction
  - Style generation
- Semantic similarity handled with Hugging Face sentence-transformers.

### Database
- Firebase Database for storing saved projects, themes, and custom preferences.

## Tech Stack

### Frontend:
- React.js
- Tailwind CSS

### Backend:
- Node.js
- Express.js
- Python (Flask)

### AI/NLP:
- Google Gemini API
- Sentence Transformers (MiniLM-L6-v2)

### Other APIs:
- TheColorAPI
- Unsplash API

<<<<<<< HEAD
## Known Issues & Bugs
- Complex or ambiguous prompts may generate misaligned layouts.
- Image API occasionally fails or mismatches images to context.
- Mobile editor responsiveness has minor bugs.
- Palette contrast issues in some themes.
- Gemini server downtime may affect generation.
- API rate limits on Gemini may interrupt response pipelines.
=======
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
python website_generator_model1.py
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
>>>>>>> upstream/main

## Future Enhancements

1. Smarter semantic analysis for layout planning.
2. Multi-page support with automated menu linking.
3. Wider gallery of pre-designed templates.
4. Backend code generation (Flask/Django) for form handling.
5. Real-time cloud save and sync.
6. A mobile app version for website generation on the go.

## Conclusion

The **Text-to-Website Generator** is a robust no-code solution for instant website creation. It merges modern NLP, full-stack engineering, and intuitive UX design to empower anyone—regardless of coding experience—to build and deploy websites. With modular architecture and AI-driven transformation, the platform is well-positioned for further automation in layout, logic, and visual generation.
