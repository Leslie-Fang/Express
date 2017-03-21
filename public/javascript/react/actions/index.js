import $ from 'jquery';
import {store} from "../../babel/store.js"

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

export const initUser = () => {
    console.log("Init user: ");
    return {
        type: 'USER_INIT',
        state: 'isFetchingdata',
        payload: ($.ajax({
            method: "POST",
            data: "data",
            url: "/react/users",
            dataType: "json"
        }).then(function(data){
            console.log(data);
            const action = {
                type: 'GET_INIT_DATA',
                state: 'finishFetchingdata',
                payload: data
            }
            store.dispatch(action);
            return data;
        }))
    }
};