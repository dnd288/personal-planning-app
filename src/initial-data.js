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
          name: 'John Smith',
          dueOn: 'due in a day',
          subTitle: 'SMS received at 12:13pm today',
          body: 'Thanks. Please schedule me for an estimate on Monday.',
          escalationText: 'Escalated to OPS-ESCALATIONS!',
          cardColor: '#BD3B36',
          cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #BD3B36', marginBottom: 15},
          metadata: {id: 'Card1'}
        },
        {
          id: 'Card2',
          name: 'Card Weathers',
          dueOn: 'due now',
          subTitle: 'Email received at 1:14pm',
          body: 'Is the estimate free, and can someone call me soon?',
          escalationText: 'Escalated to Admin',
          cardColor: '#E08521',
          cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #E08521', marginBottom: 15},
          metadata: {id: 'Card1'}
        }
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
          dueOn: 'due in a day',
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