import {combineReducers} from 'redux';

import GalleryReducer from './GalleryReducer';

export default combineReducers({
    gallery: GalleryReducer
})
