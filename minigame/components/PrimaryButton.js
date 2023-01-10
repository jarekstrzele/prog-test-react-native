import {View, Text, Pressable, StyleSheet} from 'react-native' ;

const PrimaryButton = (props) => {
  function pressHandler(){
    console.log('Pressed!')
  }

  return (
   <View style={styles.btnOuterContainer} >
      <Pressable 
        style={(pressed) =>
          pressed 
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
          } 
        onPress={pressHandler} 
        android_ripple={{color:'white'}}
      >
        
          <Text style={styles.btnText}> {props.children} </Text>   
      </Pressable>  
  </View>
  )
}

export default PrimaryButton ;



const styles = StyleSheet.create({
  btnOuterContainer:{
    borderRadius: 28,
    margin: 4, 
    overflow: 'hidden'
  },
  btnInnerContainer:{
    backgroundColor: '#25979c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnText:{
    color:'white',
    textAlign: 'center'
  },
  pressed:{
    opacity: 0.75,
  }

});