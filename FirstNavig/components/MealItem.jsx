import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

function MealItem(props){

    return  <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc'}}
                       style={ ({pressed}) => (pressed ? styles.buttonPressed : null) } 
            > {/*style=... it is  for iOS */}
                <View>

                <Image source={{uri: props.imageUrl}} style={styles.image}/>
                <Text style={styles.title}> {props.title} </Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{props.duration} m  </Text>
                    <Text style={styles.detailItem}>{props.complexity.toUpperCase()}  </Text>
                    <Text style={styles.detailItem}>{props.affordability.toUpperCase()}  </Text>
                </View>
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
    details:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 12
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    }
})