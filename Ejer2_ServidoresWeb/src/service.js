const data= require('./MOCK_DATA.json');

module.exports = {
    getUsers: () => data,
    getUser: (id) => {
        let identificador = Number(id);
        let user = data.filter((persona) => persona.id=== identificador)[0];
        return user;
    },
    createUser: (dataUser) => {
        let newUser = {
            id: data.length +1,
            ...dataUser,
        };
        data.push(newUser);
        return newUser;
    }
};