import * as crudNote from '../../redux/constants/crudNoteConstants';

export const getData = () => async dispatch => {
    try {
        dispatch({ type: crudNote.FETCH_NOTE_REQUEST });

        const url = "https://apicurriculum.herokuapp.com/api/v1/timeline";
        const response = await fetch(url)
        const responseBody = await response.json();

        dispatch({
            type: crudNote.FETCH_NOTE_SUCCESS,
            data: responseBody
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: crudNote.FETCH_NOTE_ERROR,
            message: error
        });
    }
}

// export const creatData = () => 