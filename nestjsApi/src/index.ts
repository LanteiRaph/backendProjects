import { ApolloServer } from "apollo-server";

import {schema} from './schema';

export const server = new ApolloServer({
    schema
})


server.listen({port:3000}).then(({url}) => {
    console.log(`Server Ready at ${url}`)
})