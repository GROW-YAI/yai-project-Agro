# YHybrid Oven Innovation Website

## Project Overview

This is a modern, responsive website for a revolutionary hybrid oven product. The site showcases an innovative heating solution that combines cutting-edge technology with sustainability principles. The hybrid oven is designed to maximize efficiency and durability, transforming the way small industries and households experience heating solutions.

### Purpose

The website serves as a marketing and informational platform to:
- Present the hybrid oven product to potential customers
- Highlight the eco-friendly and sustainable features of the technology
- Showcase the product's capabilities through images and descriptions
- Provide contact information for inquiries and purchases

### Main Features

- **Hero Section**: Dynamic image carousel with compelling call-to-action
- **About Product**: Detailed information about the hybrid oven's features and benefits
- **About Innovator**: Information about the creator/innovator behind the product
- **Showcase**: Visual gallery of the product and its applications
- **Contact**: Contact form and information for customer inquiries
- **Accessibility**: Integrated Boafo accessibility widget to ensure the site is accessible to all users

### Technologies Used

- **React 19**: Modern JavaScript library for building user interfaces
- **Vite 6.1**: Fast build tool and development server
- **Tailwind CSS 3.4**: Utility-first CSS framework for styling
- **React Router DOM 7.1**: Client-side routing for single-page application
- **Framer Motion 12.4**: Animation library for smooth, interactive animations
- **React Icons 5.4**: Icon library for UI elements
- **Boafo Accessibility Widget**: Third-party widget for accessibility compliance
- **ESLint 9.19**: Code linting for maintaining code quality
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing

## How to Get Your Boafo API Key

To use the Boafo accessibility widget, you need to obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account or log in to your existing account
3. Navigate to your dashboard
4. Generate or copy your API key from the dashboard settings

## How to Integrate the Boafo Widget

For detailed integration instructions, please refer to the official Boafo integration guide:

**[Boafo Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)**

This guide provides step-by-step instructions on how to properly integrate the Boafo accessibility widget into your application.

## Setup Instructions

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/yai-project-Agro.git
   cd yai-project-Agro
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   ```

4. **Configure your API key**
   - Open the `.env` file in your code editor
   - Replace `your_boafo_api_key_here` with your actual Boafo API key:
   ```
   VITE_BOAFO_API_KEY=your_actual_api_key_here
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173` (or the URL shown in your terminal)
   - The website should now be running with the Boafo accessibility widget active

### Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
yai-project-Agro/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and videos
│   ├── components/        # Reusable React components
│   │   ├── BoafoWidgetInitializer.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── layouts/           # Layout components
│   │   └── RootLayout.jsx
│   ├── pages/             # Page components
│   │   └── home/
│   │       ├── index.jsx
│   │       └── sections/
│   │           ├── AboutInnovator.jsx
│   │           ├── AboutProduct.jsx
│   │           ├── Contact.jsx
│   │           ├── Hero.jsx
│   │           └── Showcase.jsx
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global styles
│   ├── index.css          # Base styles
│   └── main.jsx           # Application entry point
├── .env                   # Environment variables (not tracked by Git)
├── .env.example           # Example environment variables
├── .gitignore             # Git ignore rules
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BOAFO_API_KEY` | Your Boafo accessibility widget API key | Yes |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary. All rights reserved.

## Support

For support and inquiries, please contact us through the website's contact form or visit [boafo.co](https://boafo.co) for accessibility widget support.