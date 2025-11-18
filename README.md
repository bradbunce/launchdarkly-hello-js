# LaunchDarkly Weather App Demo

A weather application demonstrating LaunchDarkly's client-side JavaScript SDK with feature flags, Observability, Session Replay, and Web Vitals tracking.

## Features

- Real-time weather data from WeatherAPI
- Feature flag-controlled temperature units (Fahrenheit/Celsius)
- Dynamic weather-based themes controlled by feature flags
- City search functionality
- LaunchDarkly Observability integration with Web Vitals tracking
- Session Replay for debugging user interactions
- Error recording demonstration
- Vite-powered development server with hot module replacement

## How It Works

This app demonstrates LaunchDarkly feature flags in a real-world weather application:

1. **Initialization**: The app loads your LaunchDarkly client-side ID and connects to WeatherAPI
2. **SDK Connection**: The LaunchDarkly SDK initializes with a user context (user key: "example-user-key", name: "Sandy")
3. **Weather Data**: Fetches current weather for a city (defaults to San Francisco)
4. **Feature Flag #1 - Temperature Units**: 
   - Flag key configured via `VITE_LD_FLAG_KEY` (default: "sample-feature")
   - `true` = Display temperature in Fahrenheit
   - `false` = Display temperature in Celsius
5. **Feature Flag #2 - Dynamic Themes**:
   - Flag key: "dynamic-weather-theme"
   - `true` = Background gradient changes based on weather conditions (sunny, rainy, cloudy, etc.)
   - `false` = Static ocean blue gradient theme
6. **Real-time Updates**: Toggle flags in LaunchDarkly and watch the page update instantly without refreshing
7. **Observability**: 
   - Network requests, errors, and SDK events captured
   - Web Vitals (CLS, FID, INP, LCP, FCP, TTFB) tracked as histogram metrics
   - Test error recording via button click
8. **Session Replay**: User sessions recorded for debugging and analysis in LaunchDarkly

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- A LaunchDarkly account with:
  - A client-side ID
  - Two boolean feature flags (or use the defaults)
  - Observability enabled (optional but recommended)
- A WeatherAPI account (free tier available at https://www.weatherapi.com/)
  - Optional: App works with mock data if no API key is provided

## Setup Instructions

### 1. Clone and Install

```bash
# Install dependencies
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
# Required: Your LaunchDarkly client-side ID (found in Account Settings → Projects)
VITE_LD_CLIENT_SIDE_ID=your-client-side-id-here

# Required: Feature flag key for temperature units (true = Fahrenheit, false = Celsius)
VITE_LD_FLAG_KEY=sample-feature

# Optional: WeatherAPI key from https://www.weatherapi.com/
# If not provided, the app will use mock weather data
VITE_WEATHER_API_KEY=your-weather-api-key-here
```

### 3. Create Feature Flags in LaunchDarkly

Create two boolean feature flags in your LaunchDarkly project:

1. **Temperature Unit Flag** (key should match `VITE_LD_FLAG_KEY`):
   - Default key: `sample-feature`
   - `true` = Fahrenheit
   - `false` = Celsius

2. **Dynamic Theme Flag**:
   - Key: `dynamic-weather-theme`
   - `true` = Weather-based gradient themes
   - `false` = Static ocean blue theme

### 4. Run the Development Server

```bash
npm run dev
```

Open your browser to the URL shown in the terminal (usually `http://localhost:5173`)

### 5. Test the Application

1. You should see weather data for San Francisco with temperature and weather details
2. Try searching for different cities using the search box
3. Go to your LaunchDarkly dashboard and toggle the feature flags:
   - Toggle temperature unit flag to switch between Fahrenheit and Celsius
   - Toggle dynamic theme flag to switch between weather-based and static themes
4. Watch the page update in real-time without refreshing
5. Click the "🐛 Record Test Error" button to send a test error to LaunchDarkly Observability
6. Check your LaunchDarkly Observability dashboard to see Web Vitals metrics and recorded errors

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build for production (outputs to `dist/` directory)
- `npm run preview` - Preview the production build locally

## Project Structure

```
.
├── index.html          # Main HTML file with LaunchDarkly SDK integration
├── index.css           # Styling for the demo page
├── package.json        # Dependencies and scripts
├── .env                # Your environment variables (not committed to git)
├── .env.example        # Template for environment variables
├── .gitignore          # Git ignore rules
├── .editorconfig       # Editor configuration for consistent formatting
└── README.md           # This file
```

## Technology Stack

- **LaunchDarkly JS Client SDK** (v3.9.0) - Feature flag management
- **@launchdarkly/observability** (v0.4.8) - SDK event tracking and metrics
- **@launchdarkly/session-replay** (v0.4.8) - User session recording
- **web-vitals** (v4.2.4) - Core Web Vitals monitoring
- **WeatherAPI** - Real-time weather data
- **Vite** (v5.0.0) - Fast development server and build tool

## Observability Features

This app includes LaunchDarkly's Observability plugins with comprehensive tracking:

- **Network Recording**: Captures HTTP requests with headers and bodies (including WeatherAPI calls)
- **Session Replay**: Records user interactions with privacy controls
- **Error Tracking**: Automatically captures and reports errors (test via the error button)
- **Web Vitals Monitoring**: Tracks Core Web Vitals as histogram metrics:
  - CLS (Cumulative Layout Shift)
  - FID (First Input Delay)
  - INP (Interaction to Next Paint)
  - LCP (Largest Contentful Paint)
  - FCP (First Contentful Paint)
  - TTFB (Time to First Byte)

Privacy setting is set to `default` which obfuscates potential PII. See [LaunchDarkly's privacy documentation](https://launchdarkly.com/docs/sdk/features/session-replay-config#privacy) for more details.

## Troubleshooting

### "Please configure your LaunchDarkly client-side ID in .env file"
- Make sure you've created a `.env` file with `VITE_LD_CLIENT_SIDE_ID` set
- Restart the dev server after changing environment variables

### Weather data not loading or showing mock data
- Verify you've added `VITE_WEATHER_API_KEY` to your `.env` file
- Check that your WeatherAPI key is valid at https://www.weatherapi.com/
- The app will fall back to mock data if the API key is missing or invalid

### Flag not updating in real-time
- Check that your LaunchDarkly client-side ID is correct
- Verify the flag keys match exactly (case-sensitive):
  - Temperature flag should match `VITE_LD_FLAG_KEY` value
  - Theme flag should be `dynamic-weather-theme`
- Ensure both flags exist in your LaunchDarkly project
- Check browser console for connection errors

### Theme not changing
- Make sure you've created the `dynamic-weather-theme` flag in LaunchDarkly
- The theme only changes when this flag is toggled to `true`
- Different weather conditions produce different gradient themes

### Source map warnings in console
- These are harmless warnings from the observability plugin's internal workers
- They only appear in development and don't affect functionality
- They won't appear in production builds

## Learn More

- [LaunchDarkly JavaScript SDK Documentation](https://docs.launchdarkly.com/sdk/client-side/javascript)
- [LaunchDarkly Observability Documentation](https://launchdarkly.com/docs/sdk/observability/javascript)
- [LaunchDarkly Session Replay Documentation](https://launchdarkly.com/docs/sdk/features/session-replay)
- [WeatherAPI Documentation](https://www.weatherapi.com/docs/)
- [Web Vitals Documentation](https://web.dev/vitals/)
- [LaunchDarkly Quickstart Guide](https://app.launchdarkly.com/quickstart#/)

## License

This sample application is provided as-is for demonstration purposes.
