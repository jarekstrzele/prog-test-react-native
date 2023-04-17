import {Text, View, StyleSheet} from 'react-native';
import { useState, useEffect } from 'react';
import dayjs from "dayjs" ;

function Clock(){

    const [date, setDate] = useState(dayjs()) ;

    // useEffect( () => {
    //     setInterval( () => {
    //         setDate(dayjs()) ;
    //     } , 1000*1) ;
    // }, []) ;

    useEffect( () => {
        const interval = setInterval( () => {
            setDate(dayjs()) ;
        } , 1000*1) ;
        return () => clearInterval(interval);
    }, []) ;



    return(
    <View style={styles.container}>
        <Text style={styles.date}>{date.format("dddd, DD MMMM")}</Text>
        <Text style={styles.time}>{date.format("hh:mm:ss")}</Text>
    </View>
    )
}

export default Clock;

const styles = StyleSheet.create({
    container:{
       
        backgroundColor: '#cab',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    data: {
        fontSize: 30,
        padding: 10,
       
    },

    time: {

        fontSize: 40,
        padding: 10,
    }
})