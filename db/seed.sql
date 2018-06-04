INSERT INTO users (email, pw_digest, username)
VALUES ('test@ga.co', 'test', 'test');

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

INSERT INTO products (brand, brief_description, detailed_description, img_url, price, category_id, user_id, size_clothing, size_num, stock)
VALUES
('Maison Margiela', 'Maison Margiela Replica Sneaker', 'Sneakers from Maison Margiela. Leather upper with suede overlays on the toe box, sides and heel. Padded tongue with branded suede patch. Elastic tongue fastening on the inside. Flat laces. Padded collar. Signature heel stitch. Dust bags included.', 'https://tres-bien.com/media/catalog/product/cache/0e9ebeff767cd302d4d561381209dce2/s/o/souvenir_180529_008.jpg', 385, 6, null, null, 43, 2),
('Stone Island', 'Stone Island Tela GD Overshirt Lavender', 'Jacket from Stone Island. Spread collar. Two-way zip closure on the front. Two chest pockets. Removable logo patch on the left sleeve. Snap buttoned cuffs. Straight hem.', 'https://tres-bien.com/media/catalog/product/cache/0e9ebeff767cd302d4d561381209dce2/s/o/souvenir_180529_008.jpg', 310, 1, null, 'XL', null, 2),
('Issey Miyake', 'Homme Plissé Issey Miyake Pleated T-Shirt Black', 'T-shirt from Homme Plissé Issey Miyake. Wide round-neck, short sleeves and a straight hem. Pleated throughout.', 'https://tres-bien.com/media/catalog/product/cache/0e9ebeff767cd302d4d561381209dce2/s/o/souvenir_180529_008.jpg', 260, 3, null, 'XL', null, 2),
('JW ANDERSON', 'JW ANDERSON HEART STRIPE SHIRT SCARLET', 'Shirt from JW Anderson. Spread collar. Front button closure. All-over heart print. Back yoke. Buttoned cuffs. Curved hem. Narrow fit.', 'https://tres-bien.com/media/catalog/product/cache/0e9ebeff767cd302d4d561381209dce2/s/o/souvenir_180529_008.jpg', 525, 2, null, 'XL', null, 2),
('A.P.C.', 'A.P.C. NEW STANDARD RAW JEANS INDIGO', 'Jeans from A.P.C. Five pocket style. Button fly and closure. Belt loops at the waist. Straight leg. Mid rise. Contrasting top stitching. Metal hardware on the front.', 'https://tres-bien.com/media/catalog/product/cache/0e9ebeff767cd302d4d561381209dce2/s/o/souvenir_180529_008.jpg', 210, 4, null, null, 32, 2),
('Needles', 'Needles Track Pants Purple', 'Track pants from Needles with pin tucked legs and contrasting striped ribbons on the sides. Elastic waistband with drawstrings. Two zippered pockets and a butterlfy embroidery on the front and a single zippered pocket on the back.', 'https://tres-bien.com/media/catalog/product/cache/0e9ebeff767cd302d4d561381209dce2/s/o/souvenir_180529_008.jpg', 390, 5, null, 'L', null, 2),
('Dries Van Noten', 'Dries Van Noten Half Boots Black', 'Boots from Dries Van Noten. Buffed leather upper. Elastic inserts on the sides. Leather pull tab on the heel. Tonal stitching throughout. Storm welt. Dust bag included.', 'https://tres-bien.com/media/catalog/product/cache/0e9ebeff767cd302d4d561381209dce2/s/o/souvenir_180529_008.jpg', 385, 7, null, null, 43, 2),
('Acne Studios', 'Acne Studios Scientist Sunglasses Black Satin', 'Sunglasses from Acne Studios. Round shaped and thin frame with silver toned metal nose pads and black lenses. Engraved logo on one temple. Comes in a cardboard sliding box with a branded leather case and cleaning cloth.', 'https://tres-bien.com/media/catalog/product/cache/0e9ebeff767cd302d4d561381209dce2/s/o/souvenir_180529_008.jpg', 360, 8, null, null, null, 2),
('Engineered Garments', 'Engineered Garments Shoulder Pouch Bag Kelly Green', 'Pouch bag from Engineered Garments. Made from nylon canvas. A nylon shoulder strap with pleated details on one side. Flapped closure with snap buttons. A contrasting branded textile label on the front underneath the flap.', 'https://tres-bien.com/media/catalog/product/cache/0e9ebeff767cd302d4d561381209dce2/s/o/souvenir_180529_008.jpg', 70, 9, null, null, null, 2),
('Junya Watanabe', 'Junya Watanabe MAN Canvas Cap Red OS', 'Cap from Junya Watanabe MAN. Made from cotton canvas. Six panel style. Embroidered ventholes on all panels. Adjustable strap-back with metal clasp. Pre-bent brim.', 'https://tres-bien.com/media/catalog/product/cache/0e9ebeff767cd302d4d561381209dce2/s/o/souvenir_180529_008.jpg', 215, 10, null, null, null, 2);



