export const REGISTRATION = `
    mutation registration($user: UserInput){
        registration(user: $user){
            ...on Success {
                success_message
            }

            ...on Error {
                error_message
            }
        }
    }
`;