type ActionType = {
    type: 'SET_THEME_ID'
    id: string
}

const initState = {
    themeId: '1',
}

export const themeReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: string): ActionType => ({ type: 'SET_THEME_ID', id }) as const// fix any
