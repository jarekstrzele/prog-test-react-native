import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



export default function App() {

  const wydarzenia = {
    '2023-04-20': [ {opis: "praca klasowa 1", czas: '10:00 '}],
    '2023-04-21': [{ opis: 'Wyjście na lody 2', czas: '12:00 ' }],
    '2023-04-25': [{ opis: 'Sprawdzian z OOP 3', czas: '16:33 ' }, { opis: 'Wspólne granie 3', czas: '19:54 ' }],
 };

 function renderWydarzenia(wydarzenie){
  return (
    <View >
      <Text>{wydarzenie.opis}</Text>
      <Text>{wydarzenie.czas}</Text>
    </View>
  )
 }

  function renderEmptyDate(){
    return (
      <View>
        <Text>W tym dni nie ma nic do roboty</Text>
      </View>
    )
  }
  return (
    
  <Agenda 
    items={wydarzenia}
    renderItem={renderWydarzenia}
    renderEmptyDate = {renderEmptyDate}
  />
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

