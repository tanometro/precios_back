from pydantic import BaseModel
from typing import Text, Optional, Union

class ProductSchema(BaseModel):
     id: Optional[str] = None
     name: str
     price: Union[int, float]
     offer_price: Optional[float]
     offer: bool = False
     unity: str
     description: Optional[Text]