import { View, Text , StyleSheet, Button} from 'react-native' ;

function UserScreen(props){

    function openDrawerHandler(){
        props.navigation.toggleDrawer();
    }

    return (
        <View style={styles.rootContainer}>
            <Text>
                This is the <Text style={styles.highlight}> User am I </Text> screen!
            </Text>
            <Button title="pen Drawer" onPress={openDrawerHandler} />
        </View>
    ) ;
}

export default UserScreen ;



const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    highlight: {
        color: 'green'
    }
})