import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { auth } from './firebase';

const register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [imgURL, setImageUrl] = useState('');

    const register1 = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                user.updateProfile({
                    displayName: name,
                    photoURL: imgURL ? imgURL : "https://4xucy2kyby51ggkud2tadg3d-wpengine.netdna-ssl.com/wp-content/uploads/sites/37/2017/02/IAFOR-Blank-Avatar-Image.jpg"
                }).then(() => {
                    // Update successful
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                // ...
                navigation.popToTop();

            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter your name...'
                label='Name'
                leftIcon={{ type: 'material', name: 'badge' }}
                value={name}
                onChangeText={text => setName(text)}
            />

            <Input
                placeholder='Enter your email...'
                label='Email'
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <Input
                placeholder='Enter your password..'
                label='Password'
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />

            <Input
                placeholder='Enter your image Url..'
                label='Profile Picture'
                leftIcon={{ type: 'material', name: 'face' }}
                value={imgURL}
                onChangeText={text => setImageUrl(text)}
            />
            <TouchableOpacity style={styles.button} onPress={register1}>
                <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

export default register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10
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
    }
});
