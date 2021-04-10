export default {
    Query: {
        user: (root, args) => {
            return {
                _id: "82123jkasdh",
                email: "test@abv.bg",
                password: "123456",
            }
        },
        users: () => {
            return [{
                _id: "82123jkasdh",
                email: "test@abv.bg",
                password: "123456",
            },{
                _id: "82123jkasdsdh",
                email: "tes2t@abv.bg",
                password: "12323231456",
            }]
        }
    }
}