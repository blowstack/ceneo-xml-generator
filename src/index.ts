import ProductInterface from "./models/ProductInterface";
import EleInterface from "./models/EleInterface";
const builder = require('xmlbuilder');
const fs = require('fs')
module.exports.Product = require('../src/models/Product')

export const enum encodings {
    'UTF8' = 'UTF-8',
    'ISO8859-2' = 'ISO-8859-2'
}

export const generateXML = async (Products: ProductInterface[], filePath: string, encoding: encodings): Promise<void> => {

    try {
        let xml = await builder.create('offers', {version: '1.0', encoding: encoding})
            .attribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
            .attribute('version', '1')

        Products.forEach((Product) => {
            let xmlItem = xml.ele('o', {
                'id': Product.id,
                'url': Product.url,
                'price': Product.price,
                'avail': Product.avail,
                'stock': Product.stock,
                'set': Product.set == undefined ? 0 : Product.set,
                'weight': Product.weight == undefined ? 0 : Product.weight
            });

            xmlItem.ele('cat', {}).cdata(Product.categoryName).up()
            xmlItem.ele('name', {}).cdata(Product.productName).up()
            xmlItem.ele('desc', {}).cdata(Product.desc).up()
            insertImages(Product, xmlItem)
            insertAttrs(Product, xmlItem)
        })

        xml.end({pretty: true})

        let writeStream = await fs.createWriteStream(filePath);
        writeStream.write(xml.toString())

    } catch (e) {
        throw e
    }
}

const insertImages = (Product: ProductInterface, xmlItem: EleInterface): EleInterface => {
    let img = xmlItem.ele('imgs', {})

    if (Product.img.additionalUrls) {
        img.ele('main', {'url': Product.img.mainUrl})
        Product.img.additionalUrls.forEach((url) => {
            img.ele('i', {'url': url}).up()
        })
        img.up()
    } else {
        img.ele('main', {'url': Product.img.mainUrl}).up()
    }
    return xmlItem;
}

const insertAttrs = (Product: ProductInterface, xmlItem: EleInterface): EleInterface => {
    let attrs = xmlItem.ele('attrs', {})

    attrs.ele('a', {'name': 'Producent'}).cdata(Product.attrs.producerName)
    attrs.ele('a', {'name': 'Kod_producenta'}).cdata(Product.attrs.producerCode)
    attrs.ele('a', {'name': 'EAN'}).cdata(Product.attrs.ean)

    if (Product.attrsAdditional) {
        Product.attrsAdditional.forEach((attr) => {
            attrs.ele('a', {'name': attr.name}).cdata(attr.value)
        })
        attrs.up()
    }
    else {
        attrs.up()
    }
    return xmlItem
}

export default {
    generateXML
}
