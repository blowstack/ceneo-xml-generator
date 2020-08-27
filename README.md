# Ceneo XML generator

[NPM package](https://www.npmjs.com/package/@blowstack/ceneo-xml-generator)

A lightweight node.js package for generating valid xml feed for popular polish product search engine Ceneo.

## Installation

yarn add @blowstack/ceneo-xml-generator
npm i @blowstack/ceneo-xml-generator

## Usage

A function generateXML() produces feed for Ceneo as an XML file.
It takes three obligatory arguments respectively:
- array of objects that implements ProductInterface
- path to output file
- encoding

````typescript
export const generateXML = async (Products: ProductInterface[], filePath: string, encoding: encodings): Promise<void> => {...}
````

````javascript
const {generateXML, Product} = require('@blowstack/ceneo-xml-generator')

let product1 = new Product
product1.id = '5f46228a1f97180000cff447'
product1.url = 'http://your-shop-address.com/product/5f46228a1f97180000cff447'
product1.price = 356.99
product1.stock = 10
product1.avail = Product.getAvailability('oneDay')
product1.set = Product.isSet(false)
product1.productName = 'AMD Ryzen 3700X'
product1.categoryName = 'Procesory'
product1.desc = '8 core 3,6 Ghz processor BOX version'
product1.img = {
    mainUrl: 'https://image.ceneostatic.pl/data/products/83359728/i-amd-ryzen-7-3700x-3-6ghz-box-100-100000071box.jpg',
    additionalUrls: [
        'https://image.ceneostatic.pl/data/products/83359728/i-amd-ryzen-7-3700x-3-6ghz-box-100-100000071box.jpg',
        'https://image.ceneostatic.pl/data/products/83359728/i-amd-ryzen-7-3700x-3-6ghz-box-100-100000071box.jpg',
    ]
}
product1.attrs = {
    producerName: 'AMD',
    producerCode: '100100000031BOX',
    ean: '1234567890123',
}

generateXML([product1], 'ceneo.xml', "UTF-8")       
````

## Product Interface

You can pass to generateXML() any array of objects if they adhere to Product Interface.
````typescript

export default interface ProductInterface {
    id: string
    url: string
    price: number
    avail: number
    set: number
    weight: number
    basket: number
    stock: number
    categoryName: string
    productName: string
    img: ImgsInterface
    desc: string
    attrs: AttributesInterface
    attrsAdditional: [AdditionalAttributeInterface]
}

export default interface AttributesInterface {
    producerName: string
    producerCode: string
    ean: string
}

export default interface AttributesInterface {
    mainUrl: string
    additionalUrls: string[]
}

export default interface AdditionalAttributeInterface {
    name: string
    value: string
}
````

## Enums

````typescript
    export const enum avail {
        oneDay = 1,
        threeDays = 3,
        week = 7,
        atLeastWeek = 14,
        checkInStore = 99
    }

    export const enum basket {
        yes = 1,
        no = 0
    }

    export const enum set {
        yes = 1,
        no = 0
    }
    export const enum encodings {
        'UTF8' = 'UTF-8',
        'ISO8859-2' = 'ISO-8859-2'
    }
````

## Static Product class methods

````typescript
static getAvailability(span: string): avail {...}
````
````typescript
static isSet(isSet: boolean): set {...}
````
````typescript
static isBasket(isBasket: boolean): basket {...}
````
Can be useful when proving data to Product object. Use enums as arguments for them.
i.e

 ```typescript 
Product.getAvailability('oneDay')
```
