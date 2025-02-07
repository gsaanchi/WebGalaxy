# import os
# import re
# import subprocess
# import requests
# import json
# import matplotlib.pyplot as plt
# from bs4 import BeautifulSoup
# import google.generativeai as genai
# from typing import Optional, List
# from PIL import Image
# import pickle
# from pathlib import Path
# from typing import Set, Dict
# from io import BytesIO
# from sentence_transformers import SentenceTransformer, util
# import shutil
# from dotenv import load_dotenv
# load_dotenv(dotenv_path="product_development.env")
# API keys and configuration



def process(user_prompt):
    
    import os
    import re
    import subprocess
    import requests
    import json
    import matplotlib.pyplot as plt
    from bs4 import BeautifulSoup
    import google.generativeai as genai
    from typing import Optional, List
    from PIL import Image
    import pickle
    from pathlib import Path
    from typing import Set, Dict
    from io import BytesIO
    from sentence_transformers import SentenceTransformer, util
    import shutil
    from dotenv import load_dotenv
    load_dotenv(dotenv_path="product_development.env")
    palette_file = './palette.json'
    template_used = './template_used_details.json'

    GEMINI_API_KEY_1 = os.getenv("GEMINI_API_KEY_1")
    GEMINI_API_KEY_2 = os.getenv("GEMINI_API_KEY_2")
    GEMINI_API_KEY_3 = os.getenv("GEMINI_API_KEY_3")
    UNSPLASH_API_KEY=os.getenv('UNSPLASH_API_KEY')
    MODEL_NAME_1 = "gemini-2.0-flash"
    MODEL_NAME_2="gemini-2.0-flash"
    MODEL_NAME_3="gemini-2.0-flash"

    genai.configure(api_key=GEMINI_API_KEY_1)
    model_1 = genai.GenerativeModel(MODEL_NAME_1)

    # Use a different configuration for model_2
    genai.configure(api_key=GEMINI_API_KEY_2)
    model_2 = genai.GenerativeModel(MODEL_NAME_2)

    # And another for model_3
    genai.configure(api_key=GEMINI_API_KEY_3)
    model_3 = genai.GenerativeModel(MODEL_NAME_3)

    # Repository configuration
    repo_url = "https://github.com/Kriti-Product-Development/all-templates"
    local_repo_path = "./local_repo1"

    local_repo_path = "./local_repo1"

    result_path = './result.json'
    prompt_file = './prompt.json'
    keywords_file = './keywords.json'
    current_directory = './'
    
    if os.path.exists(template_used):
        os.remove(template_used)
        print(f"Deleted old file: {template_used}")
    if os.path.exists(result_path):
        os.remove(result_path)
        print(f"Deleted old file: {result_path}")
    if os.path.exists(palette_file):
        os.remove(palette_file)
        print(f"Deleted old file: {palette_file}")
    if os.path.exists(prompt_file):
        os.remove(prompt_file)
        print(f"Deleted old file: {prompt_file}")
    if os.path.exists(keywords_file):
        os.remove(keywords_file)
        print(f"Deleted old file: {keywords_file}")
    template_used_details = {}
    def save_dictionary():
        with open(template_used, 'w', encoding='utf-8') as file:
            json.dump(template_used_details, file, indent=4)


    def load_dictionary():
        with open(template_used, "wb") as file:
            return pickle.load(file)
            

    def save_palette(palette, directory):
        os.makedirs(directory, exist_ok=True)
        with open(os.path.join(directory, 'palette.json'), 'w') as f:
            json.dump(palette, f)
    
    
    def save_prompt(prompt, directory):
        os.makedirs(directory, exist_ok=True)
        with open(os.path.join(directory, 'prompt.json'), 'w') as f:
            json.dump(prompt, f)  

    def save_result(result, directory):
        """
        Saves the result dictionary to a JSON file in the specified directory.
        
        Args:
            result (dict): The result dictionary to save.
            directory (str): Path to the directory where the file should be saved.
        
        Returns:
            None
        """
        # Ensure the directory exists
        os.makedirs(directory, exist_ok=True)

        # Define the file path
        file_path = os.path.join(directory, 'result.json')

        # Save the result to the file
        try:
            with open(file_path, 'w', encoding='utf-8') as file:
                json.dump(result, file, indent=4, ensure_ascii=False)
            print(f"✅ Result saved successfully to {file_path}")
        except Exception as e:
            print(f"❌ Error saving result: {e}")


    def save_keywords(keywords, directory):
        """
        Saves the extracted keywords to a JSON file in the specified directory.
        
        Args:
            keywords (list): List of extracted keywords.
            directory (str): Path to the directory where the file should be saved.
        
        Returns:
            None
        """
        # Ensure the directory exists
        os.makedirs(directory, exist_ok=True)

        # Define the file path
        file_path = os.path.join(directory, 'keywords.json')

        # Save keywords to the file
        try:
            with open(file_path, 'w', encoding='utf-8') as file:
                json.dump({"keywords": keywords}, file, indent=4, ensure_ascii=False)
            print(f"✅ Keywords saved successfully to {file_path}")
        except Exception as e:
            print(f"❌ Error saving keywords: {e}")

    # Clone or update the repository
    if not os.path.exists(local_repo_path):
        subprocess.run(["git", "clone", repo_url, local_repo_path], check=True)
    else:
        subprocess.run(["git", "-C", local_repo_path, "pull"], check=True)

    # Function to call the Gemini API
    def call_gemini_api(text):
        """
        Calls the Gemini API to analyze the input text.
        
        Args:
            text (str): The input text to analyze.

        Returns:
            str: The raw response text from the Gemini model.
        """
        prompt = (
            "Analyze the following text and extract the website's theme, features, and purpose. "
            "Provide the output in JSON format with 'theme', 'features', and 'purpose' as keys.\n\n"
            f"{text}"
        )

        try:
            # Generate content using the Gemini model
            response = model_2.generate_content(prompt)
            return response.text
        except Exception as e:
            return json.dumps({"error": str(e)})

    # User input and API call
    response = call_gemini_api(user_prompt)

    # Print raw API response
    print("\nRaw API Response:", response)
    json_text_cleaned = re.sub(r'```json|```', '', response).strip()
    # Attempt to parse the response as JSON

    try:
        # Attempt to parse the response as JSON
        parsed_data = json.loads(json_text_cleaned)
        print("\nExtracted Details (Raw JSON):", json.dumps(parsed_data, indent=4))

        # Safely extract fields only if parsing succeeds
        result = {
            'theme': parsed_data.get('theme', 'N/A'),
            'features': parsed_data.get('features', []),
            'purpose': parsed_data.get('purpose', 'N/A')
        }
        save_result(result, current_directory)
        print("\nExtracted Details (Formatted):", result)

    except json.JSONDecodeError as e:
        # Handle JSON parsing error
        print(f"\nJSON Decode Error: {e}")
        print("The response might not be valid JSON.")

        # Provide fallback for result in case parsing fails
        result = {
            'theme': 'N/A',
            'features': [],
            'purpose': 'N/A'
        }

        print("\nFallback Extracted Details (Parsing Failed):", result)


    def get_template_info(templates_folder):
        """
        Retrieve paths and README contents of templates.
        
        Args:
            templates_folder (str): Path to the folder containing templates
        
        Returns:
            dict: A dictionary with template details
        """
        template_details = {}
        
        for template_name in os.listdir(templates_folder):
            template_path = os.path.join(templates_folder, template_name)
            
            # Check if it's a directory
            if os.path.isdir(template_path):
                readme_path = os.path.join(template_path, 'README.md')
                
                # Initialize template info
                template_info = {
                    'path': template_path,
                    'readme_content': ''
                }
                
                # Read README.md if it exists
                if os.path.exists(readme_path):
                    with open(readme_path, 'r', encoding='utf-8') as readme_file:
                        template_info['readme_content'] = readme_file.read()
                
                template_details[template_name] = template_info
        
        return template_details

    def save_template_details(templates_folder, output_json_path):
        """
        Save template details to a JSON file.
        
        Args:
            templates_folder (str): Path to the folder containing templates
            output_json_path (str): Path where the JSON file will be saved
        """
        # Get template details
        template_details = get_template_info(templates_folder)
        
        # Save to JSON file
        with open(output_json_path, 'w', encoding='utf-8') as json_file:
            json.dump(template_details, json_file, indent=4, ensure_ascii=False)
        
        print(f"Template details saved to {output_json_path}")

    def print_json_content(file_path):
        try:
            with open(file_path, 'r') as file:
                data = json.load(file)
                print(json.dumps(data, indent=4))
        except FileNotFoundError:
            print(f"The file {file_path} does not exist.")
        except json.JSONDecodeError:
            print(f"The file {file_path} does not contain valid JSON.")
        except Exception as e:
            print(f"An error occured: {e}")
            
    # Example usage
    templates_folder = local_repo_path
    output_json_path = 'template_details.json'
    save_template_details(templates_folder, output_json_path)
    print_json_content(output_json_path)

    # def extract_keywords_with_gemini(prompt):
    #     """
    #     Extract keywords using Gemini API with improved error handling.
        
    #     Args:
    #         prompt (str): Input text to extract keywords from
        
    #     Returns:
    #         list: Extracted keywords
    #     """

    #     if not GEMINI_API_KEY_1:
    #         raise ValueError("Gemini API key is not set")
        
    #     headers = {'Content-Type': 'application/json'}
    #     formatted_text = (
    #         "Extract 5-7 most relevant keywords from this text. "
    #         "Return only a JSON list of keywords. Text to analyze: " + prompt
    #     )
        
    #     payload = {
    #         "contents": [{"parts": [{"text": formatted_text}]}]
    #     }
        
    #     try:
    #         response = model_2.generate_content(formatted_text)
    #         response_text = response.text.strip()
            
            
    #             # Clean and extract JSON-like content
    #         keywords_match = re.search(r'\[.*?\]', response_text, re.DOTALL)
    #         if keywords_match:
    #             try:
    #                 keywords = json.loads(keywords_match.group(0))
    #                 return keywords if isinstance(keywords, list) else []
    #             except json.JSONDecodeError:
    #                     # Fallback: extract keywords manually
    #                 keywords = re.findall(r'"([^"]*)"', keywords_match.group(0))
    #                 return keywords
            
    #         return []
        
    #     except Exception as e:
    #         print(f"Error extracting keywords: {e}")
    #         return []

    import re
    import json

    def extract_keywords_with_gemini(prompt):
        """
        Extract keywords using the configured Gemini model with improved error handling.
        
        Args:
            prompt (str): Input text to extract keywords from
        
        Returns:
            list: Extracted keywords
        """
        formatted_text = (
            "Extract 5-7 most relevant keywords from this text. "
            "Return only a JSON list of keywords. Text to analyze: " + prompt
        )

        try:
            # Call the already configured model
            response = model_2.generate_content(formatted_text)
            response_text = response.text.strip()

            # Clean and extract JSON-like content
            keywords_match = re.search(r'\[.*?\]', response_text, re.DOTALL)
            if keywords_match:
                try:
                    keywords = json.loads(keywords_match.group(0))
                    return keywords if isinstance(keywords, list) else []
                except json.JSONDecodeError:
                    # Fallback: extract keywords manually
                    keywords = re.findall(r'"([^"]*)"', keywords_match.group(0))
                    return keywords

            return []

        except Exception as e:
            print(f"Error extracting keywords: {e}")
            return []


    def find_best_matching_template(keywords, template_details):
        """
        Find the best matching template based on keyword similarity.
        
        Args:
            keywords (list): List of keywords
            template_details (dict): Dictionary of template details
        
        Returns:
            dict: Best matching template details
        """
        # Load a sentence transformer model
        model = SentenceTransformer('all-MiniLM-L6-v2')
        
        # Prepare descriptions for comparison
        descriptions = []
        template_names = []
        
        for template_name, details in template_details.items():
            # Combine README content and template name for matching
            description = f"{template_name} {details.get('readme_content', '')}"
            descriptions.append(description)
            template_names.append(template_name)
        
        # Encode keywords and template descriptions
        keyword_embedding = model.encode(" ".join(keywords), convert_to_tensor=True)
        template_embeddings = model.encode(descriptions, convert_to_tensor=True)
        
        # Compute cosine similarity
        similarities = util.cos_sim(keyword_embedding, template_embeddings)
        
        # Find the template with the highest similarity score
        best_match_index = similarities.argmax().item()
        best_match_name = template_names[best_match_index]
        
        return {
            'name': best_match_name,
            'details': template_details[best_match_name]
        }

    # Load template details from JSON
    with open('template_details.json', 'r', encoding='utf-8') as json_file:
        template_details = json.load(json_file)


    # Extract keywords using Gemini API
    print("Extracting keywords...")
    keywords = extract_keywords_with_gemini(user_prompt)
    save_keywords(keywords, current_directory)
    print("Extracted Keywords:", keywords)

    if not keywords:
        print("No keywords could be extracted. Please try rephrasing your request.")

    # Find the best-matching template
    print("Finding best matching template...")
    best_match = find_best_matching_template(keywords, template_details)
    template_path = best_match['details']['path']
    # Print results
    print("\nBest Matching Template:")
    print(f"Name: {best_match['name']}")
    print(f"Path: {best_match['details']['path']}")
    template_used_details[best_match['name']] = 1
    save_dictionary()


    def clean_and_copy_folder(source_path: str, destination_path: str) -> bool:
        """
        Cleans up the destination folder if it exists and copies new content from source.
        
        Args:
            source_path (str): Path to the source folder to copy from
            destination_path (str): Path to the destination folder
        
        Returns:
            bool: True if operation was successful, False otherwise
        """
        try:
            # Remove the destination folder and all its contents if it exists
            if os.path.exists(destination_path):
                print(f"Removing existing folder: {destination_path}")
                shutil.rmtree(destination_path)
                print("Existing folder removed successfully")
            
            # Copy the source folder to the destination
            print(f"Copying from {source_path} to {destination_path}")
            shutil.copytree(source_path, destination_path)
            print("Folder copied successfully")
            
            return True
            
        except Exception as e:
            print(f"An error occurred: {e}")
            return False

    # Usage example:food blog

    destination_folder = "./generated"
    if clean_and_copy_folder(template_path, destination_folder):
        print("Template files prepared successfully")
    else:
        print("Failed to prepare template files")

    def generate_prompt_template(result):
        """
        Generate a specific prompt template for website transformation.
        
        Args:
            result (dict): Dictionary containing theme, purpose, and features
        
        Returns:
            str: Generated prompt template
        """
        theme = result.get('theme', 'Generic')
        features = result.get('features', [])
        
        prompt = f"""
        Convert this HTML code into a modern {theme} website version.
        Make sure that:
        - The code is syntactically correct
        - The header, main and footer are all complete
        - Leave image tags as they are in the given template
        - None of the links are changed
        - don't change the link of the css file
        - Only the content within the tags should be changes
        Include:
        - Proper semantic HTML5 structure
        - {theme} appropriate content and sections
        - Responsive layout elements
        - Integration with the matching CSS
        - Navigation menu for a {theme.lower()} website
        
        Additional Specific Features:
        {''.join(f'    - {feature}' for feature in features)}
        
        Provide the complete, working HTML code. Here's the HTML code to transform:
        {{content}}
        """
        
        return prompt


    generated_prompt = generate_prompt_template(result)
    save_prompt(generated_prompt, current_directory)
    print(generated_prompt)


    import os
    import re

    def extract_html_code(response):
        """
        Extract only the HTML code from OpenAI's response using regex.
        Assumes the response is enclosed in <html> tags or inside markdown blocks.
        """
        html_pattern = re.compile(r"```html(.*?)```", re.DOTALL)  # Matches ```html ... ```
        match = html_pattern.search(response)
        
        if match:
            return match.group(1).strip()  # Extract content inside ```html ... ```
        return response.strip()  # If no match is found, return full response



    def send_html_to_gemini(content: str, prompt: str) -> Optional[str]:
        """
        Sends HTML content to Google Gemini and returns the modified version.
        
        Args:
            content (str): The original HTML content to be modified
            prompt (str): The instruction prompt for modifying the HTML
            api_key (str): Google Gemini API key
            
        Returns:
            Optional[str]: Modified HTML content or None if processing fails
        """
        try:
            # Configure the Gemini API

            
            # Construct the full prompt
            full_prompt = f"""
            You are an expert web developer. Please modify the following HTML according to these instructions:
            
            {prompt}
            
            Here is the HTML code:
            {content}
            
            Please return only the modified HTML code without any additional text or markdown formatting.
            """
            
            response = model_1.generate_content(full_prompt)
            
            # Extract and validate HTML
            if response.text:
                return extract_html_code(response.text)
            return None
            
        except Exception as e:
            print(f"Error processing HTML with Gemini: {e}")
            return None

    def clean_html_output(html_text: str) -> str:
        """
        Cleans the HTML output from Gemini by removing any potential markdown blocks
        or extra formatting.
        
        Args:
            html_text (str): Raw HTML text from Gemini
            
        Returns:
            str: Cleaned HTML text
        """
        # Remove markdown HTML blocks if present
        html_text = html_text.replace("```html", "").replace("```", "")
        
        # Remove any leading/trailing whitespace
        html_text = html_text.strip()
        
        return html_text

    def process_html_files_recursively(base_directory, prompt):
        """
        Recursively finds HTML files and processes them one at a time.
        Reads, modifies, and overwrites each HTML file.
        """
        for root, _, files in os.walk(base_directory):
            for file in files:
                if file.endswith('.html'):
                    file_path = os.path.join(root, file)
                    print(f"Processing HTML file: {file_path}")

                    try:
                        # Read original HTML content
                        with open(file_path, 'r', encoding='utf-8') as f:
                            html_content = f.read()

                        # Send to OpenAI for modification
                        updated_html = send_html_to_gemini(html_content, prompt)

                        if updated_html:
                            # Overwrite the original file
                            with open(file_path, 'w', encoding='utf-8') as f:
                                f.write(updated_html)
                            print(f"Updated and saved: {file_path}")
                        else:
                            print(f"Skipping file (no response): {file_path}")

                    except Exception as e:
                        print(f"Error processing file {file_path}: {e}")

    # Example Usage:
    html_directory = destination_folder  # Change this to your actual directory
    html_prompt = generated_prompt



    def fetch_base_color_from_gemini(theme: str, purpose) -> str:
        """
        Fetches a base color code from Gemini based on the given theme and purpose.

        Args:
            theme (str): The theme of the website.
            purpose (str): The purpose of the website.

        Returns:
            str: A HEX color code representing the base color.
        """
        # Define the prompt for the model
        prompt = (
            f"Provide only a single HEX color code (format: #RRGGBB) that best represents the theme "
            f"'{theme}' and is suitable for a website considering its purpose '{purpose}'. "
            "Ensure the color is aesthetically pleasing."
        )

        try:
            # Generate content using the Gemini model
            response = model_2.generate_content(prompt)

            # Extract the HEX color code from the response
            base_color = response.text.strip()
            if base_color.startswith("#") and len(base_color) == 7:
                return base_color
            else:
                print("Invalid HEX color code received. Returning fallback color.")
                return None  # Fallback color if response is not valid

        except Exception as e:
            print(f"Error fetching base color: {e}")
            return None  # Fallback color in case of an error
        
        
    # Function to fetch color palette using The Color API
    # def fetch_color_palette(base_color, mode="analogic", count=5):
    #     url = f"https://www.thecolorapi.com/scheme?hex={base_color.lstrip('#')}&mode={mode}&count={count}"
    #     try:
    #         response = requests.get(url)
    #         response.raise_for_status()
    #         return [color["hex"]["value"] for color in response.json().get("colors", [])]
    #     except Exception as e:
    #         print(f"Error fetching color palette: {e}")
    #         return []

    def fetch_color_palette(base_color, mode="analogic", count=5):
        if base_color is None:
            return None  # Return None if base_color is None
        
        url = f"https://www.thecolorapi.com/scheme?hex={base_color.lstrip('#')}&mode={mode}&count={count}"
        try:
            response = requests.get(url)
            response.raise_for_status()
            return [color["hex"]["value"] for color in response.json().get("colors", [])]
        except Exception as e:
            print(f"Error fetching color palette: {e}")
            return []

        
        
    def extract_css_code(response):
        """
        Extract only the CSS code from OpenAI's response using regex.
        Assumes the response is enclosed in ```css``` markdown blocks.
        """
        css_pattern = re.compile(r"```css(.*?)```", re.DOTALL)  # Matches ```css ... ```
        match = css_pattern.search(response)
        
        if match:
            return match.group(1).strip()  # Extract content inside ```css ... ```
        return response.strip() 

    def clean_css_output(css_text: str) -> str:
        """
        Cleans the CSS output from Gemini by removing any potential markdown blocks
        or extra formatting.
        
        Args:
            css_text (str): Raw CSS text from Gemini
            
        Returns:
            str: Cleaned CSS text
        """
        # Remove markdown CSS blocks if present
        css_text = css_text.replace("```css", "").replace("```", "")
        
        # Remove any leading/trailing whitespace
        css_text = css_text.strip()
        
        return css_text

    import google.generativeai as genai
    from typing import Optional, List

    def send_css_to_gemini(content: str, theme: str, purpose: str) -> Optional[str]:
        """
        Sends CSS content to Google Gemini and returns the modified version.
        
        Args:
            content (str): The original CSS content to be modified
            theme (str): Theme name to determine the base color
            api_key (str): Google Gemini API key
            
        Returns:
            Optional[str]: Modified CSS content or None if processing fails
        """
        try:
            # Configure the Gemini API
            
            
            # Get base color and palette
            base_color = fetch_base_color_from_gemini(theme, purpose)
            print(base_color)
            palette = fetch_color_palette(base_color)
            intial_palette = palette
            save_palette(intial_palette, current_directory)
            if not palette:
                palette = ["#f0a500", "#d62a32", "#f7f3e3", "#5e5b52", "#eddea4"]  # Fallback palette
            
            # Construct the prompt
            prompt = f"""
            CSS Color Palette Update Instructions:
            - Return the complete css file
            - Modify only color values, keeping structure intact
            - Use the color palette: {palette}
            - if palette ["#f0a500", "#d62a32", "#f7f3e3", "#5e5b52", "#eddea4"] dont change colors in css
            - Ensure good contrast for readability
            -please make sure heading and background have a contrast so i can see clearly what is written
            - Return only the CSS code without any markdown blocks or additional text
            
            Original CSS:
            {content}
            """
            
            # Generate content with Gemini
            response = model_1.generate_content(
                prompt
            )
            
            # Extract and validate CSS
            if response.text:
                return extract_css_code(response.text)
            return None
            
        except Exception as e:
            print(f"Error processing CSS with Gemini: {e}")
            return None

    purpose = result['purpose']

    def process_css_files_recursively(base_directory, theme):
        """
        Recursively finds CSS files and processes them one at a time.
        Reads, modifies, and overwrites each CSS file.
        """
        for root, _, files in os.walk(base_directory):
            for file in files:
                if file.endswith('.css'):
                    file_path = os.path.join(root, file)
                    print(f"Processing CSS file: {file_path}")

                    try:
                        # Read original CSS content
                        with open(file_path, 'r', encoding='utf-8') as f:
                            css_content = f.read()

                        # Send to OpenAI for modification
                        base_color = fetch_base_color_from_gemini(theme, purpose)
                        print(base_color)
                        palette = fetch_color_palette(base_color)
                        if palette:
                            updated_css = send_css_to_gemini(css_content, theme, purpose)
                        else:
                            updated_css=css_content
                            
                        if updated_css:
                            # Overwrite the original file
                            with open(file_path, 'w', encoding='utf-8') as f:
                                f.write(updated_css)
                            print(f"Updated and saved: {file_path}")
                        else:
                            print(f"Skipping file (no response): {file_path}")

                    except Exception as e:
                        print(f"Error processing file {file_path}: {e}")

    # Example Usage:
    css_directory = destination_folder  # Change this to your actual directory # Replace with your actual theme variable






    placeholder_url="https://unsplash.com/photos/a-snowboarder-is-going-down-a-snowy-trail-Jy0wsk4ZKzg"


    def fetch_image_url(query="random", index=0, width=400, height=300):
        ACCESS_KEY = UNSPLASH_API_KEY
        
        if index >= 10:
            index = index % 10
        
        if width > height:
            ori = "landscape"
        else:
            ori = "portrait"

        url = "https://api.unsplash.com/search/photos"
        params = {
            "query": query,
            "page": 1,
            "per_page": 10,
            "orientation": ori
        }
        headers = {
            "Authorization": f"Client-ID {ACCESS_KEY}"
        }

        try:
            response = requests.get(url, headers=headers, params=params)

            if response.status_code == 200:
                results = response.json().get('results', [])
                if results:
                    # Get the original image URL and append width and height parameters
                    image_url = results[index]['urls']['raw']
                    return f"{image_url}&w={width}&h={height}"
            else:
                print(f"Error fetching image from Unsplash: {response.status_code} - {response.text}")
        except Exception as e:
            print(f"Exception while fetching image: {e}")

        return placeholder_url

    def get_image_description( keywords, context="random"):
        try:
            
            prompt = f"""
            Generate a specific image search query based on this context and keywords:
            Context: {context}
            Keywords: {', '.join(keywords)}
            Keep the response to just 1-3 specific words that best match both the context and keywords.
            """
            
            # Generate content using Gemini
            response = model_3.generate_content(prompt)
            
            # Check the response structure and extract the keywords
            if hasattr(response, 'text') and response.text:
                return response.text.strip().lower()
            
            # Default fallback if no valid response is received
            word=keywords[0]
            return word
            
        except Exception as e:
            print(f"Error getting image description from Gemini: {e} now returning given theme as description")
            word=keywords[0]
            return word
    
        
    def get_image_properties_from_url(image_url):
        """
        Fetches and returns the properties of an image from a given URL, including dimensions.

        Parameters:
        - image_url (str): URL of the image.

        Returns:
        - dict: A dictionary containing image properties such as width, height, format, and mode.
        - None: If the image file cannot be processed.
        """
        try:
            # Fetch the image from the URL
            response = requests.get(image_url)
            if response.status_code == 200:
                # Open the image using PIL
                image = Image.open(BytesIO(response.content))
                
                # Get properties
                width, height = image.size
                
                # Return properties as a dictionary
                return {
                    "Width": width,
                    "Height": height,
                }
            else:
                print(f"Failed to fetch image. HTTP Status Code: {response.status_code}")
                return {
                    "Width": 400,
                    "Height": 300,
                }
        except Exception as e:
            print(f"An error occurred while processing the image in case of url returning default dimensions: {e}")
            return {
                    "Width": 400,
                    "Height": 300,
                }


    def get_image_properties(image_path):
        """
        Fetches and returns the properties of an image, including dimensions.

        Parameters:
        - image_path (str): Path to the local image file.

        Returns:
        - dict: A dictionary containing image properties such as width, height, format, and mode.
        - None: If the image file cannot be processed.
        """
        try:
            # Open the image using PIL
            with Image.open(image_path) as img:
                # Get properties
                width, height = img.size
                
                # Return properties as a dictionary
                return {
                    "Width": width,
                    "Height": height,
                }
        except Exception as e:
            print(f"An error occurred while processing the image: {e}")
            return None


    # Image file extensions to check for in href/content attributes
    image_extensions = {'.jpg', '.jpeg', '.png'}
        
    def is_image_url(url: str) -> bool:
        """Check if a URL points to an image based on extension or content type."""
        if not url:
            return False
        return any(url.lower().endswith(ext) for ext in image_extensions)

    
    def normalize_path(base_path: str, image_path: str) -> str:
        """
        Normalize and resolve the image path relative to the base path.
            
        Args:
            base_path: Base directory path.
            image_path: Relative or absolute image path.
                
        Returns:
            Normalized absolute path.
        """
        # Convert base path to a Path object
        base = Path(base_path)

        # Clean up the image path by removing any leading './' or similar patterns
        image_path = re.sub(r'^[./\\]+', '', image_path)

        # Combine base path and image path, then resolve to absolute path
        full_path = base / image_path

        # Normalize and return the absolute path as a string
        return str(full_path.resolve())


    def get_image_properties_safely(image_path: str) -> Optional[Dict]:
        """
        Safely get image properties with error handling.
            
        Args:
            image_path: Path to the image file
                
        Returns:
            Dictionary of image properties or None if error occurs
        """
        try:
            if re.match(r'^https?:\/\/', image_path):
                return get_image_properties_from_url(image_path)
            else:
                normalized_path = normalize_path(template_path, image_path)
                if os.path.exists(normalized_path):
                    return get_image_properties(normalized_path)
                else:
                    print(f"Warning: Image file not found: {normalized_path}")
                    return None
        except Exception as e:
            print(f"Error processing image {image_path}: {str(e)}")
            return None



    # def process_html_images(html_content: str, keywords: str) -> str:
    #     """
    #     Process HTML content to find and modify images from various attributes.
        
    #     Args:
    #         html_content: HTML content to process.
    #         keywords: Keywords to help generate image descriptions.
            
    #     Returns:
    #         Modified HTML content as string.
    #     """
    #     # Parse the HTML content using BeautifulSoup
    #     soup = BeautifulSoup(html_content, "html.parser")
        
    #     # Define attributes that might contain image URLs
    #     image_attributes = {
    #         "img": ["src", "data-src", "data-original", "data-lazy-src"],
    #         "link": ["href"],  # For image favicon links
    #         "meta": ["content"],  # For OpenGraph image meta tags
    #         "div": ["data-bg", "data-background"],  # Common background image attributes
    #         "a": ["href"]  # Links to image files
    #     }

    #     def extract_surrounding_text(element: BeautifulSoup) -> str:
    #         """Extract surrounding text from the element's parent to provide context."""
    #         if element.parent:
    #             return element.parent.get_text(strip=True)
    #         return ""

    #     def process_image_url(element: BeautifulSoup, attr: str) -> None:
    #         """Process and replace image URL in the given element and attribute."""
    #         image_path = element.get(attr, "")
            
    #         if not image_path or not (is_image_url(image_path) or attr == "src"):
    #             return
            
    #         # Get surrounding text for context
    #         surrounding_text = extract_surrounding_text(element)

    #         # Get image properties with error handling
    #         properties = get_image_properties_safely(image_path)
            
    #         if properties is None:
    #             # If we couldn't get properties, use default dimensions
    #             w, h = 800, 600  # Default dimensions
    #             print(f"Using default dimensions {w}x{h} for {image_path}")
    #         else:
    #             w = properties["Width"]
    #             h = properties["Height"]
            
    #         try:
    #             # Generate a description based on keywords and surrounding text
    #             description = get_image_description(keywords, surrounding_text)
    #             image_url = fetch_image_url(query=description, index=0, width=w, height=h)
    #             index += 1
                
    #             # Replace the old image URL with the new one
    #             element[attr] = image_url
    #         except Exception as e:
    #             print(f"Error replacing image {image_path}: {str(e)}")

    #     # Process each element type and its attributes
    #     for tag, attributes in image_attributes.items():
    #         for element in soup.find_all(tag):
    #             for attr in attributes:
    #                 process_image_url(element, attr)

    #     # Find and process inline CSS background images
    #     elements_with_style = soup.find_all(attrs={"style": True})
    #     for element in elements_with_style:
    #         style = element["style"]
    #         if "background-image" in style:
    #             # Extract URL from background-image property
    #             url_match = re.search(r'background-image:\s*url\([\'"]?(.*?)[\'"]?\)', style)
    #             if url_match and is_image_url(url_match.group(1)):
    #                 image_path = url_match.group(1)
    #                 properties = get_image_properties_safely(image_path)

    #                 if properties is None:
    #                     w, h = 800, 600  # Default dimensions
    #                 else:
    #                     w = properties["Width"]
    #                     h = properties["Height"]

    #                 try:
    #                     # Generate description based on keywords
    #                     description = get_image_description(keywords, extract_surrounding_text(element))
    #                     image_url = fetch_image_url(query=description, index=0, width=w, height=h)
    #                     index += 1
    #                     element["style"] = style.replace(url_match.group(1), image_url)
    #                 except Exception as e:
    #                     print(f"Error replacing background image {image_path}: {str(e)}")

    #     return str(soup)

    # def process_html_images(html_content: str, keywords: str) -> str:
    #     """
    #     Process HTML content to find and modify images from various attributes.
        
    #     Args:
    #         html_content: HTML content to process.
    #         keywords: Keywords to help generate image descriptions.
            
    #     Returns:
    #         Modified HTML content as string.
    #     """
    #     # Parse the HTML content using BeautifulSoup
    #     soup = BeautifulSoup(html_content, "html.parser")
    #     index = 0
        
    #     # Define attributes that might contain image URLs
    #     image_attributes = {
    #         "img": ["src", "data-src", "data-original", "data-lazy-src"],
    #         "link": ["href"],  # For image favicon links
    #         "meta": ["content"],  # For OpenGraph image meta tags
    #         "div": ["data-bg", "data-background"],  # Common background image attributes
    #         "a": ["href"]  # Links to image files
    #     }

    #     def extract_surrounding_text(element: BeautifulSoup) -> str:
    #         """Extract surrounding text from the element's parent to provide context."""
    #         if element.parent:
    #             return element.parent.get_text(strip=True)
    #         return ""

    #     def process_image_url(element: BeautifulSoup, attr: str) -> None:
    #         """Process and replace image URL in the given element and attribute."""
    #         nonlocal index
    #         image_path = element.get(attr, "")
            
    #         if not image_path or not (is_image_url(image_path) or attr == "src"):
    #             return
            
    #         try:
    #             # Get surrounding text for context
    #             surrounding_text = extract_surrounding_text(element)

    #             # Get image properties with error handling
    #             properties = get_image_properties_safely(image_path)
                
    #             if properties is None:
    #                 # If we couldn't get properties, use default dimensions
    #                 w, h = 800, 600  # Default dimensions
    #                 print(f"Using default dimensions {w}x{h} for {image_path}")
    #             else:
    #                 w = properties["Width"]
    #                 h = properties["Height"]
                
    #             # Generate a description based on keywords and surrounding text
    #             description = get_image_description(keywords, surrounding_text)
    #             image_url = fetch_image_url(query=description, index=index, width=w, height=h)
                
    #             # Update image attributes
    #             element[attr] = image_url
    #             if element.name == 'img':
    #                 element['class'] = element.get('class', []) + ['content-image']
    #                 element['alt'] = f"Image description: {description}"
    #                 element['loading'] = 'lazy'
    #                 element['width'] = str(w)
    #                 element['height'] = str(h)
                
    #             print(f"Updated image with URL: {image_url}")
    #             index += 1
                
    #         except Exception as e:
    #             print(f"Error replacing image {image_path}: {str(e)}")

    #     # Process each element type and its attributes
    #     for tag, attributes in image_attributes.items():
    #         for element in soup.find_all(tag):
    #             for attr in attributes:
    #                 if element.get(attr):  # Only process if attribute exists
    #                     process_image_url(element, attr)

    #     # Find and process inline CSS background images
    #     elements_with_style = soup.find_all(attrs={"style": True})
    #     for element in elements_with_style:
    #         try:
    #             style = element["style"]
    #             if "background-image" in style:
    #                 # Extract URL from background-image property
    #                 url_match = re.search(r'background-image:\s*url\([\'"]?(.*?)[\'"]?\)', style)
    #                 if url_match and is_image_url(url_match.group(1)):
    #                     image_path = url_match.group(1)
    #                     properties = get_image_properties_safely(image_path)

    #                     if properties is None:
    #                         w, h = 800, 600  # Default dimensions
    #                     else:
    #                         w = properties["Width"]
    #                         h = properties["Height"]

    #                     # Generate description based on keywords and context
    #                     description = get_image_description(keywords, extract_surrounding_text(element))
    #                     image_url = fetch_image_url(query=description, index=index, width=w, height=h)
                        
    #                     # Replace the background image URL
    #                     element["style"] = style.replace(
    #                         url_match.group(1),
    #                         image_url
    #                     )
                        
    #                     print(f"Updated background image with URL: {image_url}")
    #                     index += 1

    #         except Exception as e:
    #             print(f"Error replacing background image: {str(e)}")

    #     return str(soup)



    def process_html_images(html_content: str, keywords: str) -> str:
        """
        Process HTML content to find and modify images from various attributes.
        
        Args:
            html_content: HTML content to process.
            keywords: Keywords to help generate image descriptions.
            
        Returns:
            Modified HTML content as string.
        """
        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(html_content, "html.parser")
        index = 0
        
        # Define attributes that might contain image URLs
        image_attributes = {
        "img": ["src", "data-src", "data-original", "data-lazy-src"],
        "link": ["href"],  # Image links like favicons
        "meta": ["content"],  # For OpenGraph and similar meta tags
        "div": ["data-bg", "data-background", "style"],  # Background images
        "section": ["style"],  # Inline style-based background images
        "a": ["href"],  # Image file links
        "picture": ["srcset"],  # Responsive image sources
        "source": ["srcset"],  # Alternate image sources in <picture>
        "video": ["poster"],  # Preview image for videos
        "body": ["style"],  # Full-page background images
        "header": ["style"],  # Banner/hero background images
        "footer": ["style"]   # Footer background images
        }

        def extract_surrounding_text(element) -> str:
            """Extract surrounding text from the element's parent to provide context."""
            if element.parent:
                return element.parent.get_text(strip=True)
            return ""

        # def is_logo(element) -> bool:
        #     """Determine if the image is likely a logo based on attributes or surrounding text."""
        #     alt_text = element.get('alt', '').lower()
        #     surrounding_text = extract_surrounding_text(element).lower()
        #     skip_keywords = ['skip', 'logo', 'icon']
        #     return keyword in alt_text or keyword in surrounding_text for keyword in skip_keywords

        def is_logo(element) -> bool:
            """Determine if the image is likely a logo based on attributes or surrounding text."""
            alt_text = element.get('alt', '').lower()
            surrounding_text = extract_surrounding_text(element).lower()
            skip_keywords = ['skip', 'logo', 'icon']
            
            return any(keyword in alt_text or keyword in surrounding_text for keyword in skip_keywords)


        def process_image_url(element, attr: str) -> None:
            """Process and replace image URL in the given element and attribute."""
            nonlocal index
            image_path = element.get(attr, "")
            
            if not image_path or not (is_image_url(image_path) or attr == "src"):
                return
            
            try:
                # Get surrounding text for context
                surrounding_text = extract_surrounding_text(element)

                # Get image properties with error handling
                properties = get_image_properties_safely(image_path)
                
                if properties is None:
                    if is_logo(element):
                        w, h = 100, 100  # Default dimensions for logos
                        print(f"Using default logo dimensions {w}x{h} for {image_path}")
                    else:
                        w, h = 800, 600  # Default dimensions for other images
                        print(f"Using default dimensions {w}x{h} for {image_path}")
                else:
                    w = properties["Width"]
                    h = properties["Height"]
                
                # Generate a description based on keywords and surrounding text
                description = get_image_description(keywords, surrounding_text)
                image_url = fetch_image_url(query=description, index=index, width=w, height=h)
                
                # Update image attributes
                element[attr] = image_url
                if element.name == 'img':
                    element['class'] = element.get('class', []) + ['content-image']
                    element['alt'] = f"Image description: {description}"
                    element['loading'] = 'lazy'
                    element['width'] = str(w)
                    element['height'] = str(h)
                
                print(f"Updated image with URL: {image_url}")
                index += 1

                
            except Exception as e:
                print(f"Error replacing image {image_path}: {str(e)}")

        # Process each element type and its attributes
        for tag, attributes in image_attributes.items():
            for element in soup.find_all(tag):
                for attr in attributes:
                    if element.get(attr):  # Only process if attribute exists
                        process_image_url(element, attr)

        # Find and process inline CSS background images
        elements_with_style = soup.find_all(attrs={"style": True})
        for element in elements_with_style:
            try:
                style = element["style"]
                if "background-image" in style:
                    # Extract URL from background-image property
                    url_match = re.search(r'background-image:\s*url\([\'"]?(.*?)[\'"]?\)', style)
                    if url_match and is_image_url(url_match.group(1)):
                        image_path = url_match.group(1)
                        properties = get_image_properties_safely(image_path)

                        if properties is None:
                            if is_logo(element):
                                w, h = 150, 150  # Default dimensions for logos
                            else:
                                w, h = 800, 600  # Default dimensions for other images
                        else:
                            w = properties["Width"]
                            h = properties["Height"]

                        # Generate description based on keywords and context
                        description = get_image_description(keywords, extract_surrounding_text(element))
                        image_url = fetch_image_url(query=description, index=index, width=w, height=h)
                        
                        # Replace the background image URL
                        element["style"] = style.replace(
                            url_match.group(1),
                            image_url
                        )
                        
                        print(f"Updated background image with URL: {image_url}")
                        index += 1

            except Exception as e:
                print(f"Error replacing background image: {str(e)}")

        return str(soup)


    # def process_html_images(html_content: str, keywords: str) -> str:
    #     """
    #     Process HTML content to find and modify images from various attributes.
    #     Skips SVG and ICO logos while processing other images.
        
    #     Args:
    #         html_content: HTML content to process.
    #         keywords: Keywords to help generate image descriptions.
            
    #     Returns:
    #         Modified HTML content as string.
    #     """
    #     # Parse the HTML content using BeautifulSoup
    #     soup = BeautifulSoup(html_content, "html.parser")
    #     index = 0
        
    #     image_attributes = {
    #     "img": ["src", "data-src", "data-original", "data-lazy-src"],
    #     "link": ["href"],  # Image links like favicons
    #     "meta": ["content"],  # For OpenGraph and similar meta tags
    #     "div": ["data-bg", "data-background", "style"],  # Background images
    #     "section": ["style"],  # Inline style-based background images
    #     "a": ["href"],  # Image file links
    #     "picture": ["srcset"],  # Responsive image sources
    #     "source": ["srcset"],  # Alternate image sources in <picture>
    #     "video": ["poster"],  # Preview image for videos
    #     "body": ["style"],  # Full-page background images
    #     "header": ["style"],  # Banner/hero background images
    #     "footer": ["style"]   # Footer background images
    #     }

    #     def extract_surrounding_text(element) -> str:
    #         """Extract surrounding text from the element's parent to provide context."""
    #         if element.parent:
    #             return element.parent.get_text(strip=True)
    #         return ""

    #     # def is_skip(element) -> bool:
    #     #     """Determine if an image is a logo, social media icon, or unnecessary."""
    #     #     alt_text = (element.get('alt') or '').lower()
    #     #     src_path = (element.get('src') or '').lower()
    #     #     aria_label = (element.get('aria-label') or '').lower()
    #     #     surrounding_text = extract_surrounding_text(element).lower()

    #     #     skip_keywords = ['skip', 'logo', 'icon']
    #     #     social_media_keywords = ['facebook', 'twitter', 'linkedin', 'instagram', 'youtube', 'pinterest']
            
    #     #     return any(keyword in alt_text or keyword in surrounding_text or keyword in aria_label for keyword in skip_keywords) or \
    #     #         any(keyword in src_path for keyword in social_media_keywords)
        
    #     def is_skip(element) -> bool:
    #         """Determine if an image is a logo, social media icon, or unnecessary."""
    #         alt_text = (element.get('alt') or '').lower()
    #         src_path = (element.get('src') or '').lower()
    #         aria_label = (element.get('aria-label') or '').lower()
    #         surrounding_text = extract_surrounding_text(element).lower()

    #         # Keywords for detecting logos, icons, and unnecessary elements
    #         skip_keywords = ['skip']
    #         social_media_keywords = ['facebook', 'twitter', 'linkedin', 'instagram', 'youtube', 'pinterest', 'snapchat', 'tiktok']

    #         # Detect small images (< 150x150) if properties exist
    #         properties = get_image_properties_safely(src_path)
    #         is_small_image = properties and (properties["Width"] < 150 or properties["Height"] < 150)

    #         # Exclude logos, branding images, small images, and social media icons
    #         return any(keyword in alt_text or keyword in surrounding_text or keyword in aria_label for keyword in skip_keywords) or \
    #             any(keyword in src_path for keyword in social_media_keywords) or is_small_image
                
    #     def is_logo(element) -> bool:
    #         """Determine if the image is likely a logo based on attributes or surrounding text."""
    #         alt_text = element.get('alt', '').lower()
    #         surrounding_text = extract_surrounding_text(element).lower()
    #         return 'logo' in alt_text or 'logo' in surrounding_text


    #     def is_protected_format(image_path: str) -> bool:
    #         """Check if the image is an SVG or ICO based on file extension or content type."""
    #         if not image_path:
    #             return False
    #         # Check file extensions
    #         if image_path.lower().endswith(('.svg', '.ico')):
    #             return True
    #         # Check if it's a data URL for SVG
    #         if image_path.startswith(('data:image/svg+xml', 'data:image/x-icon')):
    #             return True
    #         return False

    #     def should_skip_image(element, image_path: str) -> bool:
    #         """Determine if the image should be skipped (SVG or ICO logos or social media icon)."""
    #         return is_skip(element) or is_protected_format(image_path)

    #     def process_image_url(element, attr: str) -> None:
    #         """Process and replace image URL in the given element and attribute."""
    #         nonlocal index
    #         image_path = element.get(attr, "")
            
    #         if not image_path or not (is_image_url(image_path) or attr == "src"):
    #             return
            
    #         # Skip SVG and ICO logos
    #         if should_skip_image(element, image_path):
    #             print(f"Skipping protected logo format: {image_path}")
    #             return

    #         try:
    #             # Get surrounding text for context
    #             surrounding_text = extract_surrounding_text(element)

    #             # Get image properties with error handling
    #             properties = get_image_properties_safely(image_path)
                
    #             if properties is None:
    #                 if is_logo(element):
    #                     w, h = 100, 100  # Default dimensions for logos
    #                     print(f"Using default logo dimensions {w}x{h} for {image_path}")
    #                 else:
    #                     w, h = 400, 300  # Default dimensions for other images
    #                     print(f"Using default dimensions {w}x{h} for {image_path}")
    #             else:
    #                 w = properties["Width"]
    #                 h = properties["Height"]
                
    #             # Generate a description based on keywords and surrounding text
    #             description = get_image_description(keywords, surrounding_text)
    #             image_url = fetch_image_url(query=description, index=index, width=w, height=h)
                
    #             # Update image attributes
    #             element[attr] = image_url
    #             if element.name == 'img':
    #                 element['class'] = element.get('class', []) + ['content-image']
    #                 element['alt'] = f"Image description: {description}"
    #                 element['loading'] = 'lazy'
    #                 element['width'] = str(w)
    #                 element['height'] = str(h)
                
    #             print(f"Updated image with URL: {image_url}")
    #             index += 1

    #         except Exception as e:
    #             print(f"Error replacing image {image_path}: {str(e)}")

    #     # Process each element type and its attributes
    #     for tag, attributes in image_attributes.items():
    #         for element in soup.find_all(tag):
    #             for attr in attributes:
    #                 if element.get(attr):  # Only process if attribute exists
    #                     process_image_url(element, attr)

    #     # Find and process inline CSS background images
    #     elements_with_style = soup.find_all(attrs={"style": True})
    #     for element in elements_with_style:
    #         try:
    #             style = element["style"]
    #             if "background-image" in style:
    #                 # Extract URL from background-image property
    #                 # url_match = re.search(r'background-image:\s*url\([\'"]?(.*?)[\'"]?\)', style)
    #                 url_match = re.search(r'background-image:\s*url\(["\']?(.*?)["\']?\)', style, re.IGNORECASE)

    #                 if url_match and is_image_url(url_match.group(1)):
    #                     image_path = url_match.group(1)
                        
    #                     # Skip SVG and ICO logos in background images
    #                     if should_skip_image(element, image_path):
    #                         print(f"Skipping protected logo format in background: {image_path}")
    #                         continue

    #                     properties = get_image_properties_safely(image_path)

    #                     if properties is None:
    #                         w, h = 400, 300  # Default dimensions for other images
    #                     else:
    #                         w = properties["Width"]
    #                         h = properties["Height"]

    #                     # Generate description based on keywords and context
    #                     description = get_image_description(keywords, extract_surrounding_text(element))
    #                     image_url = fetch_image_url(query=description, index=index, width=w, height=h)
                        
    #                     # Replace the background image URL
    #                     element["style"] = style.replace(
    #                         url_match.group(1),
    #                         image_url
    #                     )
                        
    #                     print(f"Updated background image with URL: {image_url}")
    #                     index += 1

    #         except Exception as e:
    #             print(f"Error replacing background image: {str(e)}")

    #     return str(soup) 

    # def process_html_images(html_content: str, keywords: str) -> str:
    #     """
    #     Process HTML content to find and modify images from various attributes.
    #     Skips images only if the word 'skip' is present in the surrounding text.
        
    #     Args:
    #         html_content: HTML content to process.
    #         keywords: Keywords to help generate image descriptions.
            
    #     Returns:
    #         Modified HTML content as string.
    #     """
    #     soup = BeautifulSoup(html_content, "html.parser")
    #     index = 0
        
    #     image_attributes = {
    #         "img": ["src", "data-src", "data-original", "data-lazy-src"],
    #         "link": ["href"],  # Image links like favicons
    #         "meta": ["content"],  # For OpenGraph and similar meta tags
    #         "div": ["data-bg", "data-background", "style"],  # Background images
    #         "section": ["style"],  # Inline style-based background images
    #         "a": ["href"],  # Image file links
    #         "picture": ["srcset"],  # Responsive image sources
    #         "source": ["srcset"],  # Alternate image sources in <picture>
    #         "video": ["poster"],  # Preview image for videos
    #         "body": ["style"],  # Full-page background images
    #         "header": ["style"],  # Banner/hero background images
    #         "footer": ["style"]   # Footer background images
    #     }

    #     def extract_surrounding_text(element) -> str:
    #         """Extract surrounding text from the element's parent to provide context."""
    #         if element.parent:
    #             return element.parent.get_text(strip=True).lower()
    #         return ""

    #     def is_protected_format(image_path: str) -> bool:
    #         """Check if the image is an SVG or ICO based on file extension or content type."""
    #         if not image_path:
    #             return False
    #         # Check file extensions
    #         if image_path.lower().endswith((".svg", ".ico")):
    #             return True
    #         # Check if it's a data URL for SVG or ICO
    #         if image_path.startswith(("data:image/svg+xml", "data:image/x-icon")):
    #             return True
    #         return False

    #     def should_skip_image(element) -> bool:
    #         """Determine if the image should be skipped based on the presence of 'skip' in surrounding text."""
    #         surrounding_text = extract_surrounding_text(element)
    #         alt_text = element.get('alt', '').lower()
    #         aria_label = element.get('aria-label', '').lower()
    #         return "skip" in surrounding_text or "skip" in alt_text or "skip" in aria_label
        
    #     def process_image_url(element, attr: str) -> None:
    #         """Process and replace image URL in the given element and attribute."""
    #         nonlocal index
    #         image_path = element.get(attr, "")
            
    #         if not image_path:
    #             return
            
    #         # Skip images only if 'skip' is found in surrounding text or if they are in protected format
    #         if should_skip_image(element) or is_protected_format(image_path):
    #             print(f"Skipping image due to 'skip' keyword or protected format: {image_path}")
    #             return
            
    #         try:
    #             surrounding_text = extract_surrounding_text(element)
    #             properties = get_image_properties_safely(image_path)
                
    #             if properties is None:
    #                 w, h = 400, 300  # Default dimensions
    #             else:
    #                 w = properties["Width"]
    #                 h = properties["Height"]
                
    #             description = get_image_description(keywords, surrounding_text)
    #             image_url = fetch_image_url(query=description, index=index, width=w, height=h)
                
    #             element[attr] = image_url
    #             if element.name == 'img':
    #                 element['class'] = element.get('class', []) + ['content-image']
    #                 element['alt'] = f"Image description: {description}"
    #                 element['loading'] = 'lazy'
    #                 element['width'] = str(w)
    #                 element['height'] = str(h)
                
    #             print(f"Updated image with URL: {image_url}")
    #             index += 1
    #             if index > 30:
    #                 index = index % 30

    #         except Exception as e:
    #             print(f"Error replacing image {image_path}: {str(e)}")

    #     # Process each element type and its attributes
    #     for tag, attributes in image_attributes.items():
    #         for element in soup.find_all(tag):
    #             for attr in attributes:
    #                 if element.get(attr):
    #                     process_image_url(element, attr)

    #     return str(soup)

    def extract_and_update_images(html_content, keywords):
        """
        Extracts all <img> tags from the HTML content, updates their attributes based on the given keywords,
        and returns the modified HTML content.
        
        Args:
            html_content (str): The original HTML content.
            keywords (list): List of keywords to influence image processing.
        
        Returns:
            str: Updated HTML content.
        """
        updated_html = process_html_images(html_content, keywords)  # Modify images using your function
        return updated_html

    def add_images_html_files(base_directory, keywords):
        """
        Recursively finds HTML files and updates their images based on keywords.
        
        Args:
            base_directory (str): Path to the root directory to scan.
            keywords (list): List of keywords to influence image selection.
        """
        for root, _, files in os.walk(base_directory):
            for file in files:
                if file.endswith('.html'):
                    file_path = os.path.join(root, file)
                    print(f"\nProcessing HTML file: {file_path}")

                    try:
                        # Read the HTML file
                        with open(file_path, 'r', encoding='utf-8') as file:
                            html_content = file.read()
                        
                        # Process the HTML content (update image tags)
                        updated_html = extract_and_update_images(html_content, keywords)
                        
                        if updated_html:
                            # Overwrite the original file
                            with open(file_path, 'w', encoding='utf-8') as file:
                                file.write(updated_html)
                            print(f"✅ Updated images in file: {file_path}")
                        else:
                            print(f"⚠️ No updates made to: {file_path}")

                    except Exception as e:
                        print(f"❌ Error processing {file_path}: {e}")
    html_files_directory = destination_folder
    process_html_files_recursively(html_files_directory, html_prompt)
    add_images_html_files(html_files_directory, keywords)

    theme = result['theme']
    process_css_files_recursively(css_directory, theme)
    
    def get_html_and_css_from_folder(folder_path):
        html_content = ""
        css_content = ""

        for root, dirs, files in os.walk(folder_path):
            for file in files:
                file_path = os.path.join(root, file)
                
                if file.endswith('.html'):
                    with open(file_path, 'r', encoding='utf-8') as f:
                        html_content += f.read()
                
                elif file.endswith('.css'):
                    with open(file_path, 'r', encoding='utf-8') as f:
                        css_content += f.read()
                        
        return html_content, css_content
    html_content, css_content = get_html_and_css_from_folder(destination_folder)  
    return destination_folder, html_content, css_content      
        
user_prompt=input("Enter prompt: ")
folder, html, css = process(user_prompt)

