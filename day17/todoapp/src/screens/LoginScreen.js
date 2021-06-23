import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import styled from 'styled-components';
const LoginScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 25,
            color: 'black',
          }}>
          Welcome Back
        </Text>
        <Text
          style={{
            marginLeft: 10,
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Email
        </Text>
        <AuthInput placeholder="Enter your email" />
        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
          Password
        </Text>
        <AuthInput placeholder="Enter your email" />
        <SignInButton
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Sign In
          </Text>
        </SignInButton>

        <Button title="Indal Kumar" />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

const SignInButton = styled.TouchableOpacity`
  align-items: center;
  margin: 10px 32px;
  height: 48px;
  justify-content: center;
  background-color: #8022d9;
  border-radius: 6px;
`;
const AuthInput = styled.TextInput`
  width: 90%;
  height: 48px;
  border-radius: 6px;
  border: 2px solid red;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 10px;
`;
