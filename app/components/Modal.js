import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Text, TouchableOpacity, View, Modal } from 'react-native';

const propTypes = {
    activeOpacity: PropTypes.number
};

const ModalAlert = ({
    activeOpacity
}) => (
        <Modal
            visible={true}
            transparent={true}
            onRequestClose={() => {
                {/*Alert.alert("Modal has been closed.");*/ }
            }}
            onShow={() => {
                {/*Alert.alert("Modal has been show.");*/ }
            }}>
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <View style={{ height: 200, width: 275, backgroundColor: 'white' }}>
                    <View style={{ flex: 1, backgroundColor: 'grey' }}>
                        <View style={{ height: 50, backgroundColor: 'green', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 24 }}>Head Title</Text>
                        </View>
                        <Text style={{ fontSize: 16 }}>Des</Text>
                    </View>
                    <View style={{ backgroundColor: 'red', height: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>cancel</Text>
                        <Text>enter</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );

ModalAlert.propTypes = propTypes;

ModalAlert.defaultProps = {
    activeOpacity: 0.8
};

export default ModalAlert;