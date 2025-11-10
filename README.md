### LaunchDarkly sample JavaScript application 

We've built a simple browser application that demonstrates how LaunchDarkly's SDK works. 

#### How it works

This app connects to LaunchDarkly using the client-side JavaScript SDK and evaluates a feature flag in real-time. Here's what happens:

1. **Initialization**: The app loads your LaunchDarkly client-side ID and flag key from environment variables
2. **SDK Connection**: The LaunchDarkly SDK initializes with a user context (user key: "example-user-key", name: "Sandy")
3. **Flag Evaluation**: The app evaluates your specified feature flag and displays the result
4. **Visual Feedback**: 
   - The page shows text: "The [flag-key] feature flag evaluates to [true/false]"
   - Background color changes based on flag value:
     - **Green** (#00844B) when flag is `true`
     - **Gray** (#373841) when flag is `false`
5. **Real-time Updates**: When you toggle the flag in LaunchDarkly, the page automatically updates without refreshing

Below, you'll find the basic build procedure, but for more comprehensive instructions, you can visit your [Quickstart page](https://app.launchdarkly.com/quickstart#/) or the [JavaScript SDK reference guide](https://docs.launchdarkly.com/sdk/client-side/javascript).

#### Build instructions 

1. Copy `.env.example` to `.env` and set your LaunchDarkly credentials:

```bash
cp .env.example .env
```

Then edit `.env` and set your values:
```
VITE_LD_CLIENT_SIDE_ID=your-client-side-id
VITE_LD_FLAG_KEY=your-flag-key
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open the URL shown in your terminal (usually `http://localhost:5173`)

You should receive the message "The <flagKey> feature flag evaluates to <flagValue>." The application will run continuously and react to the flag changes in LaunchDarkly.

#### Build for production

```bash
npm run build
```

The built files will be in the `dist` directory.
