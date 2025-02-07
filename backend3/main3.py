import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import os
import openai
from openai import OpenAI
import re
import subprocess
import requests
import json
import matplotlib.pyplot as plt
from bs4 import BeautifulSoup
import google.generativeai as genai
from typing import Optional, List
model_name="gpt-4o"
num_tokens=4096

# client = OpenAI(
#     api_key='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'
# ) 
api_key = "AIzaSyCrohp3D8D5MzlARHvvmeTa5Wcgp085m3Y"
genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-2.0-flash-exp")
repo_url = "https://github.com/Kriti-Product-Development/all-templates"  
local_repo_path = "./local_repo1"
if not os.path.exists(local_repo_path):
    #print("Cloning repository...")
    subprocess.run(["git", "clone", repo_url, local_repo_path])
else:
    #print("Repository already cloned. Pulling latest changes...")
    subprocess.run(["git", "-C", local_repo_path, "pull"])



def call_gemini_api(api_key, text):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    
    headers = {
        'Content-Type': 'application/json'
    }

    # Prompt designed to extract theme, features, and purpose
    formatted_text = (
        f"Analyze the following text and extract the website's theme, features, and purpose. "
        f"Provide the output in JSON format with 'theme', 'features', and 'purpose' as keys.\n\n{text}"
    )

    payload = {
        "contents": [
            {
                "parts": [
                    {"text": formatted_text}
                ]
            }
        ]
    }

    try:
        # Send the POST request
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        
        # Raise exception for HTTP errors
        response.raise_for_status()

        # Parse the JSON response
        return response.json()

    except requests.exceptions.RequestException as e:
        return {"error": str(e)}
    
  # Replace with your actual API key
user_prompt = input("Enter the text to generate a prompt template")

response = call_gemini_api(api_key, user_prompt)

# Print raw response
print("Raw API Response:", response)

# Extract the JSON text from the response
json_text = response['candidates'][0]['content']['parts'][0]['text']

# Remove the code block syntax (```json and ```)
json_text_cleaned = json_text.replace('```json', '').replace('```', '').strip()

# Parse the JSON content
parsed_data = json.loads(json_text_cleaned)

# Store the extracted fields in a dictionary
result = {
    'theme': parsed_data.get('theme'),
    'features': parsed_data.get('features'),
    'purpose': parsed_data.get('purpose')
}

print("Extracted Details:", result)


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

def extract_keywords_with_gemini(prompt):
    """
    Extract keywords using Gemini API with improved error handling.
    
    Args:
        prompt (str): Input text to extract keywords from
    
    Returns:
        list: Extracted keywords
    """
    GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
    GEMINI_API_KEY = "AIzaSyBrOsSMj9qNQI9Mvv3KG5T8vzNnh9ub2Mc"  # Recommended: use environment variable
    
    if not GEMINI_API_KEY:
        raise ValueError("Gemini API key is not set")
    
    headers = {'Content-Type': 'application/json'}
    formatted_text = (
        "Extract 5-7 most relevant keywords from this text. "
        "Return only a JSON list of keywords. Text to analyze: " + prompt
    )
    
    payload = {
        "contents": [{"parts": [{"text": formatted_text}]}]
    }
    
    try:
        response = requests.post(
            f"{GEMINI_API_URL}?key={GEMINI_API_KEY}",
            headers=headers,
            json=payload
        )
        response.raise_for_status()
        response_data = response.json()
        
        if 'candidates' in response_data and response_data['candidates']:
            text_response = response_data['candidates'][0]['content']['parts'][0]['text']
            
            # Clean and extract JSON-like content
            keywords_match = re.search(r'\[.*?\]', text_response, re.DOTALL)
            if keywords_match:
                try:
                    keywords = json.loads(keywords_match.group(0))
                    return keywords if isinstance(keywords, list) else []
                except json.JSONDecodeError:
                    # Fallback: extract keywords manually
                    keywords = re.findall(r'"([^"]*)"', keywords_match.group(0))
                    return keywords
        
        return []
    
    except requests.exceptions.RequestException as e:
        print(f"API Request Error: {e}")
        return []
    except Exception as e:
        print(f"Unexpected error: {e}")
        return []

from sentence_transformers import SentenceTransformer, util
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


import shutil


# Destination folder path (the new location for the copied folder)
destination_folder = "./generated"

try:
    # Copy the folder
    shutil.copytree(template_path, destination_folder)
    print(f"Folder copied successfully from {template_path} to {destination_folder}.")
except FileExistsError:
    print(f"Destination folder '{destination_folder}' already exists.")
except Exception as e:
    print(f"An error occurred: {e}")


def generate_prompt_template(result):
    """
    Generate a specific prompt template for website transformation.
    
    Args:
        result (dict): Dictionary containing theme, purpose, and features
    
    Returns:
        str: Generated prompt template
    """
    theme = result.get('theme', 'Generic')
    purpose = result.get('purpose', 'Informational')
    features = result.get('features', [])
    
    prompt = f"""
    Convert this HTML code into a modern {theme} website version.
    Make sure that:
    - The code is syntactically correct
    - The header, main and footer are all complete
    - Leave image tags as they are in the given template
    - None of the links are changed
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

# def send_html_to_openai(content, prompt):
#     """
#     Sends HTML content to OpenAI and returns the modified version.
#     """
#     try:
#         full_prompt = f"""
#         {prompt}

