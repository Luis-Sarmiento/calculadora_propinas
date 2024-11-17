import { useState } from "react"
import { UseOrder } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<UseOrder[]>([])
    const addItem = () => {
        console.log('agregando...')
    }

    return{
        addItem
    }
}