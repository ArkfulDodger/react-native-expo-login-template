# react-native-expo-login-template
A template for the front-end login and create account screens for a React Native mobile app for iOS and Android using an Expo Managed build

This template can be used as a jumping off point for creating a new React Native mobile app with an Expo Managed build. It features the following:

# Screens
- Splash screen on startup
- Login Screen
- Create Account Screen
- (optional) Finalize Account Screen

# Integrated Libraries
- React Native Paper
- React Navigation

# OAuth
- Google and Facebook OAuth UI is prepared
- simple need to use the client IDs for your own app



# Setup

In app.json:
 - set "name" and "slug" to your <app name>
 - set "bundleIdentifier", "package", and "scheme" according to Oauth settings
 - set desired splash/icon images and settings
 
In TitleImage.js
 - set titleLight and titleDark to the image asset(s) desired for light/dark themes
 
In useGoogleAuth.js
 - enter your Client IDs for your google auth app
 
 In useFacebookAuth.js
 - enter your Client IDs for your facebook auth app
 