#         Here is the HTML code:
#         {content}
#         """

#         response = client.chat.completions.create(
#             model=model_name,
#             messages=[
#                 {"role": "system", "content": "You are an expert web developer."},
#                 {"role": "user", "content": full_prompt}
#             ],
#             max_tokens=num_tokens,
#             temperature=0.7
#         )

#         return extract_html_code(response.choices[0].message.content)
    
#     except Exception as e:
#         print(f"Error processing HTML: {e}")
#         return None



def send_html_to_gemini(content: str, prompt: str, api_key: str) -> Optional[str]:
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
        
        # Generate content with Gemini
        response = model.generate_content(
            full_prompt,
            generation_config=genai.types.GenerationConfig(
                temperature=0.7
            )
        )
        
        # Extract and validate HTML
        if response.text:
            return clean_html_output(response.text)
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
                    updated_html = send_html_to_gemini(html_content, prompt, API_KEY)

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




def fetch_base_color_from_gemini(theme: str, api_key: str) -> str:
    try:
        # Configure the Gemini API
        genai.configure(api_key=api_key)
        
        # Initialize the model
        model = genai.GenerativeModel('gemini-1.5-flash')
        
        # Create the prompt
        prompt = f"Provide only a single HEX color code (format: #RRGGBB) that best represents the theme '{theme}'."
        
        # Generate the response
        response = model.generate_content(prompt)
        
        # Extract the color code from the response
        if response.text:
            return response.text.strip()
        
        return "#000000"  # Default fallback color
        
    except Exception as e:
        print(f"Error fetching base color: {e}")
        return "#000000"

# Function to fetch color palette using The Color API
def fetch_color_palette(base_color, mode="analogic", count=5):
    url = f"https://www.thecolorapi.com/scheme?hex={base_color.lstrip('#')}&mode={mode}&count={count}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        return [color["hex"]["value"] for color in response.json().get("colors", [])]
    except Exception as e:
        print(f"Error fetching color palette: {e}")
        return []

# Function to visualize a single color
def visualize_color(hex_color: str, title: str = "Color"):
    rgb_color = tuple(int(hex_color.lstrip('#')[i:i+2], 16) / 255.0 for i in (0, 2, 4))
    plt.figure(figsize=(2, 2))
    plt.title(title)
    plt.imshow([[rgb_color]], aspect="auto")
    plt.axis("off")
    plt.show()

# Function to visualize a palette
def visualize_palette(colors, title="Palette"):
    plt.figure(figsize=(10, 2))
    plt.title(title)
    for i, color in enumerate(colors):
        plt.fill_between([i, i + 1], 0, 1, color=color)
    plt.xticks(range(len(colors)), colors, rotation=45)
    plt.yticks([])
    plt.show()

# Example Usage
API_KEY = "AIzaSyACTK1uM129F5uoadJyO0FaluakKtgK3UQ"  # Replace with your API key
theme = result['theme']
base_color = fetch_base_color_from_gemini(theme, API_KEY)
print(f"Base Color: {base_color}")
#visualize_color(base_color, title=f"Base Color for '{theme}'")

palette = fetch_color_palette(base_color, mode="analogic", count=5)
print("Generated Palette:", palette)
#visualize_palette(palette, title=f"Palette for '{theme}' Theme")



def extract_css_code(response):
    """
    Extract only the CSS code from OpenAI's response using regex.
    Assumes the response is enclosed in ```css``` markdown blocks.
    """
    css_pattern = re.compile(r"```css(.*?)```", re.DOTALL)  # Matches ```css ... ```
    match = css_pattern.search(response)
    
    if match:
        return match.group(1).strip()  # Extract content inside ```css ... ```
    return response.strip()  # If no match is found, return full response

# def send_css_to_openai(content, theme):
#     """
#     Sends CSS content to OpenAI and returns the modified version.
#     """
#     try:
#         base_color = fetch_base_color_from_gemini(theme, API_KEY)
#         palette = fetch_color_palette(base_color)
#         if not palette:
#             palette = ["#f0a500", "#d62a32", "#f7f3e3", "#5e5b52", "#eddea4"]  # Fallback palette

#         prompt = f"""
#         CSS Color Palette Update Instructions:
#         - Modify only color values, keeping structure intact.
#         - Use the color palette: {palette}
#         - Ensure good contrast for readability.
#         - Return only the CSS code inside ```css``` markdown blocks.

#         Original CSS:
#         {content}
#         """

#         response = client.chat.completions.create(
#             model=model_name,
#             messages=[
#                 {"role": "system", "content": "You are an expert web developer."},
#                 {"role": "user", "content": prompt}
#             ],
#             max_tokens=num_tokens,
#             temperature=0.7
#         )
#         print(response.choices[0].message.content)

