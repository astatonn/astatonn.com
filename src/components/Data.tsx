import djikstra from '../../public/imgs/projects/Djikstra.webp'
import dispatch from '../../public/imgs/projects/dispatch.webp'
import irradBrasil from '../../public/imgs/projects/IR Brasil.webp'
import mega from '../../public/imgs/projects/mega.webp'
import justoeperfeito from '../../public/imgs/projects/justoeperfeito.webp'
import blog from '../../public/imgs/projects/blog.webp'
import zreuweb from '../../public/imgs/projects/zreuweb.webp'
import webmail from '../../public/imgs/projects/webmail.webp'
import joomla1 from '../../public/imgs/projects/joomla1.webp'
import joomlagit from '../../public/imgs/projects/joomlagit.webp'
import workbench from '../../public/imgs/projects/workbench.webp'
import astatonn from '../../public/imgs/projects/astatonn.webp'
import cta from '../../public/imgs/projects/cta.webp'
import bsup from '../../public/imgs/projects/3bsup.webp'
import webmailogo from '../../public/imgs/projects/webmailogo.webp'
import astatonnlogo from '../../public/imgs/projects/astatonnlogo.webp'
import arthurpares from '../../public/imgs/projects/arthurpares.webp'


export const data = {
    Python: {
        description: `<p>Python is a high-level programming language that I often use for personal projects requiring data fetching, management, and analysis of large datasets.</p>
                        <p>With Python's versatility, I can automate my routines and achieve more efficient workflows.</p>`,
        images: {
            1: {
                url: djikstra.src,
                alt: 'Djkistra graph example'
            },
            2: {
                url: irradBrasil.src,
                alt: 'Irrad Brasil screen'
            },
        },
        projects: {
            1: {
                title: 'IRRAD Brasil',
                description: 'Developed to promote solar energy usage and improve technologies by presenting Brazilian irradiation data from 2017 to 2020.',
                linkedinUrl: 'https://www.linkedin.com/posts/astatonn_engenharia-python-solar-activity-7077239493019279360-w5Ww?utm_source=share&utm_medium=member_desktop',
                githubUrl: 'https://github.com/astatonn/irrad_brasil',
                webUrl: '',
                youtubeLink: ''
            },
            2: {
                title: 'IATAEx',
                description: 'An ongoing project to convert audio to text for EBChat, a communicator for the Brazilian Army, automating translations.',
                linkedinUrl: null,
                githubUrl: 'https://github.com/astatonn/IATAEx',
                webUrl: '',
                youtubeLink: ''
            },
            3: {
                title: 'Snake Game',
                description: 'A small snake game developed for the "Software and Projects Lab" course during my graduation. This project helped me understand software requirements.',
                linkedinUrl: null,
                githubUrl: 'https://github.com/astatonn/snake-game',
                webUrl: '',
                youtubeLink: ''
            },
            4: {
                title: 'Dijkstra',
                description: 'A Tkinter interface to visualize how the Dijkstra Algorithm works.',
                linkedinUrl: null,
                githubUrl: 'https://github.com/astatonn/dijkstra',
                webUrl: '',
                youtubeLink: ''
            },
            5: {
                title: 'Army Discharges',
                description: 'Analyzing 30 years of Brazilian Army personnel discharge data. (In Progress)',
                linkedinUrl: '',
                githubUrl: 'https://github.com/astatonn/DS_Brazilian-Army',
                webUrl: '',
                youtubeLink: ''
            }
        }
    },

    PHP: {
        description: `<p>PHP is a widely-used programming language for web development and was my first experience with coding.</p>`,
        images: {
            1: {
                url: dispatch.src,
                alt: 'A system to book sessions with the Commander of 3º B Sup.'
            },
            2: {
                url: mega.src,
                alt: 'Homepage of Leandro Santos - Audio engennier'
            },
        },
        projects: {
            1: {
                title: 'CRUD',
                description: 'A practical exercise on the MVC system using PHP.',
                linkedinUrl: '',
                githubUrl: 'https://github.com/astatonn/CRUD'
            },
            2: {
                title: 'SisCoFin',
                description: 'The first version of a financial manager for a Freemason Lodge.',
                linkedinUrl: '',
                githubUrl: 'https://github.com/astatonn/SisCoFin',
                webUrl: '',
                youtubeLink: ''
            },
            3: {
                title: 'Dispatch Queue',
                description: 'A system to book sessions with the Commander of 3º B Sup.',
                linkedinUrl: '',
                githubUrl: 'https://github.com/astatonn/Dispatch-Queue',
                webUrl: '',
                youtubeLink: ''
            },
            4: {
                title: 'Leandro Santos Mega',
                description: 'A website for audio engineer Leandro Santos.',
                linkedinUrl: '',
                githubUrl: 'https://github.com/astatonn/leandrosantosmega',
                webUrl: 'https://leandrosantosmega.astatonn.com',
                youtubeLink: ''
            }
        }
    },

    Laravel: {
        description: `<p>Laravel is a versatile PHP-based framework ideal for creating web applications.</p>
                        <p>This amazing framework is my favorite tool for developing both personal and professional projects, such as websites and APIs.</p>`,
        images: {
            1: {
                url: justoeperfeito.src,
                alt: 'Homepage of Justo e Perfeito (A financial manager for a Freemason Lodge).'
            },
            2: {
                url: blog.src,
                alt: 'Homepage of my personal Blog.'
            },
            3: {
                url: zreuweb.src,
                alt: 'Homepage of ZReu Web.'
            },
        },
        projects: {
            1: {
                title: 'Justo e Perfeito',
                description: 'The second version of a financial manager for a Freemason Lodge.',
                linkedinUrl: '',
                githubUrl: 'https://github.com/astatonn/justoeperfeito',
                webUrl: 'https://justoeperfeito.astatonn.com',
                youtubeLink: ''
            },
            2: {
                title: 'Blog Astatonn',
                description: 'My personal blog to write about my life and technology.',
                linkedinUrl: '',
                githubUrl: 'https://github.com/astatonn/justoeperfeito',
                webUrl: 'https://blog.astatonn.com/',
                youtubeLink: ''
            },
            3: {
                title: 'ZReu Web - Interface',
                description: 'Login interface development repository for the ZReu Web pointing to the Brazilian Army\'s Jitsi server.',
                linkedinUrl: '',
                githubUrl: 'https://github.com/astatonn/jitsi',
                webUrl: 'https://zreuweb.webmail.eb.mil.br/',
                youtubeLink: ''
            },
            4: {
                title: 'API Fadergs Comunidade',
                description: 'An API to book free services provided by university students, such as psychological, physiotherapy, and dermatological assistance.',
                linkedinUrl: '',
                githubUrl: 'https://github.com/Estagio-Supervisionado-2022-1/fadergs-comunidade',
                webUrl: '',
                youtubeLink: ''
            }
        }
    },

    Javascript: {
        description: `<p>JavaScript brings my most creative ideas to life. I often use it to enhance one of my favorite aspects of projects: the User Experience.</p>`,
        images: {
            1: {
                url: webmail.src,
                alt: 'Login screen of brazilian army webmail'
            }
        },
        projects: {
            1: {
                title: 'New Functional Webmail Interface',
                description: `This was a special project where I customized the theme for the new webmail used by the Army after acquiring Zimbra licenses. Due to the poor documentation, I used a JavaScript file to dynamically modify all CSS classes. This interface is now used across the entire Army.`,
                linkedinUrl: 'https://www.linkedin.com/posts/astatonn_zimbra-synacor-development-activity-7243050643995693057-HyJD?utm_source=share&utm_medium=member_desktop',
                githubUrl: 'https://github.com/astatonn/Esmeralda',
                webUrl: 'https://1cta.webmail.eb.mil.br/',
                youtubeLink: ''
            },
        }
    },
   
    Joomla: {
        description: `<p>Joomla is a CMS widely used in Brazilian government institutions and personal projects.</p>
                      <p>This tool is one of the best options for beginners.</p>`,
        images: {
            1: {
                url: joomla1.src,
                alt: 'Homepage of one institucional website that uses the template.'
            },
            2: {
                url: joomlagit.src,
                alt: 'Github repository of template.'
            }
        },
        projects: {
            1: {
                title: 'Government Standard Digital Template for Joomla',
                description: `Since 2018, many governmental institutions lacked a template that complied with the default UI standards of the Government. I created this repository to share a solution and recorded videos teaching how to use Joomla.`,
                linkedinUrl: 'https://www.linkedin.com/posts/astatonn_brazilianarmy-development-implementation-activity-7243969105240739840-PhNm?utm_source=share&utm_medium=member_desktop',
                githubUrl: 'https://github.com/astatonn/ids-joomla-eb',
                webUrl: 'https://1cta.eb.mil.br/',
                youtubeLink: 'https://www.youtube.com/playlist?list=PLMuX0Gplr3XQ2l2-OV0Hl46K25ybd72E3'
            },
            // 2: {
            //     title: 'Documentation Contributor in Joomla Community',
            //     description: `After developing the template for the Brazilian Army, I realized I could help other users by sharing my knowledge. Following my participation in <a href="https://www.youtube.com/watch?v=UE_fGNunMwo">Joomla Day Brazil</a>, I joined the Documentation Team.`,
            //     linkedinUrl: '',
            //     githubUrl: '',
            //     webUrl: 'https://volunteers.joomla.org/teams/documentation-team',
            //     youtubeLink: ''
            // }
        }
    },

    Git: {
        description: `Git is not just a version control tool; it has significantly helped me in many projects.`,
        images: {},
        projects: {
            1: {
                title: 'Git Server for the Brazilian Army',
                description: `When I was tasked with updating the Zimbra interface for the Brazilian Army, I discovered that the interface would be lost during core updates. To solve this, I created a Git server within the Army's infrastructure to centralize the repository and developed a bash script to update other servers.`,
                linkedinUrl: '',
                githubUrl: '',
                webUrl: '',
                youtubeLink: ''
            },
            2: {
                title: 'Using Git Flow',
                description: `After discovering this library, I started using it in all my projects. It’s an extremely helpful tool for managing Git versioning effectively.`,
                linkedinUrl: '',
                githubUrl: '',
                webUrl: '',
                youtubeLink: ''
            }
        }
    },

    Database: {
        description: `I always start my projects with database design; it's one of my favorite steps in the development process.`,
        images: {
            1: {
            url: workbench.src,
            alt: 'Database diagram of Justo e Perfeito.'
        }
        },
        projects: {
            1: {
                title: 'Haversine Applied',
                description: 'This was my first task during graduation. We used the General Transit Feed Specification (GTFS) and SQL to calculate, given a starting point and a destination point with latitude and longitude, the bus lines that could achieve this route.',
                linkedinUrl: '',
                githubUrl: 'https://github.com/astatonn/T--BD/blob/master/pesquisa%20banco.sql',
                webUrl: '',
                youtubeLink: ''
            },
            2: {
                title: 'MySQL Workbench',
                description: 'I use MySQL Workbench to design the structure of all my databases.',
                linkedinUrl: '',
                githubUrl: '',
                webUrl: '',
                youtubeLink: ''
            },
        }
    },
    
    React: {
        description: `React is a JavaScript library that simplifies and enhances the development process.`,
        images: {
            1: {url: astatonn.src,
            alt: 'Homepage of my personal website.'}
        },
        projects: {
            1: {
                title: 'Astatonn Website',
                description: 'My personal website was developed using Next.js, and I am really proud of the final result.',
                linkedinUrl: '',
                githubUrl: 'https://github.com/astatonn/astatonn.com',
                webUrl: 'https://astatonn.com',
                youtubeLink: ''
            },
            2: {
                title: 'Ha-Colors',
                description: 'I developed this website as a portfolio for my friend Haruka Iwata, an amazing artist from Japan. (In progress)',
                linkedinUrl: '',
                githubUrl: 'https://github.com/astatonn/ha_colors.com',
                webUrl: 'https://ha-colors.com',
                youtubeLink: ''
            },
        }
    },
    
    AfterEffects: {
        description: `As an educator, I believe in finding innovative ways to present content. A strong first impression captures students' attention and keeps them engaged.`,
        images: {
           1:{ 
            url: cta.src,
            alt: 'A screenshot of Intro for 1º CTA.'
        },
           2:{ 
            url: bsup.src,
            alt: 'A screenshot of Intro for 3º B Sup.'
        },
           3:{ 
            url: arthurpares.src,
            alt: 'A screenshot of Youtube Video'
        },
        },
        projects: {
            1: {
                title: 'Intro for 1º CTA',
                description: 'I created this intro to be used in all new courses at <a href="https://ensino.1cta.eb.mil.br/">1º CTA Courses</a>.',
                linkedinUrl: '',
                githubUrl: '',
                webUrl: '',
                youtubeLink: 'https://youtu.be/wce2cnn_tc4'
            },
            2: {
                title: 'Intro for 3º B Sup',
                description: 'I designed this intro for institutional videos showcasing the recruit formation at 3º B Sup.',
                linkedinUrl: '',
                githubUrl: '',
                webUrl: '',
                youtubeLink: 'https://www.youtube.com/watch?v=htnRpLQlE1Y'
            },
            3: {
                title: 'Arthur Pares - Mundo Real (Lyric Video)',
                description: 'I recorded and created the animations to Lyric Video of this amazing song',
                linkedinUrl: '',
                githubUrl: '',
                webUrl: '',
                youtubeLink: 'https://www.youtube.com/watch?v=lp--I8W8LdI'
            },
        }
    },
    
    Illustrator: {
        description: `I often use Adobe Illustrator to address recurring requests, especially logo design.`,
        images: {
            1: {
                url: webmailogo.src,
                alt: 'Webmail Funcional Logo.'
            },
            2: {
                url: astatonnlogo.src,
                alt: 'Astatonn website Logo.'
            },

        },
        projects: {
            1: {
                title: 'Astatonn Logo',
                description: 'The concept of this logo incorporates the letter "A" with themes of innovation, technology, and calmness. I combined right angles on the outside with curves on the inside. The design of the letter "A" is also inspired by the PHP elephant. Can you see it?',
                linkedinUrl: '',
                githubUrl: '',
                webUrl: '',
                youtubeLink: ''
            },
            2: {
                title: 'Functional Webmail',
                description: 'When tasked with updating the Zimbra template, I decided to provide a complete solution, including creating a new logo. The logo represents Brazil’s shape with multiple points under the protection of the army’s emblem.',
                linkedinUrl: '',
                githubUrl: '',
                webUrl: '',
                youtubeLink: ''
            },
        }
    },
    
    
    


}