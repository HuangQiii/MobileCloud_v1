import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';
var dismissKeyboard = require('dismissKeyboard');

let feedbackText;
const aboutLogo = require('../images/about_logo.png');
export default class ThirdPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '关于',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-information-circle" size={25} color={tintColor} />
        ),
        headerRight: (
            <Icon.Button
                name="md-checkmark"
                backgroundColor="transparent"
                underlayColor="transparent"
                activeOpacity={0.8}
                onPress={() => {
                    navigation.state.params.handleCheck();
                }}
            />
        )
    });

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        feedbackText = '';
        this.props.navigation.setParams({ handleCheck: this.onActionSelected });
    }

    onActionSelected = () => {
        if (feedbackText === undefined || feedbackText.replace(/\s+/g, '') === '') {
            alert('请重新填写');
        } else {
            alert('提交成功');
            this.textInput.clear();
            dismissKeyboard();
        }
    };

    _onTouchStart() {
        dismissKeyboard();
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this._onTouchStart()} style={{ flex: 1 }}>
                    <View style={styles.center}>
                        <Image style={styles.logo} source={aboutLogo} />
                        <Text style={styles.title}>Qyellow</Text>
                        <Text style={styles.version}>v1.0.0</Text>
                        <Text style={styles.subtitle}>Qyellow</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TextInput
                    ref={(ref) => {
                        this.textInput = ref;
                    }}
                    style={styles.textInput}
                    placeholder="如果你有什么想和我们交流，请写下！"
                    placeholderTextColor="#aaaaaa"
                    underlineColorAndroid="transparent"
                    numberOfLines={20}
                    multiline
                    autoFocus={this.state.autoFocus}
                    onChangeText={(text) => {
                        feedbackText = text;
                    }}
                    value={this.state.inputText}
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    center: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 110,
        height: 110,
        marginTop: 30
    },
    version: {
        fontSize: 16,
        textAlign: 'center',
        color: '#aaaaaa',
        marginTop: 5
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        marginTop: 10
    },
    subtitle: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 10
    },
    disclaimerContent: {
        flexDirection: 'column'
    },
    disclaimer: {
        fontSize: 14,
        textAlign: 'center'
    },
    bottomContainer: {
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        fontSize: 14,
        padding: 15,
        backgroundColor: '#F2F2F2',
        textAlignVertical: 'top'
    }
});