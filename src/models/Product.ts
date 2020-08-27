import ProductInterface from "./ProductInterface";

class Product implements ProductInterface {

    id!: string
    avail!: avail
    basket!: basket
    categoryName!: string
    desc!: string
    price!: number
    productName!: string
    set!: set
    stock!: number
    url!: string
    weight!: number

    img!: {
        mainUrl: string
        additionalUrls: []
    }

    attrs!: {
        producerName: string
        producerCode: string
        ean: string
    }
    attrsAdditional!: [{
        name: string
        value: string
    }]

    static getAvailability(span: string): avail {
        let availability

        switch (span) {
            case 'oneDay':
                availability = avail.oneDay
                break;
            case 'threeDays':
                availability = avail.threeDays
                break;
            case 'week':
                availability = avail.week
                break;
            case 'atLeastWeek':
                availability = avail.atLeastWeek
                break;
            case 'checkInStore':
                availability = avail.checkInStore
                break;
            default:
                availability = avail.oneDay
                break;
        }

        return availability
    }

    static isSet(isSet: boolean): set {

        if (isSet) {
            return set.yes
        } else {
            return set.no
        }
    }

    static isBasket(isBasket: boolean): basket {

        if (isBasket) {
            return basket.yes
        } else {
            return basket.no
        }
    }

}
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

module.exports = Product
