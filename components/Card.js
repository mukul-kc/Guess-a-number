import React from 'react';

import {View, StyleSheet} from 'react-native';

// This is a purely presentational component.
// We want to apply some styles to a component that we'll pass to this.
// Plus we want to have the option to override some of the styles here
// That's why props.style is passed first

const Card = (props) => {
    return <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10,
    },
});

export default Card;