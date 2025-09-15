import React from 'react';
import { View, Text } from 'react-native';
import HeaderWithIcon from '@/components/headerWithIcon';
const SignIn = () =>{
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <HeaderWithIcon />
            <Text>Sign In Page</Text>
        </View>
    );
}

export default SignIn;