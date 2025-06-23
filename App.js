import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddTransationScreen from './src/screens/AddTransactionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title:'AhorrApp'}} />
        <Stack.Screen name="AddExpense" component={AddTransationScreen} options={{ title: 'Nueva Transacción'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}