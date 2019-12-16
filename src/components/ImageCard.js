import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {H, W} from '../constants';

const ImageCard = ({data, onPress}) => {
    const {container, image, textBox, textStyle} = styles;
    return (
        <View style={container}>
            <TouchableOpacity onPress={onPress}>
                <FastImage
                    source={{
                        uri: data.urls.thumb,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                    style={image}
                />
                <View style={textBox}>
                    <Text numberOfLines={1} style={textStyle}>{data.user.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        maxWidth: W / 3.3,
        margin: 5,
        backgroundColor: 'grey',
        borderRadius: 10,
    },
    image: {
        width: W / 3.3,
        height: H / 7,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    textBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    textStyle: {
        color: 'white',
        fontSize: 14,
    },
});

export {ImageCard};
