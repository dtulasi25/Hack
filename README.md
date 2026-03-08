💳 Wallet Guard
Smart Expense Tracking & AI-Powered Shared Wallet System
“Secure your spending. Manage money smarter.”

Wallet Guard is a modern AI-powered financial management platform designed to help users track expenses, detect suspicious transactions, and manage shared wallets efficiently.

The system combines receipt scanning, intelligent expense categorization, fraud detection, and an AI financial advisor chatbot to provide users with proactive financial insights and better spending control.

Built using a scalable full-stack architecture with React, Node.js, and MongoDB, Wallet Guard focuses on practical financial management and real-world application design.

🎯 Project Objective
The main goal of Wallet Guard is to create a smart financial management platform that helps users:

Track daily expenses easily

Detect suspicious or fraudulent transactions

Manage shared group wallets for trips or roommates

Receive AI-based financial insights and recommendations

The project also demonstrates key full-stack development concepts, including RESTful APIs, database integration, AI services, and real-time data processing.

✨ Key Features
📷 Smart Receipt Scan & Auto Classification
Users can upload or scan a receipt directly in the application.

The system uses OCR technology to extract transaction information and automatically categorize expenses using AI models.

Example:
Restaurant Bill → ₹850 → Category: Food

Benefits:

Eliminates manual expense entry

Improves accuracy in expense tracking

⚠ Fraud Detection Alerts
Wallet Guard continuously monitors transaction patterns to detect unusual activities.

The system analyzes:

Unusually high transaction amounts

Transactions from unexpected locations

Transactions at unusual times

If suspicious activity is detected, the system immediately alerts the user.

Example Alert:

Suspicious Transaction Detected
Location: Different City
Amount: ₹25,000

🤖 AI Financial Advisor Chatbot
Wallet Guard includes an intelligent chatbot that provides financial insights based on user spending behavior.

Users can ask questions such as:

“Can I afford this purchase?”

“Am I overspending this month?”

“How can I improve my savings?”

The AI analyzes:

Wallet balance

Spending history

Expense categories

Then provides smart recommendations and financial guidance.

👥 Shared Wallet System
Users can create shared wallets for collaborative expenses such as:

Trips

Roommates

Family budgets

Group events

Members can:

Contribute funds

Track shared expenses

View individual contributions

Monitor balances and settlements

This feature simplifies group financial management.

🧰 Technology Stack
Frontend
React.js

Axios

Tailwind CSS / CSS

Chart.js / Recharts

Backend
Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Artificial Intelligence
Gemini API / OpenAI API

AI expense classification

AI financial advisor chatbot

OCR Processing
Tesseract OCR for receipt scanning

Development Tools
Git & GitHub

Postman for API testing

VS Code

📁 Project Structure
wallet-guard/
│
├── wallet-guard-frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
│
├── wallet-guard-backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md
🔑 API Configuration
This project uses AI APIs for intelligent financial analysis.

Add the required API keys in your backend configuration file:

OPENAI_API_KEY=YOUR_API_KEY
GEMINI_API_KEY=YOUR_API_KEY
⚠️ Important:
Never expose API keys in public repositories. Use environment variables or .env files and exclude them using .gitignore.

⚙ Installation & Setup
🔹 Backend Setup
Navigate to backend folder:

cd wallet-guard-backend
Install dependencies:

npm install
Start the backend server:

node server.js
📍 Backend runs on:

http://localhost:5000
🔹 Frontend Setup
Navigate to frontend folder:

cd wallet-guard-frontend
Install dependencies:

npm install
Run the React application:

npm start
📍 Frontend runs on:

http://localhost:3000
🔗 Sample API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	User login
POST	/api/wallet/create	Create shared wallet
GET	/api/wallets	Get all wallets
POST	/api/expense	Add new expense
GET	/api/transactions	Fetch transaction history
🧪 Testing
Backend APIs tested using:

Postman

Frontend tested using:

Browser developer tools

Console debugging

Component testing

🚀 Future Enhancements
Potential improvements for the platform include:

Mobile application version

Bank account and payment integration

Advanced machine learning fraud detection

Personalized budgeting tools

Real-time spending alerts

📄 License
This project is developed for educational and demonstration purposes.

✨ Wallet Guard
Smarter spending. Safer wallets. Better financial decisions.
