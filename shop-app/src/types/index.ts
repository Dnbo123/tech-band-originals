export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  stock: number;
  rating: number;
  reviews: number;
}
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface User {
    id: string;
    email: string;
    role: 'user' | 'admin';
  }

  export interface Cart {
    id: string;
    userId: string;
    items: CartItem[];
    total: number;
  }