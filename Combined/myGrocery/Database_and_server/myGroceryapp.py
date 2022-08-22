import sqlite3
from flask import Flask, jsonify, request, abort
from argparse import ArgumentParser

app = Flask(__name__)

#create dictionary for both grocery and category (easy retrieval)
def get_user_row(row):
    row_dict= {
        'id': row[0],
        'username':row[1],
        'password':row[2],
        'fullname':row[3],
        'mobile_no':row[4],
        'email':row[5],
        'address':row[6],
    }
    return row_dict

def get_product_row(row):
    row_dict = {
        'id': row[0],
        'product_name': row[1],
        'description': row[2],
        'category': row[3],
        'type':row[4],
        'price':row[5],
        'pic_url': row[6],
    }
    return row_dict

def get_orders_row(row):
    row_dict= {
        'id': row[0],
        'user_id':row[1],
        'total_price':row[2],
        'paid_status':row[3],
        'order_satus':row[4],
        'date':row[5],
    }
    return row_dict

def get_order_item_row(row):
    row_dict= {
        'id': row[0],
        'order_id':row[1],
        'product_id':row[2],
        'quantity': row[3],
    }
    return row_dict

#for database connection
def db_con():
    conn = None
    try:
        conn = sqlite3.connect('myGrocerydb.sqlite')
    except sqlite3.error as e:
        print(e)
    return conn


# manipulate user
# for get all & insert method
@app.route('/api/user', methods=['GET', 'POST'])
def all_user():
    conn = db_con()
    cursor = conn.cursor()

    if request.method == 'GET':
        cursor.execute("SELECT * from user")

        rows = cursor.fetchall()
        conn.close()

        rows_as_dict = []
        for row in rows:
            row_as_dict = get_user_row(row)
            rows_as_dict.append(row_as_dict)

        return jsonify(rows_as_dict), 200

    if request.method == 'POST':
        if not request.json:
            abort(404)

        new_user = (
            request.json['username'],
            request.json['password'],
            request.json['fullname'],
            request.json['mobile_no'],
            request.json['email'],
            request.json['address'],
        )

        cursor.execute('''INSERT INTO user(username,password,fullname,mobile_no,email,address) VALUES(?,?,?,?,?,?)''', new_user)
        user_id = cursor.lastrowid
        conn.commit()

        response = {
            'id': user_id,
            'affected': conn.total_changes,
        }
        conn.close()
        return jsonify(response), 201

