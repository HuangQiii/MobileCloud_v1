import React, {
    Component,
} from 'react';
import { View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import List from '../components/List';

const { width, height } = Dimensions.get('window');
export default class FirstPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '个人',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" size={25} color={tintColor} />
        ),
        headerRight: (
            <Icon.Button
                name="md-settings"
                backgroundColor="transparent"
                underlayColor="transparent"
                activeOpacity={0.8}
                onPress={() => Linking.openURL('https://www.baidu.com/')}
            />
        )
    });

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.headBlock}>
                    <View style={styles.userName}>
                        <Text style={{ fontSize: 28 }}>无</Text>
                    </View>
                    <View style={styles.userImage}>
                        <Image
                            source={{ uri: 'https://pic4.zhimg.com/v2-292a49c4ca7046333ec6e529c6485dbf_xl.jpg' }}
                            style={{ width: 80, height: 80, borderRadius: 80 }}
                        />
                    </View>
                </View>
                <List
                    text={'日程'}
                    des={'11月21日'}
                    icon={'md-calendar'}
                    iconSize={20}
                    iconColor={'#454B55'}
                />
                <List
                    text={'邮件'}
                    icon={'md-mail'}
                    iconSize={20}
                    iconColor={'#454B55'}
                />
                <List
                    text={'电话'}
                    icon={'md-call'}
                    iconSize={20}
                    iconColor={'#454B55'}
                />
                <List
                    text={'邮件'}
                    icon={'md-mail'}
                    overlayMarginTop={30}
                    iconSize={20}
                    iconColor={'#454B55'}
                />

                <TouchableOpacity>
                    <View style={{ width: width, backgroundColor: '#FFFFFF', height: 40, marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14 }}>退出</Text>
                    </View>
                </TouchableOpacity>
            </View >
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        backgroundColor: '#F1F1F1',
        flexDirection: 'column'
    },
    headBlock: {
        width: width,
        height: height * 0.2,
        flexDirection: 'row'
    },
    userName: {
        flex: 1,
        height: height * 0.2,
        paddingTop: 40,
        paddingLeft: 20
    },
    userImage: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginRight: 30
    }
});