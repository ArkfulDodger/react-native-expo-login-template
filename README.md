# react-native-expo-login-template

This template can be used as a jumping off point for creating a new React Native mobile app with an Expo Managed build. It integrates the use of the [React Native Paper](https://reactnativepaper.com/) and [React Navigation](https://reactnavigation.org/) libraries for UI/UX in addition to custom components.


## Main Features:

- Log In or Sign Up with email or OAuth (Google & Facebook)
- Supports custom fonts and themes, including dark/light modes (customizable)
- Client-Side email/password validations during account creation
- Visual input error feedback, including deactivated submit buttons until requirements are met
- Optional Finalize-Account screen to set key user settings before initial log-in


# Setup
## note: setup instructions are in process of being written at this time and may be incomplete

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
 
