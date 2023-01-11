import { useState } from 'react' ;
import { View, StyleSheet , ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient' ;
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen' ;

export default function App() {

  const [userNamber, setUserNumber] = useState() ;
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber) ;
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>
  if (userNamber) {
    screen = <GameScreen  />
  }
  return (
    <LinearGradient colors={['#f8e7ff','#2bb1b7' ]} style={styles.mainContainer}>
      <ImageBackground source={require('./assets/dices.jpg')}
                       resizeMode="cover"
                       style={styles.mainContainer}
                       imageStyle={styles.backgroundIMG}

      >  
          {screen}
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