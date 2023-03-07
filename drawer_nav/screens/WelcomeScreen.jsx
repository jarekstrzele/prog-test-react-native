import {View, Text, StyleSheet } from 'react-native' ;

function WelcomeScreen() {
    return (
        <View style={styles.rootContainer}>
            <Text>
                This is the <Text style={styles.highlight}> WELCOME, Zdrastwójcie </Text> screen!
            </Text>
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