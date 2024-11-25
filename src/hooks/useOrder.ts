import { useState } from "react"
import { MenuItem, UseOrder } from "../types"

export default function useOrder() {
    
    const [order, setOrder] = useState<UseOrder[]>([])
    const [tip, setTip] = useState(0)
    
    const addItem = (item: MenuItem) => {
        
        const itemExists = order.find(orderItem => orderItem.id === item.id)
        if(itemExists){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
                {...orderItem, quantity: orderItem.quantity + 1} :
                orderItem
            )
            setOrder(updatedOrder)
        }else{
            const newItem: UseOrder = {...item, quantity: 1}
            setOrder([...order, newItem]) 
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem
    }
}