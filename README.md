# 🏥 Ottica Demo - Complete Optical Store Application

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ottica-demo)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)](https://tailwindcss.com/)

> 🚀 **Production-ready** web application demo for optical stores with e-commerce, appointments, and customer management.

[**Live Demo**](https://ottica-demo.vercel.app) | [**Features**](#features) | [**Quick Start**](#quick-start) | [**Deploy**](#deployment)

---

## 📸 Screenshots

### Landing Page & Login
<img src="/public/screenshot-login.png" width="600" alt="Login Page">

### Dashboard & Product Catalog
<img src="/public/screenshot-dashboard.png" width="600" alt="Dashboard">

---

## ✨ Features

### 🛍️ **E-Commerce**
- Product catalog with categories (glasses, sunglasses, contact lenses, solutions)
- Shopping cart with real-time updates
- Product details and images
- Quantity management

### 👤 **Customer Management**
- User registration and authentication
- Editable customer profiles
- Visit history tracking (glasses/contact lenses)
- Prescription management

### 📦 **Order Management**
- Complete order history
- Invoice downloads
- Order status tracking
- Detailed order views

### ⚡ **Quick Contact Lens Ordering**
- Auto-fill from last prescription
- Fast checkout process
- Prescription details display

### 📅 **Appointment System**
- Book eye exams (free)
- Book optometric visits (paid)
- Calendar interface
- Time slot selection

### 💬 **Live Chat**
- Direct messaging with optician
- Real-time communication
- Secure and private

### 💳 **Payment Ready**
- Stripe integration ready
- Secure checkout flow
- Invoice generation

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ottica-demo.git
cd ottica-demo

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Account
```
Email: demo@ottica.com
Password: demo123
```

---

## 🏗️ Project Structure

```
ottica-demo/
├── app/
│   ├── api/              # API routes (Next.js)
│   │   ├── auth/         # Authentication endpoints
│   │   ├── products/     # Product endpoints
│   │   ├── orders/       # Order endpoints
│   │   ├── appointments/ # Appointment endpoints
│   │   └── user/         # User management endpoints
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── sections/         # Dashboard sections
│   │   ├── ShopSection.tsx
│   │   ├── ProfileSection.tsx
│   │   ├── OrdersSection.tsx
│   │   ├── QuickOrderSection.tsx
│   │   ├── AppointmentsSection.tsx
│   │   ├── CartSection.tsx
│   │   └── ChatSection.tsx
│   ├── Dashboard.tsx     # Main dashboard
│   ├── LoginForm.tsx     # Login component
│   └── RegisterForm.tsx  # Registration component
├── lib/
│   ├── db.ts            # Mock database (replace with real DB)
│   └── auth.tsx         # Authentication context
├── public/              # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Future Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# Future Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🔄 Integration Guide

### Replace Mock Database with Supabase

1. Create Supabase project at [supabase.com](https://supabase.com)

2. Run SQL schema (see `INTEGRATION_GUIDE.md`)

3. Update `lib/db.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

### Add Stripe Payments

1. Get Stripe keys from [stripe.com](https://stripe.com)

2. Install Stripe:
```bash
npm install @stripe/stripe-js stripe
```

3. Implement checkout in `CartSection.tsx`

See full integration guide in `INTEGRATION_GUIDE.md`

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Date Handling:** [date-fns](https://date-fns.org/)
- **Database (Ready):** [Supabase](https://supabase.com/)
- **Payments (Ready):** [Stripe](https://stripe.com/)

---

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🎯 Roadmap

- [ ] Integrate real Supabase database
- [ ] Add Stripe payment processing
- [ ] Implement email notifications
- [ ] Add product search and filters
- [ ] Mobile app version (React Native)
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Dark mode
- [ ] PWA support

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💡 Support

For support, email support@ottica-demo.com or open an issue on GitHub.

---

## 🌟 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Built with [Next.js](https://nextjs.org/)

---

<div align="center">

**Made with ❤️ for optical stores worldwide**

[⬆ Back to Top](#-ottica-demo---complete-optical-store-application)

</div>
