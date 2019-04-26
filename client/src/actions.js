export const CHANGE_OVERVIEW = 'CHANGE_OVERVIEW'
export const CHANGE_MEMO     = 'CHANGE_MEMO'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'

//action creaters
//overview
export const changeOverview = overview =>({
    type:CHANGE_OVERVIEW,
    overview,
})
//memo
export const changeMemo = memo =>({
    type:CHANGE_MEMO,
    memo,
})
//initial
export const initializeForm = () =>({
    type:INITIALIZE_FORM,
})