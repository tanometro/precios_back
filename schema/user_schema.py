from pydantic import BaseModel
from typing import Text, Optional, Union

class UserSchema(BaseModel):
     id: Optional[str] = None
     name: str
     lastname: Optional[str]
     email: str
     password: str
     city: Optional[str]
     province: Optional[str]
     country: Optional[str]
     roleId: int