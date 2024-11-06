import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedInput } from '@/components/ThemedInput';
import { Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Link } from 'expo-router';
import * as Linking from 'expo-linking';
import {login} from '@/scripts/api';
import React, { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';



export default function LoginIndex() {
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');

    const background01 = useThemeColor({}, 'baseBackground');
    const primaryColor = useThemeColor({}, 'color01');

    const toLogin = async () => {
        // const response = await login(username, password)
        // console.log(response);
        Linking.openURL('/chat')
        // const token = response.
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            width: '86%',
            height: 40,
            margin: 12,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            backgroundColor: background01,
            padding: 10,
        },
        tinyLogo: {
            maxWidth: '80%',
            maxHeight: '40%',
            padding: 10,
        },
        loginBox: {
            // flex: 1,
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            borderRadius: 20,
        },
        loginButton: {
            width: '60%',
            height: 40,
            color: '#E5EAF3',
            borderRadius: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            padding: 5,
            backgroundColor: primaryColor,
        }
    })
    return (
        <ThemedView style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('@/assets/images/logo.png')}
                resizeMode={"contain"}
            />
            <View style={[styles.loginBox, 
                {backgroundColor:background01}]}>
                <ThemedInput
                    style={styles.input}
                    value={username}
                    autoCapitalize="none"
                    onChangeText={onChangeUsername}
                    placeholder="请输入您的账号"
                />
                <ThemedInput
                    style={styles.input}
                    value={password}
                    autoCapitalize="none"
                    onChangeText={onChangePassword}
                    secureTextEntry={true}
                    placeholder="请输入您的密码"
                />
                <TouchableOpacity 
                    style={[styles.loginButton]} 
                    onPress={toLogin}>
                    <Text style={[{color:'#fff', fontSize:16, fontWeight: '700'}]}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </ThemedView>
    )
}

