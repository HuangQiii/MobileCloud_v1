import React, {
    Component
} from 'react';
import { NativeModules } from 'react-native';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const { height, width } = Dimensions.get('window');
export default class Welcome extends Component {

    render() {
        return (
            <View style={{ height: height, }}>
                <Image
                    style={{ width: width, height: height * 0.8 }}
                    source={require('./images/welcome.jpg')}
                />
                <View style={styles.WelcomeBottom}>
                    <Text style={styles.Name}>Mobile Cloud</Text>
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
    },
    Name: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: -20,
    },
    Copyright: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 5,
    },
});