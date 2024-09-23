import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductPage from './pages/product';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailsComponent from './pages/product_detail';

const Stack = createStackNavigator()
export default function App() {

  return (
    <NavigationContainer >
      <StatusBar backgroundColor={'black'} barStyle={'light-content'}/>
      <Stack.Navigator screenOptions={{animationEnabled:true}}>
        <Stack.Screen options={{headerShown:false}} name='Product' component={ProductPage}/>
        <Stack.Screen options={{headerShown:true}} name='ProductDetails' component={ProductDetailsComponent}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
