import AttributesInterface from "./AttributesInterface"
import ImgsInterface from "./ImgsInterface"
import AdditionalAttributeInterface from "./AdditionalAttributeInterface"

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
