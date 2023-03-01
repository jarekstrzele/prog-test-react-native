import {View, Text, StyleSheet} from 'react-native';

function Subtitle(props){
    return (
        <View style={styles.subtitleContainer}>
            <Text  style={styles.subtitle}>{props.children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#ffebee',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
       
    },
    subtitleContainer:{
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 20,
        marginBottom: 10
    }
})