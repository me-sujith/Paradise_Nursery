import type { Product } from "../context/CartContext"

export const products: Product[] = [
  {
    id: "snake-plant",
    name: "Snake Plant",
    price: 18,
    category: "Low Light",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRP3v_PhC6XqjVLcIMw6kRYSCekiuWvji8Yl_hqRyiuXJ8fMxb7kWFuPO10k6-LCV3n2STBktlDxhrtdU-BRomdzCumdCJfy5Y6cLoB5uRk",
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    price: 22,
    category: "Low Light",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0N46BmA_4nxPmSZfrYF0EIwsOZ-elY8zum_SiPnN3HP8eG8wTsse_NzjxAYJcgUbkhmhXdBjj6-69foaE3wgYj-C0VSWKu7NOfnjZ_Zfqtw",
  },
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    price: 35,
    category: "Statement",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2Np9owNGWHXIyH7F89s-r_9FPQYnLDRD7cpp0Y9buun1SA-8iU2TYb6QgQwjgtkrFVwoZISAFKHiDZ96ajXwkhb6LveYzSaCsT7_ctix",
  },
  {
    id: "pothos-golden",
    name: "Golden Pothos",
    price: 15,
    category: "Trailing",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4Nrz6d2gSiWHMl91lqbc-1cQJU1zx9U87i6i5qDMKmlBwP3dS9NCAogMgWoC6LWHNGmQ4JD8X4oYPGfNE1d_kSTHR0mN4SP-0TTwTGVQu",
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    price: 42,
    category: "Statement",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT3V1ayCRXiCXq0yJITT61eu0O2WpkcNjOy7HAoaj8dC5qAyRGk4mRhP3s9tLVyG2HCczQ1qszPoKP4LdP9MzG6oQ_nT_mmJ7hjrmvzz5mVjrp3wY8p3C9J0A",
  },
  {
    id: "string-of-pearls",
    name: "String of Pearls",
    price: 24,
    category: "Trailing",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
  },
]

export const categories = Array.from(new Set(products.map((p) => p.category)))
