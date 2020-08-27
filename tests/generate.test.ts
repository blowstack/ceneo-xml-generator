const {generateXML, Product} = require('../src/index')

test('generate and save an example xml with 2 products', () => {

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
        additionalUrls: []
    }
    product1.attrs = {
        producerName: 'AMD',
        producerCode: '100100000031BOX',
        ean: '1234567890123',
    }

    let product2 = new Product
    product2.id = '9A26226a1f97180000ccc551'
    product2.url = 'http://your-shop-address.com/product/9A26226a1f97180000ccc551'
    product2.price = 1021.00
    product2.stock = 1
    product2.weight = 1
    product2.avail = Product.getAvailability('week')
    product2.set = Product.isSet(true)
    product2.productName = 'Full Stack JavaScript Book'
    product2.categoryName = 'Ksiązki'
    product2.desc = 'A book about Node.js.'
    product2.img = {
        mainUrl: 'https://image.ceneostatic.pl/data/products/89577701/i-full-stack-javascript-poznaj-technologie-backbone-js-node-js-i-mongodb-mardan-azat.jpg',
        additionalUrls: [
            'https://image.ceneostatic.pl/data/products/89577701/i-full-stack-javascript-poznaj-technologie-backbone-js-node-js-i-mongodb-mardan-azat.jpg',
            'https://image.ceneostatic.pl/data/products/89577701/i-full-stack-javascript-poznaj-technologie-backbone-js-node-js-i-mongodb-mardan-azat.jpg'
        ]
    }
    product2.attrs = {
        producerName: 'Apress',
        producerCode: '65208586',
        ean: '9788328357501',
    }

    product2.attrsAdditional = [
        {
            name: 'ISBN',
            value: '9788328357501'
        }
    ]

    generateXML([product1, product2], 'tests/ceneo.xml', "UTF-8")
})
