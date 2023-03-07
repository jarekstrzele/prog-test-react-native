import { Pressable , StyleSheet} from "react-native";
// import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
function IconButton(props) {
    return (
        <Pressable onPress={props.onPress}
                    style={ ({pressed }) => pressed && styles.pressed }
        >
            <FontAwesome style={styles.myIcon} name={props.icon} size={24} color={props.color} />

        </Pressable>
    )
}

export default IconButton ;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    },
    myIcon:{
        marginRight: 10
    }
})

