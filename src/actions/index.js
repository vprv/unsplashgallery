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
        const accessKey = 'bb6aaa964afd79399998473acf12e23e44d103f4e132586d9776371d3abbd905';

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

