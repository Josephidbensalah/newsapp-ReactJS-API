
export const getUserFromStorage = () => {
    var getUser = localStorage.getItem('user');
    return JSON.parse(getUser);
};

export const saveUserToStorage = (createdUser) => {
    // localStorage.setItem('user', JSON.stringify(user));
    var created = false;
    console.log("username before stringfy : ", createdUser.username)
    var user = JSON.stringify(createdUser);
    var ParsedUser = JSON.parse(user);
    console.log("Username after  stringfy and parse  : ", ParsedUser.username)
    if (ParsedUser.username && ParsedUser.password) {
        localStorage.setItem('user', user);
        created = true;
    }
    return created;
};

export const updateUser = (updatedUser) => {
    var updated = false;
    console.log("username before stringfy : ", updateUser.username)
    var user = JSON.stringify(updatedUser);
    var ParsedUser = JSON.parse(user);
    console.log("Username after  stringfy and parse  : ", ParsedUser.username)
    if (ParsedUser.username && ParsedUser.password) {
        localStorage.setItem('user', user);
        updated = true;
    }
    return updated;
};

export const login = (username, password) => {
    var exist = false;
    const getUser = JSON.parse(localStorage.getItem('user'));
    console.log("user from userService :", getUser)
    if (getUser.username === username && getUser.password === password) {
        var userLogin = {
            username: getUser.username,
            password: getUser.password,
            connected: true,
            keyword: getUser.keyword
        }
        localStorage.setItem('user', JSON.stringify(userLogin));
        console.log(userLogin.username, " Is Now Connected ! ");
        exist = true;
        return exist;
    }
    console.log("user exist from userservice :", exist)
};

export const logout = () => {
    var loggedOut = false;
    const getUser = JSON.parse(localStorage.getItem('user'));
    console.log("user from userService :", getUser)
    var userLogin = {
        username: getUser.username,
        password: getUser.password,
        connected: false,
        keyword: getUser.keyword
    }
    localStorage.setItem('user', JSON.stringify(userLogin));
    loggedOut = true;
    console.log(userLogin.username, " Is Now Disconnected ! ");
    return loggedOut;
};