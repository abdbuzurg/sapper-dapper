import { GraphQLClient, request } from 'graphql-request';

import {
    REGISTRATION
} from './query';

const endpoint = 'http://localhost:8000/graphql';

let client;
// authorizing requests
const authorize = (token) => {
    client = new GraphQLClient(endpoint, {
        headers: {
            authorization:`Bearer ${token}`
        }
    });
};
// registration
export const registration = (user) => {
    return request(endpoint, REGISTRATION, { user })
        .then((res) => {
            const registration = res.data.reqistration;
            if(registration.error_message) return {
                response: registration.error_message
            }; else return {
                response: registration.success_message
            };
        }).error((err) => {
            console.log(err);
            return {
                response: "Could not register. Internal server error"
            }
        })    
}
