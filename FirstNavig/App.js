
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailSceen';
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
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: '#3f2f5'},     
            headerStyle: { backgroundColor: '#991410' },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen name="MealsCategories"
                        component={CategoriesScreen}
                        options={{
                          title:'All Categories',
                        }} />
                        
          <Stack.Screen name="MealsOverview"
                        component={MealsOverviewScreen}/>

          <Stack.Screen name="MealDetail" options={ {headerRight: () => {
            return <Button  title='Tap me!' />
                    }} }
                        component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
   );
  
}

const styles = StyleSheet.create({
  container: {
     
  },
});
