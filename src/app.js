/**
 * Created by kawnayeen on 4/10/17.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import LoginForm from './component/login.form';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA3O1L-igh3kHicffnf86Qkkn3lnXrcUf0',
            authDomain: 'auth-893a8.firebaseapp.com',
            databaseURL: 'https://auth-893a8.firebaseio.com',
            projectId: 'auth-893a8',
            storageBucket: 'auth-893a8.appspot.com',
            messagingSenderId: '599049940249'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
