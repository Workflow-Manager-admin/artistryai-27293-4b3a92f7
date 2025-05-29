# Requirements Document: Main Container for ArtistryAI

## 1. Overview

This document outlines the comprehensive requirements for the "Main Container" of the ArtistryAI educational web application. ArtistryAI is designed to assist aspiring artists in learning drawing techniques, utilizing artificial intelligence to provide step-by-step guidance, real-time feedback, and a curated library of interactive tutorials. The product emphasizes minimalism, accessibility, and a visually striking interface tailored for modern web platforms.

---

## 2. Product Requirements

### 2.1. Core Features

- **AI Drawing Guidance:**  
  The application must provide real-time, step-by-step drawing instructions and intelligent suggestions powered by AI. This guidance should adapt to the user's progress and be intuitively accessible from the main workspace.

- **Interactive Tutorials:**  
  Users must have access to a comprehensive library of drawing tutorials. Tutorials must be interactive, support multiple skill levels, and enable direct practice within the interface.

- **Progress Tracking:**  
  The solution must track the user's learning progress, recording completed tutorials and exercises. Progress data should be used to suggest personalized exercises and next steps.

- **Minimalist UI:**  
  The interface must employ a clean, distraction-free design that accentuates content. The layout includes a centered main workspace, minimal and unobtrusive toolbars and navigation, and a consistent sans-serif font.

### 2.2. Visual Design

- **Background and Theme:**  
  Uses a solid black (`#000000`) background with a subtle ombre gradient accent for highlights, as defined in `src/App.css`.  
  The application leverages light accent colors:  
    - Primary: `#000000`
    - Secondary: `#222222`
    - Accent: `linear-gradient(90deg, #ff6a00 0%, #ee0979 100%)`

- **Typography:**  
  All text is displayed using a minimalist, highly-readable sans-serif font (e.g., Inter, Roboto, Helvetica, Arial).

- **Component Consistency:**  
  UI components (buttons, navigation bars, containers, and titles) follow a unified styling paradigm as detailed in `App.css` to ensure aesthetic integrity and readability.

- **Responsive Design:**  
  The UI must be responsive, providing an optimal experience on desktop and tablet displays.

---

## 3. Architectural Requirements

### 3.1. Technology Stack

- **Frontend Framework:**  
  Built with React JS (version 18.x or higher, as specified in `package.json`).

- **Programming Language:**  
  Utilizes JavaScript (ES6+ standard).

- **Backend:**  
  The main container assumes no backend by default; all logic currently runs client-side in the browser.

- **Project Structure:**  
  - Entry point: `src/index.js`
  - Root UI component: `src/App.js`
  - Styles defined in `src/App.css` and (base resets) `src/index.css`
  - Test setup in `src/setupTests.js`

- **Build and Start Scripts:**  
  Standardized with Create React App:  
    - `npm start` for development server
    - `npm run build` for production build  
    - `npm test` to run the test suite

### 3.2. Component Organization

- The root `App` component encapsulates all visual and interactive elements.
- Navigation bars and workspace containers are constructed as compositional React elements, styled with vanilla CSS—no third-party UI libraries or frameworks used.
- The HTML host (`public/index.html`) includes only minimal boilerplate necessary for mounting the React application.

---

## 4. Test Coverage Requirements

### 4.1. Testing Frameworks & Conventions

- Tests are set up using Jest and the React Testing Library (as evidenced by `setupTests.js`).
- All main UI components and critical logic paths should have associated tests to ensure:
    - Basic rendering without crash
    - UI state changes (button states, navigation)
    - Prop handling and event simulation

### 4.2. Quality Gate

- All new features must include accompanying unit/integration tests.
- The project should retain 80% or greater code coverage for UI components.
- Pull requests or code merges must pass all existing tests.

---

## 5. Code Quality Requirements

### 5.1. Linting & Style

- Linting is enforced using ESLint with ES6 and React-specific rules (`artistryai/eslint.config.mjs`).
    - Disallows unused variables (except React/App references)
    - Enforces proper usage of React in JSX
- No external code formatters; follow the pre-existing code style for spacing and indentation.

### 5.2. Modularity and Readability

- All components should follow functional decomposition—keep components small and focused.
- Use clear, descriptive naming for variables, components, and functions.
- Inline comments as needed for clarity, but avoid excessive documentation in code.

### 5.3. Dependency Management

- Keep dependencies minimal, as specified in `package.json`.
- No heavy or unnecessary UI libraries—only React and core dependencies are allowed.

---

## 6. Security Requirements

### 6.1. Browser Security

- The application code must not introduce direct security risks such as XSS vulnerabilities—any user-generated content rendered in the UI should be sanitized or controlled via React’s safe rendering.
- No direct use of `dangerouslySetInnerHTML` unless strictly necessary and justified.

### 6.2. NPM & Dependency Hygiene

- Dependencies tracked in `package.json` must be actively maintained and free of known vulnerabilities.
- Use `npm audit` and keep dependency versions up-to-date for all root and dev dependencies.

### 6.3. Privacy

- No PII (personally identifiable information) or user data is persistently stored, as the app currently operates solely client-side and does not interface with a backend.

---

## 7. Compliance Requirements

### 7.1. Licensing and Usage

- All bundled libraries must use licenses compatible with open-source distribution (React, etc.).
- CSS, code, and resources must be original or from appropriately licensed libraries; restrict usage to the provided theme and style.

### 7.2. Accessibility

- Follow accessibility standards (WCAG 2.1 AA) where possible:
    - Use sufficient color contrast in text/buttons (see CSS theming).
    - Ensure all interactive elements are keyboard-accessible.
    - Use semantic elements in HTML/JSX and provide ARIA labels where necessary.

---

## 8. Change Management

- Future modifications to architecture, component structure, or dependencies must be reflected in this requirements document and the corresponding source code documentation.

---

## 9. References

- [artistryai/README.md]: For developer onboarding and quick-start instructions.
- [artistryai/src/App.js, App.css]: For main UI and theming implementation details.
- [artistryai/eslint.config.mjs]: For enforced code style and linting rules.
- [artistryai/package.json]: For package and dependency management.
- [artistryai/src/setupTests.js]: For test setup and conventions.

---

_Last updated: 2024-06-09_
