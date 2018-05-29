\c nudistguise_db;

INSERT INTO users (username, email, pw_digest)
VALUES ('test', 'test@ga.co', 'test' );

INSERT INTO categories (category)
VALUES
('Jackets'),
('Shirts'),
('T-shirts'),
('Denim'),
('Pants'),
('Sneakers'),
('Shoes'),
('Eyewear'),
('Bags'),
('Hats');

INSERT INTO products (brand, brief_description, detailed_description, img_url, price, stock, category_id, users_id)
VALUES
('Maison Margiela', 'Maison Margiela Replica Sneaker Size 43', 'Sneakers from Maison Margiela. Leather upper with suede overlays on the toe box, sides and heel. Padded tongue with branded suede patch. Elastic tongue fastening on the inside. Flat laces. Padded collar. Signature heel stitch. Dust bags included.', '../img/product_img.jpg', 385, 4, 6, null),
('Stone Island', 'Stone Island Tela GD Overshirt Lavender Size XL', 'Jacket from Stone Island. Spread collar. Two-way zip closure on the front. Two chest pockets. Removable logo patch on the left sleeve. Snap buttoned cuffs. Straight hem.', '../img/product_img.jpg', 310, 4, 1, null),
('Issey Miyake', 'Homme Plissé Issey Miyake Pleated T-Shirt Black Size XL', 'T-shirt from Homme Plissé Issey Miyake. Wide round-neck, short sleeves and a straight hem. Pleated throughout.', '../img/product_img.jpg', 260, 4, 3, null),
('JW ANDERSON', 'JW ANDERSON HEART STRIPE SHIRT SCARLET SIZE XL', 'Shirt from JW Anderson. Spread collar. Front button closure. All-over heart print. Back yoke. Buttoned cuffs. Curved hem. Narrow fit.', '../img/product_img.jpg', 525, 4, 2, null),
('A.P.C.', 'A.P.C. NEW STANDARD RAW JEANS INDIGO SIZE 32', 'Jeans from A.P.C. Five pocket style. Button fly and closure. Belt loops at the waist. Straight leg. Mid rise. Contrasting top stitching. Metal hardware on the front.', '../img/product_img.jpg', 210, 4, 4, null),
('Needles', 'Needles Track Pants Purple SIZE L', 'Track pants from Needles with pin tucked legs and contrasting striped ribbons on the sides. Elastic waistband with drawstrings. Two zippered pockets and a butterlfy embroidery on the front and a single zippered pocket on the back.', '../img/product_img.jpg', 390, 4, 5, null),
('Dries Van Noten', 'Dries Van Noten Half Boots Black Size 43', 'Boots from Dries Van Noten. Buffed leather upper. Elastic inserts on the sides. Leather pull tab on the heel. Tonal stitching throughout. Storm welt. Dust bag included.', '../img/product_img.jpg', 385, 4, 7, null),
('Acne Studios', 'Acne Studios Scientist Sunglasses Black Satin', 'Sunglasses from Acne Studios. Round shaped and thin frame with silver toned metal nose pads and black lenses. Engraved logo on one temple. Comes in a cardboard sliding box with a branded leather case and cleaning cloth.', '../img/product_img.jpg', 360, 4, 8, null),
('Engineered Garments', 'Engineered Garments Shoulder Pouch Bag Kelly Green', 'Pouch bag from Engineered Garments. Made from nylon canvas. A nylon shoulder strap with pleated details on one side. Flapped closure with snap buttons. A contrasting branded textile label on the front underneath the flap.', '../img/product_img.jpg', 70, 4, 9, null),
('Junya Watanabe', 'Junya Watanabe MAN Canvas Cap Red OS', 'Cap from Junya Watanabe MAN. Made from cotton canvas. Six panel style. Embroidered ventholes on all panels. Adjustable strap-back with metal clasp. Pre-bent brim.', '../img/product_img.jpg', 215, 4, 10, null);



