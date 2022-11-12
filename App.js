import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import RootNavigator from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import Amplify from 'aws-amplify';
import config from "./src/aws-exports"
import { withAuthenticator} from "aws-amplify-react-native"
import AuthContextProvider from './src/contexts/AuthContext'
import BasketContextProvider from './src/contexts/BasketContext'
import OrderContextProvider from './src/contexts/OrderContext'

 
Amplify.configure({...config, Analytics: {disable: true}});


 function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}
          <AuthContextProvider>
            <BasketContextProvider>
              <OrderContextProvider>
                <RootNavigator/>
              </OrderContextProvider>
            </BasketContextProvider>
          </AuthContextProvider>
        <StatusBar style="light" />
      
    </NavigationContainer>
  );
}


export default withAuthenticator(App);


