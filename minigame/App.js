// import LinearGradient from 'react-native-linear-gradient';

import { View, StyleSheet , ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen' ;
import { LinearGradient } from 'expo-linear-gradient' ;

export default function App() {
  return (
    <LinearGradient colors={['#f8e7ff','#2bb1b7' ]} style={styles.mainContainer}>
      <ImageBackground source={require('./assets/dices.jpg')}
                       resizeMode="cover"
                       style={styles.mainContainer}
                       imageStyle={styles.backgroundIMG}

      >  
          <StartGameScreen />
      </ImageBackground>

    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    
    
  },
  backgroundIMG:{
    opacity: 0.5
  }
});