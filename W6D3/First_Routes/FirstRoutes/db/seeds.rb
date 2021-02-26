# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ArtworkShare.destroy_all
User.destroy_all
Artwork.destroy_all



user1 = User.create(username: "bobtheartist")
user2 = User.create(username: "imabeginner")
user3 = User.create(username: "justfortheviews")
user4 = User.create(username: "bestartist")
user5 = User.create(username: "imawizard")

art1 = Artwork.create(title: "Michigan Lake", image_url: "mypics.com/landscapes", artist_id: user1.id)
art2 = Artwork.create(title: "SB Sunset", image_url: "mypics.com/sunsets", artist_id: user4.id)
art3 = Artwork.create(title: "Beach Sunset", image_url: "mypics.com/sunsets", artist_id: user4.id)
art4 = Artwork.create(title: "Cartoonify", image_url: "google-pictues.com/cartoon", artist_id: user2.id)
art5 = Artwork.create(title: "Hedwig Self Portrait", image_url: "hogwarts-facebook.com/hedwig", artist_id: user5.id)

view1 = ArtworkShare.create(viewer_id: user3.id, artwork_id: art1.id)
view2 = ArtworkShare.create(viewer_id: user3.id, artwork_id: art2.id)
view3 = ArtworkShare.create(viewer_id: user3.id, artwork_id: art3.id)
view4 = ArtworkShare.create(viewer_id: user1.id, artwork_id: art4.id)
view5 = ArtworkShare.create(viewer_id: user2.id, artwork_id: art3.id)
view5 = ArtworkShare.create(viewer_id: user2.id, artwork_id: art4.id)
view6 = ArtworkShare.create(viewer_id: user5.id, artwork_id: art3.id)
