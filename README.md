# 🛍️ Next.js Product Management App

A simple product management application built with **Next.js 15 (App Router)** and **NextAuth.js**.  
The app includes public product pages, authentication, and a protected dashboard to add new products.

---

## 🚀 Features

### Public Pages
- **Landing Page (/**) → Includes Navbar, Hero, Product Highlights, and Footer
- **Product List Page (/products)** → Displays all products with name, description, price, and details button
- **Product Details Page (/products/[id])** → Full details of a single product

### Authentication
- Login with **NextAuth.js** (Google or Credentials)
- Redirects to `/products` after successful login

### Protected Page
- **Add Product (/dashboard/add-product)** → Accessible only when logged in
- Includes form to add new product and save to mock database

### Optional Enhancements
- Loading spinner on form submit
- Toast messages for success feedback
- Light/Dark theme toggle

---

## 🛠️ Tech Stack
- **Next.js 15 (App Router)**
- **NextAuth.js** for authentication
- **Tailwind CSS** for styling
- **API Route Handlers (/api)** for mock backend

---

## 📂 Routes Summary

| Route                        | Description                                      | Auth Required |
|------------------------------|--------------------------------------------------|---------------|
| `/`                          | Landing Page with hero, highlights, footer       | ❌ No         |
| `/login`                     | Login page with Google/Credentials auth          | ❌ No         |
| `/products`                  | Product listing (all products)                   | ❌ No         |
| `/products/[id]`             | Product details page                             | ❌ No         |
| `/dashboard/add-product`     | Protected form to add a new product              | ✅ Yes        |
| `/api/products`              | API endpoint to fetch or add products            | ❌/✅ Mixed   |

---

## ⚙️ Setup & Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/nextjs-product-app.git
   cd nextjs-product-app
