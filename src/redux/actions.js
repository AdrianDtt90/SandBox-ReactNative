const CHANGE_TODO = (parameters) => ({
    type: 'CHANGE_TODO',
    payload: parameters
});

const SAVE_FB_DATA = (parameters) => ({
    type: 'SAVE_FB_DATA',
    payload: parameters
});

const actionsApp = {
    CHANGE_TODO: CHANGE_TODO,
    SAVE_FB_DATA: SAVE_FB_DATA
};

export default actionsApp;