# for get 1 user, update and delete
@app.route('/api/user/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def single_user(id):
    conn = db_con()
    cursor = conn.cursor()

    if request.method == "GET":
        cursor.execute('SELECT * FROM user WHERE id=?', (id,))
        row = cursor.fetchone()
        conn.close()

        if row:
            row_as_dict = get_user_row(row)
            return jsonify(row_as_dict), 200
        else:
            return jsonify(None), 200

    if request.method == "PUT":
        if not request.json:
            abort(400)

        if 'id' not in request.json:
            abort(400)

        if int(request.json['id']) != id:
            abort(400)

        update_user = (
            request.json['username'],
            request.json['password'],
            request.json['fullname'],
            request.json['mobile_no'],
            request.json['email'],
            request.json['address'],
            id,
        )

        cursor.execute(''' UPDATE user SET username=?, password=?, fullname=?, mobile_no=?, email=?, address=? WHERE id=?''',
                       update_user)
        conn.commit()

        response = {
            'id': id,
            'affected': conn.total_changes,
        }
        conn.close()
        return jsonify(response), 201

    if request.method == "DELETE":
        if not request.json:
            abort(400)

        if 'id' not in request.json:
            abort(400)

        if int(request.json['id']) != id:
            abort(400)

        cursor.execute('DELETE FROM user WHERE id=?', (id,))

        conn.commit()

        response = {
            'id': id,
            'affected': conn.total_changes,
        }

        conn.close()
        return jsonify(response), 201

# update user password
@app.route('/api/update_user_pass/<int:id>', methods=['GET', 'PUT'])
def update_user_password(id):
    conn = db_con()
    cursor = conn.cursor()

    if request.method == "GET":
        cursor.execute('SELECT * FROM user WHERE id=?', (id,))
        row = cursor.fetchone()
        conn.close()

        if row:
            row_as_dict = get_user_row(row)
            return jsonify(row_as_dict), 200
        else:
            return jsonify(None), 200

    if request.method == "PUT":
        if not request.json:
            abort(400)

        if 'id' not in request.json:
            abort(400)

        if int(request.json['id']) != id:
            abort(400)

        update_user_password = (
            request.json['password'],
            id,
        )

        cursor.execute(''' UPDATE user SET password=? WHERE id=?''',
                       update_user_password)
        conn.commit()

        response = {
            'id': id,
            'affected': conn.total_changes,
        }
        conn.close()
        return jsonify(response), 201

#manipulate product

#for get all & insert method
@app.route('/api/product',methods = ['GET'])
def all_product():
    conn = db_con()
    cursor = conn.cursor()

    if request.method == 'GET':
        cursor.execute("SELECT * from product")
        
        rows = cursor.fetchall()
        conn.close()
        
        rows_as_dict = []
        for row in rows:
            row_as_dict = get_product_row(row)
            rows_as_dict.append(row_as_dict)

        return jsonify(rows_as_dict), 200


# get all same category products
@app.route('/api/product/<string:category>', methods=['GET'])
def all_same_category_product(category):
    conn = db_con()
    cursor = conn.cursor()

    if request.method == 'GET':
        cursor.execute("SELECT * from product where category=?",(category,))

        rows = cursor.fetchall()
        conn.close()

        rows_as_dict = []
        for row in rows:
            row_as_dict = get_product_row(row)
            rows_as_dict.append(row_as_dict)

        return jsonify(rows_as_dict), 200


#for get 1 grocery, update and delete
@app.route('/api/product/<int:id>',methods = ['GET'])
def single_product(id):
    conn = db_con()
    cursor = conn.cursor()

    if request.method == "GET":
        cursor.execute('SELECT * FROM product WHERE id=?', (id,))
        row = cursor.fetchone()
        conn.close()

        if row:
            row_as_dict = get_product_row(row)
            return jsonify(row_as_dict), 200
        else:
            return jsonify(None), 200


#manipulate orders
#for get all orders
@app.route('/api/orders',methods = ['GET'])
def all_orders():
    conn = db_con()
    cursor = conn.cursor()

    if request.method == 'GET':
        cursor.execute("SELECT * from orders")
        
        rows = cursor.fetchall()
        conn.close()
        
        rows_as_dict = []
        for row in rows:
            row_as_dict = get_orders_row(row)
            rows_as_dict.append(row_as_dict)

        return jsonify(rows_as_dict), 200


# for get a user all orders
@app.route('/api/orders/<int:id>', methods=['GET'])
def a_user_all_orders(id):
    conn = db_con()
    cursor = conn.cursor()

    if request.method == 'GET':
        cursor.execute("SELECT * from orders where user_id=?",(id,))

        rows = cursor.fetchall()
        conn.close()

        rows_as_dict = []
        for row in rows:
            row_as_dict = get_orders_row(row)
            rows_as_dict.append(row_as_dict)

        return jsonify(rows_as_dict), 200

# insert an orders method
@app.route('/api/orders_insert', methods=['POST'])
def insert_order():
    conn = db_con()
    cursor = conn.cursor()

    if request.method == 'POST':
        if not request.json:
            abort(400)

        new_orders = (
            request.json['user_id'],
            request.json['total_price'],
            request.json['paid_status'],
            request.json['order_status'],
            request.json['date'],
        )
        cursor.execute('''INSERT INTO orders(user_id,total_price,paid_status,order_status,date) VALUES(?,?,?,?,?)''',
                       new_orders)

        orders_id = cursor.lastrowid
        conn.commit()

        response = {
            'id': orders_id,
            'affected': conn.total_changes,
        }
        conn.close()
        return jsonify(response), 201


#get 1 orders, update and delete
@app.route('/api/orders/<int:id>',methods = ['GET', 'PUT', 'DELETE'])
def single_orders(id):

    conn = db_con()
    cursor = conn.cursor()

    if request.method == "GET":
        cursor.execute('SELECT * FROM orders WHERE id=?', (id,))
        row = cursor.fetchone()
        conn.close()

        if row:
            row_as_dict = get_orders_row(row)
            return jsonify(row_as_dict), 200
        else:
            return jsonify(None), 200

    if request.method == "PUT":
        if not request.json:
            abort(400)

        if 'id' not in request.json:
            abort(400)

        if int(request.json['id']) != id:
            abort(400)

        #retrieve the old orders to check existing
        old_orders = cursor.execute('SELECT * FROM orders WHERE id=?', (id,))
        row = old_orders.fetchone()
        orders_id = None
        if row:
            orders_id = row[0]

        update_orders = (
            request.json['user_id'],
            request.json['total_price'],
            request.json['paid_status'],
            request.json['order_status'],
            orders_id,
        )

        #update orders
        cursor.execute(''' UPDATE orders SET user_id=?, total_price=?, paid_status=?, order_status=? 
        WHERE id=?''', update_orders)
        conn.commit()

        response = {
        'id': id,
        'affected': conn.total_changes,
        }
        conn.close()
        return jsonify(response), 201


    if request.method == "DELETE":
        if not request.json:
            abort(400)

        if 'id' not in request.json:
            abort(400)

        if int(request.json['id']) != id:
            abort(400)

        #retrieve the old olders to check exsiting
        old_orders = cursor.execute('SELECT * FROM orders WHERE id=?', (id,))
        row = old_orders.fetchone()

        cursor.execute(''' DELETE FROM order_item WHERE order_id=?''', id)
        cursor.execute('DELETE FROM orders WHERE id=?', (id,))

        conn.commit()

        response = {
            'id':   id,
            'affected': conn.total_changes,
        }

        conn.close()
        return jsonify(response), 201


# manipulate order_item
# for get all order_item
@app.route('/api/order_item', methods=['GET','POST'])
def all_order_item():
    conn = db_con()
    cursor = conn.cursor()

    if request.method == 'GET':
        cursor.execute("SELECT * from order_item")

        rows = cursor.fetchall()
        conn.close()

        rows_as_dict = []
        for row in rows:
            row_as_dict = get_order_item_row(row)
            rows_as_dict.append(row_as_dict)

        return jsonify(rows_as_dict), 200

    if request.method == 'POST':
        if not request.json:
            abort(404)

        new_order_item = (
            request.json['order_id'],
            request.json['product_id'],
        )

        cursor.execute('''INSERT INTO order_item(order_id,product_id) VALUES(?,?)''', new_order_item)

        oder_item_id = cursor.lastrowid
        conn.commit()

        response = {
            'id':  oder_item_id,
            'affected': conn.total_changes,
        }
        conn.close()
        return jsonify(response), 201

#get 1 order_item, update and delete
@app.route('/api/order_item/<int:id>',methods = ['GET', 'PUT', 'DELETE'])
def single_order_item(id):
    conn = db_con()
    cursor = conn.cursor()

    if request.method == "GET":
        cursor.execute('SELECT * FROM order_item WHERE id=?', (id,))
        row = cursor.fetchone()
        conn.close()

        if row:
            row_as_dict = get_order_item_row(row)
            return jsonify(row_as_dict), 200
        else:
            return jsonify(None), 200

    if request.method == "PUT":
        if not request.json:
            abort(400)

        if 'id' not in request.json:
            abort(400)

        if int(request.json['id']) != id:
            abort(400)

        #retrieve the old order_item to check existing
        old_order_item = cursor.execute('SELECT * FROM order_item WHERE id=?', (id,))
        row = old_order_item.fetchone()
        order_item_id = None
        if row:
            order_item_id = row[0]

        update_order_item = (
            request.json['order_id'],
            request.json['product_id'],
            request.json['quantity'],
            order_item_id,
        )

        #update orders
        cursor.execute(''' UPDATE order_item SET order_id=?, product_id=?, quantity=?
        WHERE id=?''', update_order_item)
        conn.commit()

        response = {
        'id': id,
        'affected': conn.total_changes,
        }
        conn.close()
        return jsonify(response), 201


    if request.method == "DELETE":
        if not request.json:
            abort(400)

        if 'id' not in request.json:
            abort(400)

        if int(request.json['id']) != id:
            abort(400)

        #retrieve the old older_item to check exsiting
        old_order_item = cursor.execute('SELECT * FROM order_item WHERE id=?', (id,))
        row = old_order_item.fetchone()

        cursor.execute(''' DELETE FROM order_item WHERE id=?''', id)

        conn.commit()

        response = {
            'id':   id,
            'affected': conn.total_changes,
        }

        conn.close()
        return jsonify(response), 201


if __name__ == "__main__":
    parser = ArgumentParser()
    parser.add_argument('-p', '--port', default=5000, type=int, help='port to listen on')
    args = parser.parse_args()
    port = args.port

    app.run(host='0.0.0.0', port=port, debug=True)