from fastapi import APIRouter, HTTPException
from uuid import uuid4 as uuid
from models.product_connection import Product
from schema.product_schema import ProductSchema

router = APIRouter()
conn = Product()

products = []

@router.get('/products')
def all_products():
    return products

@router.post('/products')
def create_product(product: ProductSchema):
     product.id = str(uuid())
     products.append(product.model_dump())
     return product

@router.get('/products/{product_id}')
def read_product(product_id: str):
    for product in products:
        if product['id'] == product_id:
            return product
    raise HTTPException(status_code=404, detail=f'Producto con id {product_id} no encontrado')

@router.put('/products/{product_id}')
def update_product(product_id: str, updatedProduct: ProductSchema):
    for product in products:
        if product['id'] == product_id:
            product['name'] = updatedProduct.name
            product['price'] = updatedProduct.price
            product['offer_price'] = updatedProduct.offer_price
            product['offer'] = updatedProduct.offer
            product['unity'] = updatedProduct.unity
            product['description'] = updatedProduct.description
            return {'Message': f'El producto {product['name']} fue actualizado'}
    raise HTTPException(status_code=404, detail='Producto no encontrado')

@router.delete('/products/{product_id}')
def delete_post(product_id: str):
    try:
        for product in products:
            if product['id'] == product_id:
                products.remove(product)
        return {'message': f'Producto con id {product_id} eliminado'}
    except ValueError:
        raise HTTPException(status_code=404, detail=f'Producto con id {product_id} no encontrado')
    except Exception as e:
        return {'error': 'Ha ocurrido un error inesperado'}, 500 