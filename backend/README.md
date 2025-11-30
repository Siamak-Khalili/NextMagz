# NextMagz Backend API

Professional REST API for the NextMagz blogging platform built with Express.js and MongoDB.

---

## Features

- ✅ RESTful API with JWT authentication
- ✅ User registration and login
- ✅ Blog post CRUD operations
- ✅ Nested comment system
- ✅ File upload (images, avatars)
- ✅ Pagination and search
- ✅ Input validation
- ✅ Error handling

## Installation

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update .env with your configuration
# Then run seed script to populate database
npm run seed
```

## Configuration

Create `.env` file:

```bash
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/nextmagz

# JWT Secrets (change in production!)
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_refresh_secret_key

# Server
DOMAIN=localhost
SERVER_URL=http://localhost:5000
CORS_ORIGIN=http://localhost:3000
```

## Running the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start

# Seed database
npm run seed
```

Server runs on http://localhost:5000

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register user
- `POST /api/auth/signin` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/refresh-token` - Refresh token

### Posts

- `GET /api/post` - Get all posts (with pagination, search, filters)
- `GET /api/post/slug/:slug` - Get single post
- `POST /api/post` - Create post (authenticated)
- `PUT /api/post/:id` - Update post (authenticated)
- `DELETE /api/post/:id` - Delete post (authenticated)

### Comments

- `GET /api/comment/list` - Get comments
- `POST /api/comment/add` - Add comment (authenticated)
- `PATCH /api/comment/update/:id` - Update comment (authenticated)
- `DELETE /api/comment/remove/:id` - Delete comment (authenticated)

### Users

- `GET /api/user/profile` - Get profile (authenticated)
- `GET /api/user/list` - Get all users (authenticated)
- `DELETE /api/user/:userId` - Delete user (authenticated)

## Database Models

- **User** - Name, email, password, avatar, biography
- **Post** - Title, content, author, category, tags, cover image
- **Comment** - Text, author, post, nested replies
- **Category** - Title, slug

## Technologies Used

- Express.js - Server framework
- MongoDB - Database
- Mongoose - ODM
- JWT - Authentication
- bcryptjs - Password hashing
- Multer - File upload

## Author

- **Siamak Khalili**
  - GitHub: [Siamak-Khalili](https://github.com/Siamak-Khalili)
  - Email: siamak.khalili77@gmail.com

## License

MIT License - see [LICENSE](../LICENSE) for details.
