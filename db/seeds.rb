# User.destroy_all
# Order.destroy_all
# Product.destroy_all
# Cart.destroy_all
# require "pry"
# require "faker"

# response = Unirest.get "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?sponsored=1&offset=0&store_id=3991&keyword=lamp",
#   headers:{
#     "X-RapidAPI-Host" => "target-com-store-product-reviews-locations-data.p.rapidapi.com",
#     "X-RapidAPI-Key" => "31c5440035mshf5daeac1b76e139p1eb9b1jsn956d499e0482"
#   }


# products = response.body["products"]
# # image ="#{products[0]["images"][0]["base_url"]}" + "#{products[0]["images"][0]["primary"]}"


# 10.times do 
#     User.create({username: Faker::Name.first_name,password:"123",address: Faker::Address.full_address,email: Faker::Internet.email})
# end

# products.each{|p| Product.create({title: p["title"],description: p["description"],price: p["price"]["current_retail_max"],image:"#{p["images"][0]["base_url"]}" + "#{p["images"][0]["primary"]}"})}


# 50.times do 
#     Cart.create({user_id: User.all.sample.id})
# end


# 100.times do
#     Order.create({product_id: Product.all.sample.id ,cart_id: Cart.all.sample.id})
# end

require "pry"
require "faker"

# Create 10 fake products

  Product.create(
    title: "MacBook Pro",
    description: "Apple M2 Pro with 10‑core CPU, 16‑core GPU, 16‑core Neural Engine
    16GB unified memory
    512GB SSD storage
    67W USB-C Power Adapter
    14-inch Liquid Retina XDR display²
    Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port
    Backlit Magic Keyboard with Touch ID - US English",
    price: 1999.99,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-gallery1-202301?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1670621031697",
    image1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-gallery2-202301?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1671149392013",
    image2: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-gallery4-202301?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1670621014545",
    image3: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-gallery6-202301?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1670621030352"
  )
  Product.create(
    title: "Gibson Electric Guitar (with Case)",
    description: "The Gibson Les Paul Standard returns to the classic design that made it relevant, played and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50's has a solid mahogany body with a maple top, a rounded 50's-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic bridge, aluminum stop bar tailpiece, vintage deluxe tuners with keystone buttons, and amber top hat knobs. The calibrated Burstbucker 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with AlNiCo II magnets, audio taper potentiometers and orange drop capacitors.",
    price: 2999.99,
    image: "https://media.sweetwater.com/api/i/q-82__f-webp__ha-f5fa1ae6c7bb2d2a__hmac-afd233eecb451f5cb2c0fd5e675aea1901157fa0/images/guitars/LPS5TONH/204130207/204130207-front-large.jpg.auto.webp",
    image1: "https://media.sweetwater.com/api/i/q-82__f-webp__ha-fb9f47a10fc2eafd__hmac-8c21cd21eaf6d1d070260b3abc2fd2d18b72f5ee/images/guitars/LPS5TONH/204130207/204130207-body-large.jpg.auto.webp",
    image2: "https://media.sweetwater.com/api/i/q-82__f-webp__ha-6aa44228071698ed__hmac-59a63055bc5d6dce492abd428db6593cb24a5883/images/guitars/LPS5TONH/204130207/204130207-detail1-large.jpg.auto.webp",
    image3: "https://media.sweetwater.com/api/i/q-82__f-webp__ha-784c9ecb8de9a94f__hmac-d39d7858483bc1ccb21653e1d178d42801b912c3/images/guitars/LPS5TONH/204130207/204130207-detail2-large.jpg.auto.webp"
  )
  Product.create(
    title: "Children Bicycle",
    description: "COEWSKE Kid's Bike Steel Frame Children Bicycle Little Princess Style 12-14-16-18-20 Inch with Training Wheel",
    price: 145.99,
    image: "https://i5.walmartimages.com/asr/1573bb40-a829-44cf-8920-25d3540f3599.fe72d87936640dfc36897c65c54943b7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    image1: "https://i5.walmartimages.com/asr/c89430b8-9c8f-40e1-9124-720ce90cab79_1.b1aece477e3a35d51e96625e50888b06.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    image2: "https://i5.walmartimages.com/asr/68c6045f-fb0b-4276-a47f-1560a57130d2.c6650f6827f8a61abfea666c44669e65.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    image3: "https://i5.walmartimages.com/asr/7235a6a3-13d2-483e-bc63-a3f790f22017.047c34142a67a812266576ec2b6aae4e.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
  )
  Product.create(
    title: "Artificial Palm Plant",
    description: "48"" Faux Fan Fiddle Fig Tree. Planning to redecorate? The Fan Fiddle plant, also known as a Vanuatu Fan is native to the Vanuatu islands, off the coast of Australia. Get this Australian beaut as part of your living room décor. The distinct fan-shaped leaves of our faux plant will be a breathtaking sight no matter where you place them. Hard to miss, easy to maintain!",
    price: 45.99,
    image: "https://secure.img1-cg.wfcdn.com/im/81506555/resize-h445%5Ecompr-r85/2189/218992969/48%27%27+Artificial+Palm+Plant+in+Pot.jpg",
    image1: "https://secure.img1-cg.wfcdn.com/im/47357038/resize-h445%5Ecompr-r85/2189/218992971/48%27%27+Artificial+Palm+Plant+in+Pot.jpg",
    image2: "https://secure.img1-cg.wfcdn.com/im/97116217/resize-h445%5Ecompr-r85/2303/230356752/48%27%27+Artificial+Palm+Plant+in+Pot.jpg",
    image3: "https://secure.img1-cg.wfcdn.com/im/36006125/resize-h445%5Ecompr-r85/2189/218992972/48%27%27+Artificial+Palm+Plant+in+Pot.jpg"
  )
  Product.create(
    title: "Faux Foliage Plant",
    description: "Bring the beauty of nature into your home or office with artificial foliage - the perfect way to add a touch of natural beauty to any room of your home or office. This stunning artificial foliage features lush green leaves and a realistic design that's sure to impress. Crafted with attention to detail, this artificial foliage features intricate textures and vibrant coloration that mimic the look and feel of real foliage. With its realistic appearance, it's perfect for enhancing the decor of your living room, bedroom, or office. Whether you're looking to create a relaxing atmosphere or simply add a touch of natural beauty to your space, this artificial foliage in a decorative pot is a perfect choice.",
    price: 51.99,
    image: "https://secure.img1-cg.wfcdn.com/im/61641681/resize-h755-w755%5Ecompr-r85/1966/196692568/42.2%27%27+Faux+Foliage+Plant+in+Pot.jpg",
    image1: "https://secure.img1-cg.wfcdn.com/im/41088224/resize-h755-w755%5Ecompr-r85/1940/194015197/42.2%27%27+Faux+Foliage+Plant+in+Pot.jpg",
    image2: "https://secure.img1-cg.wfcdn.com/im/81614548/resize-h755-w755%5Ecompr-r85/1966/196693706/42.2%27%27+Faux+Foliage+Plant+in+Pot.jpg",
    image3: "https://secure.img1-cg.wfcdn.com/im/36078771/resize-h755-w755%5Ecompr-r85/1966/196692698/42.2%27%27+Faux+Foliage+Plant+in+Pot.jpg"
  )
  Product.create(
    title: "Legion 7i Gen 7 Intel (16"") with RTX 3070 Ti",
    description: "Processor:
    12th Generation Intel® Core™ i7-12800HX Processor (E-cores up to 3.40 GHz P-cores up to 4.80 GHz)
    
    Operating System:
    Windows 11 Home 64
    
    Graphic Card:
    NVIDIA® GeForce RTX™ 3070 Ti Laptop GPU 8GB GDDR6
    
    Memory:
    32 GB DDR5-4800MHz (SODIMM) (2 x 16 GB)
    
    Storage:
    2 TB SSD M.2 2280 PCIe Gen4 TLC
    
    Display:
    16"" WQXGA (2560 x 1600), IPS, Anti-Glare, Non-Touch, HDR400, 100%sRGB, 500 nits, 165Hz, LED Backlight, Narrow Bezel, Low Blue Light
    
    Camera:
    1080P FHD Camera with Electronic Privacy Shutter with Array Microphone
    
    Fingerprint Reader:
    Fingerprint Reader
    
    Keyboard:
    RGB Backlit, Storm Grey - English (US)
    
    WLAN:
    WiFi 6E 2x2 AX & Bluetooth® 5.1 or above
    
    Warranty:
    One Year Legion Ultimate Support
    
    Add-ons:
    3 Month Xbox Game Pass",
    price: 2234.99,
    image: "https://p1-ofp.static.pub/medias/24329529541_Legion716IAX7_202203181028501666315036314.png",
    image1: "https://p2-ofp.static.pub/fes/cms/2022/04/19/0erppo1v6um7ze4tuc4bp5be9gunx8149979.png",
    image2: "https://p2-ofp.static.pub/fes/cms/2022/04/19/u9f0kg6l3q8rrqjcobs3ftku8681cd587071.png",
    image3: "https://p3-ofp.static.pub/fes/cms/2022/04/19/ri4xju49r78gsphqjhil3gcscmuaob280250.png"
  )
  Product.create(
    title: "Neoprene Legging",
    description: "Our Neoprene fabric has incredibly high stretch and recovery. Combined with a cushiony fabric weight, these pieces can truly mold to the body, for a form-fitting and ultra-flattering look. As a high-gauge fabric, our Neoprene boasts raw-cut edges that lay perfectly flat against the body.",
    price: 138.00,
    image: "https://cdn.shopify.com/s/files/1/0073/9812/products/NEO201_BLK.jpg?v=1663001000",
    image1: "https://cdn.shopify.com/s/files/1/0073/9812/products/NEO201_BLK_0003.jpg?v=1663001000",
    image2: "https://cdn.shopify.com/s/files/1/0073/9812/products/NEO201_BLK_0045.jpg?v=1663001000",
    image3: "https://cdn.shopify.com/s/files/1/0073/9812/products/NEO201_BLK_LS_ALL.jpg?v=1669127902"
  )
  Product.create(
    title: "Louis Vuitton Blue Hamptons ",
    description: "This Hamptons destination ""By The Pool"" OnTheGo tote is of blue coated canvas and raffia with polished brass hardware and features giant monogram print, gradient print, removable seashell charm, raffia sides, vachetta leather top handles, trim and hidden interior shoulder straps with polished gold tone hardware and hidden top hook closure.
    The interior is lined in cream fabric and has a single zipper close pocket and two slip pockets.",
    price: 4250.00,
    image: "https://cdn.shopify.com/s/files/1/0775/7363/products/LV-081021-1-4.jpg?v=1629144536",
    image1: "https://cdn.shopify.com/s/files/1/0775/7363/products/LV-081021-1-2.jpg?v=1629144634",
    image2: "https://cdn.shopify.com/s/files/1/0775/7363/products/LV-081021-1-3.jpg?v=1629144626",
    image3: "https://cdn.shopify.com/s/files/1/0775/7363/products/LV-081021-1-7.jpg?v=1629144518"
  )
  Product.create(
    title: "Assorted Chocolate Gold Gift Box",
    description: "A luxury chocolate gift for savoring and sharing: our magnificent 70-piece Gold Gift Box filled with an exciting assortment of Belgian chocolates. Looking for a gift idea that will make a lasting impression? Our gorgeous Gold Gift Box filled with 70 pieces of assorted gourmet chocolates is a gift that delivers. Made from the finest ingredients in our world-famous Belgian traditions, this assorted chocolate box offers an extraordinary chocolate experience. We've included creamy milk chocolates, rich dark chocolates, and heavenly white chocolates with classic fillings like smooth ganaches, luscious pralinés, creamy caramels and more sensational chocolate flavors.",
    price: 115.00,
    image: "https://www.godiva.com/dw/image/v2/AAKG_PRD/on/demandware.static/-/Sites-godiva-master-catalog-us/default/dwbedb3abb/product_images/13962-1.jpg",
    image1: "https://www.godiva.com/dw/image/v2/AAKG_PRD/on/demandware.static/-/Sites-godiva-master-catalog-us/default/dw0f847c9d/product_images/13962-2.jpg",
    image2: "https://www.godiva.com/dw/image/v2/AAKG_PRD/on/demandware.static/-/Sites-godiva-master-catalog-us/default/dw76683b11/product_images/13962-3.jpg",
    image3: "https://www.godiva.com/dw/image/v2/AAKG_PRD/on/demandware.static/-/Sites-godiva-master-catalog-us/default/dwe923c039/13962-n1.jpg"
  )
  Product.create(
    title: "2 Seater 24 Volt 4x4 Electric Ride On Jeep",
    description: "You have found the most powerful 24 volt ride on truck with true 4 wheel drive! Make sure to watch the videos to see real world truck action driving uphill, over rocks, dirt, snow, mud,pavement,farms, estates, and more thanks to the (4) 24 volt motors and included all weather rubber tires. No other vehicle can compare in power and style. Buy today and receive your custom printed license plate for free! Shipments takes 2-7 days to arrive to your door depending on location in the USA. Or choose local pickup at checkout if you are in California. If you’ve been looking for the ultimate 24 volt 2 seater ride on power machine for your child, Magic Cars® has what you’ve been waiting for!",
    price: 899.00,
    image: "https://cdn.shopify.com/s/files/1/2245/9711/products/pinkrideon_800x.png?v=1658890944",
    image1: "https://cdn.shopify.com/s/files/1/2245/9711/products/pinkcarforgirls_800x.jpg?v=1658890944",
    image2: "https://cdn.shopify.com/s/files/1/2245/9711/products/red_2_seater_ride_on_car_7210_800x.jpg?v=1658890944",
    image3: "https://cdn.shopify.com/s/files/1/2245/9711/products/pink2seaterrideoncar_800x.jpg?v=1658890944"
  )


# Create 10 fake users
# 10.times do 
#   User.create(
#     username: Faker::Name.first_name,
#     password: "123",
#     address: Faker::Address.full_address,
#     email: Faker::Internet.email
#   )
# end

# Create 50 fake carts
# 50.times do 
#   Cart.create(user_id: User.all.sample.id)
# end

# Create 100 fake orders
# 100.times do
#   Order.create(
#     product_id: Product.all.sample.id,
#     cart_id: Cart.all.sample.id
#   )
# end