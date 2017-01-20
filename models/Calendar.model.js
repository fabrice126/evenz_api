// LVL1+ Account (id, created_at, updated_at, username,lastname,firstname, email, password, securityQuestion, securityAnswer) <= Gestion du mot de passe en “salt”
// LVL1+ Friends (id, created_at, updated_at, #account_id, #friend_id)
// LVL2+ Profile (id, created_at, updated_at, status, role, #idAccount)
// LVL3+ BasicInformation (id, created_at, updated_at, sex, birthday, hometown, #profile_picture, #profile)
// LVL3+ PersonalInformation (id, created_at, updated_at, activities, interests, favoriteMusic, favoriteTVShows, favoriteMovies, favoriteBooks, favoriteQuotes, aboutMe, #profile)
// LVL3+ ContactInformation (id, created_at, updated_at, phoneNumber, website, emailsOnlyForFriends, mobilePhoneOnlyForFriends, addressOnlyForFriends, websiteOnlyForFriends, #address, #profile)

// LVL4+ Address (id, created_at, updated_at, address, city, state, zipcode, country, latitude, longitude)
 
// Image(id,titre,description, datePrise)
// ParticipateAt (account, event)
// Favorite (account, event)
// Album (image, event)
// Event_EventTypes (eventType, event)

// LVL1+ Event (id, name, description, start, end, address, maxUsers, price, isShown, link, phone, photosEnabled)
// Comment (id, date_create, date_update, comment, account, event)
// LVL2+ EventType (id, date_create, date_update, name)






// User(id, username, firstname, lastname, *email, password, *sex, *hometown, *birthday, *description, *status, 
//      securityQuestion, securityAnswer, image, admin, createdAt, updatedAt, *phoneNumber, *website,
//      *hobbies[String], *interests[String], *favoriteQuotes[String], *favoriteBooks[String], 
//      *favoriteMovies[String], *favoriteTVShows[String], *favoriteMusics[String], *activities[String], 
//      _Friends[idUser], _Favourites[idEvent], _ParticipateAtEvents[idEvent])
//      * => {field:"une donnée",anonymity: 1} 

// Event (id, title, imageCover, description, createdAt, dateStart, dateEnd, minUser, maxUser, price, 
//        isShown, websites, phoneNumber, photosEnabled, vote:{plus,minus}, 
//        _Address:idAddress, _Comments[Comment], _Owner[idUser], _EventType[idEventType], _Participants[idUser])

// Address (id, createdAt, updatedAt, city, state, zipcode, country, location:{longitude,latitude} )
 
// Image(id, title, description, datePrise)
// Album (image, event)

// Comment (id, createdAt, updatedAt, event)
// EventType (id, createdAt, updatedAt, name)