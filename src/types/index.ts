export type MenuItem = {
    id: number,
    name: string,
    price: number
}

export type UseOrder = MenuItem & {
    quantity: number
}