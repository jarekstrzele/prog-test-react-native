import {View, Text, Image, StyleSheet, FlatList } from 'react-native' ;
// import MyAnimalList from '../components/MyAnimalList';
import MOJALISTA from '../data/dane' ;
import images from '../data/images' ;

function WelcomeScreen() {


    const renderAnimals = (itemData) => {
        const name = itemData.item.name ;

        return (
        <View>
            <Text> zwierze  - {name}</Text>
            <Image source={images[name]} style={{height:50, width:50}}/>
        </View>
        )
    };

    return (
        <View style={styles.rootContainer}>
            <Text>
                This is the <Text style={styles.highlight}> WELCOME, Zdrastwójcie </Text> screen!
            </Text>
            <View>
            <FlatList data={MOJALISTA} 
                      keyExtractor={item => item.id}
                      renderItem={renderAnimals} />

            </View>
        </View>
    )
}

export default WelcomeScreen; 


const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    highlight: {
        color: 'red'
    }
})