export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const addUser = () => {
    console.log("Add user: ");
    return {
        type: 'USER_ADD',
        payload: {index1:'a',index2:'b',age:18}
    }
};

export const deleteUser = (user) => {
    console.log("Delete user! ");
    return {
        type: 'USER_DELETE',
        payload: user
    }
};