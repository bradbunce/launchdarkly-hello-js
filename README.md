# LaunchDarkly JavaScript Sample Application

A simple browser application demonstrating LaunchDarkly's client-side JavaScript SDK with Observability and Session Replay features.

## Features

- Real-time feature flag evaluation
- LaunchDarkly Observability integration for tracking SDK events and metrics
- Session Replay for debugging user interactions
- Environment variable configuration
- Vite-powered development server with hot module replacement

## How It Works

This app demonstrates the complete LaunchDarkly client-side workflow:

1. **Initialization**: The app loads your LaunchDarkly client-side ID and flag key from environment variables
2. **SDK Connection**: The LaunchDarkly SDK initializes with a user context (user key: "example-user-key", name: "Sandy")
3. **Flag Evaluation**: The app evaluates your specified feature flag and displays the result
4. **Visual Feedback**: 
   - The page displays text: "The [flag-key] feature flag evaluates to [true/false]"
   - Background color changes based on flag value:
     - **Green** (#00844B) when flag is `true`
     - **Gray** (#373841) when flag is `false`
5. **Real-time Updates**: When you toggle the flag in LaunchDarkly, the page automatically updates without refreshing
6. **Observability**: Network requests, errors, and SDK events are captured and sent to LaunchDarkly
7. **Session Replay**: User sessions are recorded for debugging and analysis in LaunchDarkly

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- A LaunchDarkly account with:
  - A client-side ID
  - At least one boolean feature flag
  - Observability enabled (optional but recommended)

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

Edit `.env` and add your LaunchDarkly credentials:

```env
# Your LaunchDarkly client-side ID (found in Account Settings → Projects)
VITE_LD_CLIENT_SIDE_ID=your-client-side-id-here

# The feature flag key you want to evaluate
VITE_LD_FLAG_KEY=your-flag-key

# Your LaunchDarkly Observability project ID (optional)
VITE_LD_OBSERVABILITY_PROJECT_ID=your-project-id-here
```

### 3. Run the Development Server

```bash
npm run dev
```

Open your browser to the URL shown in the terminal (usually `http://localhost:5173`)

### 4. Test the Application

1. You should see the flag evaluation message and colored background
2. Go to your LaunchDarkly dashboard
3. Toggle your feature flag on/off
4. Watch the page update in real-time without refreshing

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
- **@launchdarkly/observability** - SDK event tracking and metrics
- **@launchdarkly/session-replay** - User session recording
- **Vite** - Fast development server and build tool

## Observability Features

This app includes LaunchDarkly's Observability plugins:

- **Network Recording**: Captures HTTP requests with headers and bodies
- **Session Replay**: Records user interactions with privacy controls
- **Error Tracking**: Automatically captures and reports errors
- **Metrics**: Tracks SDK performance and usage

Privacy setting is set to `default` which obfuscates potential PII. See [LaunchDarkly's privacy documentation](https://launchdarkly.com/docs/sdk/features/session-replay-config#privacy) for more details.

## Troubleshooting

### "Please edit index.html to set clientSideID"
- Make sure you've created a `.env` file with `VITE_LD_CLIENT_SIDE_ID` set
- Restart the dev server after changing environment variables

### Flag not updating in real-time
- Check that your LaunchDarkly client-side ID is correct
- Verify the flag key matches exactly (case-sensitive)
- Check browser console for connection errors

### Source map warnings in console
- These are harmless warnings from the observability plugin's internal workers
- They only appear in development and don't affect functionality
- They won't appear in production builds

## Learn More

- [LaunchDarkly JavaScript SDK Documentation](https://docs.launchdarkly.com/sdk/client-side/javascript)
- [LaunchDarkly Observability Documentation](https://launchdarkly.com/docs/sdk/observability/javascript)
- [LaunchDarkly Quickstart Guide](https://app.launchdarkly.com/quickstart#/)

## License

This sample application is provided as-is for demonstration purposes.
