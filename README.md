# MoroccoHub 🇲🇦

**Discover universities, companies, and opportunities across Morocco.**

MoroccoHub is a full-stack web application designed to bring information about Moroccan universities and companies together in one accessible platform. It aims to help users explore educational institutions, discover businesses, and navigate information through a simple, organized interface.

<img width="1887" height="828" alt="Screenshot 2026-10-11 183812" src="https://github.com/user-attachments/assets/9d84af24-56f0-444e-b216-d2a867623180" />
<img width="1881" height="828" alt="Screenshot 2026-10-11 160802" src="https://github.com/user-attachments/assets/8323a0e8-9719-470a-8d05-0f926f191b7a" />
<img width="1871" height="818" alt="Screenshot 2026-10-11 160746" src="https://github.com/user-attachments/assets/9b58bae5-f6e6-467b-a8fb-b2fe2fe30955" />
<img width="1889" height="815" alt="Screenshot 2026-10-11 160730" src="https://github.com/user-attachments/assets/05e7db08-4510-4c3b-b5c7-3ecb452bf39e" />
<img width="1869" height="817" alt="Screenshot 2026-10-11 160716" src="https://github.com/user-attachments/assets/043c12a2-fe61-4637-b87a-6fa9860f5ca0" />
<img width="1915" height="826" alt="Screenshot 2026-10-08 172655" src="https://github.com/user-attachments/assets/edab781e-ab9f-45cd-9581-ae7a097cb799" />
<img width="1899" height="807" alt="Screenshot 2026-10-08 172642" src="https://github.com/user-attachments/assets/db07e8fe-f5c5-479e-9f20-ff47827d4ffd" />
<img width="1919" height="824" alt="Screenshot 2026-10-08 172629" src="https://github.com/user-attachments/assets/3ab4293c-a762-4364-8a96-f811470f0661" />
<img width="1880" height="667" alt="Screenshot 2026-09-25 192109" src="https://github.com/user-attachments/assets/6ae22bca-c324-44e8-8df6-6f281efd4d10" />
<img width="1598" height="678" alt="Screenshot 2026-09-24 190003" src="https://github.com/user-attachments/assets/970cfecc-5a76-48a3-95dd-398f6dfd8aed" />
<img width="1846" height="817" alt="Screenshot 2026-10-11 183847" src="https://github.com/user-attachments/assets/4e6924a7-7041-474f-bf4f-a2b5f26dec6d" />



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


