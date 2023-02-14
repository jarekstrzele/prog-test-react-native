import { useState } from 'react';

import { View, Text, StyleSheet, Alert} from 'react-native' ;
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max-min)) + min ;

    if (rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else {
        return rndNum;
    }
}


function GameScreen(props){

    const initGuess = generateRandomBetween(1, 100, props.userNumber)
    const [currentGuess, setCurrentGuess] = useState(initGuess) ;

    let minBoundary = 1;
    let maxBoundary = 100;
    function nextGuessHandler(direction){

        // when a human would lying
        if (
            (direction === 'lower' && currentGuess < props.userNumber) ||
            (direction === 'greater' && currentGuess > props.userNumber)
        )
        {
            Alert.alert("Dont't lie!", "you know that I know that you know that this is wrong wrrr", [
                {text: "Sorry!", style: 'cancel'}
            ]) ;
            return ;
        }

        if (direction == 'lower'){
            maxBoundary = currentGuess;
            //const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        } else {
            minBoundary = currentGuess+1;
            //const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess) ;
        setCurrentGuess(newRndNumber) ;
    }

    return ( <View style={styles.screen}>
                <Title style={styles.title}>Oppenent's Guess</Title>
                <NumberContainer> {currentGuess} </NumberContainer>
                <View>
                    <Text>Higher or lower? </Text>
                </View>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
    );
}

export default GameScreen ;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding:25
    },
    
})