// import 'whatwg-fetch';

export const IS_LOADING = 'IS_LOADING';
export const SET_NAV_LIST = 'SET_NAV_LIST';
export const SELECT_SUB_MENU = 'SELECT_SUB_MENU';

export const isShowLoading = (isloading) => ({
    type: IS_LOADING,
    isloading
});

export const setNavList = (list) => ({
    type: SET_NAV_LIST,
    list
})

export const selectSubMenu = (key = 0, navList = []) => ({
    type: SELECT_SUB_MENU,
    key,
    navList
})

