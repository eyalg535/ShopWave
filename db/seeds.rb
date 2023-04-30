require 'faker'

10.times do
  Product.create(
    name: Faker::Commerce.product_name,
    price: Faker::Commerce.price(range: 0..100.0),
    quantity: Faker::Number.between(from: 1, to: 100),
    description: Faker::Lorem.paragraph(sentence_count: 2),
    rate: Faker::Number.between(from: 1, to: 5),
    image: "https://loremflickr.com/#{rand(150..200)}/#{rand(150..200)}/all",
    category: Faker::Commerce.department(max: 1)
  )
end
