import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons"
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3} from "../assets/images";
import fason from '../assets/images/fason.jpg'



export const navLinks = [
    { href: "#home", linkName: "Home" },
    { href: "#about-us", linkName: "About Us" },
    { href: "#products", linkName: "Products" },
    { href: "#contact-us", linkName: "Contact Us" },
]

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
]

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        rating: "4.4"
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        rating: "4.2"
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        rating: "4.5"
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        rating: "4.1"
    },
]

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
]

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Top Town',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Chever Leina',
        rating: 4.2,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: fason,
        customerName: 'Jey Fason',
        rating: 4.3,
        feedback:"I found the product last couple weeks on social medias  there is no best product than this so please try it if you didn't yet"
    }
]


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { 
                name: "Jey Fason Ltd", 
                link: "company name" 
            },
            { 
                name: "+250 792330514", 
                link: "phone number" 
            },
            {
                name:"jeyfason25@gmail.com",
                link: "email"
            }
        ],
    },
]

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
]
