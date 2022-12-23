import Cookies from 'js-cookie'

const User = {
    setCookie: (data) => {
        Cookies.set('id', data.id, { path: '/' });
        Cookies.set('name', data.name, { path: '/' });
        Cookies.set('user_type', data.user_type, { path: '/' });
    },

    removeCookie: () => {
        Cookies.remove('id')
        Cookies.remove('name')
        Cookies.remove('user_type')
    },

    getCookieName: () => {
        return Cookies.get('name');
    },

    getCookieData: () => {
        const data = {
            id: Cookies.get('id'),
            user_type: Cookies.get('user_type'),
        }
        return data
    }
}

export default User;