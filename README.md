# 💕 Valentine's Proposal App

A cute, romantic multi-step proposal web application built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎯 **4-Step Proposal Flow**: Progressive questions leading to the big moment
- 😢 **Guilt-Trip Screens**: Playful "No" responses for the first 3 questions
- 🏃 **Evasive "No" Button**: On the final question, the "No" button jumps away when you try to hover over it
- 🎉 **Confetti Celebration**: Beautiful confetti explosion when they say "Yes"
- 📱 **WhatsApp Integration**: Automatically opens WhatsApp with a pre-filled message
- 🎨 **Kawaii Aesthetic**: Pastel pink theme with smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Update the phone number in `src/components/Finale.jsx`:
   - Replace `'YOUR_PHONE_NUMBER'` with your actual WhatsApp phone number (include country code, no + sign)

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Project Structure

```
src/
├── App.jsx              # Main app component with state management
├── components/
│   ├── QuestionPage.jsx # Individual question page component
│   ├── GuiltTrip.jsx    # Guilt-trip screen component
│   └── Finale.jsx       # Final celebration screen
├── main.jsx             # React entry point
└── index.css            # Global styles with Tailwind
```

## Customization

### Questions
Edit the `questions` array in `src/App.jsx` to customize the questions, GIFs, and bottom text.

### Phone Number
Update the phone number in `src/components/Finale.jsx` on line 30:
```javascript
const phoneNumber = 'YOUR_PHONE_NUMBER' // Replace with actual phone number
```

### Colors & Styling
Modify `tailwind.config.js` to change the color scheme and theme.

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Canvas Confetti** - Confetti effects

## License

MIT

---

Made with 💕 for your special someone!
