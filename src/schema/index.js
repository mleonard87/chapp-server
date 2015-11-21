import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql';

import Person from './types/person';
import PersonList from '../data/people';
import Room from './types/room';
import RoomList from '../data/rooms';

const RootType = new GraphQLObjectType({
  name: 'Root',
  description: 'Root Chapp Schema',
  fields: () => ({
    allPeople: {
      type: new GraphQLList(Person),
      resolve: function() {
        return PersonList;
      }
    },
    allRooms: {
      type: new GraphQLList(Room),
      resolve: function() {
        return RoomList;
      }
    }
  })
});

const ChappSchema = new GraphQLSchema({
  query: RootType
});

export default ChappSchema;
