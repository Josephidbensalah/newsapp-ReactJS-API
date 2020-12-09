### `Clone the project`

inside a directory of your choice clone the project using either HTTPS or SSL

### `Install Dependencies`

run `npm install` or ` yarn install`

### `Get your ApiKey `

Go to [Get ApiKey](https://newsapi.org/)
inside the `src/Config/config.js` file set your ApiKey and save .

### `Run the App`

run `npm start` or ` yarn start` in order to Run the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Create an User`

Create an User by Clicking Register Link (One User created , In case of Creating a New User The Previous One will be deleted and changed with the new User )

### `Browsing the App`

Once you are connected You will be redirected to the Main page and you can see the articles

[top Headlines](http://localhost:3000/topHeadlines)
`this page showing the top articles based on a keyword , you can edit that keyword through this file src/Environnement/environnement.js`
`Note the keyword used here is not from user preferences `

[customs Articles](http://localhost:3000/customsArticles)
`Custom news based on user preferences (user must be presented with keyword selection from bitcoin, Apple, earthquake, animal. User can only choose one keyword) `

[Article Detail](http://localhost:3000/)
`this page showing the article deatils , you can access this page after clicking the Read more Button `

[errorPage](http://localhost:3000/anyInvalidRoute)
`if there is no route that match the existing routes an ErrorPage is shown`

[Profile](http://localhost:3000/Profile)
`You can update the user data through this page `

[Register](http://localhost:3000/register)
`You can Create a new user via this page `

[Login](http://localhost:3000/login)
`You can Login to the App via this page `
