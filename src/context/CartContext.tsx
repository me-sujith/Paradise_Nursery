import { createContext, useContext, useMemo, useReducer } from 'react'
import type { ReactNode } from 'react'

export type Product = {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export type CartItem = {
  product: Product
  quantity: number
}

type CartState = {
  items: Record<string, CartItem>
}

type CartAction =
  | { type: 'ADD'; product: Product }
  | { type: 'INCREASE'; productId: string }
  | { type: 'DECREASE'; productId: string }
  | { type: 'REMOVE'; productId: string }
  | { type: 'CLEAR' }

const initialState: CartState = {
  items: {},
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items[action.product.id]
      const quantity = existing ? existing.quantity + 1 : 1
      return {
        items: {
          ...state.items,
          [action.product.id]: { product: action.product, quantity },
        },
      }
    }
    case 'INCREASE': {
      const existing = state.items[action.productId]
      if (!existing) return state
      return {
        items: {
          ...state.items,
          [action.productId]: { ...existing, quantity: existing.quantity + 1 },
        },
      }
    }
    case 'DECREASE': {
      const existing = state.items[action.productId]
      if (!existing) return state
      const nextQty = existing.quantity - 1
      if (nextQty <= 0) {
        const { [action.productId]: _, ...rest } = state.items
        return { items: rest }
      }
      return {
        items: {
          ...state.items,
          [action.productId]: { ...existing, quantity: nextQty },
        },
      }
    }
    case 'REMOVE': {
      const { [action.productId]: _, ...rest } = state.items
      return { items: rest }
    }
    case 'CLEAR':
      return initialState
    default:
      return state
  }
}

type CartContextValue = {
  items: CartItem[]
  totalItems: number
  totalCost: number
  addToCart: (product: Product) => void
  increase: (productId: string) => void
  decrease: (productId: string) => void
  remove: (productId: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const value = useMemo<CartContextValue>(() => {
    const items = Object.values(state.items)
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalCost = items.reduce((sum, item) => sum + item.quantity * item.product.price, 0)
    return {
      items,
      totalItems,
      totalCost,
      addToCart: (product) => dispatch({ type: 'ADD', product }),
      increase: (productId) => dispatch({ type: 'INCREASE', productId }),
      decrease: (productId) => dispatch({ type: 'DECREASE', productId }),
      remove: (productId) => dispatch({ type: 'REMOVE', productId }),
      clear: () => dispatch({ type: 'CLEAR' }),
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}


