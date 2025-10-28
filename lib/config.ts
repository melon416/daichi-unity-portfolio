// Portfolio Configuration - Update these values to customize your portfolio

export const config = {
  personal: {
    name: 'Daichi Yamamoto',
    title: 'UI Game Developer Engineer',
    location: 'Singapore',
    email: 'berry910@proton.me',
    discord: 'dima_barabolia', // Add your Discord username here
    github: 'melon416', // Add your GitHub username here
    website: 'www.daichi.yamamoto.com',
    bio: 'Experienced Unity Developer and UI Game Developer Engineer with expertise in VR projects, C# development, and modern web technologies. Passionate about creating innovative digital experiences through game development and web development.',
  },
  
  // Customizable assets
  assets: {
    avatar: '/daichi-unity-portfolio/profile.png', // Update this path to your avatar image
    resume: '/daichi-unity-portfolio/resume.pdf',
    aboutImage: '/daichi-unity-portfolio/about.png', // Optional about section image
  },
  
  skills: {
    primary: [
      'C#',
      'NET',
      'Flutter & Dart',
      'VB',
      'WPF',
      'SQL',
      'Javascript',
      'HTML',
      'CSS',
    ],
    technologies: [
      'Unity 3D',
      'C#',
      'C++',
      'Unreal Engine 5',
      'React',
      'Angular',
      'HTML 5',
      'CSS 3',
      'Git',
      'Machine Learning',
      'Oculus VR',
      'Coherent UI',
      'TypeScript',
    ],
  },
  
  experiences: [
    {
      title: 'UI Game Developer Engineer',
      company: 'GVizioFly',
      location: 'Singapore',
      period: '06/2024 - 05/2025',
      type: 'Full-time',
      description: 'Working on implementing the Coherent UI into the Oculus VR version of the Civilization VII game. This is a complex task which has never been done for a project of this scale.',
      achievements: [
        'Implemented Coherent UI into Oculus VR for Civilization VII',
        'Worked with TypeScript, HTML, and CSS for VR interfaces',
        'Solved complex integration challenges at enterprise scale',
        'Collaborated with cross-functional teams on innovative VR solutions',
      ],
      technologies: ['TypeScript', 'HTML', 'CSS', 'Unity', 'Oculus VR', 'Coherent UI'],
    },
    {
      title: 'Senior Unity Developer',
      company: 'Hiverlab',
      location: 'Singapore',
      period: '03/2022 - 03/2024',
      type: 'Full-time',
      description: 'Maintaining current VR projects, developing new features for new VR projects in C# and Unity.',
      achievements: [
        'Implemented API integration, parsing JSON data for UI display and caching of project resources',
        'Developed and maintained VR projects',
        'Mentored Junior developers',
        'Created efficient resource caching systems',
      ],
      technologies: ['C#', 'Unity', 'VR', 'API Integration', 'JSON', 'JSON Parsing'],
    },
    {
      title: 'Software Developer',
      company: 'DP Architects',
      location: 'Singapore',
      period: '06/2021 - 02/2022',
      type: 'Full-time',
      description: 'Development and maintenance of universal print project.',
      achievements: [
        'Worked with C# ASP.NET and ReactTS',
        'Implemented Terraform infrastructure as code',
        'Used Bamboo for CI/CD pipelines',
        'Worked with Azure cloud services',
        'Integrated IoT technology',
      ],
      technologies: ['C#', 'ASP.NET', 'React', 'TypeScript', 'Terraform', 'Bamboo', 'Azure', 'IoT'],
    },
    {
      title: 'Junior Software Engineer',
      company: 'CAE Inc.',
      location: 'Singapore',
      period: '05/2020 - 12/2020',
      type: 'Full-time',
      description: 'Maintaining the old code, bug fixing, implementing improvements and new features.',
      achievements: [
        'Maintained and debugged existing codebase',
        'Converted WinForm components to WPF',
        'Implemented new features and improvements',
        'Bug fixing and code refactoring',
      ],
      technologies: ['C#', 'WPF', 'WinForms', '.NET'],
    },
    {
      title: 'Junior Software Developer',
      company: 'OBoomzap Entertainment',
      location: 'Singapore',
      period: '09/2018 - 04/2020',
      type: 'Full-time',
      description: 'Developing new functionalities for the Netsuite system, partially on my own, partially with my team.',
      achievements: [
        'Developed new NetSuite functionalities independently',
        'Fine-tuned and refactored existing code',
        'Worked with Java, Javascript, Oracle SQL and Perforce',
        'Collaborated effectively with team members',
      ],
      technologies: ['Java', 'Javascript', 'Oracle SQL', 'Perforce', 'NetSuite'],
    },
  ],
  
  education: [
    {
      degree: 'Advanced Certificate in Unity Product Design and Development.',
      school: 'Singapore Management University (SMU) Academy',
      location: 'Singapore',
      period: '2017 - 2020',
      type: 'Foundational',
      description: 'For professionals looking to apply Unity in product design, simulations, marketing',
      achievements: [
        'Unity 3D Visualisation & Prototyping for Product Design',
        'Unity Animations for Product Visualisation and Marketing',
        'Unity Digital Twins for Product Development & Real-Time Collaboration',
        'Reality Simulations in Unity: 3D Marketing, Virtual Experiences',
        'Advanced Unity Simulations with AI Integration'
      ],
    }
  ],
  
  projects: [
    {
      title: '17 Card Game',
      description: 'This project is my most recent work. A 2D multiplayer card game built from scratch for three players. It showcases my proficiency in Socket.IO for real-time communication and smooth card animations using custom logic.',
      technologies: ['Unity 2D', 'SocketIO', 'Cards Animation', 'JSON', 'C#'],
      category: 'game',
      featured: true,
      github: 'https://github.com/petrzavodny/card-game-17',
      live: '#',
      image: '/daichi-unity-portfolio/17cardgame.png',
    },
    {
      title: 'Magic Forge',
      description: 'A mini-game created using new techniques, mainly blend shapes, learned in an Animation Course for Unity. Developed from scratch to working prototype, showcasing animation skills and continuous learning.',
      technologies: ['Unity', 'C#', 'Animation', 'Blend Shapes'],
      category: 'game',
      featured: true,
      github: 'https://github.com/petrzavodny/magic-forge',
      live: '#',
      image: '/daichi-unity-portfolio/magic forge.png',
    },
    {
      title: 'Krogger',
      description: 'A Frogger clone made by another classmate named Daniel Khodarahmi during our first course "Game programming in C#" at FutureGames',
      technologies: ['Unity', 'C#', 'Mobile', 'Particle Effects', 'Game Design'],
      category: 'game',
      featured: true,
      github: 'https://github.com/petrzavodny/krogger',
      live: '#',
      image: '/daichi-unity-portfolio/krogger.png',
    },
    {
      title: 'Zenzag',
      description: 'A 3D mobile game from Unity 3D for Android course. Made upgrades and refactored code, diving into 3D world and Android operations. Features winding paths and 3D environments.',
      technologies: ['C#', 'Unity 3D', 'Android', 'Mobile Development', '3D'],
      category: 'game',
      featured: true,
      github: 'https://github.com/petrzavodny/zenzag',
      live: '#',
      image: '/daichi-unity-portfolio/zenzag.png',
    },
    {
      title: 'DUUMBA RUUMBA',
      description: 'This game was made during our second game project at FutureGames. Your goal is to clean the house and do all the chores, the faster the better.',
      technologies: ['C#', 'C++', 'Visual Studio', 'Algorithms', 'OOP'],
      category: 'game',
      featured: false,
      github: 'https://github.com/petrzavodny/duumba-ruumba',
      live: null,
      image: '/daichi-unity-portfolio/duumba ruumba.png',
    },
    {
      title: 'Our Dying Rights',
      description: 'This game was made during our third game project at FutureGames. You play as an undead prophet that helps her kind escape the humans tyrants.s',
      technologies: ['C#', 'Visual Studio', 'OOP', 'Game Architecture'],
      category: 'game',
      featured: false,
      github: 'https://github.com/petrzavodny/our-dying-rights',
      live: null,
      image: '/daichi-unity-portfolio/dying rights.png',
    },
  ],
}

