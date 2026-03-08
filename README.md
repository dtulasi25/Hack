Wallet Guard
Wallet Guard is an AI-powered financial management system designed to help users track expenses, detect suspicious transactions, and manage shared wallets efficiently. The platform combines intelligent receipt scanning, fraud detection, and an AI-based financial advisor to help users maintain better financial discipline.

Traditional payment applications primarily track expenses after transactions occur. Wallet Guard introduces a proactive approach by analyzing spending behavior, providing alerts, and offering AI-driven financial insights.

Key Features
Smart Receipt Scanning and Auto Classification
Users can upload or scan receipts directly in the system.
The platform uses OCR technology to extract transaction details such as merchant name, date, and amount.
AI models then automatically categorize the expense into categories such as food, transport, shopping, or bills.

Example:
Restaurant receipt → ₹850 → Categorized as Food

Fraud Detection Alerts
Wallet Guard continuously analyzes transaction patterns to identify suspicious activity.

The system flags transactions based on indicators such as:

Unusually large transaction amounts

Transactions from unexpected locations

Transactions occurring at unusual times

When suspicious activity is detected, the user receives an immediate alert for verification.

AI Financial Advisor Chatbot
The platform includes an AI-powered chatbot that analyzes a user's spending history and wallet balance to provide financial advice.

Users can ask questions such as:

"Can I afford this purchase?"

"Am I overspending this month?"

"How can I reduce my expenses?"

The chatbot provides personalized financial insights and suggestions.

Shared Wallet System
Wallet Guard allows users to create shared wallets for group expenses such as trips, roommates, or family budgets.

Members can:

Contribute funds

Track shared expenses

Monitor individual contributions

View balance settlements between members

This feature simplifies collaborative expense management.

Technology Stack
Frontend
React

Tailwind CSS / CSS

Axios

Chart.js / Recharts

Backend
Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Artificial Intelligence
Gemini API / OpenAI API for financial insights and classification

OCR Processing
Tesseract OCR for receipt text extraction

Additional Tools
Multer for file uploads

RESTful API architecture

System Architecture
The application follows a modular full-stack architecture with separate frontend and backend services.

wallet-guard
│
├── wallet-guard-frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── App.js
│
├── wallet-guard-backend
│   ├── models
│   ├── controllers
│   ├── routes
│   ├── middleware
│   └── server.js
Main Application Modules
Authentication Module
User registration

Secure login using JWT authentication

Dashboard
Displays:

Total wallet balance

Total spending summary

Wallet overview

Spending analytics charts

Shared Wallet Management
Allows users to:

Create shared wallets

Invite members

Track group expenses

Monitor individual balances

Expense Management
Users can:

Add expenses manually

Upload receipts for automated extraction and categorization

Fraud Detection Module
Analyzes transaction behavior and generates alerts for suspicious activity.

AI Insights Module
Provides spending analytics and AI-generated financial advice through the chatbot.

API Overview
Authentication
POST /api/auth/register

POST /api/auth/login

Wallet Management
POST /api/wallet/create

GET /api/wallets

POST /api/wallet/invite

Transactions
POST /api/expense

GET /api/transactions

Security Features
JWT-based authentication

Secure API communication

Transaction monitoring for fraud detection

Controlled access to shared wallets

Future Enhancements
Potential improvements for the platform include:

Mobile application integration

Direct bank and payment gateway connections

Advanced machine learning fraud detection models

Personalized budgeting recommendations

Real-time spending alerts and notifications

Project Objective
The objective of Wallet Guard is to transform traditional expense tracking into an intelligent financial management system that helps users:

Monitor and control spending

Detect fraudulent activity early

Manage shared finances efficiently

Make informed financial decisions through AI-driven insights

