import {IMAGES_FAILED, IMAGES_FETCHED} from '../actionTypes';

import Unsplash, {toJson} from 'unsplash-js/native';


export const getImages = () => async (dispatch) => {
    function onSuccess(success) {
        dispatch({type: IMAGES_FETCHED, payload: success});
        return success;
    }

    function onError(error) {
        dispatch({type: IMAGES_FAILED, payload: error});
    }

    try {
        const accessKey = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';

        const unsplash = new Unsplash({accessKey: accessKey});
        unsplash.photos.listPhotos(2, 30, 'latest')
            .then(toJson)
            .then(json => {
                const success = json
                onSuccess(success);
            });

    } catch (error) {
        onError(error);
    }
};

