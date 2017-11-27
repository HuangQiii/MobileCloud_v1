import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Image, TouchableOpacity, View, Text, Dimensions, ActivityIndicator } from 'react-native';
import * as Progress from 'react-native-progress';

const propTypes = {
    text: PropTypes.string,
    iconPic: PropTypes.number,
    activeOpacity: PropTypes.number,
    onPress: PropTypes.func,
    gridStyle: PropTypes.number,
    imageStyle: PropTypes.number,
    textStyle: PropTypes.number,
    progress: PropTypes.number
};
const { width, height } = Dimensions.get('window')
const Grid = ({
  text, iconPic, activeOpacity, onPress, gridStyle, imageStyle, textStyle, progress
}) => (

        <View style={gridStyle}>
            {
                progress !== -1 &&
                <View style={{ position: 'absolute', top: 0, right: 0, width: width / 4, height: 100, justifyContent: 'center', alignItems: 'center', zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.4)' }}>
                    <Progress.Pie
                        size={50}
                        progress={progress}
                        indeterminate={false}
                    />
                </View>
            }

            <TouchableOpacity
                activeOpacity={activeOpacity}
                onPress={onPress}
            >
                <View>
                    <Image
                        source={iconPic}
                        style={imageStyle}
                    />
                    <View>
                        <Text style={textStyle}>{text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    );

Grid.propTypes = propTypes;

Grid.defaultProps = {
    onPress() { },
    activeOpacity: 0.8,
    isDownLoading: false
};

export default Grid;