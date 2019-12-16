import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';

import {connect} from 'react-redux';
import {IMAGE_SCREEN} from '../routes';
import {getImages} from '../actions';

import {ImageCard} from '../components';


class HomeScreen extends Component {
    componentDidMount(){
        this.props.getImages();
    }

    render() {
        const {data, navigation} = this.props;

        const {container} = styles;
        return (
            <ScrollView>
                <View style={container}>
                    {
                        data.map((item, index) => {
                                return (
                                    <ImageCard
                                        data={item}
                                        key={item.id}
                                        onPress={() => navigation.navigate(IMAGE_SCREEN, ({index: index}))}
                                    />
                                );
                            },
                        )
                    }
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 3,
        justifyContent: 'space-around',
        backgroundColor: 'black',
    },
});


const mapStateToProps = (state) => {
    return {
        data: state.gallery.data,
    };
};

export default connect(mapStateToProps, {getImages})(HomeScreen);

