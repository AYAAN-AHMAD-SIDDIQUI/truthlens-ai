# TruthLens AI

TruthLens AI is an AI-assisted news literacy platform that helps users examine news articles, understand potential misinformation risk, and review credibility, bias, and sentiment indicators.

## Features

- User registration and login with JWT authentication
- Submit a news article by URL or pasted text
- AI-generated article summary
- Estimated misinformation-risk and credibility scores
- Bias and sentiment indicators
- Personal analysis history and dashboard statistics

## Tech Stack

**Frontend:** React, Vite, React Router, Axios, CSS  
**Backend:** Node.js, Express  
**Database:** PostgreSQL with Prisma  
**AI:** Google Gemini API  
**Authentication:** JWT and bcryptjs

## Project Structure

- `src/` — React frontend
- `backend/` — Express API, Prisma schema, and AI analysis logic

## Local Setup

### Backend

Open a terminal in the backend directory:

```bash
npm install
```

Create a `.env` file using the variables required by your deployment:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=use_a_long_random_secret
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=your_supported_gemini_model
```

Run the database migrations and start the backend using the scripts configured in `backend/package.json`.

### Frontend

Create a frontend `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Then run:

```bash
npm install
npm run dev
```

For deployment, set `VITE_API_URL` to the deployed backend origin (without the `/api` suffix), and configure the backend environment variables in the hosting provider.

## Important Note

TruthLens AI provides AI-generated estimates to support news literacy. Its scores are not proof that an article is true or false and do not replace independent fact-checking from reliable sources.
