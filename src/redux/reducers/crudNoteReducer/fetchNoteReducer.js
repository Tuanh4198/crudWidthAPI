// import constants
import * as crudNote from '../../constants/crudNoteConstants';

// khởi tạo một init state
const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null
}

// bắt từng action type
function fetchNoteReducer(state = initialState, payload) {
    switch (payload.type) {
        case crudNote.FETCH_NOTE_REQUEST:
            return {
                ...state,
                requesting: true
            };

        case crudNote.FETCH_NOTE_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data
            };

        case crudNote.FETCH_NOTE_ERROR:
            return {
                ...state,
                requesting: false,
                message: payload.message
            };

        default:
            return state;
    }
}

export default fetchNoteReducer;