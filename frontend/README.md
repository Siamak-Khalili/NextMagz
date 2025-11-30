# NextMagz Frontend

Modern, responsive frontend for the NextMagz blogging platform built with Next.js 16, React 19, and TailwindCSS.

---

## Features

- 📖 Browse and search blog posts
- ✍️ Read full blog articles
- 💬 Comment and reply to comments
- ❤️ Like and bookmark posts
- 👤 User authentication and profiles
- 📝 Create and manage posts
- 📱 Fully responsive design
- 🎨 Custom design & modern UI
- ⚡ Server-side rendering (SSR)

## 🎨 Design & UI/UX

**Designed and developed by Siamak Khalili** - Complete UI/UX design, custom TailwindCSS styling, responsive layouts, and modern interface created with attention to user experience and visual aesthetics.

## Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Update .env.local with API URL
```

## Configuration

Create `.env.local`:

```bash
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# App name
NEXT_PUBLIC_APP_NAME=NextMagz
```

## Running the App

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

App runs on http://localhost:3000

## Project Structure

```
frontend/start/src/
├── app/              # Pages and routes
│   ├── (auth)/       # Login/Signup pages
│   ├── (blogs)/      # Blog pages
│   └── (dashboard)/  # User dashboard
├── components/       # React components
│   ├── blog/
│   ├── dashboard/
│   └── ui/
├── services/         # API calls
├── context/          # Global state
├── hooks/            # Custom hooks
└── styles/           # Global styles
```

## Key Components

- **Header** - Navigation bar
- **PostCard** - Blog post preview
- **CommentForm** - Add comment
- **Dashboard** - Manage posts and comments
- **PostForm** - Create/edit posts

## Technologies Used

- ⚛️ React 19
- 🚀 Next.js 16
- 🎨 TailwindCSS 3
- 📋 React Hook Form
- 🔗 Axios
- 🗂️ React Query
- 🎯 React Context API

## Pages

- `/` - Homepage
- `/blogs` - Blog listing
- `/blogs/:slug` - Single blog post
- `/signin` - Login
- `/signup` - Register
- `/profile` - User profile
- `/profile/posts` - My posts
- `/profile/comments` - Manage comments
- `/profile/users` - User management

## Author

- **Siamak Khalili**
  - GitHub: [Siamak-Khalili](https://github.com/Siamak-Khalili)
  - Email: siamak.khalili77@gmail.com

## License

MIT License - see [LICENSE](../LICENSE) for details.
