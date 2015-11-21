import {
  GraphQLEnumType,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import Person from './person';

import RoomList from '..';

const RoomEnumType = new GraphQLEnumType({
  name: 'RoomType',
  description: 'The type of this chat room',
  values: {
    TOPIC: {
      value: 'topic',
      description: 'A room created to discuss a specific topic - anyone is welcome.'
    },
    ADHOC: {
      value: 'adhoc',
      description: 'A group chat created between various people. Members of a room of this type can invite other people.'
    },
    PRIVATE: {
      value: 'private',
      description: 'A private discussion between two people. Other people can not be added to this chat.'
    }
  }
});

var RoomType = new GraphQLObjectType({
  name: 'Room',
  description: 'A chat room where people may communicate with each other. A room should be for a specific topic or with a specific group opf people.',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The name of this room.'
    },
    type: {
      type: RoomEnumType,
      desription: 'The type of this chat room.'
    },
    participants: {
      type: new GraphQLList(Person),
      description: 'A list of people participating in this room.'
    }
  })
});

export default RoomType;
