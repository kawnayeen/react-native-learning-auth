/**
 * Created by kawnayeen on 4/10/17.
 */
import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './component/common';
import LoginForm from './component/login.form';

const height = Dimensions.get('window').height;

class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA3O1L-igh3kHicffnf86Qkkn3lnXrcUf0',
            authDomain: 'auth-893a8.firebaseapp.com',
            databaseURL: 'https://auth-893a8.firebaseio.com',
            projectId: 'auth-893a8',
            storageBucket: 'auth-893a8.appspot.com',
            messagingSenderId: '599049940249'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.spinnerContainer}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
  spinnerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height
  }
};

export default App;
