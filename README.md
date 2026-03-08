Wallet Guard
AI-Powered Shared Wallet & Smart Expense Security System

Project Overview
Wallet Guard is an intelligent financial management platform designed to help users track expenses, detect fraudulent transactions, and manage shared wallets efficiently.

Most payment applications only record spending after transactions occur, which often leads to overspending and poor financial planning. Wallet Guard introduces a proactive financial management approach using artificial intelligence to analyze spending patterns, provide alerts, and offer smart financial insights.

The system integrates receipt scanning, fraud detection, AI-driven financial advice, and collaborative wallet management into a single platform.

Key Features
Smart Receipt Scan and Auto Classification
Users can upload or scan receipts directly in the system.

The platform uses OCR technology to extract transaction details such as merchant name, date, and transaction amount. AI models then automatically categorize the expense into categories like food, transport, shopping, and bills.

Example
Restaurant Bill → ₹850 → Category: Food

Fraud Detection Alerts
Wallet Guard continuously monitors transactions and analyzes patterns to identify suspicious activity.

The system detects unusual behavior based on:

Large transaction amounts

Transactions from unexpected locations

Unusual transaction timing

If suspicious activity is detected, the system sends an immediate alert to the user.

Example Alert
Suspicious Transaction Detected
Location: Different City
Amount: ₹25,000

AI Financial Advisor Chatbot
Wallet Guard includes an AI-powered chatbot that analyzes spending history and wallet balances to provide personalized financial advice.

Users can ask questions such as:

Can I afford this purchase?

Am I overspending this month?

How can I reduce my expenses?

The chatbot provides insights and recommendations based on the user’s financial activity.

Shared Wallet System
Users can create shared wallets for group activities such as trips, roommates, or family expenses.

Members can:

Contribute funds

Track shared spending

View member contributions

Monitor individual balances

This feature helps simplify collaborative expense management.

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
Gemini API / OpenAI API

OCR Processing
Tesseract OCR

Additional Tools
Multer (file upload)

REST API architecture

System Architecture
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
Authentication
User registration and login with secure authentication.

Dashboard
Displays:

Total wallet balance

Total spending

Wallet overview

Spending charts

Shared Wallet Management
Allows users to:

Create shared wallets

Invite members

Track group expenses

Monitor member balances

Expense Management
Users can:

Add expenses manually

Upload receipts for automatic expense extraction

Fraud Detection
Analyzes transaction behavior and generates alerts for suspicious activity.

AI Insights
Provides financial recommendations and spending analysis through the AI chatbot.

Security Features
JWT-based authentication

Secure API communication

Fraud detection alerts

Access control for shared wallets

Future Enhancements
Mobile application version

Bank account integration

Advanced machine learning fraud detection

Personalized budgeting recommendations

Real-time financial alerts

Project Goal
The goal of Wallet Guard is to transform traditional expense tracking into an intelligent financial management system that helps users control spending, detect fraud early, and manage shared finances effectively using AI-driven insights.
