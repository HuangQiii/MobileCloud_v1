import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SecondPage from '../pages/SecondPage';

export default class MainContainer extends Component {
    static navigationOptions = {
        title: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={25} color={tintColor} />
        )
    };

    static componentDidMount() {
        //此处codepush更新
    }

    render() {
        return <SecondPage {...this.props} />;
    }
}