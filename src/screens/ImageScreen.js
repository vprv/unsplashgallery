import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import {W, H} from '../constants';
import {IMAGE_SCREEN} from '../routes';


class ImageScreen extends Component {

    _onPressLeft(index) {
        const nextIndex = index !== 0 ? index - 1 : 0;
        this.props.navigation.navigate(IMAGE_SCREEN, ({index: nextIndex}));
    }

    _onPressRight(index) {
        const lastIndex = this.props.data.length - 1;
        const nextIndex = index !== lastIndex ? index + 1 : lastIndex;
        this.props.navigation.navigate(IMAGE_SCREEN, ({index: nextIndex}));
    }

    render() {
        const {image, container, buttonBar, buttonArrow, buttonBack, buttonBackView} = styles;
        const {navigation} = this.props;
        const {index} = this.props.navigation.state.params;
        const {urls} = this.props.data[index];

        return (

            <View style={container}>
                <View style={buttonBackView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name={'close'} style={buttonBack}/>
                    </TouchableOpacity>
                </View>
                <Image style={image} source={{uri: urls.small}} resizeMode={'contain'}/>
                <View style={buttonBar}>
                    <TouchableOpacity onPress={() => this._onPressLeft(index)}>
                        <Icon name={'chevron-left'} style={buttonArrow}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._onPressRight(index)}>
                        <Icon name={'chevron-right'} style={buttonArrow}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    image: {
        width: W,
        height: H,
    },
    buttonBar: {
        position: 'absolute',
        marginTop: H / 2,
        width: W,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 0.4,
    },
    buttonArrow: {
        color: 'white',
        fontSize: 48,
    },
    buttonBack: {
        fontSize: 40,
        color: 'white',
        opacity: 0.4,
    },
    buttonBackView: {
        position: 'absolute',
        zIndex: 1,
        width: W,
        padding: 10,
        alignItems: 'flex-end',
    }
});

const mapStateToProps = (state) => {
    return {
        data: state.gallery.data,
    };
};

export default connect(mapStateToProps)(ImageScreen);

