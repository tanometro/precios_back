from fastapi import APIRouter, HTTPException
from uuid import uuid4 as uuid
from models.user_connection import User
from schema.user_schema import UserSchema

router = APIRouter()
conn = User()

@router.post('/')
def create_user(user: UserSchema):
    user.id = str(uuid())
    user_data = user.model_dump()
    conn.create(user_data)
    return {'message': f'Usuario {user_data['name']} creado exitosamente'}

@router.get('/')
def all_users():
    user_list = []
    for user in conn.read_all():
        user_dict = {
        'id': user[0],
        'name': user[1],
        'lastname': user[2],
        'email': user[3],
        'password': user[4],
        'city': user[5],
        'province': user[6],
        'country': user[7],
        'roleId': user[8],
        }
        user_list.append(user_dict)
    return user_list

@router.get('/{id}')
def one_user(id: str):
    data = conn.read_one(id)
    user = {
        'id': data[0],
        'name': data[1],
        'lastname': data[2],
        'email': data[3],
        'password': data[4],
        'city': data[5],
        'province': data[6],
        'country': data[7],
        'roleId': data[8],
    }
    return user

@router.delete('/delete/{id}')
def delete_one(id: str):
    try:
        data = conn.read_one(id)
        if data:
            conn.delete_one(id)
            return {'message': 'Usuario borrado exitosamente'}
        raise HTTPException(status_code=404, detail='Usuario no existente')
    except Exception as e:
        raise HTTPException(status_code=500, detail=f'Error en la eliminación: {str(e)}')

@router.put('/{id}')
def update(user: UserSchema, id: str):
    data = user.model_dump()
    data['id'] = id
    conn.update_one(data)