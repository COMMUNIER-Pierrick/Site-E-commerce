INSERT INTO `category` SET category_name='Bagues';
INSERT INTO `category` SET category_name='Boucles d\'oreilles';
INSERT INTO `category` SET category_name='Bracelets';
INSERT INTO `category` SET category_name='Colliers';
INSERT INTO `category` SET category_name='Parrures';

INSERT INTO `subcategory` SET subcategory_name='Petites';
INSERT INTO `subcategory` SET subcategory_name='Moyennes';
INSERT INTO `subcategory` SET subcategory_name='Grandes';
INSERT INTO `subcategory` SET subcategory_name='Boucles d\'oreilles';
INSERT INTO `subcategory` SET subcategory_name='Boucles d\'oreilles créoles';
INSERT INTO `subcategory` SET subcategory_name='Clous d\'oreilles';
INSERT INTO `subcategory` SET subcategory_name='Bracelets ajustable';
INSERT INTO `subcategory` SET subcategory_name='Bracelets breloque / chaînette';
INSERT INTO `subcategory` SET subcategory_name='Bracelets cheville';
INSERT INTO `subcategory` SET subcategory_name='Bracelets cordon / cuir';
INSERT INTO `subcategory` SET subcategory_name='Bracelets élastique';
INSERT INTO `subcategory` SET subcategory_name='Bracelets perles';
INSERT INTO `subcategory` SET subcategory_name='Bracelets homme';
INSERT INTO `subcategory` SET subcategory_name='Colliers chaîne';
INSERT INTO `subcategory` SET subcategory_name='Colliers cordon';
INSERT INTO `subcategory` SET subcategory_name='Colliers médaillon photo';
INSERT INTO `subcategory` SET subcategory_name='Colliers ras de cou';
INSERT INTO `subcategory` SET subcategory_name='Colliers sautoir';
INSERT INTO `subcategory` SET subcategory_name='Ensemble bague / boucles d\'oreilles';
INSERT INTO `subcategory` SET subcategory_name='Ensemble bague / bracelet';
INSERT INTO `subcategory` SET subcategory_name='Ensemble bague / boucles d\'oreilles / bracelet / collier';
INSERT INTO `subcategory` SET subcategory_name='Ensemble bracelet / collier';
INSERT INTO `subcategory` SET subcategory_name='Ensemble boucles d\'oreilles / bracelet';
INSERT INTO `subcategory` SET subcategory_name='Ensemble boucles d\'oreilles / collier';

INSERT INTO `status` SET status_name='Payement Accepté';
INSERT INTO `status` SET status_name='En cours';
INSERT INTO `status` SET status_name='Terminé';
INSERT INTO `status` SET status_name='Envoyé';
INSERT INTO `status` SET status_name='Reçu';

INSERT INTO `address` SET number=31, street='rue du cheval', additional_address='', zipcode='84200', city='Carpentras', country='France';
INSERT INTO `address` SET number=65, street='rue des moulins', additional_address='2ème étage', zipcode='23500', city='Poussanges', country='France';
INSERT INTO `address` SET number=44, street='rue du chat', additional_address='', zipcode='42300', city='Mably', country='France';
INSERT INTO `address` SET number=11, street='rue de la paix', additional_address='', zipcode='06500', city='Castillon', country='France';
INSERT INTO `address` SET number=9, street='rue des roses', additional_address='5ème étage', zipcode='16100', city='Saint-Brice', country='France';
INSERT INTO `address` SET number=2, street='rue de la loupe', additional_address='', zipcode='62600', city='Groffiers', country='France';

INSERT INTO `payment` SET card_name='', card_number='', card_expired_date='';
INSERT INTO `payment` SET card_name='Jean Dujardin', card_number='5632153652638652', card_expired_date='2025-10-15T00:00:00';
INSERT INTO `payment` SET card_name='Marion Cotillard', card_number='7532641232597854', card_expired_date='2027-02-28T00:00:00';
INSERT INTO `payment` SET card_name='', card_number='', card_expired_date='';
INSERT INTO `payment` SET card_name='Avril Lavigne', card_number='9645236896411597', card_expired_date='2024-07-04T00:00:00';
INSERT INTO `payment` SET card_name='', card_number='', card_expired_date='';

