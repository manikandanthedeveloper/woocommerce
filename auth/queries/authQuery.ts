export const authQuery = `
    mutation LoginUser($username: String!, $password: String!) {
        login(
            input: {
                username: $username
                password: $password
            }
        ) {
            authToken
            refreshToken
            user {
                id
                email
                username
                firstName
                lastName
            }
        }
    }
`;
