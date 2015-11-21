const PeopleList = [
  {
    '_id':'1',
    'name':'Mike Leonard',
    'email': 'mike.leonard@fivium.co.uk',
    'participatingInRooms': [
      {'_id':'1','name':'GraphQL', 'type': 'topic'},
      {'_id':'2','name':'Mike,Teighe', 'type': 'private'}
    ]
  },
  {
    '_id':'2',
    'name':'Teighe Purnell',
    'email': 'teighe.purnell@fivium.co.uk',
    'participatingInRooms': [
      {'_id':'2','name':'Mike,Teighe', 'type': 'private'}
    ]
  },
  {
    '_id':'3',
    'name':'William Friesen',
    'email': 'william.friesen@fivium.co.uk'
  }
];

export default PeopleList;