INSERT INTO `user` SET firstname='Jean', lastname='Dujardin', password='test', email='Dujardin@gmail.com', phone='0683942366', active='1', admin='0', profile_img='no_picture.jpg', id_payment=2, id_address=3;
INSERT INTO `user` SET firstname='Marion', lastname='Cotillard', password='test', email='Cotillard@gmail.com', phone='', active='1', admin='0', profile_img='no_picture.jpg', id_payment=3, id_address=6;
INSERT INTO `user` SET firstname='Avril', lastname='Lavigne', password='test', email='Lavigne@gmail.com', phone='0687559314', active='1', admin='1', profile_img='no_picture.jpg', id_payment=5, id_address=1;
INSERT INTO `user` SET firstname='Brad', lastname='Pitt', password='test', email='Pitt@gmail.com', phone='', active='1', admin='0', profile_img='no_picture.jpg', id_payment=1, id_address=5;
INSERT INTO `user` SET firstname='Margot', lastname='Robbie', password='test', email='Robbie@gmail.com', phone='0232864192', active='1', admin='0', profile_img='no_picture.jpg', id_payment=6, id_address=2;
INSERT INTO `user` SET firstname='George', lastname='Clooney', password='test', email='Clooney@gmail.com', phone='', active='1', admin='0', profile_img='no_picture.jpg', id_payment=4, id_address=4;

INSERT INTO `product` SET product_name='Bague rose', id_category=1, id_subcategory=2, price=5, product_img='no_picture.png', description_product='', stock=4, date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Bague bleue', id_category=1, id_subcategory=1, price=3, product_img='no_picture.png', description_product='', stock=2, date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Boucles d\'oreilles plume noir', id_category=2, id_subcategory=4, price=6, product_img='no_picture.png', stock=7, description_product='', date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Boucles d\'oreilles plume vert', id_category=2, id_subcategory=4, price=6, product_img='no_picture.png', stock=4, description_product='', date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Boucles d\'oreilles plume violet', id_category=2, id_subcategory=4, price=6, product_img='no_picture.png', stock=3, description_product='', date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Bracelet noir', id_category=3, id_subcategory=7, price=4, product_img='no_picture.png', description_product='', stock=1, date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Bracelet gris', id_category=3, id_subcategory=13, price=6, product_img='no_picture.png', description_product='', stock=12, date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Bracelet rose', id_category=3, id_subcategory=9, price=5, product_img='no_picture.png', description_product='', stock=8, date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Collier bleue', id_category=4, id_subcategory=14, price=10, product_img='no_picture.png', description_product='', stock=4, date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Collier rouge', id_category=4, id_subcategory=15, price=7, product_img='no_picture.png', description_product='', stock=6, date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Collier jaune', id_category=4, id_subcategory=16, price=8, product_img='no_picture.png', description_product='', stock=4, date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Parrure turquoise', id_category=5, id_subcategory=19, price=17, product_img='no_picture.png', description_product='', stock=1, date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Parrure blanche', id_category=5, id_subcategory=20, price=15, product_img='no_picture.png', description_product='', stock=9, date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Parrure Multicolore', id_category=5, id_subcategory=22, price=22, product_img='no_picture.png', description_product='', stock=12, date_created='2022-10-15T00:00:00';
INSERT INTO `product` SET product_name='Parrure orange', id_category=5, id_subcategory=24, price=12, product_img='no_picture.png', description_product='', stock=6, date_created='2022-10-15T00:00:00';

INSERT INTO `basket` SET id_user=1, id_product=3, date_basket='2022-10-15T00:00:00';
INSERT INTO `basket` SET id_user=4, id_product=11, date_basket='2022-02-27T00:00:00';
INSERT INTO `basket` SET id_user=2, id_product=7, date_basket='2022-07-11T00:00:00';

INSERT INTO `order` SET id_status=1, id_basket=2, date_order='2022-02-27T00:00:00';
INSERT INTO `order` SET id_status=3, id_basket=3, date_order='2022-07-11T00:00:00';