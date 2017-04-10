import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput style={{ height: 20, width: 100 }} />
                </CardSection>
                <CardSection>
                    <Text>Password:</Text>
                </CardSection>
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
