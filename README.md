# hotelsafeapp
Please find attached an image of the Hotel Safe App. It’s a simple exercise for us to get a view of where you’re at, your thought process and how you organize/commit code so you don’t need to spend a lot of time on it. Please set up a git repo and commit to it as you progress through the code base.

An explanation of the application is below:

Hotel Safe App

The application is a basic representation of a hotel safe where you input a PIN, the safe locks with the stored PIN and you open it again by inputting the correct PIN. The rules are as follows:

![Alt text](/7748380.jpg)

### PIN should be 4 digits
### PIN should show each digit in display on key press with a limit of 4
### Enter button should store the PIN code IF the safe is not currently locked
### If the safe is locked on enter, show an error message (eg. INVALID) in the display window
### If safe is open and PIN is a valid 4 digit value, save value to state and use that to update lock indicator light
### If safe is locked and PIN matches stored value, unlock and update indicator light and clear state value/display
### Currently open safe should display a green light, locked should display a red light
### CLR should clear the current display

Use css, sass or styled components as you see fit to make the app look similar to the included image.
Use https://github.com/facebookincubator/create-react-app as a framework to build the app. Keep in mind that we use React with Redux. It’s a pure frontend application so you don’t need to do any service calls etc.

Bonus points for enzyme or jest unit tests.



