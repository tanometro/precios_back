import psycopg

class User():
    conn = None

    def __init__(self) -> None:
        try:
            self.conn = psycopg.connect('dbname=precios user=angelogrillo password=Kirita77 host=localhost port=5432')
        except psycopg.OperationalError as err:
            print(err)
            self.conn.close()

    def create(self, data):
        with self.conn.cursor() as cur:
            cur.execute("""
                INSERT INTO "users"(id, name, lastname, email, password, city, province, country, roleId) VALUES (%(id)s, %(name)s, %(lastname)s, %(email)s, %(password)s, %(city)s, %(province)s, %(country)s, %(roleId)s)
            """, data)
            self.conn.commit()

    def read_all(self):
        with self.conn.cursor() as cur:
            data = cur.execute("""
                SELECT * FROM "users";
            """)
            return data.fetchall()

    def read_one(self, id):
        with self.conn.cursor() as cur:
            data = cur.execute("""
                SELECT * FROM "users" WHERE id = %s
        """, (id,))
            return data.fetchone()
        
    def update_one(self, data):
        with self.conn.cursor() as cur:
            cur.execute("""
                UPDATE "users" SET name = %(name)s, lastname = %(lastname)s, email = %(email)s, password = %(password)s, city =  %(city)s, province = %(province)s, country = %(country)s, roleId = %(roleId)s WHERE id = %(id)s
        """, data)
            self.conn.commit()

    def delete_one(self, id):
        with self.conn.cursor() as cur:
            cur.execute("""
                DELETE FROM "users" WHERE id = %s
            """, (id,))
            self.conn.commit()

    def __def__(self):
        self.conn.close()
