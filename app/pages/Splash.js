import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet, Animated } from 'react-native';
import NavigationUtil from '../utils/NavigationUtil'

const { height, width } = Dimensions.get('window');
const splashImg = require('../images/welcome.jpg');

class Splash extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(1)
        };
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        Animated.timing(this.state.bounceValue, {
            toValue: 1.2,
            duration: 1000
        }).start();
        this.timer = setTimeout(() => {
            NavigationUtil.reset(this.props.navigation, 'Home')
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{ height: height }}>
                <Animated.Image
                    style={{
                        width: width,
                        height: height * 0.8,
                        transform: [{ scale: this.state.bounceValue }]
                    }}
                    source={splashImg}
                />
                <View style={styles.WelcomeBottom}>
                    <Text style={styles.Name}>Qyellow</Text>
                    <Text style={styles.Copyright}>©DLQW</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    WelcomeBottom: {
        flex: 1,
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white'
    },
    Name: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: -20
    },
    Copyright: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 5
    }
});

export default Splash;