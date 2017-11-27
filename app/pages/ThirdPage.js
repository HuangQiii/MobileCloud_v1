import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, NetInfo, TextInput } from 'react-native';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

let feedbackText;
const aboutLogo = require('../images/about_logo.png');
export default class ThirdPage extends Component {

    static navigationOptions = {
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
                onPress={() => Linking.openURL('https://www.baidu.com/')}
            />
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            connectionInfo: null
        };
    }

    componentDidMount() {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            this.setState({
                connectionInfo: connectionInfo.type
            });
        });
    }

    checkNetInfo() {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            alert(connectionInfo.type)
            this.setState({
                connectionInfo: connectionInfo.type
            });
        });
        feedbackText = '';
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>

                    <View style={styles.center}>
                        <Image style={styles.logo} source={aboutLogo} />
                        <Text style={styles.title}>数据中心</Text>
                        <Text style={styles.version}>v1.0.0</Text>
                        <Text style={styles.subtitle}>QDLW Group</Text>
                        {/*<Text>当前网络链接类型：{this.state.connectionInfo}</Text>*/}
                    </View>

                    {/*<View style={styles.bottomContainer}>
                        <View style={styles.disclaimerContent}>
                            <Text style={[styles.disclaimer, { color: '#999999' }]}>
                                免责声明：
                            </Text>
                            <Button
                                style={[styles.disclaimer, { color: '#3e9ce9' }]}
                                text={'QDLW Group'}
                                onPress={() => this.checkNetInfo()}
                            />
                        </View>
                    </View>*/}

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
                        //autoFocus
                        onChangeText={(text) => {
                            feedbackText = text;
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 10
    },
    center: {
        flex: 1,
        alignItems: 'center'
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
        color: '#313131',
        marginTop: 10
    },
    subtitle: {
        fontSize: 10,
        textAlign: 'center',
        color: '#4e4e4e',
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