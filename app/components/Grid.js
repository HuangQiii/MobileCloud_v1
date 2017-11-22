import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Image, TouchableOpacity, View, Text } from 'react-native';

const propTypes = {
    text: PropTypes.string,
    iconPic: PropTypes.number,
    activeOpacity: PropTypes.number,
    onPress: PropTypes.func,
    gridStyle: PropTypes.number,
    imageStyle: PropTypes.number,
    textStyle: PropTypes.number,

};

const Grid = ({
  text, iconPic, activeOpacity, onPress, gridStyle, imageStyle, textStyle
}) => (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={onPress}
        >
            <View style={gridStyle}>
                <Image
                    source={iconPic}
                    style={imageStyle}
                />
                <View>
                    <Text style={textStyle}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

Grid.propTypes = propTypes;

Grid.defaultProps = {
    onPress() { },
    activeOpacity: 0.8
};

export default Grid;