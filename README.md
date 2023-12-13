# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Team Members and Contributions

1. Abdul Hadi
   Responsibility: Product Details Page and Cart Page
   Created the Product Details page, which displays all the details of the selected product. The product ID and product data are received as props from the parent component (App.js).
   Implemented the "Add to Cart" button functionality, making a POST request to the "https://6566ef4764fcff8d730f588d.mockapi.io/cart" API endpoint.
   Implemented the functionality to delete a product from the main page and add it to the cart using a DELETE request to the "https://6566ef4764fcff8d730f588d.mockapi.io/web" API endpoint.
   Developed the Cart Page, where all products available in the cart API endpoint are fetched using a GET request and displayed.
2. Habiba
   Responsibility: Layout Component and Filtering Feature
   Created the Layout Component, responsible for rendering components such as Header, Devices, Browse, and Footer.
   Implemented the Browse component, fetching data from the "/web" API endpoint and displaying it.
   Added a filtering feature to allow users to filter items according to their needs.
   Created additional components required for the Layout, including the Login component.
3. Hassah
   Responsibility: ProductListing Component, Routing, and Hosting
   Developed the ProductListing component, enabling users to add new products to the website at the "/web" API endpoint using form inputs and a POST request.
   Implemented routes to different components within the application.
   Responsible for hosting the website on GitHub.
4. Zoubaida
   Responsibility: Auction Component
   Created the Auction component, allowing users to place bids and compete with others while purchasing products.
   Displays bidding history and updates the product price if the bid value is greater than the current price, using a PUT request to the "/web" API endpoint.
