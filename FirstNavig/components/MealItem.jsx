import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';
function MealItem(props){

    const navigation = useNavigation();
    
    function selectMealItemHandler(){
          //in the second param you can send some data
            navigation.navigate('MealDetail', {
            mealId: props.id
        })
    }
   

    return  <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc'}}
                       style={ ({pressed}) => (pressed ? styles.buttonPressed : null) } 
                       onPress={selectMealItemHandler}
            > {/*style=... it is  for iOS */}
                <View>

                <Image source={{uri: props.imageUrl}} style={styles.image}/>
                <Text style={styles.title}> {props.title} </Text>
                </View>
                <MealDetails duration={props.duration} 
                             affordability={props.affordability} 
                             complexity={props.complexity}/>
            </Pressable>
            </View>
}

export default MealItem;
// a local file  jpg -> RN can display it without problems
// a remote file jpg -> you have to style height and width to display the image

const styles = StyleSheet.create({
    image:{
    width: '100%',
    height: 200
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding:8
    },
    mealItem:{
        margin: 16,
        borderRadius: 8,
        
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4, //shadow for Android
        // shadow for iOS
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
    },
    
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    }
})