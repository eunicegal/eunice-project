import p_img1 from './p_img1.jpg'
import p_img2 from './p_img2.jpg'
import p_img3 from './p_img3.jpg'
import p_img4 from './p_img4.jpg'
import p_img5 from './p_img5.jpg'
import p_img6 from './p_img6.jpg'
import p_img7 from './p_img7.jpg'
import p_img8 from './p_img8.jpg'
import p_img9 from './p_img9.jpg'
import p_img10 from './p_img10.jpg'
import p_img11 from './p_img11.jpg'
import p_img12 from './p_img12.jpg'
import p_img13 from './p_img13.webp'
import p_img14 from './p_img14.webp'
import p_img15 from './p_img15.webp'
import p_img16 from './p_img16.webp'
import p_img17 from './p_img17.webp'
import p_img18 from './p_img18.webp'
import p_img19 from './p_img19.webp'
import p_img20 from './p_img20.webp'
import p_img21 from './p_img21.webp'




import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import heroSection1 from './heroSection1.jpg'
import bannerimage5 from './banner-image-5.jpg'
import hero_pic from './hero_pic.webp'
import bannerimage1 from './banner-image-1.jpg'
import women from './women.webp'
import men from './men.jpg'
import bag from './bag.jpg'
import about from './about.jpg'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    heroSection1,
    bannerimage5,
    hero_pic,
    bannerimage1,
    women,
    men,
    bag,
    about
}

export const products = [
    {
        _id: "aaaaa",
        name: "Women long jacket",
        description: "A gray long jacket worn in winter",
        price: 100,
        image: [p_img1],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: true,
        men: false,
        kids: false,
        accessories: false
    },
    {
        _id: "aaaab",
        name: "Women suit",
        description: "A gray suit with beautiful style",
        price: 100,
        image: [p_img2],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: true,
        men: false,
        kids: false,
        accessories: false
    },
    {
        _id: "aaaac",
        name: "Women bucket hat",
        description: "A white bucket hat",
        price: 120,
        image: [p_img3],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: false,
        women: true,
        men: false,
        kids: false,
        accessories: false
    },
    {
        _id: "aaaad",
        name: "Women long gown",
        description: "A gray long long gown ",
        price: 110,
        image: [p_img4],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: false,
        women: true,
        men: false,
        kids: false,
        accessories: false
    },
    {
        _id: "aaaae",
        name: "brown bag ",
        description: "A brown bag for women ",
        price: 100,
        image: [p_img5],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: false,
        men: false,
        kids: false,
        accessories:true
    },
     {
        _id: "aaaaf",
        name: "red bag",
        description: "A red bag for women",
        price: 100,
        image: [p_img6],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: false,
        women: false,
        men: false,
        kids: false,
        accessories:true
    }, 
    {
        _id: "aaaag",
        name: "flowered pattern heels",
        description: "A flowered pattern heels for women ",
        price: 100,
        image: [p_img7],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: false,
        women: false,
        men: false,
        kids: false,
        accessories:true
    },
     {
        _id: "aaaah",
        name: "shinny heels",
        description: "A shinny heels for women ",
        price: 100,
        image: [p_img8],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: false,
        men: false,
        kids: false,
        accessories:true
    },
     {
        _id: "aaaai",
        name: "fur jacket",
        description: "A fur jacket for men ",
        price: 100,
        image: [p_img9],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: false,
        men: true,
        kids: false,
        accessories: false
    },
     {
        _id: "aaaaj",
        name: "white tshirt",
        description: "A white tshirt for men ",
        price: 100,
        image: [p_img10],
        category: "men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: false,
        men: true,
        kids: false,
        accessories: false
    }, 
    {
        _id: "aaaak",
        name: "long winter jacket",
        description: "A long winter jacket for female ",
        price: 100,
        image: [p_img11],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: true,
        men: false,
        kids: false,
        accessories: false
    },
     {
        _id: "aaaal",
        name: "blue tshirt",
        description: "A blue tshirt for men ",
        price: 100,
        image: [p_img12],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: false,
        men: true,
        kids: false,
        accessories: false
    }, 
    {
        _id: "aaaam",
        name: "black long skirt",
        description: "A black long skirt for female ",
        price: 110,
        image: [p_img13],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: true,
        men: false,
        kids: false,
        accessories: false
    }, 
    {
        _id: "aaaan",
        name: "black top singlet",
        description: "A black top for women ",
        price: 90,
        image: [p_img14],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: true,
        men: false,
        kids: false,
        accessories: false
    }, 
    {
        _id: "aaaao",
        name: "white heels",
        description: "A white heels for women ",
        price: 150,
        image: [p_img15],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: false,
        men: false,
        kids: false,
        accessories: true
    }, 
    {
        _id: "aaaap",
        name: "earrings",
        description: "A white earring for women ",
        price: 70,
        image: [p_img16],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: false,
        men: true,
        kids: false,
        accessories: true
    }, 
    {
        _id: "aaaaq",
        name: "black bag",
        description: "A black bag for women ",
        price: 90,
        image: [p_img17],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: false,
        men: false,
        kids: false,
        accessories: true
    }, 
    {
        _id: "aaaar",
        name: "black sandals heels",
        description: "A black sandal heel for women ",
        price: 80,
        image: [p_img18],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: false,
        men: false,
        kids: false,
        accessories:true
    }, 
    {
        _id: "aaaas",
        name: "jacket top",
        description: "A blue jacket top for women ",
        price: 120,
        image: [p_img19],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: true,
        men: false,
        kids: false,
        accessories: false
    }, 
    {
        _id: "aaaat",
        name: "cotton skirt",
        description: "A blue cotton mini skirt ",
        price: 130,
        image: [p_img20],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: true,
        men: false,
        kids: false,
        accessories: false
    }, 
    {
        _id: "aaaal",
        name: "jumpsuit",
        description: "A black jumpsuit for women ",
        price: 100,
        image: [p_img21],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true,
        women: true,
        men: false,
        kids: false,
        accessories: false
    }, 
   
]