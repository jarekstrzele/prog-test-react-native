
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailSceen';
import FavoriteScreen from './screens/FavoriteScreen' ;

import { createNativeStackNavigator } from '@react-navigation/native-stack' ;
import { createDrawerNavigator} from '@react-navigation/drawer';

// // it is only a container
import { NavigationContainer } from '@react-navigation/native' ;

import { Ionicons } from '@expo/vector-icons';

// it creates an object with two properties Navigator and Screen (to register a screen that will be managed by this navigator)
// where every property  hodls an object that acts as a component
const Stack = createNativeStackNavigator() ; 
const Drawer = createDrawerNavigator();

function DrawerNavigator(){

  return (
  <Drawer.Navigator 
      screenOptions={{
        sceneContainerStyle: { backgroundColor: '#3f2f5'},     
        headerStyle: { backgroundColor: '#991410' },
        headerTintColor: "white",
        drawerContentStyle : {backgroundColor: '#991410'},
        drawerInactiveTintColor: 'white',
        drawerActiveBackgroundColor: '#3c1000',
        drawerActiveTintColor: 'white'
  }}
  >
    <Drawer.Screen name="Categories" component={CategoriesScreen}
        options={{
          title: 'All categories',
          drawerIcon: ({color, size}) => <Ionicons color={"lightblue"} size={size} />
        }}/>
    <Drawer.Screen name="Favorites" component={FavoriteScreen}/>
  </Drawer.Navigator>)
}



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
                        component={DrawerNavigator}
                        options={{
                          //title:'All Categories',
                          headerShown: false
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
