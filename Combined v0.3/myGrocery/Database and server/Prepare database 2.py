import sqlite3
db = sqlite3.connect('myGrocerydb.sqlite')

db.execute('DROP TABLE IF EXISTS user')
db.execute('DROP TABLE IF EXISTS product')
db.execute('DROP TABLE IF EXISTS orders')
db.execute('DROP TABLE IF EXISTS order_item')

db.execute('''CREATE TABLE user(
    id integer PRIMARY KEY,
    username text NOT NULL,
    password text NOT NULL,
    fullname text NOT NULL,
    mobile_no text,
    email text UNIQUE,
    address text
)''')

db.execute('''CREATE TABLE product(
    id integer PRIMARY KEY,
    product_name text NOT NULL,
    description text NOT NULL,
    category text NOT NULL,
    type text NOT NULL,
    price REAL NOT NULL,
    pic_url text NOT NULL
)''')

db.execute('''CREATE TABLE orders(
    id integer PRIMARY KEY,
    user_id integer NOT NULL,
    total_price REAL NOT NULL,
    paid_status text NOT NULL,
    order_status TEXT NOT NULL
)''')

db.execute('''CREATE TABLE order_item(
    id integer PRIMARY KEY,
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL
)''')

cursor = db.cursor()

cursor.execute('''
    INSERT INTO user(username,password,fullname,mobile_no,email,address)
    VALUES('Max123','Max123','Max William','0128457125','max123@gmail.com','15, Lorong 45, Taman Merdeka, 54874, Sungai Bersih, Selangor, Malaysia')
''')

cursor.execute('''
    INSERT INTO user(username,password,fullname,mobile_no,email,address)
    VALUES('Lily123','Lily123','Lily Lotus','0178451257','Lily123@gmail.com','Jalan 3, Lorong 12, Taman Bersih, 12547, Sungai Jernih, Perak, Malaysia')
''')

cursor.execute('''
    INSERT INTO user(username,password,fullname,mobile_no,email,address)
    VALUES('Nick123','Nick123','Nick Victor','01654845118','Nick123@gmail.com','7, Lorong 54, Taman Pahlawan, 48514, Sungai Long, Johor, Malaysia')
''')

cursor.execute('''
    INSERT INTO user(username,password,fullname,mobile_no,email,address)
    VALUES('huiqi123','huiqi123','Tang Hui Qi','0174512468','huiqi123@gmail.com','5, Lorong 45, Taman Langit, 47158, Sungai laut, Penang, Malaysia')
''')


cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('EB Tempura Chicken Nugget (380g)','Made with chicken breast meat and coated with delightful crispy tempura batter. Perfectly shaped for a satisfying bite, 
    sink your teeth into this wonderful treat at any time!','Chilled & Frozen','Meats',8.75,'https://www.kosmo.com.my/wp-content/uploads/2021/12/tempura-naget-lain.jpg')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('New York Bakery Plain Bagels 5 Pack','Authenthic New York style Plain bagels that are deliciously soft & chewy. The bagel is low in fat, free from artificial colours 
    and flavours, & suitable for vegans and vegetarians. The plain bagel is versatile as you can have it with any ingredient you desire','Bakery','Bread',15.00,'https://digitalcontent.api.tesco.com/v2/media/ghs/e3b1b7e9-b071-430b-9986-4a73055a9a1d/f178e739-9295-42d1-8153-dd7c2a744dfb_1636313131.jpeg?h=540&w=540')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('Unagi Yellow','The taste of the unagi is light,somehow like the taste of squid meat,only a with pinch of sweetness.Of course,if you already enjoy unagi,then you are 
    well aware of the subtle sweet flavour that''s slightly chewy,somewhat reminiscent of raw salmon.','Fresh Product','Seafood',19.50,
    'https://cdn.shopify.com/s/files/1/0273/3424/6486/products/UnagiYellow80p_1946x.jpg?v=1647580267')
''')

cursor.execute('''
    INSERT INTO orders(user_id,total_price,paid_status,order_status)
    VALUES('1','23.75','Unpay','Awaiting payment')
''')

cursor.execute('''
    INSERT INTO orders(user_id,total_price,paid_status,order_status)
    VALUES('2','27.25','Paid','Shipping')
''')

cursor.execute('''
    INSERT INTO orders(user_id,total_price,paid_status,order_status)
    VALUES('3','34.50','Paid','Shipped')
''')

cursor.execute('''
    INSERT INTO orders(user_id,total_price,paid_status,order_status)
    VALUES('4','43.25','Unpay','Awaiting checkout')
''')

cursor.execute('''
    INSERT INTO order_item(order_id,product_id,quantity)
    VALUES('1','1','1')
''')

cursor.execute('''
    INSERT INTO order_item(order_id,product_id,quantity)
    VALUES('1','2','1')
''')

cursor.execute('''
    INSERT INTO order_item(order_id,product_id,quantity)
    VALUES('2','1','1')
''')

cursor.execute('''
    INSERT INTO order_item(order_id,product_id,quantity)
    VALUES('2','3','1')
''')

cursor.execute('''
    INSERT INTO order_item(order_id,product_id,quantity)
    VALUES('3','2','1')
''')

cursor.execute('''
    INSERT INTO order_item(order_id,product_id,'quantity')
    VALUES('3','3',1)
''')

cursor.execute('''
    INSERT INTO order_item(order_id,product_id,'quantity')
    VALUES('4','1','1')
''')

cursor.execute('''
    INSERT INTO order_item(order_id,product_id, 'quantity')
    VALUES('4','2','1')
''')

cursor.execute('''
    INSERT INTO order_item(order_id,product_id,'quantity')
    VALUES('4','3','1')
''')

db.commit()
db.close()
