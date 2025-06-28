

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import website_generator_model1 
print("Module imported successfully!")  # Debugging step
 # Your model processing module

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    user_input = data.get("text", "")
    
    # Generate the website files
    folder_name, html_content, css_content = website_generator_model1.process(user_input)
    
    return jsonify({
        "message": "Website ready!",
        "folder": folder_name,
        "html": html_content,
        "css": css_content
    })

# Serve the generated index.html
@app.route('/generated')
def serve_index():
    return send_from_directory('generated_website', 'index.html')

# Serve other static files (CSS, images, etc.)
@app.route('/generated/<path:filename>')
def serve_static(filename):
    return send_from_directory('generated_website', filename)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
