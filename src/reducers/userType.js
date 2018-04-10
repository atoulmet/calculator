const initialState = {
    value: 'User'
}

const userType = (state = initialState, action) => {
    switch (action.type)
    {
    case 'CHANGE_USER':
    {
       return { value: action.input };
    }

    default:
        return { ...state }
    }
}

export default userType;