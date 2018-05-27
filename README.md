## User-Story
NUDISTGUISE is an online streetwear and luxury good's store embodying Dieter Rams philosophy of less but better. The user will find a small range of goods for sale from niched designers, artists and artisans... Users will have the ability to view all product listings, click on a single item and find a detailed description and the ability to add to cart. Once an item is added to cart, you have the option to continue shopping or go to checkout. Goal is implement

### Landing Page:
![wireframe](./img/nudistguise-landing-page.jpg)
### View All Items:
![wireframe](./img/nudistguise-view-all.jpg)
### View Single Item:
![wireframe](./img/nudistguise-view-one.jpg)
### Checkout:
![wireframe](./img/nudistguise-checkout.jpg)

## DB Schema

### TABLE NAME: Users
| Column Name | Data Type |
| -- | :---: |
| id | SERIAL PRIMARY KEY |
| username | VARCHAR(255) NOT NULL |
| email | VARCHAR(255) NOT NULL |
| pw_digest | VARCHAR(255)

### TABLE NAME: Categories
| Column Name | Data Type |
| -- | :---: |
| id | SERIAL PRIMARY KEY |
| category | VARCHAR(255) |

### TABLE NAME: Product
| Column Name | Data Type |
| -- | :---: |
| id | SERIAL PRIMARY KEY |
| brand | VARCHAR(255) NOT NULL |
| brief_description | VARCHAR(255) NOT NULL |
| detailed_description | VARCHAR(255) NOT NULL |
| img_url | VARCHAR(255) |
| price | INT NOT NULL |
| stock | INT |
| category_id | INT REFERENCES categories(id) |
| user_id | INT REFERENCES users(id) |

### TABLE NAME: Cart
| Column Name | Data Type |
| -- | :---: |
| id | SERIAL PRIMARY KEY |
| quantity | INT |
| user_id | INT REFERENCES users(id) |
| product_id | INT REFERENCES products(id) |
