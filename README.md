# fyndmia (web/ja) [![Netlify Status](https://api.netlify.com/api/v1/badges/03742718-8e43-496b-923f-52e64ed8a684/deploy-status)](https://app.netlify.com/sites/fyndmia/deploys)

helping you find who you need.

## requirements

1. sign up - users should be able to sign up
1. login - users should be able to sign in using credentials they provided
1. logout - users should be able to revoke current session access
1. search - users should be able to search for other users

## screens

1. home
1. discovery
1. user

## components

- nav
- switch (react-router-dom)
- modal (reach)
- card


### nav
Single nav component that renders differently based on context it is being shown in.
This is the most important piece of the application as much of the user's interaction takes place using this component.

contexts:

 - user has scrolled to a point where nav would normally not be visible
 - user has visited home page
 - user has searched/visited url with search query


1. User has scrolled to a point where nav would normally not be visible

Nav will move from its position to the top of the page where it remain fixed... background color will also shift to improve readibility

1. User has visited home page
Nav will be close to the center of the page

1. User has searched/visited url with search query
Nav will be at the top of the page