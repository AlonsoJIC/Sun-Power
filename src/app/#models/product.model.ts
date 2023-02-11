//Interfaz de lo que llevan todos los productos
export interface Product {
  id: string;
  title: string | number;
  price: number;
  images: string[];
  description: string;
  category: Category;
}
export interface Category {
  id: string;
  name: string;
}

//Crear producto
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'>{
  categoryId: number;
}

//PUT / PATCH, update
export interface UpdateProductDTO extends Partial <CreateProductDTO> {
/*  El atributo partial hace que herede lo de CreateProductDTO pero con el signo " ? ", signo de no requerimiento.
  title?: string;
  price?: number;
  images?: string[];
  description?: string;
  categoryId?: number;
  */
}
