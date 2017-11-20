'use strict';
import React, { Component } from 'react';
import { NativeModules } from 'react-native';
import { Image, ListView, StyleSheet, Text, View, RefreshControl, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

var DATA = [
    {
        id: 1,
        name: 'ad',
        iconPath: '../images/ad.png',
        bundleVersionId: 1,
    },
    {
        id: 2,
        name: 'anchor',
        iconPath: '../images/anchor.png',
        bundleVersionId: 2,
    },
    {
        id: 3,
        name: 'atom',
        iconPath: '../images/atom.png',
        bundleVersionId: 3,
    },
    {
        id: 4,
        name: 'backpack',
        iconPath: '../images/backpack.png',
        bundleVersionId: 4,
    },
    {
        id: 5,
        name: 'badge',
        iconPath: '../images/badge.png',
        bundleVersionId: 5,
    },
];

const { width, height } = Dimensions.get('window');
export default class ThirdPage extends Component {

    static navigationOptions = {
        title: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={25} color={tintColor} />
        )
    };

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => {
                    return row1 !== row2
                },
            }),
            swiperShow: false,
            loaded: false,
            isRefreshing: false,
        };
    }

    componentDidMount() {
        this.setState({
            data: DATA,
            dataSource: this.state.dataSource.cloneWithRows(DATA),
            loaded: true,
        });
        setTimeout(() => {
            this.setState({ swiperShow: true });
        }, 0)
    }

    onIconClick(name, id, bundleVersionId) {
        alert('i am clicked')
    }
    onRefresh() {
        this.setState({
            isRefreshing: true
        });
        setTimeout(() => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(DATA),
                loaded: true,
                isRefreshing: false
            });
        }, 3000);
    }


    renderLoadingView() {
        return (
            <View style={styles.containerLoading}>
                <Text>
                    Loading...
                </Text>
            </View>
        );
    }
    renderSwiper = () => {
        if (this.state.swiperShow) {
            return (
                <Swiper height={150}
                    dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    activeDot={<View style={{ backgroundColor: '#FFFFFF', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    paginationStyle={{
                        bottom: 10, right: 10, left: null,
                    }}
                    loop={true}
                    autoplay={false}
                    horizontal={true}
                    index={0}
                    autoplayTimeout={5}
                >
                    <View style={styles.slide} title={<Text numberOfLines={1}>Title for 1</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'http://img1.imgtn.bdimg.com/it/u=1781849339,3078928482&fm=200&gp=0.jpg' }} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Title for 2</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=175680902,1110893123&fm=200&gp=0.jpg' }} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Title for 3</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1634349987,2562229076&fm=27&gp=0.jpg' }} />
                    </View>
                </Swiper>
            );
        } else {
            return <View style={{ height: 150, }}></View>;
        }
    }
    renderIcon(icon) {
        var iconPic = require('../images/ad.png');
        return (
            <TouchableOpacity
                activeOpacity={0.2}
                onPress={() => this.onIconClick(icon.name, icon.id, icon.bundleVersionId)}
            >
                <View style={styles.bundleBlock}>
                    <Image
                        source={iconPic}
                        style={styles.bundleIcon}
                    />
                    <View>
                        <Text style={styles.bundleName}>{icon.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh.bind(this)}
                            tintColor="grey"
                            title="Loading..."
                            titleColor="grey"
                            colors={['#eeeeee', '#dddddd', '#ffffff']}
                            progressBackgroundColor="grey"
                        />
                    }
                >
                    <View>
                        {this.renderSwiper()}
                    </View>

                    <View style={styles.listTitleBlock}>
                        <Text style={styles.listTitle}>可用模块</Text>
                    </View>
                    <ListView
                        style={styles.listViewBac}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderIcon.bind(this)}
                        contentContainerStyle={styles.listView}
                    />
                </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        backgroundColor: '#F1F1F1'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width: width,
        flex: 1
    },

    listViewBac: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE'
    },
    listTitleBlock: {
        backgroundColor: '#FFFFFF',
        borderLeftWidth: 5,
        borderLeftColor: '#3e9ce9',
        marginTop: 15,
    },
    listTitle: {
        textAlign: 'left',
        fontSize: 14,
        margin: 10,
    },
    listView: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    bundleBlock: {
        width: width / 4,
        height: 100,
        paddingTop: 20,
        alignItems: 'center',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#EEEEEE',
    },
    bundleName: {
        textAlign: 'center',
        fontSize: 12,
        marginTop: 3,
    },
    bundleIcon: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
});