import { useState } from 'react' ;
import {Text, View, StyleSheet , ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient' ;
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen' ;

export default function App() {

  const [userNumber, setUserNumber] = useState() ;
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber) ;
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>
  
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />
  }
  return (
    <LinearGradient colors={['#f8e7ff','#2bb1b7' ]} style={styles.mainContainer}>
        <ImageBackground source={require('./assets/dices.jpg')}
                       resizeMode="cover"
                       style={styles.mainContainer}
                       imageStyle={styles.backgroundIMG}

      >  

      <SafeAreaView> 
        {screen}
      </SafeAreaView>
         
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