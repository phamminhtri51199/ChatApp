import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Input, Tile } from 'react-native-elements'
import { auth } from './firebase';

const login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.replace('Chat');
            } else {
                // User is signed out
                // ...
                navigation.canGoBack() && navigation.popToTop();
            }
        });
        return unsubscribe
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={{ width: 150, height: 150, marginBottom: 40 }} />
            <Input
                placeholder='Enter your email'
                label='Email'
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <Input
                placeholder='Enter your password'
                label='Password'
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={signIn}>
                <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.text}>Register</Text>
            </TouchableOpacity>

        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center'
    },
    button: {
        width: "100%",
        marginTop: 10,
        backgroundColor: '#09a5b3',
        height: 50,
        borderRadius: 7,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18
    }
});
