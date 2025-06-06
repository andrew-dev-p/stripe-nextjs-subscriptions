# Stripe Subscriptions SaaS 🚀

A **full-stack SaaS starter** built with **Next.js**, **Stripe**, **Kinde**, and **MongoDB**. Easily launch a modern subscription-based product with authentication, payments, and a beautiful UI.

## 🔍 Description

This project provides a robust foundation for any SaaS product with recurring payments. It features:

- **Authentication** via Kinde
- **Subscription management** with Stripe
- **MongoDB** for persistent storage (via Prisma)
- **Modern UI** with TailwindCSS and ShadCN
- **API routes** for secure backend logic

## 📁 Project Structure

```
.
├── src/
│   ├── app/           # Next.js app directory (routes, pages)
│   ├── components/    # Reusable UI components
│   ├── lib/           # Utility libraries (Stripe, Kinde, etc.)
├── prisma/
│   └── schema.prisma  # Prisma schema (MongoDB models)
├── public/            # Static assets
├── .env               # Environment variables
├── package.json       # Project metadata and scripts
└── readme.md          # This file
```

## 🚀 Features

- **Kinde authentication** (login, logout, callback)
- **Stripe subscriptions** (monthly/yearly plans)
- **MongoDB user & subscription models**
- **Responsive UI** (TailwindCSS, ShadCN, Lucide)
- **Dark mode** (Next Themes)
- **API routes** for secure backend logic

## 🛠️ Tech Stack

- **Next.js 14**
- **React 18**
- **TailwindCSS**
- **ShadCN** & **Lucide**
- **React Query** (`@tanstack/react-query`)
- **Kinde** (auth)
- **Stripe** (payments)
- **Prisma** (ORM)
- **MongoDB** (database)

## ⚙️ Installation

### 1. Clone the Repo

```bash
git clone https://github.com/andrew-dev-p/stripe-nextjs-subscriptions
cd stripe-nextjs-subscriptions
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```env
DATABASE_URL="your_mongodb_connection_string"

KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_ISSUER_URL=https://your_kinde_subdomain.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/auth/callback

STRIPE_MONTHLY_PLAN_LINK=https://buy.stripe.com/your_monthly_link
STRIPE_YEARLY_PLAN_LINK=https://buy.stripe.com/your_yearly_link
STRIPE_MONTHLY_PRICE_ID=price_XXXXXXXXXXXX
STRIPE_YEARLY_PRICE_ID=price_XXXXXXXXXXXX
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXX
```

## 🧪 Running Locally

```bash
npm run dev
```

App will be available at [http://localhost:3000](http://localhost:3000).

## 📬 Deployment

- **Recommended**: Deploy on **Vercel** for best Next.js support.
- Set all environment variables in your deployment dashboard.