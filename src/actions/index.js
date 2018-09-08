export const addNumberAction = (input) => {
    return ({
        type: 'ADD_NUMBER',
        input
    })
}

export const addOperatorAction = (input) => {
    return ({
        type: 'ADD_OPERATOR',
        input
    })
}

export const clearStoreAction = () => {
    return ({
        type: 'CLEAR_STORE'
    })
}

export const getResultAction = () => {
    return ({
        type: 'GET_RESULT'
    })
}

export const changeUserAction = (input) => {
    return ({
        type: 'CHANGE_USER',
        input
    })
}