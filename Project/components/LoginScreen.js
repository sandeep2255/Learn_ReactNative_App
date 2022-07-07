import {KeyboardAvoidingView, StyleSheet, Text,TextInput,TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import firebase from 'firebase';

const LoginScreen = () => {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  const handleSignUp = ()=>{
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log(user.email)
    }).catch(error => alert(error.message))
  }
  return (
    <KeyboardAvoidingView
     style={styles.container}
     behavior="padding"
    >
     <View style={styles.inputContainter}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text =>setEmail(text)}
          styles={styles.input}
         />
         <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text =>setPassword(text)}
          styles={styles.input}
          secureTextEntry
         />
     </View>
     <View style={styles.buttonContainer}>
       <TouchableOpacity
        onPress={() => { }}
        styles={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>
       </TouchableOpacity>
       <TouchableOpacity
        onPress={handleSignUp}
        styles={[styles.button,styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Sign Up</Text>
       </TouchableOpacity>
     </View>
    </KeyboardAvoidingView>
  ) 
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,    
        justifyContent:'center',
        alignItems:'center',
    },
    inputContainter:{
      width: '80%'
    },
    input:{
      backgroundColor:'white',
      paddingHorizontal:15,
      paddingVertical:10,
      borderRadius:10,
      marginTop:5,
    },
    buttonContainer:{
      width:'60%',
      justifyContent:'center',
      alignItems:'center',
      marginTop:40,

    },
    button:{
      backgroundColor:'blue',
      width:'100%',
      padding: 15,
      borderRadius: 10,
      alignItems:'center'
    },
    buttonText:{
       color:'blue',
       fontWeight:'700',
       fontSize:16,
    },
    buttonOutline:{
      backgroundColor: 'white',
      marginTop:5,
      borderColor:'blue',
      borderWidth:2,

    },
    buttonOutlineText:{
      color:'blue',
      fontWeight:'700',
      fontSize: 16,
    },
})