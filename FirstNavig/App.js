
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack' ;
// // it is only a container
import { NavigationContainer } from '@react-navigation/native' ;

// it creates an object with two properties Navigator and Screen (to register a screen that will be managed by this navigator)
// where every property  hodls an object that acts as a component
const Stack = createNativeStackNavigator() ; 

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories"
                        component={CategoriesScreen}
                        />
          <Stack.Screen name="MealsOverview"
                        component={MealsOverviewScreen}
                        />
        </Stack.Navigator>
      </NavigationContainer>
    </>
   );
  
}

const styles = StyleSheet.create({
  container: {
     
  },
});
