const store = (function() {
  return {
    texts:
			'Hi, I am a full stack Javascript Engineer. I am compelled to make web app that is reliable, powerful, and secure.',
    wordCount: 0,
    buffer: '',
    waiting: false,
    projects: [
      {
        title: 'Share An Ride',
        urls: [
          'https://github.com/540376482yzb/portfolio/blob/master/images/inntercities.PNG?raw=true',
          'https://github.com/540376482yzb/intercities_ride_sharing_client'
        ],

        stacks: ['full stack', 'React', 'Redux', 'Node', 'Express', 'MongoDb', 'Google Map API', 'Socket.io'],
        author: 'Zhoubing Yang',
        created: 'Mar 25 2018'
      },
      {
        title: 'Noteful app',
        urls: [
          'https://github.com/540376482yzb/portfolio/blob/master/images/note.PNG?raw=true',
          'https://github.com/540376482yzb/zhou_noteful_mongo'
        ],

        stacks: ['Node', 'Express', 'Mocha-Chai', 'Travic CI', 'Heroku', 'JavaScript', 'jQuery', 'MongoDB'],
        author: 'Zhoubing Yang',
        created: 'Feb 12 2018'
      },
      {
        title: '2048 in React',
        urls: [
          'https://github.com/540376482yzb/portfolio/blob/master/images/2048.PNG?raw=true',
          'https://github.com/540376482yzb/2048game_react'
        ],
        stacks: ['React', 'Netlify', 'JavaScript'],
        author: 'Zhoubing Yang',
        created: 'Mar 30 2018'
      },
      {
        title: 'Game of Life in React',
        urls: [
          'https://github.com/540376482yzb/portfolio/blob/master/images/game-of-life.PNG?raw=true',
          'https://github.com/540376482yzb/game_of_life_react'
        ],
        stacks: ['React', 'Netlify', 'JavaScript'],
        author: 'Zhoubing Yang',
        created: 'Mar 29 2018'
      },
      {
        title: 'Cold Or Hot',
        urls: [
          'https://github.com/540376482yzb/portfolio/blob/master/images/hot-cold-start.PNG?raw=true',
          'https://github.com/540376482yzb/zhou-Hot-Or-Cold'
        ],

        stacks: ['React', 'Redux', 'Netlify', 'JavaScript'],
        author: 'Zhoubing Yang',
        created: 'Mar 1 2018'
      },
      {
        title: 'Bookmark app',
        urls: [
          'https://github.com/540376482yzb/portfolio/blob/master/images/bookmark.PNG?raw=true',
          'https://github.com/540376482yzb/Zhou-BookMark-App'
        ],

        stacks: ['html', 'css', 'JavaScript', 'jQuery', 'RESTful API'],
        author: 'Zhoubing Yang',
        created: 'Feb 5 2018'
      }
    ]
  }
})()
