export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 12 Pro Max',
    price: 969,
    description: 'Wireless carrier\tUnlocked for All Carriers\n' +
        'Brand\tApple\n' +
        'Memory storage capacity\t128 GB\n' +
        'Operating system\tIOS 14\n' +
        'Colour\tGraphit\n' +
        'Model year\t2020',
    rating:4.2,
    arrayofimages: ['123','234234','534534'],
    imageSrc: 'https://m.media-amazon.com/images/I/71Ujb4adTRL._AC_SL1500_.jpg',
    amazonLink: 'https://www.amazon.de/-/en/A2411/dp/B08PCDHMWQ/ref=sr_1_4?crid=2BJAVEKRLH4LE&keywords=iphone+13+pro+max&qid=1646431415&rnid=1703609031&s=telephone&sprefix=iphone+13+pro+ma%2Caps%2C167&sr=1-4'
  },
  {
    id: 2,
    name: 'iPhone 11 Pro Max',
    price: 732,
    description: 'Model name\tApple iPhone 11 Pro Max\n' +
        'Wireless carrier\tUnlocked\n' +
        'Brand\tApple\n' +
        'Form factor\tTouchscreen\n' +
        'Memory storage capacity\t256 GB\n' +
        'Operating system\tIOS',
    rating:4.1,
    imageSrc: 'https://m.media-amazon.com/images/I/81nxsVyBAlL._AC_SL1500_.jpg',
    amazonLink: 'https://www.amazon.de/-/en/dp/B082DK5W6Z/ref=sr_1_2?crid=2BJAVEKRLH4LE&keywords=iphone%2B13%2Bpro%2Bmax&qid=1646431466&rnid=1703609031&s=telephone&sprefix=iphone%2B13%2Bpro%2Bma%2Caps%2C167&sr=1-2&th=1'
  },
  {
    id: 3,
    name: 'iPhone XS',
    price: 782,
    description: 'Model name\tApple iPhone XS 64GB\n' +
        'Wireless carrier\tUnlocked\n' +
        'Brand\tApple\n' +
        'Form factor\tSmartphone\n' +
        'Memory storage capacity\t64 GB\n' +
        'Operating system\tIOS',
    rating:4,
    imageSrc: 'https://m.media-amazon.com/images/I/512F7mwDVyL._AC_SL1024_.jpg',
    amazonLink: 'https://www.amazon.de/-/en/Apple-iPhone-XS-Refurbished-64GB/dp/B07N9HM3Z4/ref=sr_1_1?crid=ULNFHA2GVAWW&keywords=iphone+XS&qid=1646431885&sprefix=iphone+xs%2Caps%2C160&sr=8-1'
  },
  {
    id: 4,
    name: 'iPhone XR',
    price: 347,
    description: 'Model name\tApple iPhone XR 64GB\n' +
        'Wireless carrier\tUnlocked\n' +
        'Brand\tApple\n' +
        'Form factor\tSmartphone\n' +
        'Memory storage capacity\t64 GB\n' +
        'Operating system\tIOS',
    rating:4.3,
    imageSrc: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2752_3_1.jpg',
    amazonLink: 'https://www.amazon.de/-/en/Apple-iPhone-XR-64GB-Refurbished/dp/B07N9HM3ZR/ref=sr_1_1?crid=3H4FU87DVRT1T&keywords=iphone&qid=1646432054&sprefix=iphone%2Caps%2C179&sr=8-1&th=1'
  },
  {
    id: 5,
    name: 'iPhone X',
    price: 485,
    description: 'Model name\tIPhone X\n' +
        'Wireless carrier\tUnlocked for All Carriers\n' +
        'Brand\tApple\n' +
        'Form factor\tBar\n' +
        'Memory storage capacity\t256 GB',
    rating:4.0,
    imageSrc: 'https://m.media-amazon.com/images/I/51pQi346XcL._AC_SL1154_.jpg',
    amazonLink: 'https://www.amazon.de/-/en/X_PARENT/dp/B0797Q5771/ref=sr_1_6?crid=3H4FU87DVRT1T&keywords=iphone&qid=1646432054&sprefix=iphone%2Caps%2C179&sr=8-6'
  },
  {
    id: 6,
    name: 'Apple iPhone 8 64GB Silver',
    price: 230,
    description: 'Model name\tIPhone 8\n' +
        'Wireless carrier\tAu\n' +
        'Brand\tApple\n' +
        'Form factor\t1\n' +
        'Memory storage capacity\t64 GB',
    rating:4.2,
    imageSrc: 'https://m.media-amazon.com/images/I/41I4w-DDABL._AC_.jpg',
    amazonLink: 'https://www.amazon.de/-/en/MQ6H2B-A_64/dp/B0797P5BCV/ref=sr_1_12?crid=3H4FU87DVRT1T&keywords=iphone&qid=1646432054&sprefix=iphone%2Caps%2C179&sr=8-12'
  },
  {
    id: 7,
    name: 'iPhone 7',
    price: 158,
    description: 'Model name\tIPhone 7\n' +
        'Wireless carrier\tUnlocked\n' +
        'Brand\tApple\n' +
        'Form factor\tSmartphone\n' +
        'Memory storage capacity\t32 GB\n' +
        'Operating system\tIOS',
    rating:4.0,
    imageSrc: 'https://m.media-amazon.com/images/I/51rxj5TepeL._AC_.jpg',
    amazonLink: 'https://www.amazon.de/-/en/Apple-iPhone-refurbished-32GB-Black/dp/B01N9VBVN1/ref=sr_1_2?crid=3H4FU87DVRT1T&keywords=iphone&qid=1646432054&sprefix=iphone%2Caps%2C179&sr=8-2&th=1'
  },
  {
    id: 8,
    name: 'Samsung Galaxy A12',
    price: 201,
    description: 'Display: 6,5 Zoll (16,63 cm)\n' +
        'Hauptkamera: 48 + 5 + 2 + 2 MP\n' +
        'Speicher: 128 GB / 4 GB RAM\n' +
        'Akku: 5000 mAh',
    rating:4.5,
    imageSrc: 'https://m.media-amazon.com/images/I/91akbfdbByL._AC_SL1500_.jpg',
    amazonLink: 'https://www.amazon.de/-/en/Samsung-Galaxy-128GB-Mobile-Android/dp/B08Q8GJXPF/ref=sr_1_2?crid=2ZF9UC4U7J8EN&keywords=samsung&qid=1646432461&sprefix=samsun%2Caps%2C189&sr=8-2'
  },
  {
    id: 9,
    name: 'Samsung Galaxy S20',
    price: 454,
    description: 'Is Discontinued By Manufacturer  :  No\n' +
        'Product Dimensions  :  15.98 x 7.45 x 0.84 cm; 193 Grams\n' +
        'Date First Available  :  27 April 2021\n' +
        'Manufacturer  :  Samsung\n' +
        'ASIN :  B096G5MZ34',
    rating:4.5,
    imageSrc: 'https://m.media-amazon.com/images/I/61GbkDVtLwL._AC_SL1100_.jpg',
    amazonLink: 'https://www.amazon.de/-/en/Samsung-Galaxy-Smartphone-Cloud-Android/dp/B096G5MZ34/ref=sr_1_18?crid=2ZF9UC4U7J8EN&keywords=samsung&qid=1646432550&sprefix=samsun%2Caps%2C189&sr=8-18'
  },
  {
    id: 10,
    name: 'Samsung Galaxy S21',
    price: 772,
    description: 'Processor : 2.9 Ghz \n Display : 173mm \n Camera : 108 MP \n Memory : 12 GB',
    rating:4.4,
    imageSrc: 'https://m.media-amazon.com/images/I/81u8oHzGLmL._AC_SL1500_.jpg',
    amazonLink: 'https://www.amazon.de/-/en/Samsung-Galaxy-Smartphone-Phantom-Android/dp/B08QX85YKM/ref=sr_1_17?crid=2ZF9UC4U7J8EN&keywords=samsung&qid=1646432550&sprefix=samsun%2Caps%2C189&sr=8-17'
  }
];