import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

const CounterComponent = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Count: {count} </Text>
            <Button title="Increase" onPress={() => dispatch({ type: 'INCREMENT' })} />
            <Button title="Decrease" onPress={() => dispatch({ type: 'DECREMENT' })} />
        </View>
    );
    };
export default CounterComponent;       