#         return extract_css_code(response.choices[0].message.content)
    
#     except Exception as e:
#         print(f"Error processing CSS: {e}")
#         return None


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

def send_css_to_gemini(content: str, theme: str, api_key: str) -> Optional[str]:
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
        base_color = fetch_base_color_from_gemini(theme, api_key)
        palette = fetch_color_palette(base_color)
        
        if not palette:
            palette = ["#f0a500", "#d62a32", "#f7f3e3", "#5e5b52", "#eddea4"]  # Fallback palette
        
        # Construct the prompt
        prompt = f"""
        CSS Color Palette Update Instructions:
        - Return the complete css file
        - Modify only color values, keeping structure intact
        - Use the color palette: {palette}
        - Ensure good contrast for readability
        - Return only the CSS code without any markdown blocks or additional text
        
        Original CSS:
        {content}
        """
        
        # Generate content with Gemini
        response = model.generate_content(
            prompt,
            generation_config=genai.types.GenerationConfig(
                temperature=0.7
            )
        )
        
        # Extract and validate CSS
        if response.text:
            return clean_css_output(response.text)
        return None
        
    except Exception as e:
        print(f"Error processing CSS with Gemini: {e}")
        return None


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
                    updated_css = send_css_to_gemini(css_content, theme, API_KEY)

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




# Function to fetch an image URL from Unsplash
def fetch_image_url(query,index=0):
    ACCESS_KEY = "EcWKwzXClUMK6Wc55SWG_pXgk4PElBymyGr0OCApUTA"

    url = "https://api.unsplash.com/search/photos"
    params = {
        "query": query,
        "page": 1,
        "per_page": 10,
        "orientation": "landscape"
    }
    headers = {
        "Authorization": f"Client-ID {ACCESS_KEY}"
    }

    try:
        response = requests.get(url, headers=headers, params=params)

        if response.status_code == 200:
            results = response.json().get('results', [])
            if results:
                return results[index%10]['urls']['regular']
        else:
            print(f"Error fetching image from Unsplash: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"Exception while fetching image: {e}")

    return placeholder_url  # Larger placeholder as fallback


def get_image_description(api_key,context="random"):
    try:
        # Configure the Gemini API
        if not api_key:
            raise ValueError("API key is missing. Set GEMINI_API_KEY in environment variables.")
        
        genai.configure(api_key=api_key)
        
        # Initialize the model
        model = genai.GenerativeModel('gemini-pro-1.5')  # Ensure this method is correct for your library version
        
        prompt = f"""
        Generate a specific related keyword or phrase for an image search based on this context:
        {context}
        Keep the response to just 1-2 specific words.
        """
        
        # Generate content using Gemini
        response = model.generate_content(prompt)
        
        # Check the response structure and extract the keywords
        if hasattr(response, 'text') and response.text:
            return response.text.strip().lower()
        
        # Default fallback if no valid response is received
        return context
        
    except Exception as e:
        print(f"Error getting image description from Gemini: {e}")
        return context
    
def process_html_images(html_content, keywords):
    """
    Process HTML content and update images based on context.
    
    Args:
        html_content (str): The HTML content to process
        context (str): The context to use for image search and styling
    
    Returns:
        str: Processed HTML content with updated images
    """
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find all <img> tags
    img_tags = soup.find_all('img')
    index = 0
    
    for img in img_tags:
        # Get surrounding text for context
        surrounding_text = ""
        if img.parent:
            context = img.parent.get_text().strip()
            surrounding_text = img.parent.get_text().strip()
        
        # Generate relevant search query based on both surrounding text and context
        query = get_image_description(API_KEY,surrounding_text)
        print(f"Generated image query: {query}")
        
        # Fetch a new image URL from Unsplash
        new_image_url = fetch_image_url(query=query, index=index)
        index += 1
        
        # Update the src attribute and add some styling
        img['src'] = new_image_url
        img['class'] = img.get('class', []) + ['content-image']
        img['alt'] = f"{context} image: {query}"
        img['loading'] = 'lazy'
        
        print(f"Updated image with URL: {new_image_url}")
    
    # Add a CSS style block for images if it doesn't exist
    # if not soup.find('style'):
    #     style = soup.new_tag('style')
    #     style.string = """
    #         .content-image {
    #             max-width: 100%;
    #             height: auto;
    #             border-radius: 8px;
    #             margin: 20px 0;
    #             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    #         }
    #     """
    #     if not soup.head:
    #         head = soup.new_tag('head')
    #         soup.insert(0, head)
    #     soup.head.append(style)
    return str(soup)
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
                print(f"\nProcessing images in HTML file: {file_path}")

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
                    print(f"❌ Error processing html images{file_path}: {e}")
html_files_directory = destination_folder
process_html_files_recursively(html_files_directory, html_prompt)
add_images_html_files(html_files_directory, keywords)


process_css_files_recursively(css_directory, theme)

