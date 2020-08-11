const data = {
  lanes: [
    {
      id: 'done',
      title: 'Done',
      label: '12/12',
      style: {backgroundColor: 'cyan'},
      labelStyle: {color: '#009688', fontWeight: 'bold'},
      cards: [
        {
          id: 'Card1',
          dueOn: '2020-08-10T19:20:30Z',
          name: 'Thanks. Please schedule me for an estimate on Monday.',
          cardColor: '#BD3B36',
          tags: [{title: 'Critical', color: 'white', bgcolor: 'red'}, {title: '2d ETA', color: 'white', bgcolor: '#0079BF'}, {title: 'Critical', color: 'white', bgcolor: 'red'},{title: 'Critical', color: 'white', bgcolor: 'red'},{title: 'Critical', color: 'white', bgcolor: 'red'},{title: 'Critical', color: 'white', bgcolor: 'red'},]
        },
        {
          id: 'Card2',
          dueOn: '2020-08-16T19:20:30Z',
          name: 'Is the estimate free, and can someone call me soon?',
          cardColor: '#E08521',
        }, 
      ]
    },
    {
      id: 'doing',
      title: 'Doing',
      label: '0/0',
      cards: [
        {
          id: 'Card3',
          name: 'Michael Caine',
          dueOn: '2020-08-16T19:20:30Z',
          subTitle: 'Email received at 4:23pm today',
          body: 'You are welcome. Interested in doing business with you again',
          escalationText: 'Escalated to OPS-ESCALATIONS!',
          cardColor: '#BD3B36',
          tags: [{title: 'Critical', color: 'white', bgcolor: 'red'}, {title: '2d ETA', color: 'white', bgcolor: '#0079BF'}]
        }
      ],
    },
    {
      id: 'today',
      title: 'Today',
      label: '0/0',
      cards: []
    },
    {
      id: 'tomorrow',
      title: 'Tomorrow',
      label: '0/0',
      cards: []
    },
    {
      id: 'upcoming',
      title: 'Upcoming',
      label: '0/0',
      cards: []
    },
    {
      id: 'someday',
      title: 'Someday',
      label: '0/0',
      cards: []
    },
  ]
}

export default data;