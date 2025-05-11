# App Made with Love ❤️.

## Project Description
This is a cryptocurrency tracking app built with React Native and TypeScript. The app allows users to monitor prices of different cryptocurrencies and provides dynamic search and theme options for a personalized experience. 

## Screenshots

### 📱 Android

![Android Screenshot](link-to-android-screenshot.png)

### 🍏 iOS

![iOS Screenshot](link-to-ios-screenshot.png)

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
```EXPO_PUBLIC_API_URL=https://api.coinlore.net/api```

You can run the app on:
- Physical device: Scan the QR code using the Expo Go app (available on the App Store and Google Play).
- Emulator/Simulator

```bash
npm install
npx expo start
```

## 📱 Run on Android (APK)
Download the APK following the next link:
➡️ [Download APK](<link>)

Or, if you want to generate a sharable APK (without publishing to the Play Store), run the following command:
```bash
eas build --platform android --profile preview
```

## 🍏 Run on iOS (Simulator or Device)

⚠️ **Important**: To install the app on iOS devices without Expo Go, an Apple Developer account is required due to Apple's restrictions.

✨ **For Preview**: You can easily test the app using **Expo Go** on your iOS device.

To generate an iOS build (Apple Developer required):
```bash
eas build --platform ios --profile preview
```

## Some Features

- Built with **React Native** and **TypeScript**
- Implements the **Facade pattern** to separate component logic.
– Utilizes the **Adapter Pattern** to bridge interfaces and promote modular, reusable code
- Supports **translations** in both English and Spanish
- Configured with **ESLint** and **Prettier** for code quality, and best practices.
- **Husky** set up for pre-commit hooks
- **High performance**, using virtualized lists, debounce, infinite Scroll and caching
- Monitors detailed cryptocurrency prices every 30 seconds for real-time updates.
- **Dark Mode** support for better visibility in low-light environments, easily switchable with a toggle.
- **Dynamic Search** using a search bar to filter and quickly find cryptocurrencies in the list.
- **Theme Management**: Switch between light and dark themes with a simple toggle.
- Unit tests
- Git flow, semantic commits

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
