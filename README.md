# Advanced Calculator

A fully-featured, responsive React calculator with scientific functions, calculation history, memory operations, and a beautiful dark/light theme.

## Features

✨ **Core Features:**
- Basic arithmetic operations (+, -, ×, ÷)
- Decimal point support
- Clear (AC) and Clear Entry (CE) buttons
- Backspace functionality
- Percentage calculations
- Sign toggle (+/-)

🧮 **Scientific Features:**
- Square root (√)
- Exponentiation (x²)
- Power operation (x^y)
- Trigonometric functions (sin, cos, tan) - in degrees
- Logarithmic functions (log, ln)
- Exponential function (eˣ)
- Reciprocal (1/x)

📊 **Advanced Features:**
- **Calculation History**: View all previous calculations with results
- **Memory Operations**: MC (Clear), MR (Recall), M+ (Add), M- (Subtract)
- **Theme Toggle**: Switch between light and dark themes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Memory Display**: Shows current memory value on display

## Project Stack

- **React 18.2** - UI framework
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with CSS variables
- **Modern JavaScript (ES6+)** - Clean, maintainable code

## Installation

1. Navigate to the project directory:
```bash
cd Calculator
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The application will automatically open in your default browser at `http://localhost:3000`.

## Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
Calculator/
├── src/
│   ├── components/
│   │   └── Calculator.jsx       # Main calculator component
│   ├── styles/
│   │   └── Calculator.css       # Calculator styling
│   ├── App.jsx                  # App component with theme toggle
│   ├── App.css                  # App-level styles
│   ├── index.css                # Global styles
│   └── main.jsx                 # Entry point
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── package.json                 # Project dependencies
└── .gitignore                   # Git ignore rules
```

## Key Components

### Calculator Component (`Calculator.jsx`)
- Handles all calculation logic
- Manages display state, operation state, and history
- Implements scientific functions
- Manages memory operations
- Handles keyboard-friendly UI

### State Management
- `display`: Current display value
- `previousValue`: Value from previous operation
- `operation`: Current operation being performed
- `history`: Array of calculation history
- `memory`: Memory value for M+, M-, MR operations
- `scientific`: Toggle for scientific mode

## Usage

### Basic Operations
1. Click number buttons to input values
2. Click an operator (+, -, ×, ÷)
3. Click another number
4. Click = to calculate

### Scientific Functions
1. Click "Scientific" to toggle scientific mode
2. Use trigonometric, logarithmic, and other advanced functions
3. All trigonometric functions work in degrees

### Memory Operations
- **MC**: Clear memory
- **MR**: Recall value from memory
- **M+**: Add current display to memory
- **M-**: Subtract current display from memory

### History
1. Click "Show History" to display calculation history
2. View all previous calculations with results
3. Click "Clear" to clear history

### Theme
Click the sun (☀️) or moon (🌙) icon in the top-right to toggle between light and dark themes.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Fast load times with Vite's optimized bundling
- Responsive interactions with smooth animations
- Efficient state management in React
- CSS animations for smooth UI transitions

## Accessibility

- Clear button labels and visual hierarchy
- High contrast colors in both light and dark themes
- Responsive design for various screen sizes
- Semantic HTML structure

## Future Enhancements

- Keyboard input support
- Calculation result copy to clipboard
- More scientific functions (factorial, combinations)
- Custom themes
- Offline PWA support
- Export calculation history

## License

This project is open source and available under the MIT License.

## Author

Created for a professional portfolio and resume.
