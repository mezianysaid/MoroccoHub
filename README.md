# MoroccoHub 🇲🇦

**Discover universities, companies, and opportunities across Morocco.**

MoroccoHub is a full-stack web application designed to bring information about Moroccan universities and companies together in one accessible platform. It aims to help users explore educational institutions, discover businesses, and navigate information through a simple, organized interface.



## ✨ Features

- 🎓 **University Directory** — Browse universities and explore their details.
- 🏢 **Company Directory** — Discover companies and business information.
- 🔐 **User Authentication** — Register and log in using token-based authentication.
- 🗃️ **Database Integration** — Store and manage application data using PostgreSQL.
- 🔌 **API Architecture** — Connect the frontend with backend API endpoints.
- 📱 **User-Friendly Interface** — Explore information through a React-based interface.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| Vite | Frontend development and build tooling |
| Next.js | Backend API |
| JavaScript | Application logic |
| PostgreSQL | Relational database |
| Supabase | Hosted PostgreSQL database |
| Prisma | Database ORM |
| JWT | Authentication tokens |
| bcryptjs | Password hashing |
| Vercel | Deployment |

## 🏗️ Project Structure

```text
MoroccoHub/
├── frontend/       # React frontend
└── backend/        # Next.js API and Prisma configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- A Supabase PostgreSQL database
- Git

### 1. Clone the repository

```bash
git clone https://github.com/mezianysaid/MoroccoHub.git
cd MoroccoHub
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a local `.env` file in the backend directory and configure the environment variables required by the application.

For example:

```env
DATABASE_URL="your-database-connection-string"
JWT_SECRET="your-local-jwt-secret"
```

Use the exact environment variable names expected by your backend code and Prisma configuration. Never commit real secrets to GitHub.

Start the backend:

```bash
npm run dev
```

### 3. Configure the frontend

Open a separate terminal:

```bash
cd frontend
npm install
```

Create a `frontend/.env` file:

```env
VITE_API_URL=http://localhost:3000
```

This variable should point to the local backend URL. For production, configure `VITE_API_URL` in your hosting provider to use the deployed backend URL.

Start the frontend:

```bash
npm run dev
```

Open the local URL shown in the terminal to use the application.

## 🔐 Environment Variables

Keep environment variables and credentials out of version control.

- `DATABASE_URL` — PostgreSQL connection string used by the backend.
- `JWT_SECRET` — Secret used to sign and verify authentication tokens.
- `VITE_API_URL` — Base URL for frontend API requests.

The actual variables required may differ depending on your implementation. Configure production values separately in Vercel's project settings.

## 🌐 Deployment

MoroccoHub is intended to be deployable with Vercel.

The frontend and backend can be configured as separate Vercel projects using their respective root directories:

- Frontend root directory: `frontend`
- Backend root directory: `backend`

Configure the required environment variables for each project before deploying.

## 🔮 Future Improvements

- Add more detailed university and company profiles.
- Introduce search, filtering, and sorting.
- Expand educational and career opportunity listings.
- Improve user profile and account management features.
- Enhance accessibility and mobile usability.

## 👨‍💻 Author

Developed as a full-stack web development project focused on connecting users with educational institutions and business information in Morocco.

GitHub: [@mezianysaid](https://github.com/mezianysaid)

---

**MoroccoHub — Connecting people with opportunities in Morocco.**


