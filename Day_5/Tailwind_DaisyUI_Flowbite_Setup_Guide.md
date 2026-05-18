# Tailwind CSS v4 + DaisyUI + Flowbite Setup Guide

This guide covers the modern installation process for **Tailwind CSS v4** and its most popular component libraries: **DaisyUI** and **Flowbite**.

---

## 1. Prerequisites
Ensure you have a React project created with Vite:
```bash
npm create vite@latest my-project -- --template react
cd my-project
npm install
```

---

## 2. Install Tailwind CSS v4
In Tailwind v4, we use the dedicated Vite plugin for better performance and simpler configuration.

### Step A: Install Dependencies
```bash
npm install tailwindcss @tailwindcss/vite
```

### Step B: Configure Vite
Update your `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### Step C: Import Tailwind
In your `src/index.css`, add:
```css
@import "tailwindcss";
```

---

## 3. Install & Setup DaisyUI (v5)
DaisyUI provides semantic classes like `btn`, `card`, and `navbar`, making it feel very similar to Bootstrap.

### Step A: Install
```bash
npm install -D daisyui@latest
```

### Step B: Activate Plugin
Add the `@plugin` rule to your `src/index.css` **after** the tailwind import:
```css
@import "tailwindcss";
@plugin "daisyui";
```

> [!NOTE]
> You might see an "Unknown at-rule @plugin" warning in VS Code. This is just a linter warning because Tailwind v4 is very new. It will still work perfectly in the browser.

---

## 4. Install & Setup Flowbite
Flowbite provides professional, enterprise-ready components.

### Step A: Install
```bash
npm install flowbite
```

### Step B: Usage
Flowbite components often require specific `data-` attributes. You can copy-paste components directly from [Flowbite Docs](https://flowbite.com/docs/getting-started/introduction/).

---

## 5. Usage Comparison: Bootstrap vs Tailwind + DaisyUI

| Feature | Bootstrap Style | Tailwind + DaisyUI Style |
| :--- | :--- | :--- |
| **Button** | `btn btn-primary` | `btn btn-primary` |
| **Card** | `card` | `card bg-base-100 shadow-xl` |
| **Navbar** | `navbar` | `navbar bg-base-100` |
| **Spacing** | `mt-3`, `p-2` | `mt-3`, `p-2` |
| **Flexbox** | `d-flex` | `flex` |

### Example Component (App.jsx)
```jsx
function App() {
  return (
    <div className="p-10 space-y-4">
      <h1 className="text-3xl font-bold">Lecture Demo</h1>
      
      {/* DaisyUI Button */}
      <button className="btn btn-primary">DaisyUI Button</button>
      
      {/* Tailwind Utility Card */}
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0 text-3xl">🚀</div>
        <div>
          <div className="text-xl font-medium text-black">Tailwind Power</div>
          <p className="text-slate-500">Fast and flexible!</p>
        </div>
      </div>
    </div>
  )
}
```

---

## 6. Troubleshooting
- **Styles not updating?** Restart your dev server (`npm run dev`).
- **Linter errors?** Install the **Tailwind CSS IntelliSense** extension in VS Code.
- **DaisyUI version?** Ensure you are using DaisyUI v5+ for compatibility with Tailwind v4.
