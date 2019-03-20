# Show Me The Pets!

![](http://forthebadge.com/images/badges/made-with-javascript.svg)
![](http://forthebadge.com/images/badges/made-with-ruby.svg)

Made with ReactJS & Rails

## Installation
To have a closer look, clone down the repo and cd into the directory:
- `cd show-me-the-pets`

To start the backend server run:
- `cd show_me_the_pets_api`
- `bundle install`
- `rake db:seed` to add the pets to the database!
- `rails s` to start up the back-end server on port 3002


And finally, to start the front end client:
- [`cd ..`]
- `cd show_me_the_pets_client`
- `npm install`
- `npm start`

Now you can navigate to the location shown (usually http://localhost:3000/) and enjoy!

## Functionality
Users can browse a database of pets and select a pet to see its profile and an image.
Users can search by any combination of name, color, gender, breed and address.
Pets can also be browsed by type (Cat, Dog, Rabbit or All)

## Future Improvements
- The search results auto-populate as the queries are entered but I would like to improve this auto update feature to assist users in form completion.
- The Cat API and the Dog API are great resources however I have not yet refined the breed selection. It currently takes a substring of the first 3 characters of the pet breed to find a breed, and subsequently an image. The returning images are not yet necessarily consistent with the breed!
- Improve general styling (currently very lo-fi!)
- Add features to be able to add new Pets to the database, (& update/delete).

## Challenges Faced
- Deciding how much I could use the backend API. I ended up using it only to retrieve all the pets once. I was originally planning to have multiple API calls to utilise ActiveRecord to make queries on that end however this was incompatible with my auto-complete results functionality. Given the very low usage of this API, it would make potentially make sense to rewrite it using a lighter-weight framework than Rails (such as Express (JavaScript) or Sinatra (Ruby))
- Parsing the CSV and deciding when to do this. I chose to do this in the backend. Although I could potentially have had the entire database living on the frontend, I don't feel it would have been a very scaleable choice.
- Handling multiple promises in the API calls fetching Pet images. I chose to use both `fetch` and `async`/`await` to handle these.
