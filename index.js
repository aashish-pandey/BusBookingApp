import { registerRootComponent } from 'expo';

import App from './App';
import { Provider } from 'react-redux';
import store from './src/store';
import messaging from '@react-native-firebase/messaging';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background', remoteMessage);
})

messaging().getInitialNotification(async remoteMessage => {
    console.log('Message handled in the Kill state', remoteMessage);
})

function reduxSetup(){
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

registerRootComponent(reduxSetup);
