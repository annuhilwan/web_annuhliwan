import self from "../img/self.png"
import mock1 from "../img/portfolio1.png"
import mock2 from "../img/portfolio2.png"
import mock3 from "../img/portfolio3.png"
import mock4 from "../img/portfolio4.png"
import mock5 from "../img/portfolio5.png"
import mock6 from "../img/portfolio6.png"
import mock7 from "../img/portfolio7.png"
import mock8 from "../img/mock8.png"
import mock9 from "../img/mock9.png"
import mock10 from "../img/mock10.png"
import mock11 from "../img/mock11.png"
import mock12 from "../img/mock12.png"
import mock13 from "../img/mock13.png"
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb()", "rgb()"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Annuh Liwan",
    lastName: "Nahar",
    initials: "al", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in the Sidoarjo'
        },
        {
            emoji: "💼",
            text: "Fullstack Developer"
        },
        {
            emoji: "📧",
            text: "annuhliwan@gmail.com"
        }
    ],
    socials: [
       
        {
            link: "https://github.com/annuhilwan",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/annuh-liwan/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
       
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Annuh Liwan. I'm a Fullstack Developer. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'nuxt', 'vue', 'adonis js', 'nodejs', 'laravel', 'flutter', 'git', 'github', 'bootstrap', 'html5', 'css3', 'tailwind', 'figma'],
            exposedTo: ['']
        }
    ,
    hobbies: [
        {
            label: 'coding',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'Learning new tech',
            emoji: '🎥'
        },
        
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Kiostix (Html & Bootstrap) ",
            image: mock1
        },
        {
            title: "Dashboard SISI (Vue & Tailwind)",
             image: mock2
        },
        {
            title: "Novacolor Indonesia (PHP Native)",
            image: mock3
        },
        {
            title: "Tiketing Kiostix (Android Kotlin)",
           image: mock4
        },
        {
            title: "Khiyaar Apps (Flutter)",
            image: mock5
        },
        {
            title: "Inap Syariah (Express & React)",
            image: mock6
        },
        {
            title: "Wallet Apps (Flutter)",
            image: mock7
        },
        {
            title: "Asset Management Information System (Express & React)",
            image: mock8
        },
        {
            title: "Pesen Pijet (Flutter)",
            image: mock9
        },
        {
            title: "MyBestie Apps (Flutter)",
            image: mock10
        },
        {
            title: "Pengasuhan Santri (Flutter)",
            image: mock11
        },
        {
            title: "Sistem KPI (Laravel)",
            image: mock12
        },
        {
            title: "Membership Sistem Web (Laravel)",
            image: mock13
        }


    ]
}