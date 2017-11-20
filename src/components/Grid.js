import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Image, TouchableOpacity, StyleSheet } from 'react-native';

const propTypes = {
    onPress: PropTypes.func,
    source: PropTypes.object,
    activeOpacity: PropTypes.number
};

const Grid = ({
  onPress, source, activeOpacity
}) => (
        // <TouchableOpacity
        //     style={containerStyle}
        //     onPress={onPress}
        //     disabled={disabled}
        // >
        //     <Image style={style} source={source} />
        // </TouchableOpacity>

        <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={onPress}
        >
            <View style={styles.bundleBlock}>
                <Image
                    source={iconPic}
                    style={styles.bundleIcon}
                />
                <View>
                    <Text style={styles.bundleName}>{source.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

Grid.propTypes = propTypes;

Grid.defaultProps = {
    onPress() { },
};

var styles = StyleSheet.create({
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

export default Grid;