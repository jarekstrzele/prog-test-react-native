import {Text, View, Image, FlatList } from 'react-native'
import mojaLista from '../data/dane' ;

export default function MyAnimalList(){
    return  <FlatList data={mojaLista} 
                      keyExtractor={item => item.id}
                      renderItem={ animal => <Text> { animal.text } </Text>} />
        
    
}