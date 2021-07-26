import React from 'react';

import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    // Can spread our props into this component, even though style will repeat, one we have written will override the one that comes
    // So now from wherever we're using this component, just set the properties and they will be forwarded to this one.
  return <TextInput {...props} style={{...styles.input, ...props.styles}}/>  
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        textAlign: 'center'
    }
});

export default Input;