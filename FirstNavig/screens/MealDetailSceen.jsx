import { useLayoutEffect } from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';

import IconButton from '../components/IconButton';
import List from '../components/List';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/Subtitle';
import { MEALS } from '../data/dummy-data';


const MealDetailScreen = (props) => {
    const mealId =props.route.params.mealId;
    
    const selectedMeal = MEALS.find((meal)=>meal.id === mealId);

    function headerButtonPressHandler(){
        console.log("Preesed!! Hurra!!")
    }

    useLayoutEffect( () => {
        props.navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" 
                                   color="white" 
                                   onPress={headerButtonPressHandler}/>
            }
        });
    }, [navigation, headerButtonPressHandler]
    )

    return( 
    <ScrollView style={styles.mainView}>
        <Image source={ {uri: selectedMeal.imageUrl}} style={ styles.image}  />
        <Text style={styles.title}> {selectedMeal.title} </Text>
        <MealDetails duration={selectedMeal.duration}
                     complexity={selectedMeal.complexity}
                     affordability={selectedMeal.affordability}
                     textStyle={styles.detailText}

        />
        <View style={styles.listOuterContainer}> {/* to make center*/}
            <View style={styles.listContainer}>       
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
        </View>

    </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    mainView:{

        backgroundColor: '#880e4f',
        marginBottom: 32,
    },
   
    image: {        
        width: '100%', 
        height: 350,
        marginVertical:10,
        marginHorizontal: 10,
        borderRadius: 10,
      
     },
    
    title: {
     fontWeight: 'bold',
     fontSize: 24,
     margin: 8,
     textAlign: 'center',
     color: '#ffebee',
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        width: '80%'
    },

    listOuterContainer:{
        alignItems: 'center'
    }


})

