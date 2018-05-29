DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS cart CASCADE;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
pw_digest VARCHAR(255)
);

CREATE TABLE categories (
id SERIAL PRIMARY KEY,
category VARCHAR(255)
);

CREATE TABLE products (
id SERIAL PRIMARY KEY,
brand VARCHAR(255) NOT NULL,
brief_description VARCHAR(255),
detailed_description VARCHAR(255),
size_clothing VARCHAR(255),
size_num INT,
img_url VARCHAR(255),
price INT NOT NULL,
stock INT,
category_id INT REFERENCES categories(id),
user_id INT REFERENCES users(id)
);

CREATE TABLE cart (
id SERIAL PRIMARY KEY,
quantity INT,
user_id INT REFERENCES users(id),
product_id INT REFERENCES products(id)
);
