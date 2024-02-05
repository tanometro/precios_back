from fastapi import FastAPI
from uuid import uuid4 as uuid
from schema.product_schema import ProductSchema
from api import users, products

app = FastAPI()

## .model_dump() convierte a objeto 

app.include_router(users.router, prefix='/users', tags=['users'])
app.include_router(products.router, prefix='/products', tags=['products'])