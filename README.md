# TaskHub - Task Management Application

A comprehensive full-stack task management application built with Node.js, Express, MongoDB, and React. Techolution allows users to create workspaces, manage projects, assign tasks, and collaborate with team members efficiently.

## 🚀 Features

### Core Functionality

- **User Authentication**: Secure registration, login, email verification, and password reset
- **Workspace Management**: Create and manage multiple workspaces with team collaboration
- **Project Organization**: Organize tasks within projects under workspaces
- **Task Management**: Create, assign, prioritize, and track tasks with status updates
- **Role-Based Access**: Owner, admin, member, and viewer roles with appropriate permissions
- **Real-time Collaboration**: Invite members, assign tasks, and track progress
- **Activity Logging**: Track all workspace and task activities
- **Email Notifications**: Automated email verification and password reset

### Technical Features

- **Security**: JWT authentication, password hashing, Arcjet security integration
- **API Documentation**: RESTful API with comprehensive endpoints
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Modern UI Components**: Radix UI components for consistent design
- **State Management**: TanStack Query for efficient data fetching and caching
- **Type Safety**: TypeScript support for better development experience

## 🛠 Tech Stack

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Arcjet for rate limiting and security
- **Email**: Nodemailer for SMTP email sending
- **Validation**: Zod for request validation
- **Password Hashing**: bcrypt

### Frontend

- **Framework**: React 19
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Language**: TypeScript

### Development Tools

- **Process Management**: Nodemon for backend development
- **Linting**: ESLint (implied)
- **Version Control**: Git
- **Package Management**: npm

## 📁 Project Structure

Techolution/
├── backend/
│ ├── controllers/ # Request handlers
│ │ ├── auth-controller.js
│ │ ├── workspace.js
│ │ ├── project.js
│ │ ├── task.js
│ │ └── user.js
│ ├── libs/ # Utility libraries
│ │ ├── arcjet.js
│ │ ├── index.js
│ │ ├── send-email.js
│ │ └── validate-schema.js
│ ├── middleware/
│ │ └── auth-middleware.js
│ ├── models/ # MongoDB schemas
│ │ ├── user.js
│ │ ├── workspace.js
│ │ ├── project.js
│ │ ├── task.js
│ │ ├── activity.js
│ │ ├── comment.js
│ │ └── verification.js
│ ├── routes/ # API routes
│ │ ├── index.js
│ │ ├── auth.js
│ │ ├── workspace.js
│ │ ├── project.js
│ │ ├── task.js
│ │ └── user.js
│ ├── package.json
│ └── index.js # Server entry point
├── frontend/
│ ├── app/
│ │ ├── components/ # Reusable UI components
│ │ │ ├── ui/ # Base UI components (Radix)
│ │ │ ├── layout/ # Layout components
│ │ │ ├── dashboard/ # Dashboard-specific components
│ │ │ ├── workspace/ # Workspace components
│ │ │ ├── project/ # Project components
│ │ │ ├── task/ # Task components
│ │ │ └── auth/ # Authentication components
│ │ ├── hooks/ # Custom React hooks
│ │ ├── lib/ # Utility functions
│ │ ├── provider/ # Context providers
│ │ ├── routes/ # Route definitions
│ │ ├── root.tsx # App root
│ │ ├── app.css # Global styles
│ │ └── routes.ts # Route configuration
│ ├── public/ # Static assets
│ ├── package.json
│ ├── vite.config.ts # Vite configuration
│ ├── tsconfig.json # TypeScript configuration
│ └── react-router.config.ts
└── README.md

````

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager
- SMTP email service (Gmail, SendGrid, etc.)

### Backend Setup

1. **Navigate to backend directory:**

   ```bash
   cd backend
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the backend directory with the following variables:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/techolution
   JWT_SECRET=your-super-secret-jwt-key-here
   FRONTEND_URL=http://localhost:5173
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ARCJET_KEY=your-arcjet-key
   ```

4. **Database Setup:**
   Ensure MongoDB is running locally or update `MONGODB_URI` for cloud database.

5. **Start the backend server:**
   ```bash
   npm run dev
   ```
   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## 🚀 Usage

### User Registration & Authentication

1. Visit the application at `http://localhost:5173`
2. Click "Sign Up" and create an account
3. Check your email for verification link
4. Verify your email and log in

### Creating a Workspace

1. After login, click "Create Workspace"
2. Enter workspace name, description, and color
3. Invite team members via email

### Managing Projects & Tasks

1. Within a workspace, create projects
2. Add tasks to projects with priorities and assignees
3. Update task status and track progress
4. View statistics and charts on the dashboard

