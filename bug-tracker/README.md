# Bug Tracker

A stylish React application for browsing and filtering software bug reports. This application displays a collection of documented bugs with filtering capabilities by severity and search functionality, making it easy to find and examine specific issues.

## ✨ Features

- **Modern, Clean Interface** - Beautifully designed with gradients, subtle animations, and thoughtful spacing
- **Severity Filtering** - Toggle filter chips for Critical, Major, Minor, and Cosmetic bugs (multi-select supported)
- **Title Search** - Real-time search across all bug titles with instant filtering
- **Expandable Bug Cards** - Click any bug to reveal full details including steps to reproduce, expected/actual behavior, notes, and screenshots with smooth animations
- **Bug Count** - Shows "Showing X of Y bugs" updated live with active filters
- **Empty State** - Displays a helpful message when no bugs match the current filters
- **Responsive Design** - Works on mobile, tablet, and desktop screens
- **Visual Severity Indicators** - Color-coded badges for quick identification of bug priorities

## 🛠️ Tech Stack

- **Vite** - Lightning-fast build tool and development server
- **React 18** with TypeScript - Modern UI library with type safety
- **CSS Modules** - Scoped component styling to prevent conflicts
- **Google Fonts** - Inter and JetBrains Mono for clean, readable typography

## 📁 Project Structure

```
src/
├── data/
│   └── bugs.ts           # Bug data with detailed information
├── types/
│   └── bug.ts           # TypeScript interfaces for bug data
├── components/
│   ├── BugCard/         # Expandable bug detail card with animations
│   ├── FilterBar/       # Search input + severity filter chips
│   └── BugList/         # Container managing filter and search state
├── App.tsx
└── main.tsx
public/
└── bugImg/              # Screenshots referenced in bug reports
```

## 📊 Data Model

```ts
type Severity = 'Critical' | 'Major' | 'Minor' | 'Cosmetic';

interface Bug {
  id: number;
  title: string;
  severity: Severity;
  stepsToReproduce: string[];
  expectedBehavior: string;
  actualBehavior: string;
  notes?: string;
  screenshot?: string;
}
```

## ⚙️ Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository (if not already done):
```bash
git clone <repository-url>
cd bug-tracker
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
This will start the development server at http://localhost:5173 with hot module replacement.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing before deployment.

## 📖 Usage

1. **Filter by Severity**: Click on any of the severity chips (Critical, Major, Minor, Cosmetic) to show only bugs of that type. Multiple severities can be selected simultaneously.

2. **Search Bugs**: Type in the search box to filter bugs by title in real-time.

3. **View Bug Details**: Click on any bug card to expand it and see:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Additional notes (if available)
   - Screenshot (if available)

4. **Clear Filters**: Click on active severity chips again to deselect them, or clear the search box to reset filters.

## 🎨 Design Features

- **Subtle Animulations**: Smooth transitions on hover, expand/collapse animations, and micro-interactions
- **Color-coded Severity**: 
  - Critical: Red (#dc2626)
  - Major: Orange (#ea580c)
  - Minor: Yellow (#ca8a04)
  - Cosmetic: Gray (#718096)
- **Visual Hierarchy**: Clear distinction between header, filters, and bug cards
- **Hover Effects**: Interactive elements respond to user interaction with shadows and transforms
- **Responsive Layout**: Adapts to different screen sizes for optimal viewing

## 💡 Data Source

Bug data is sourced from a local TypeScript file (`src/data/bugs.ts`) containing documented software bugs. Screenshots referenced in bug reports are located in the `public/bugImg/` directory.

## 🤝 Contributing

If you'd like to contribute to this bug tracker:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.