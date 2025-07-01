import os
import time

def process(text):
    # Generate the folder and files
    folder_name = "generated_website"
    time.sleep(5)
    # Create a folder if it doesn't exist
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)
    # Create HTML content based on user input
    html_content = f"""
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to My Website</h1>
        <p>This is a simple landing page with a heading and a paragraph. when connected with backend 3 , it gives result by model to </p>
        <h3>{text}</h3>
    </div>
</body>
</html>

    """
    
    # Write HTML content to file
    with open(f"{folder_name}/index.html", "w") as html_file:
        html_file.write(html_content)
    
    # Create CSS content
    css_content = """* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

.container {
    text-align: center;
    padding: 20px;
    background: yellow;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h1 {
    color: #333;
    margin-bottom: 10px;
}

p {
    color: #555;
    font-size: 1.1rem;
}
h3{
    background: pink;
}
"""
    # Write CSS content to file
    with open(f"{folder_name}/style.css", "w") as css_file:
        css_file.write(css_content)
    
    # Return folder and file content
    return folder_name, html_content, css_content
