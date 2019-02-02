#  99 Percent Invisible Clone

#### January 25th, 2019

## Contributors

### **Paige Williams**

## Description

This is a an exercise in re-building a site using Angular. This is an attempt to replicate the beautiful [99% invisible](https://99percentinvisible.org/) site. I chose this site because I love the design, and I felt that the complexity of it would be a good challenge. The small details like audio footer that follows as you scroll through the page and the tasteful hover effects create simple intrigue to the site.

THIS IS A REPLICA AND IS NOT THE REAL SITE! THIS WAS CREATED FOR EDUCATIONAL PURPOSES!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

View the app deployed [here!](https://percent-invisible.firebaseapp.com/)

## Planning

  1. Draw a diagram of the site

  ![alt text](https://github.com/paigewilliams/99-percent-invisible/blob/master/layout-design.jpg)

  2. Draw the flow of the components

  ![alt text](https://github.com/paigewilliams/99-percent-invisible/blob/master/components-flow.jpg)

  3. Begin building components

  4. Create Layout of page with components

  5. Build out individual components

  6. Style individual components

  #### To do next Friday:


  7. Make API call to Listen API that returns 10 99% Invisible Episodes

  8. Create an Episode Object for each episode with the following properties:
    - audio
    - description
    - pub_date_ms
    - title

  9. Save each episode in firebase Database

  10. For each item in database create a card component

  11. Populate card component with properties

  12. Create an episode route for each episodes

  13. Embed audio into card component  


### Desired Features

- [x] Deployed to Firebase
- [x] Database with podcasts and articles
- [ ] Pipes to filter podcasts and articles -- functional search bar and links to filter by category
- [x] Embedded audio
- [ ] Replicate playlist footer
- [x] Implement [Listen Notes API](https://www.listennotes.com/api/)
- [ ] Create animation with logo
- [ ] Create view for episodes and articles
- [ ] Dynamic routing to specific episode view


## Objectives

- [x] Project includes a **detailed** README with information on all completed features as well as features to be added.
- [x] Project includes a **detailed** commit history that clearly shows at least eight hours of work between 8 and 5 on Friday. You are also welcome to put additional work into your project outside of that time frame.
- [x] Project demonstrates understanding of this week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Legal

Copyright (c) 2019 Paige Williams
