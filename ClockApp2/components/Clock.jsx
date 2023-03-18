import {Text, View} from 'react-native';
import { useState } from 'react';


function Clock(){

    cont [time, setTime] = useState(new Date())

    const t = setInterval(() =>change_time(), 1000)


    function cleanup(){
        clearInterval(t);
    }


    function change_time(){
        setTime(new Date())
    }

    return (
        <Text>Clock</Text>
    )
}

export default Clock;