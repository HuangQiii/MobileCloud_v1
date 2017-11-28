import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { ViewPropTypes, Image, TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const propTypes = {
    text: PropTypes.string,
    des: PropTypes.string,
    icon: PropTypes.string,
    overlayMarginTop: PropTypes.number,
    activeOpacity: PropTypes.number,
    onPress: PropTypes.func,
    listStyle: PropTypes.number,
    iconStyle: PropTypes.number,
    listBorderStyle: PropTypes.number,
    textStyle: PropTypes.number,
    desStyle: PropTypes.number,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string
};

const List = ({
  activeOpacity, onPress, listStyle, iconStyle, listBorderStyle, icon, iconSize, iconColor, textStyle, text, desStyle, des, overlayMarginTop,
}) => (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={onPress}
        >
            <View style={[style.list, listStyle, { marginTop: overlayMarginTop }]}>
                <View style={[style.listIcon, iconStyle]}>
                    <Icon name={icon} size={iconSize} color={iconColor} />
                </View>
                <View style={[style.listBorder, listBorderStyle]}>
                    <View>
                        <Text style={[style.listText, textStyle]}>{text}</Text>
                    </View>
                    <View>
                        <Text style={[style.listTextSmall, desStyle]}>{des}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

List.propTypes = propTypes;

List.defaultProps = {
    onPress() { },
    activeOpacity: 0.8,
    des: '',
    overlayMarginTop: 0,
};

var style = StyleSheet.create({
    listBorder: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    list: {
        width: width,
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#FEFEFE'
    },
    listIcon: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listText: {
        fontSize: 14,
        // color: '#191919'
    },
    listTextSmall: {
        fontSize: 12,
        margin: 10,
        color: '#959EA8'
    }
});

export default List;