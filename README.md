# NextMagz - Modern Blogging Platform

A comprehensive blogging platform built with React, Next.js, and Express.js that allows users to read, publish, and engage with blog content.

## Features

- 📝 Create, edit, and delete blog posts
- 💬 Nested comment system with threaded replies
- ❤️ Like and bookmark posts
- 👤 User profiles and authentication
- 🔐 JWT-based secure authentication
- 📱 Fully responsive design
- 🎨 Modern UI with custom design and styling
- ⚡ Fast and optimized performance

## 🎨 Design & UI/UX

**Designed and developed by Siamak Khalili** - Complete UI/UX design, custom TailwindCSS styling, responsive layouts, and modern interface created with attention to user experience and visual aesthetics.

## Screenshots

| Homepage                                      | Blog Post                                       |
| --------------------------------------------- | ----------------------------------------------- |
| ![Homepage](/frontend/public/screenshots/homepage.png) | ![Blog Post](/frontend/public/screenshots/blog-post.png) |

## Installation

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/Siamak-Khalili/NextMagz.git
cd NextMagz

# Install all dependencies
npm install

# Setup environment variables
cd frontend && cp .env.example .env.local && cd ..
cd backend && cp .env.example .env && cd ..

# Start development servers (from root directory)
npm run dev
```

Or run frontend and backend separately:

```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend
npm run dev:frontend
```

Access the app at:

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

## Usage

1. **Browse Posts** - Visit homepage to see latest blog posts
2. **Create Account** - Register to start publishing
3. **Write Posts** - Create new blog posts with images
4. **Comment** - Leave comments and engage with other users
5. **Manage Content** - Edit or delete your posts from dashboard

## Technologies Used

- ⚛️ **React 19** - UI library
- 🚀 **Next.js 16** - Frontend framework
- 🛠️ **Express.js** - Backend API
- 🗄️ **MongoDB** - Database
- 🎨 **TailwindCSS** - Styling
- 🔑 **JWT** - Authentication
- 🖼️ **Multer** - File upload

## Project Structure

```
NextMagz/
├── frontend/          # Next.js application
│   ├── src/
│   │   ├── app/       # Pages and routes
│   │   ├── components/
│   │   ├── services/  # API calls
│   │   └── context/   # State management
│   └── package.json
│
├── backend/           # Express.js API
│   ├── app/
│   │   ├── models/    # MongoDB schemas
│   │   ├── controllers/
│   │   └── routers/   # API routes
│   └── package.json
│
└── package.json       # Root scripts
```

## API Endpoints

| Method | Endpoint           | Description                      |
| ------ | ------------------ | -------------------------------- |
| POST   | `/auth/signup`     | Register user                    |
| POST   | `/auth/signin`     | Login user                       |
| GET    | `/post`            | Get all posts                    |
| GET    | `/post/slug/:slug` | Get single post                  |
| POST   | `/post`            | Create post (authenticated)      |
| POST   | `/comment/add`     | Add comment (authenticated)      |
| GET    | `/user/profile`    | Get user profile (authenticated) |

See [backend/README.md](backend/README.md) for complete API documentation.

## Author

- **Siamak Khalili**
  - GitHub: [Siamak-Khalili](https://github.com/Siamak-Khalili)
  - LinkedIn: [siamak-kh](https://www.linkedin.com/in/siamak-kh/)
  - Email: siamak.khalili77@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
