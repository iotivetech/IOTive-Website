# IOTive - Official Website

A modern, responsive React + Vite website for IOTive - A tech startup specializing in IoT, PCB Design, and Custom Electronics Development.

## 🚀 Features

- **Modern Design**: Clean, professional white background with gradient accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered animations throughout
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Icons** - Icon Library

## 📁 Project Structure

```
iotive_website/
├── public/
├── src/
│   ├── assets/
│   │   └── icons/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   └── ContactForm.jsx
│   │   ├── sections/
│   │   │   └── HeroSection.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       └── Card.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone or download the project**

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages

1. **Home** - Hero section, services overview, why choose us, project showcase
2. **About** - Company story, mission & vision, team members
3. **Services** - Detailed service offerings with descriptions
4. **Projects** - Portfolio with filtering by category
5. **Contact** - Contact form, location map, social links, FAQ

## 🎨 Customization

### Colors

The website uses a gradient color scheme based on:
- Primary: Blue (from-blue-500 to-blue-600)
- Secondary: Purple (from-purple-500 to-purple-600)
- Accent: Pink (to-pink-600)

To customize colors, edit the Tailwind classes in components or update `tailwind.config.js`.

### Content

All content is hardcoded in the page components. Update the respective page files in `src/pages/` to modify content.

### Images

Project images use Unsplash placeholder URLs. Replace with your own images by:
1. Adding images to `public/` folder
2. Updating image URLs in component files

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 📝 License

This project is created for IOTive. All rights reserved.

## 📧 Contact

For any queries about the website:
- Email: info@iotive.tech
- Location: Pune, Maharashtra, India

---

# IOTive Admin Panel

Complete admin panel for managing the IOTive website content, products, and customer messages.

## 📁 Folder Structure

```
src/admin/
├── components/
│   ├── AdminLayout.jsx       # Main admin layout wrapper
│   ├── AdminSidebar.jsx      # Collapsible sidebar navigation
│   └── AdminNavbar.jsx       # Top navigation bar
├── pages/
│   ├── AdminLogin.jsx        # Admin login page
│   ├── AdminDashboard.jsx    # Dashboard with stats
│   ├── AdminProducts.jsx     # Product management (CRUD)
│   ├── AdminMessages.jsx     # Contact form messages
│   ├── AdminUsers.jsx        # User management (Coming Soon)
│   └── AdminSettings.jsx     # Admin settings (Coming Soon)
└── README.md
```

## 🔐 Login Credentials

**Demo Credentials:**
- Username: `admin`
- Password: `admin123`

## 🚀 Features

### 1. **Dashboard** (`/admin/dashboard`)
- Real-time statistics (Products, Messages, Users, Revenue)
- Recent orders table
- Top products list
- Quick action buttons
- Visual graphs and charts

### 2. **Products Management** (`/admin/products`)
- ✅ View all products in a table
- ✅ Add new products
- ✅ Edit existing products
- ✅ Delete products
- ✅ Search products
- ✅ Category filtering
- ✅ Stock status indicators
- Modal form for add/edit operations

### 3. **Messages Management** (`/admin/messages`)
- ✅ View all contact form submissions
- ✅ Mark messages as read/unread
- ✅ Filter by status (All, Unread, Read)
- ✅ Search messages
- ✅ Delete messages
- ✅ View full message details
- Reply functionality (UI ready)

### 4. **Users Management** (`/admin/users`)
- Coming Soon: User registration system
- Coming Soon: Order history
- Coming Soon: User permissions

### 5. **Settings** (`/admin/settings`)
- Coming Soon: Profile management
- Coming Soon: Password change
- Coming Soon: Notification preferences

## 🎨 Admin Panel Features

### UI/UX Features
- ✅ Collapsible sidebar
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark sidebar with gradient
- ✅ Search functionality
- ✅ Dropdown menus
- ✅ Modal popups
- ✅ Smooth animations with Framer Motion
- ✅ Loading states
- ✅ Toast notifications (using alerts for now)

### Security Features
- ✅ Login authentication
- ✅ Protected routes
- ✅ Session management (localStorage)
- ✅ Auto-redirect to login if not authenticated
- ⚠️ **Note:** This is a frontend-only implementation. For production, implement proper backend authentication!

## 🔒 Authentication Flow

1. User visits `/admin/login`
2. Enters credentials (admin/admin123)
3. On success:
   - Stores `adminLoggedIn: true` in localStorage
   - Stores `adminUsername` in localStorage
   - Redirects to `/admin/dashboard`
4. All admin routes check for `adminLoggedIn`
5. If not authenticated, redirects to login
6. Logout clears localStorage and redirects to login

## 📊 Data Management

Currently, all data is stored in component state (frontend only). For production:

### Recommended Backend Setup:
- **Products:** Store in database (MongoDB, PostgreSQL, etc.)
- **Messages:** Store contact form submissions in database
- **Users:** Implement user authentication system
- **Orders:** Track orders and payments

### API Endpoints Needed:
```
GET    /api/products           # Get all products
POST   /api/products           # Add new product
PUT    /api/products/:id       # Update product
DELETE /api/products/:id       # Delete product

GET    /api/messages           # Get all messages
PUT    /api/messages/:id       # Mark as read
DELETE /api/messages/:id       # Delete message

POST   /api/auth/login         # Admin login
POST   /api/auth/logout        # Admin logout
GET    /api/auth/verify        # Verify session
```

## 🛠️ Customization

### Change Login Credentials
Edit `src/admin/pages/AdminLogin.jsx`:
```javascript
// Line ~35
if (formData.username === 'YOUR_USERNAME' && formData.password === 'YOUR_PASSWORD') {
  // Login logic
}
```

### Add New Admin Page
1. Create new page in `src/admin/pages/`
2. Add route in `src/App.jsx`
3. Add menu item in `src/admin/components/AdminSidebar.jsx`

### Styling
- Admin panel uses Tailwind CSS
- Gradient colors: Blue → Purple
- All components are fully responsive

## 🚀 Usage

### Access Admin Panel:
1. Start the development server: `npm run dev`
2. Navigate to: `http://localhost:3000/admin/login`
3. Login with demo credentials
4. Navigate through different sections

### Quick Links:
- Login: `/admin/login`
- Dashboard: `/admin/dashboard`
- Products: `/admin/products`
- Messages: `/admin/messages`
- Users: `/admin/users`
- Settings: `/admin/settings`
- Back to Website: Click "Back to Website" in sidebar or go to `/`

## ⚠️ Important Notes

1. **Security:** Current implementation uses localStorage for authentication. This is NOT secure for production. Implement proper JWT-based authentication with backend.

2. **Data Persistence:** All changes are stored in component state and will be lost on page refresh. Implement backend API for data persistence.

3. **File Uploads:** Product images currently use placeholder URLs. Implement file upload functionality for real images.

4. **Email Notifications:** Reply functionality is UI-only. Implement email service (SendGrid, Nodemailer, etc.) for actual email sending.

5. **Validation:** Add more robust form validation and error handling.

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] Image upload for products
- [ ] Bulk actions (delete multiple items)
- [ ] Export data (CSV, Excel)
- [ ] Analytics and reports
- [ ] Order management system
- [ ] Payment integration
- [ ] Email templates
- [ ] User roles and permissions
- [ ] Activity logs
- [ ] Dark mode toggle

## 📞 Support

For any questions or issues with the admin panel, contact the development team.

---

Built with ❤️ for IOTive