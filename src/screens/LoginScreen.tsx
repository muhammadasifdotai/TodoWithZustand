import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import useAuthStore from "../app/authStore";
import { signIn } from "../app/authApiService";

export default function LoginScreen(): JSX.Element {

    // state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // hook
    const {  } = useAuthStore(state => state)

    const handleLogin = async () => {
        console.log('handleLogin', 'asif')
        try {
            const params = {
                username: 'emilys',
                password: 'emilyspass',
            }
            console.log('obj:', params)
           await signIn(params);
        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    return (
        <View style={styles.main}>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter Email"
                placeholderTextColor='white'
                style={styles.email}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter Password"
                placeholderTextColor='white'
                secureTextEntry={true}
                style={styles.email}
            />
            <TouchableOpacity style={styles.login} onPress={handleLogin}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    email: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        width: '100%',
        paddingLeft: 11,
        marginBottom: 30,
        backgroundColor: 'cyan',
        color: 'white'
    },
    login: {
        borderWidth: 1,
        borderColor: 'white',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 15,
        backgroundColor: 'cyan',
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});
