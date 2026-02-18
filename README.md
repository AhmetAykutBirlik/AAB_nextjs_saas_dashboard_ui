# Modern SaaS Admin Dashboard UI (Static Data)

A modern, responsive, and premium-looking SaaS Admin Dashboard built with Next.js 14, TypeScript, and Tailwind CSS.
Designed for immediate UI integration with static data for demonstration purposes.

![Screenshot Placeholder](https://via.placeholder.com/1200x600?text=Dashboard+Screenshot)

## 🚀 Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Charts:** Recharts (or custom static implementation)

## ✨ Features
- **Responsive Layout:** Sidebar navigation with mobile support (responsive utility classes).
- **Dashboard Overview:** KPI Cards showing revenue, users, and sales trends.
- **Data Visualization:** Revenue bar chart and recent sales activity.
- **User Management:** Data table with status badges and role indicators.
- **Theme Support:** Dark/Light mode toggle with persistence.
- **Settings Page:** UI for account and appearance preferences.

## 🛠️ Installation

Since this project was generated without a local Node.js environment, you must install dependencies first.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AhmetAykutBirlik/AAB_nextjs_saas_dashboard_ui.git
    cd AAB_nextjs_saas_dashboard_ui
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

```bash
src/
├── app/
│   ├── analytics/      # Analytics page
│   ├── settings/       # Settings page
│   ├── users/          # Users management page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main Dashboard
├── components/
│   ├── dashboard/      # Dashboard widgets (KpiGrid, Charts, Tables)
│   ├── layout/         # Sidebar, Header
│   └── ui/             # Reusable UI components (Card, ThemeToggle)
└── lib/
    ├── data.ts         # Static mock data
    └── utils.ts        # Helper functions
```

## 👤 Author
**Ahmet Aykut Birlik**
- [LinkedIn](#)
- [WebFine](https://webfine.com.tr)
- [CodeFine](https://codefine.com.tr)

## 📄 License
MIT License.
