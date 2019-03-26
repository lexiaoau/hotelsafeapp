This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
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



