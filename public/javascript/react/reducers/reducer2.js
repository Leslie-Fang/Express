export default function (state = null, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return Object.assign({},action.payload);
        case 'USER_CONFIRM':
            return action.payload;
        default:
            break;
    }
    return state;
}