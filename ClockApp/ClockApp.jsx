import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.clock}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clock: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});















// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Moment from 'react-moment';
// import moment from 'moment';

// const ClockApp = () => {
//   const [time, setTime] = useState(moment());

//   useEffect(() => {
//     const interval = setInterval(() => setTime(moment()), 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         <Moment element={Text} format="HH:mm:ss">{time}</Moment>
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//     , justifyContent: 'center'
//     , alignItems: 'center'
//     , backgroundColor: '#999'
//     ,
//   },
//   text: {
//     fontSize: 50,
//   },
// });

// export default ClockApp;