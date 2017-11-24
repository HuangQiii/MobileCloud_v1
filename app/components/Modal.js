import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Text, TouchableOpacity, View, Modal, StyleSheet } from 'react-native';

const propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    content: PropTypes.string,
    trueEventText: PropTypes.string,
    falseEventText: PropTypes.string,
    falseEvent: PropTypes.func,
    trueEvent: PropTypes.func,
    activeOpacity: PropTypes.number,
};

const ModalAlert = ({
   show, title, content, trueEventText, falseEventText, falseEvent, trueEvent, activeOpacity
}) => (
        <Modal
            visible={show}
            transparent={true}
            animationType={'fade'}
            onRequestClose={() => {
                {/*Alert.alert("Modal has been closed.");*/ }
            }}
            onShow={() => {
                {/*Alert.alert("Modal has been show.");*/ }
            }}>
            <View style={style.container}>
                <View style={style.modal}>
                    <View style={style.title}>
                        <Text style={{ fontSize: 18 }}>{title}</Text>
                    </View>
                    <View style={style.content}>
                        <Text style={{ fontSize: 12 }}>{content}</Text>
                    </View>
                    <View style={style.buttonArea}>
                        <TouchableOpacity
                            activeOpacity={activeOpacity}
                            onPress={trueEvent}
                        >
                            <View style={[style.button, { borderRightWidth: 1, borderRightColor: '#eee' }]}>
                                <Text style={style.buttonText}>{trueEventText}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={activeOpacity}
                            onPress={falseEvent}
                        >
                            <View style={style.button} >
                                <Text style={style.buttonText}>{falseEventText}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );

ModalAlert.propTypes = propTypes;

ModalAlert.defaultProps = {
    activeOpacity: 0.8,
    trueEventText: '是',
    falseEventText: '否'
};

var style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    modal: {
        width: 275,
        backgroundColor: 'white',
        borderRadius: 10
    },
    title: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        height: 30,
        alignItems: 'center'
    },
    buttonArea: {
        height: 40, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#eee'
    },
    button: {
        justifyContent: 'center', width: 275 / 2, height: 40, alignItems: 'center',
    },
    buttonText: {
        color: '#3e9ce9'
    }
});

export default ModalAlert;