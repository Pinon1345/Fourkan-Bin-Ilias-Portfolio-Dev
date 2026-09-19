# 🚀 Full-Stack Developer Portfolio | Fourkan Bin Ilias

A modern, high-performance, and responsive personal developer portfolio website built with **Next.js 14 (App Router)**, **React**, **Tailwind CSS**, and **Framer Motion**. Designed with an interactive CLI terminal, dynamic project showcases, seamless dark/light mode toggles, global error boundaries, and a working direct-to-inbox contact form.

---

## ✨ Key Features

- 🌓 **Adaptive Light & Dark Mode:** Complete theme switching across all components using Tailwind CSS dark utilities and smooth color transitions.
- 💻 **Interactive Terminal CLI:** A custom shell component allowing visitors to run commands like `help`, `bio`, `skills`, `projects`, `contact`, `clear`, and `sudo`.
- 📁 **Featured Projects Showcase:** Dynamic cards highlighting major web applications (`LegalEase`, `Hireloop`, `StudyNook`, `Wanderlust`) with live demo and GitHub repository links.
- 📬 **Live Direct Email Contact Form:** Form powered by **Web3Forms API** with instant client notifications via `react-hot-toast`.
- 🛡️ **App Router Resilience:** Includes custom Next.js `loading.jsx`, `error.jsx` (global error boundary), and `not-found.jsx` (404 page) components.
- 📱 **Fully Responsive Layout:** Optimized across mobile, tablet, desktop, and ultra-wide displays.
- ⚡ **Optimized Performance:** Clean image remote patterns configuration in Next.js to deliver zero Layout Shifts (CLS) and fast loading times.

---

## 🛠️ Tech Stack

### Frontend Core & UI
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)

### Backend Services & Integrations
- **Form Delivery:** [Web3Forms API](https://web3forms.com/)
- **Deployment Platform:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
.
├── src/
│   ├── app/
│   │   ├── error.jsx         # Global error boundary
│   │   ├── layout.jsx        # Root layout with theme
│   │   ├── loading.jsx       # Global loading fallback
│   │   ├── not-found.jsx     # Custom 404 page
│   │   └── page.jsx          # Main portfolio entry
│   ├── components/
│   │   ├── Experience.jsx    # Timeline section
│   │   ├── Footer.jsx        # Contact form & links
│   │   ├── Projects.jsx      # Showcase grid
│   │   └── Terminal.jsx      # Interactive CLI shell
│   └── data/
│       └── portfolioData.js  # Project details & info
├── next.config.mjs           # Next.js config
├── package.json
└── README.md
```



🚀 Getting Started


🌐 Deployment

This project is deployed using Vercel:

Push your repository to GitHub.

Import the project into your Vercel Dashboard.

Add the NEXT_PUBLIC_WEB3FORMS_KEY under Project Settings → Environment Variables.

Click Deploy.

Note: Update your Allowed Domains / Website URL in your Web3Forms Settings from localhost to your live production domain after deploying.

👨‍💻 Author

Fourkan Bin Ilias

GitHub: @Pinon1345

LinkedIn: Fourkan Bin Ilias

Email: pinonfurkan1@gmail.com

📄 License
This project is open-source and available under the MIT License.