{
  entities:{
    users:{
      1: {
        id: 1,
        email: "imawizard@hogwarts.com",
        firstName: "Harry",
        lastName: "Potter"
      }
      45: {
        id: 45,
        email: "john@gmail.com",
        firstName: "John",
        lastName: "Wick"
      }
      50: {
        id: 50,
        email: "lisa@yahoo.com",
        firstName: "Lisa",
        lastName: "Simpson"
      }
      31: {
        id: 31,
        email: "sofia@gmail.com",
        firstName: "Sofia",
        lastName: "Vergara"
      }
    }

    places:{
      5:{
        id: 5,
        title: "Sunny Apartment Near Beach",
        typeOfPlace: "Entire Place",
        maxGuests: 4,
        numOfBedrooms: 2,
        numOfBathrooms: 2,
        numOfBeds: 3,
        about: "If you are visiting from out of state please review travel restrictions prior to booking. We are set up for working from home, and social distancing all while enjoying the Hawaii sun!"
          "Spacious private apartment with a full kitchen. Pool and Patio areas are very private from the street and neighbors. "
          "The small garden area in the back is enclosed and private for you to enjoy the garden how ever you like to! Ample street parking available for free."
          "Walking distance to Kahala beach and a short drive or uber ride to nearby to Waikiki.",
        nearbyAttractions: "Waikiki, Ala Moana Shopping Center, Diamond Head, Kahala Mall, Kahala Hotel, Kahala Beach, Hulas Bar and Lei Stand, Wang Chung's Karaoke Bar, Baccus, InBetween, Scarlet.",
        rules:"Please no smoking and no pets.",
        pricePerDay: 150,
        cancellationPolicy: "Flexible: Full refund up to 7 days prior to check-in if booked with prepayment at least 10 days before check-in."
          "Full refund excludes cancellation fee if booking paid upfront or if booked 9 days or less before check-in and cancelled more than 7 days prior to check-in."
          "If cancellation between 6 and 1 day prior to checkin, 50% refund (excluding cancellation fee). No refund if guests interrupt their stay. The cancellation insurance fee is non refundable.",
        checkInFrom: "from 1pm to 9pm",
        checkOutBefore: "10am",
        ownerId: 45
      }
      25:{
        id: 25,
        title: "Bright 1 BR in Weho",
        typeOfPlace: "Private room",
        maxGuests: 2,
        numOfBedrooms: 1,
        numOfBathrooms: 1,
        numOfBeds: 1,
          about: "The apartment is a lovely private apartment in a small building near the vibrant street of Santa Monica Blvd.Apartment is approximately 1000 sq.ft.Living room dining room combo, full use galley - style kitchen, private bathroom and"
          "balcony at your disposal should you need.The bedroom is comprised of an upgraded memory foam queen size bed, large closet, dresser, desk, storage, linens, towels etc.The bathroom is spacious and available directly adjacent to the room with a split"
          "floor plan for privacy.Extra storage is available if needed fan provided, a / c available per request and full use of the closets in the bedroom.There is complimentary coffee, tea, water and snacks available as your desire no additional charge.Make yourself at home.",
        nearbyAttractions: "",
          rules: "Rules are pretty standard, respect the space and keep it presentable and clean.",
        pricePerDay: 89,
          cancellationPolicy: "Strict cancellation policy means: 70% refund up to 14 days before confirmed arrival date, then 30% up to 1 day prior to the confirmed check-in date. In both cases, the refund excludes misterb&b service fee paid by the guest and by the host. "
          "If the stay is interrupted, the guest will have no right to receive a refund.",
        checkInFrom: "from 3pm to 11pm",
        checkOutBefore: "11am",
        ownerId: 6
      }
    }

    bookings:{
      6:{
        id: 6,
        travelerId: 50,
        placeId: 5,
        startStay: 2021-02-15,
        endStay: 2021-02-20
      }
      11:{
        id: 11,
        travelerId: 1,
        placeId: 25,
        startStay: 2021-01-10,
        endStay: 2021-01-22
      }
    }

    reviews:{
      3:{
        id: 3,
        body: "I had a wonderful stay. The apartment is clean and the host was very responsive to our messages. This place is close to the beach and restaurants.",
        authorId: 1,
        placeId: 25
      }
    }
  },
  session: {
    currentUserId: 50
  },

  errors:{
    login: ["Incorrect username/password combination"],
    signUp: ["Password can't be blank", "Email can't be blank"],
    placesForm: ["Login required to submit a place","Title can't be blank", "Location can't be blank", "Type of Place can't be blank", "Number of Guests must be greater than zero", "Number of Bedrooms must be zero or greater", "Number of Bathrooms must be 1 or greater", "Number of Beds must be 1 or greater", "About can't be blank", "Cancellation Policy can't be blank", "Price must be zero or greater", "Checkin can't be blank", "Checkout can't be blank" ],
    bookingForm: ["Login required to book a place", "Dates selected are not available"],
    reviewsForm: ["Login required to write a review", "Can only review place if previously stayed"]
  }

}