# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import model  # Import the ML model (model.py)

# app = Flask(__name__)
# CORS(app)  # Allow cross-origin requests from React frontend

# @app.route("/predict", methods=["POST"])
# def predict():
#     data = request.json
#     user_input = data.get("text", "")
    
#     # Call the model to process the input and generate files
#     folder_name, html_content, css_content = model.process(user_input)
    
#     # Return the folder name and file content
#     return jsonify({
#         "message": "Website ready!",
#         "folder": folder_name,
#         "html": html_content,
#         "css": css_content
#     })

# if __name__ == "__main__":
#     app.run(debug=True, port=5003)


from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import model  # Your model processing module

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    user_input = data.get("text", "")
    
    # Generate the website files
    folder_name, html_content, css_content = model.process(user_input)
    
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
