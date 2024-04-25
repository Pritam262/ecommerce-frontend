export interface ProductInterface {
    product: {

        id: string,
        seller: {
            id: string,
            sellername: string,
        },
        productType: string,
        mainimage: {
            id: string,
            imageUrl: string
        },
        images: {
            id: string,
            imageUrl: string,
        }[],
        title: string,
        genericName: string,
        description: string,
        qty: string,
        price: number,
        color: string,
        technicaldetails: string,
        date: string,
    }
}