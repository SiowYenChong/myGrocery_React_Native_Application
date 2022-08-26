import sqlite3
db = sqlite3.connect('myGrocerydb.sqlite')

db.execute('DROP TABLE IF EXISTS user')
db.execute('DROP TABLE IF EXISTS product')
db.execute('DROP TABLE IF EXISTS orders')

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
    order_status TEXT NOT NULL,
    date integer NOT NULL
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
    sink your teeth into this wonderful treat at any time!','Chilled and Frozen','Meats',8.75,'https://www.kosmo.com.my/wp-content/uploads/2021/12/tempura-naget-lain.jpg')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('Merry Ice Cream-Gula Melaka Ice Cream',' A familiar sweet and fragrance taste. A much loved flavour from all ages. Rich and fragrant, silky smooth with a soothing creamy texture','Chilled and Frozen','Ice Cream',29.90,'https://my-test-11.slatic.net/p/df3c0332f641e65f7677039a75a2ed67.png')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('KG PASTRY Black Sesame Mini Tang Yuan (300g)','Comprising a delightful chewy outer covering that gives way to a filling of aromatic paste, this delicacy will make any time a festival time!','Chilled and Frozen','Desserts',8.80,'https://cdn.shopify.com/s/files/1/0429/3761/4503/products/023481-1-1.jpg?v=1635039578')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('New York Bakery Plain Bagels 5 Pack','Authenthic New York style Plain bagels that are deliciously soft & chewy. The bagel is low in fat, free from artificial colours and flavours, & suitable for vegans and vegetarians. The plain bagel is versatile as you can have it with any ingredient you desire','Bakery','Bread',15.00,'https://digitalcontent.api.tesco.com/v2/media/ghs/e3b1b7e9-b071-430b-9986-4a73055a9a1d/f178e739-9295-42d1-8153-dd7c2a744dfb_1636313131.jpeg?h=540&w=540')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('Plain Croissant 2 Piece','Buttery layers between the croissant''s creating the soft yet crunchy texture. A great breakfast treat! Complement the croissants with butter or jam for an even better experience!','Bakery','Bread',3.00,'https://cdn.shopify.com/s/files/1/0265/7845/2503/products/PlainCriossant_1024x.png?v=1617522152')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('MASSIMO White Sandwich Loaf 400g','There’s nothing more satisfying than a good loaf of white bread. Perfect for breakfast and just about any time of the day, the Massimo Sandwich Loaf goes perfectly with your favourite spreads. Soft, fluffy and delicious, you won’t stop at just one slice!','Bakery','Loaf Bread',2.80,'https://scstore.com.my/wp-content/uploads/2020/05/massimo-white-sandwich-loaf-1.jpg')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('Coca-Cola 330ml','Cold refreshing drink!!!','Food and Beverage','Bottled Beverage',2.20,'https://texassmokehousecy.com/wp-content/uploads/2021/07/Coca-Cola-330ml.jpg')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('Milo Active Go 3 In 1 (18 x 33g)','Milo Package','Food and Beverage','Chocolate Drinks',14.99,'https://cf.shopee.com.my/file/7698bc98f8c251d6b1604736f4d8988d')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('Maggie Kari Instant Noodles','Delicious instant noodle','Food and Beverage','Instant Food',5.10,'https://malaysiamari.com/wp-content/uploads/2021/02/maggikari.jpg')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('Unagi Yellow','The taste of the unagi is light,somehow like the taste of squid meat,only a with pinch of sweetness.Of course,if you already enjoy unagi,then you are 
    well aware of the subtle sweet flavour that''s slightly chewy,somewhat reminiscent of raw salmon.','Fresh Product','Seafood',19.50,
    'https://cdn.shopify.com/s/files/1/0273/3424/6486/products/UnagiYellow80p_1946x.jpg?v=1647580267')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('Bitter Ground','Bitter melon — also known as bitter gourd or Momordica charantia — is a tropical vine that belongs to the gourd family and is closely related to zucchini, squash, pumpkin, and cucumber. It''s cultivated worldwide for its edible fruit, a staple in many types of Asian cuisine.','Fresh Product','Fresh Vegetable',4.50,
    'https://www.healthifyme.com/blog/wp-content/uploads/2022/03/Bitter-Gourd-1.jpg')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('Atlantic Premium Salmon Steak','The Atlantic Premium Salmon Steak is rich in Omega 3 Fatty Acids and vitamin E is also great source of proteins.You can pan fry, bake, or grill salmon steaks. We love pan-frying them in a skillet because they take only 10 minutes to cook.','Fresh Product','Sea Food',8.00,
    'https://www.fresh2yourdoor.com/wp-content/uploads/2021/10/Fresh-Premium-Grade-Atlantic-Salmon6Oz-6.jpg')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('Compact Toilet Roll Tissue','100% brand new 2-layer tissue rolls. Thicker, stronger, and more value. Ideal bathroom, toilet, changing room and etc. Easy and convenient to use. Good quality product • Value for money. Specification: Package Includes: 10 x CUTIE 3-Ply Compact Toilet Roll Tissue','Household','Cleaning Supplies',14.90,
    'https://cf.shopee.com.my/file/e0326ef23b2f2d6130d440f21366f7c2')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('Garbage Bag','Plastic trash, garbage bags, trash bag, garbage storage, trash can, trash. There are four sizes, which small size is in blue and other three larger sizes are in black. 71cm x 89cm (F1). 55cm x 82cm (F1). 48cm x 52cm (F1). 74cm x 90cm (F1).Features : Eco-friendly. Suitable for kitchen use. Available in four sizes, 74cm x 90cm (10pcs), 71cm x 89cm (20pcs), 55cm x 82cm (20pcs), 48cm x 52cm (30pcs). Durable and easy to use. Value for money. Good quality product.','Household','Cleaning Supplies',3.20,
    'https://cf.shopee.com.my/file/7fb4e5affd13f157f423c13e5dde15e7')
''')

cursor.execute('''
    INSERT INTO product(product_name,description,category,type,price,pic_url)
    VALUES('Clorox Original Bleach','Clorox total cleans + disinfects, Kills 99.9% of household germs, Kills 99.9% of the Cold and Flu Viruses.','Household','Cleaning Supplies',5.00,
    'https://www.pantryexpress.my/469-thickbox_default/clorox-bleach-1l-original.jpg')
''')

cursor.execute('''
    INSERT INTO orders(user_id,total_price,paid_status,order_status,date)
    VALUES('1','23.75','Paid','Shipped','1385481600000')
''')

cursor.execute('''
    INSERT INTO orders(user_id,total_price,paid_status,order_status,date)
    VALUES('2','27.25','Paid','Shipped','1460908800000')
''')

cursor.execute('''
    INSERT INTO orders(user_id,total_price,paid_status,order_status,date)
    VALUES('3','34.50','Paid','Shipped','1495468800000')
''')

cursor.execute('''
    INSERT INTO orders(user_id,total_price,paid_status,order_status,date)
    VALUES('4','43.25','Paid','Shipped','1508688000000 ')
''')

cursor.execute('''
    INSERT INTO orders(user_id,total_price,paid_status,order_status,date)
    VALUES('1','23.75','Paid','Shipped','1518688000000')
''')

db.commit()
db.close()
