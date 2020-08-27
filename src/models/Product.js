"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.getAvailability = function (span) {
        var availability;
        switch (span) {
            case 'oneDay':
                availability = 1 /* oneDay */;
                break;
            case 'threeDays':
                availability = 3 /* threeDays */;
                break;
            case 'week':
                availability = 7 /* week */;
                break;
            case 'atLeastWeek':
                availability = 14 /* atLeastWeek */;
                break;
            case 'checkInStore':
                availability = 99 /* checkInStore */;
                break;
            default:
                availability = 1 /* oneDay */;
                break;
        }
        return availability;
    };
    Product.isSet = function (isSet) {
        if (isSet) {
            return 1 /* yes */;
        }
        else {
            return 0 /* no */;
        }
    };
    Product.isBasket = function (isBasket) {
        if (isBasket) {
            return 1 /* yes */;
        }
        else {
            return 0 /* no */;
        }
    };
    return Product;
}());
module.exports = Product;
