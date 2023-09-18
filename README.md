## Movies and TV shows App in ReactJs using TMDB Api data

![poster](https://github.com/Abhishek-k-git/Movies-App/blob/main/screenshot/movies-app.png)

### Table of content
* [Overview](#Overview)
* [Folder Structure](#Folder-Structure)
* [Setup](#Setup)
* [Deployment](#Deployment)
* [TMDB_API](#TMDB_API)
* [App Preview](#App_Preview)

### Overview

The "Movies and TV shows app in ReactJs" is a Git repository that showcases a web application built using ReactJs. This app utilizes the TMDB API to fetch data, providing users with access to a wide range of movie and TV show information. The repository's key focus is on creating a fully responsive website, ensuring that the app functions seamlessly on various devices and screen sizes. By leveraging ReactJs, this app can dynamically render content and efficiently update information, resulting in a smooth and user-friendly experience. Overall, the repository highlights the effectiveness of ReactJs in building a responsive and engaging movie and TV show application.

### Folder-Structure

```
├── Application
    ├── public
    |       ├── movies-logo.png
    ├── src
    |       ├── assets
    |       |       ├── avatar.png
    |       |       ├── movie-logo.png
    |       |       ├── no-poster.png
    |       |       ├── no-result.png
    |       ├── components
    |       |       ├── carousel
    |       |       |       ├── Carousel.jsx
    |       |       |       ├── style.scss
    |       |       ├── circleRating
    |       |       |       ├── CircleRating.jsx
    |       |       |       ├── style.scss
    |       |       ├── contentWrapper
    |       |       |       ├── ContentWrapper.jsx
    |       |       |       ├── style.scss
    |       |       ├── footer
    |       |       |       ├── Footer.jsx
    |       |       |       ├── style.scss
    |       |       ├── genres
    |       |       |       ├── Genres.jsx
    |       |       |       ├── style.scss
    |       |       ├── header
    |       |       |       ├── Header.jsx
    |       |       |       ├── style.scss
    |       |       ├── lazyLoadImage
    |       |       |       ├── Img.jsx
    |       |       ├── movieCard
    |       |       |       ├── MovieCard.jsx
    |       |       |       ├── style.scss
    |       |       ├── spinner
    |       |       |       ├── Spinner.jsx
    |       |       |       ├── style.scss
    |       |       ├── switchTabs
    |       |       |       ├── SwitchTabs.jsx
    |       |       |       ├── style.scss
    |       |       ├── videoPopup
    |       |       |       ├── VideoPopup.jsx
    |       |       |       ├── style.scss
    |       ├── hooks
    |       |       ├── useFetch.jsx
    |       ├── pages
    |       |       ├── 404
    |       |       |       ├── 404.jsx
    |       |       |       ├── style.scss
    |       |       ├── details
    |       |       |       ├── carousels
    |       |       |       |       ├── Recommendation.jsx
    |       |       |       |       ├── Similar.jsx
    |       |       |       ├── cast
    |       |       |       |       ├── Cast.jsx
    |       |       |       |       ├── style.scss
    |       |       |       ├── detailsBanner
    |       |       |       |       ├── DetailsBanner.jsx
    |       |       |       |       ├── style.scss
    |       |       |       ├── videoSection
    |       |       |       |       ├── VideoSection.jsx
    |       |       |       |       ├── style.scss
    |       |       |       ├── Details.jsx
    |       |       |       ├── PlayIcon.jsx
    |       |       ├── explore
    |       |       |       ├── Explore.jsx
    |       |       |       ├── style.scss
    |       |       ├── home
    |       |       |       ├── heroBanner
    |       |       |       |       ├── HeroBanner.jsx
    |       |       |       |       ├── style.scss
    |       |       |       ├── popular
    |       |       |       |       ├── Popular.jsx
    |       |       |       ├── topRated
    |       |       |       |       ├── TopRated.jsx
    |       |       |       ├── trending
    |       |       |       |       ├── Trending.jsx
    |       |       |       ├── Home.jsx
    |       |       |       ├── style.scss
    |       |       ├── searchResult
    |       |       |       ├── SearchResult.jsx
    |       |       |       ├── style.scss
    |       ├── store
    |       |       ├── HomeSlice.jsx
    |       |       ├── Store.jsx
    |       ├── utils
    |       |       ├── api.jsx
    |       ├── App.css
    |       ├── App.jsx
    |       ├── index.scss
    |       ├── main.jsx
    |       ├── mixins.jsx
    └── index.html
```

### Setup

**To create react app**

```
$ npm create vite@latest
```
**dependencies**

```
"@reduxjs/toolkit": "^1.9.1",
"axios": "^1.2.2",
"dayjs": "^1.11.7",
"react": "^18.2.0",
"react-circular-progressbar": "^2.1.0",
"react-dom": "^18.2.0",
"react-icons": "^4.7.1",
"react-infinite-scroll-component": "^6.1.0",
"react-lazy-load-image-component": "^1.5.6",
"react-player": "^2.11.0",
"react-redux": "^8.0.5",
"react-router-dom": "^6.6.2",
"react-select": "^5.7.0",
"sass": "^1.57.1"
```

**To install all dependencies at once run command**

```
npm i
```
    
### Deployment

To deploy your ReactJs app on Netlify, follow these steps:

1. Open your project's terminal and use the command `npm run build`. This command will create a `dist` folder which contains optimized and production-ready code for your app.

2. Once the build process is complete, navigate to the `dist` folder. You can find it in the root directory of your project.

3. Next, go to the Netlify website and sign in with your GitHub account.

4. On the Netlify dashboard, click on the "New site from Git" button.

5. Select your GitHub repository for the ReactJs app.

6. In the deploy settings, ensure the build command is set to `npm run build` and the publish directory is set to `dist`.

7. Proceed with the deployment by clicking on the "Deploy site" button.

8. Netlify will automatically build and deploy your app using the content from the `dist` folder.

9. You can track the deployment process on the Netlify dashboard, and once completed, your ReactJs app will be successfully hosted on a unique URL provided by Netlify.

By following these professional steps, your ReactJs app will be successfully deployed and accessible through Netlify, showcasing your fully responsive website using TMDB API for data.

### TMDB_API

To register for an API key, click the [API link](https://www.themoviedb.org/settings/api) from within your account settings page.

### App_Preview

[Click me to view live application from here](https://themovies-app-tmdb.netlify.app/)
