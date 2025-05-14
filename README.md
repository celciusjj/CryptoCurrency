# App Made with Love ❤️.

## Project Description

This is a cryptocurrency tracking app built with React Native and TypeScript. The app allows users to monitor prices of different cryptocurrencies and provides dynamic search and theme options for a personalized experience.

⚠️ **Important**

- Added HOC pattern and animations for currency stats, pls download the new apk if you installed one before the date (13/05/2025). 

## Screenshots

### 🍏 iOS

### Currency list darkmode

<img src="https://i.imgur.com/QD5Eko9.png" alt="Screenshot 1" width="600"/>

### Currency list lightmode

<img src="https://i.imgur.com/EKnEIl0.png" alt="Screenshot 2" width="600"/>

### Currency detail

<img src="https://i.imgur.com/dH452Hc.png" alt="Screenshot 3" width="600"/>

## Requirements

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) >= 9.x
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- [EAS CLI](https://docs.expo.dev/eas/) (`npm install -g eas-cli`)
- Android/iOS device or simulator/emulator
- Expo Go for development mode

## 🚀 Run the Project

⚠️ **Important**
Set up your API keys in `.env` file in root of project.

Example:
`EXPO_PUBLIC_API_URL=https://api.coinlore.net/api`

You can run the app on:

- Physical device: Scan the QR code using the Expo Go app (available on the App Store and Google Play).
- Emulator/Simulator

```bash
npm install
npx expo start
```

## 📱 Run on Android (APK)

Download the APK following the next link:
➡️ [Download APK](https://expo.dev/accounts/celcius/projects/million-crypto/builds/e447c18e-a196-4c8d-8a2a-8250e86e0229)

Or, if you want to generate a sharable APK (without publishing to the Play Store), run the following command:

```bash
eas build --platform android --profile preview
```

## 🍏 Run on iOS (Simulator or Device)

⚠️ **Important**: To install the app on iOS devices without Expo Go, an Apple Developer account is required due to Apple's restrictions.

✨ **For Preview**: You can easily test the app using **Expo Go** on your iOS device and running the project.

To generate an iOS build (Apple Developer required):

```bash
eas build --platform ios --profile preview
```

## Some Features

- Built with **React Native** and **TypeScript**.
- Implements the **Facade pattern** to separate component logic.
- Supports **translations** in both English and Spanish.
- Configured with **ESLint** and **Prettier** for code quality, and best practices.
- **Husky** set up for pre-commit hooks.
- **High performance**, using virtualized lists, debounce, infinite scroll and caching.
- Monitors detailed cryptocurrency prices every 30 seconds for real-time updates.
- **Dark Mode** support for better visibility in low-light environments, easily switchable with a toggle.
- **Dynamic Search** using a search bar to filter and quickly find cryptocurrencies in the list.
- **Theme Management**: Switch between light and dark themes with a simple toggle.
- Unit tests.
- Git flow, semantic commits.
- Use **HOC Pattern** to make different types of animations.
- Use React native reanimated for row animations.
- Use the **Adapter Pattern** to bridge interfaces and promote modular, reusable code.

## 📂 Project Structure

The project's folder structure follows a modular and organized approach, which facilitates code development, maintenance, and scalability.

The project is organized into the following main directories:

```
CryptoCurrency/
├── app/                # Core application using expo-router based on Next.js
├── modules/            # Main feature modules
│   ├── crypto/         # Cryptocurrency-specific logic
│   │   ├── components/ # Reusable UI components for the crypto module
│   │   ├── adapters/   # Data adapters and interface bridges
│   │   ├── hooks/      # Custom React hooks for crypto features
│   │   ├── models/     # Data models for cryptocurrencies
│   │   └── screens/    # Screens specific to the crypto module
│   ├── common/         # Shared, reusable features across the app
│       ├── components/ # Reusable UI components for common use
├── services/           # Global services for API communication and business logic
├── theme/              # Global theming configurations
├── translations/       # Global translations for multi-language support
├── assets/             # Images, fonts, and other static assets
├── __tests__/          # Unit tests
├── .github/            # GitHub workflows and configurations
├── .env                # Environment variables for API configuration
└── package.json        # Project dependencies and scripts
```

## Branch Naming Rules

- **Feature Branch:** `feature/add-login-screen`
- **Bugfix Branch:** `bugfix/fix-crash-on-startup`
- **Hotfix Branch:** `hotfix/fix-db-connection-issue`
- **Release Branch:** `release/v1.0.0-latest`

## Commit Message Rules

Use the following format for your commit messages:

- **feat:** Add new login screen
- **fix:** Resolve crash issue on startup
- **docs:** Update README with new instructions
- **style:** Format code according to eslint rules
- **refactor:** Simplify login screen component
- **test:** Add unit tests for authentication
- **chore:** Update dependencies
- **ci:** Add CI/CD pipeline with GitHub Actions
- **revert:** Revert previous commit
