# AI Resume Roaster & Analyzer


## Application Architecture Diagram 
<p align="center">
  <img src="./assets/Resume Roaster-arch.png" alt="Application Architecture Diagram" width="700">
</p>

<p align="center">
  A powerful tool to analyze, score, and improve your resume using AI. Get brutally honest feedback and professional suggestions to make your resume stand out to recruiters.
</p>

---

## 🚀 Features

-   **ATS-Friendly Scoring:** Get an instant score based on key metrics like section completeness, action verbs, and resume length.
-   **AI-Powered Roast:** Receive a sarcastic but insightful critique of your resume's weaknesses and language.
-   **Professional Rewrite Suggestions:** Get AI-generated improvements with strong action verbs and measurable impact.
-   **Formatting Feedback:** Analyzes your resume for font consistency and alignment issues.
-   **Secure & Private:** Your resume is processed and then discarded. Nothing is stored permanently without your consent.
-   **Supports PDF & DOCX:** Upload your resume in the most common formats.

## 🛠️ Tech Stack

-   **Frontend:** React, Vite, Tailwind CSS
-   **Backend Server:** Node.js, Express
-   **AI Parser Service:** Python, FastAPI, Google Gemini
-   **Database:** MongoDB (for future use, not currently implemented for storage)
-   **Containerization:** Docker, Docker Compose

## ⚙️ Getting Started

You can run this project either locally on your machine or using Docker.

### Prerequisites

-   Node.js (v18 or later)
-   Python (v3.9 or later)
-   A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).
-   Docker and Docker Compose (for the Docker-based setup)

### Configuration

Create a `.env` file in the root directory of the project. This file will hold the necessary environment variables.

```
# .env

# Your Google Gemini API Key
GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE

# MongoDB connection string (used by the server)
MONGO_URI=mongodb://mongo:27017/resumes
```

### 1. Local Installation (Without Docker)

This method is recommended if you want to run each service manually for development.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Resume-Roaster.git
    cd Resume-Roaster
    ```

2.  **Setup the Backend Server:**
    -   Navigate to the server directory: `cd server`
    -   Install dependencies: `npm install`
    -   Start the server: `npm start`
    -   The server will be running on `http://localhost:5000`.

3.  **Setup the Parser Service:**
    -   Navigate to the parser directory: `cd ../parser`
    -   Create a Python virtual environment:
        ```bash
        python -m venv venv
        source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
        ```
    -   Install dependencies: `pip install -r requirements.txt`
    -   Start the parser service: `uvicorn main:app --reload --port 8000`
    -   The parser will be running on `http://localhost:8000`.

4.  **Setup the Frontend:**
    -   Navigate to the client directory: `cd ../client`
    -   Install dependencies: `npm install`
    -   Start the development server: `npm run dev`
    -   The application will be available at `http://localhost:5173`.

### 2. Docker Installation

This is the recommended method for a stable, containerized setup.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Resume-Roaster.git
    cd Resume-Roaster
    ```
2.  **Ensure Docker is running** on your machine.
3.  **Build and run the containers:**
    ```bash
    docker compose up --build -d
    ```
4.  **Access the application:**
    -   The application will be available at `http://localhost:5173`.
    -   The services are running on their respective ports as defined in `docker-compose.yml`.

## Usage

1.  Open the application in your browser.
2.  Click the "Select your resume" button and choose a `.pdf` or `.docx` file.
3.  Click "Analyze Resume".
4.  Wait a few moments for the analysis to complete.
5.  View your ATS score, the AI roast, improvement suggestions, and formatting feedback.

<!-- ## 📄 License -->

<!-- This project is licensed under the MIT License. See the `LICENSE` file for details. -->
