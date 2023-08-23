import { Abel } from 'next/font/google'
import { Philosopher } from 'next/font/google'

export const abel = Abel({ weight: '400', subsets: ['latin'], variable: '--font-abel' })
export const philosopher = Philosopher({ weight: '400', subsets: ['latin'], variable: '--font-philospher' })


export const footerLink1 = [
    {
        heading: 'Roofcrowd',
        menuList: [
            {
                title: 'Properties',
                link: '#',
            },
            {
                title: 'About',
                link: '#',
            },
            {
                title: 'Contact',
                link: '#',
            },
        ]
    },
    {
        heading: 'Learn',
        menuList: [
            {
                title: 'Blog',
                link: '#',
            },
            {
                title: 'FAQs',
                link: '#',
            },
            {
                title: 'Glossary',
                link: '#',
            }
        ]
    }
];

export const footerLink2 = [
    {
        title: 'Term of Use',
        link: '#',
    },
    {
        title: 'Key Risks',
        link: '#',
    },
    {
        title: 'Privacy Policy',
        link: '#',
    },
    {
        title: 'Cookies Notice',
        link: '#',
    }
];

export const topMenu = [
    {
        title: 'Properties',
        link: '#',
    },
    {
        title: 'About',
        link: '#',
    },
    {
        title: 'Learn',
        link: '#',
    },
    {
        title: 'Contact Us',
        link: '#',
    }
];

export const howItWorks = [
    {
        icon: '',
        title: 'Create an Account',
        description: "Complete the registration process in a few minutes and explore our diverse range of properties.",
    },
    {
        icon: '',
        title: 'Create an Account',
        description: "Complete the registration process in a few minutes and explore our diverse range of properties.",
    },
    {
        icon: '',
        title: 'Create an Account',
        description: "Complete the registration process in a few minutes and explore our diverse range of properties.",
    }, {
        icon: '',
        title: 'Create an Account',
        description: "Complete the registration process in a few minutes and explore our diverse range of properties.",
    }
]