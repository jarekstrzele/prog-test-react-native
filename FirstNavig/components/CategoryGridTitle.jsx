import {Pressable, View, Text, StyleSheet, Platform } from 'react-native';


const CategoryGridTitle = ({title, color, whenPressExecute}) => {

        return <View style={styles.outerView}>
                <Pressable  style={ ({pressed}) => [styles.pressableView,
                                                    pressed ? styles.pressedButton : null] } 
                            android_ripple={{color:'#ccc'}}
                            onPress={whenPressExecute}>
                    <View style={[styles.innerView, , {backgroundColor: color}]}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                </Pressable>

              </View>
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
    outerView: {
        flex: 1,
        margin: 16,
        height:150,
        // borderRadius: 18,
        elevation: 6,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android'? 'hidden' : 'visible'
    },
    pressableView:{
        flex: 1
    },
    pressedButton: {
        opacity: 0.5
    },

    innerView: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 18,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    }
});

// you have to add button style to Pressable
// because without that style Pressable is empty, so it takes no place, so text will not be visible
//
// F O R    i O S   !!!!!!!!!!!!!!!!!!
// backgroundColor: 'white',
// shadowColor: 'black',
// shadowOpacity: 0.25,
// shadowOffset: { width: 0, height: 2},
// shadowRadius: 8,
// press effect -> on Android `android_ripple={{color:'#ccc'}}`
// add overflow: 'hidden' ripple will not go beyong the rounded corners, but it can remove some effect from iOS
// so you Platform.OS
// initially <Pressable style={style.button} .. but to make ripple effect in iOS you have to make some other changes
// initially   return <View style={styles.outerView}>
// but now  return <View style={[styles.outerView, {backgroundColor: color}]}>
// to make some better ripple effect on iOS
