import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import Room from './room';

var PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'An individual person that is a participant in this chat site.',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of this person.'
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      desription: 'The email address of this person.'
    },
    participatingInRooms: {
      type: new GraphQLList(Room),
      description: 'A list of rooms that this person is currently in.'
    }
  })
});

export default PersonType;