## 📡 API Documentation

### Authentication Endpoints

- `POST /api-v1/auth/register` - User registration
- `POST /api-v1/auth/login` - User login
- `POST /api-v1/auth/verify-email` - Email verification
- `POST /api-v1/auth/reset-password-request` - Request password reset
- `POST /api-v1/auth/reset-password` - Reset password

### Workspace Endpoints

- `POST /api-v1/workspaces` - Create workspace
- `GET /api-v1/workspaces` - Get user workspaces
- `GET /api-v1/workspaces/:workspaceId` - Get workspace details
- `GET /api-v1/workspaces/:workspaceId/projects` - Get workspace projects
- `GET /api-v1/workspaces/:workspaceId/stats` - Get workspace statistics
- `POST /api-v1/workspaces/:workspaceId/invite-member` - Invite user to workspace

### Project Endpoints

- `POST /api-v1/projects` - Create project
- `GET /api-v1/projects/:projectId` - Get project details
- `PUT /api-v1/projects/:projectId` - Update project
- `DELETE /api-v1/projects/:projectId` - Delete project

### Task Endpoints

- `POST /api-v1/tasks` - Create task
- `GET /api-v1/tasks/:taskId` - Get task details
- `PUT /api-v1/tasks/:taskId` - Update task
- `DELETE /api-v1/tasks/:taskId` - Delete task

### User Endpoints

- `GET /api-v1/users/profile` - Get user profile
- `PUT /api-v1/users/profile` - Update user profile

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for secure password storage
- **Email Verification**: Mandatory email verification for new accounts
- **Rate Limiting**: Arcjet integration for request rate limiting
- **Input Validation**: Zod schemas for comprehensive input validation
- **CORS Configuration**: Proper CORS setup for frontend-backend communication

## 📧 Email Configuration

The application uses Nodemailer for email functionality. Configure your SMTP settings in the `.env` file:

- **Gmail**: Use app passwords for SMTP authentication
- **SendGrid**: Use API keys
- **Other Providers**: Configure host, port, and credentials accordingly

## 🗄 Database Schema

### User Model

```javascript
{
  email: String (required, unique),
  username: String (unique, sparse),
  password: String (required, hashed),
  name: String (required),
  profilePicture: String,
  isEmailVerified: Boolean (default: false),
  lastLogin: Date,
  is2FAEnabled: Boolean (default: false),
  twoFAOtp: String,
  twoFAOtpExpires: Date
}
```

### Workspace Model

```javascript
{
  name: String (required),
  description: String,
  color: String (default: "#FF5733"),
  owner: ObjectId (ref: User),
  members: [{
    user: ObjectId (ref: User),
    role: String (enum: ["owner", "member", "admin", "viewer"]),
    joinedAt: Date
  }],
  projects: [ObjectId (ref: Project)]
}
```

### Project Model

```javascript
{
  name: String (required),
  description: String,
  workspace: ObjectId (ref: Workspace),
  members: [{
    user: ObjectId (ref: User),
    role: String
  }],
  tasks: [ObjectId (ref: Task)],
  isArchived: Boolean (default: false)
}
```

### Task Model

```javascript
{
  title: String (required),
  description: String,
  status: String (enum: ["todo", "in-progress", "review", "done"]),
  priority: String (enum: ["low", "medium", "high", "urgent"]),
  project: ObjectId (ref: Project),
  assignee: ObjectId (ref: User),
  reporter: ObjectId (ref: User),
  dueDate: Date,
  tags: [String],
  watchers: [ObjectId (ref: User)]
}
```

## 🧪 Testing

### Backend Testing

```bash
cd backend
npm test  # If test scripts are configured
```

### Frontend Testing

```bash
cd frontend
npm run typecheck  # TypeScript type checking
```

## 🚀 Deployment

### Backend Deployment

1. Build for production: `npm run build` (if applicable)
2. Set production environment variables
3. Use PM2 or similar for process management
4. Configure reverse proxy (nginx) for production

### Frontend Deployment

1. Build for production: `npm run build`
2. Serve static files from `build/client` directory
3. Configure server for SPA routing

### Docker Deployment

```dockerfile
# Example Dockerfile for backend
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

For support, please contact the development team or create an issue in the repository.

## 📋 Roadmap

- [ ] Real-time notifications with WebSockets
- [ ] File attachments for tasks
- [ ] Time tracking and reporting
- [ ] Mobile app development
- [ ] Advanced analytics and insights
- [ ] Integration with third-party tools (Slack, Jira, etc.)

---

**Techolution** - Streamline your team's productivity with efficient task management.
