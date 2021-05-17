import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import {posts} from "./post.reducer";
import {photos} from "./photos.reducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    posts,
    photos
});

export default rootReducer;
