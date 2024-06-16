# Nuant FE Test

This project is my solution for the home assignment received from Nuant.

### Submitting

Running the app: 
````npm install````
````npm run dev````


Running the tests: first, make sure the app is running, then in another terminal run : ````npm run playwright````
Alternatively, you can run ```` npx playwright test --ui ```` to see the tests run in the browser ui.

### Submitting

- What part of building the project was the most difficult? Why?
 > I didn't find the tasks difficult, what I had a difficult time with was finishing everything as fast as possible, since I was bulding the components from scratch, while using some new libraries I haven't played with before. 
 
 > Of course the most complex 'business logic' was in aggregating the data for the search and filter results, not so much in the sense that the task was difficult, but as in providing a clean enough solution. I'm sure there is room for improvement in that area of the code :D. And the debounce is still not working :D 


- How long did it take to have this test completed ? Which part of the test took you longer? Could you specify roughly the amount of time it took you to do the following:

    > It took me around 9 hrs ! Took me the most time to get familiar with tailwind, the pokemon API, and building most of the UI components from scrath (I wanted to use tailwind because I know that's what you use on the project, to get a feel of it, so that's why I did not choose compoents from a component library I'm more familiar with - such as Material UI or Fluen UI, etc. - I think I 'lost' quite a bit of time this way, so maybe it wasn't the best choice to learn new stuff now, but I enjoyed myself)

    - Set up environment 
    > 15 minutes maybe less 

    - Result display 
    > ~ two hours and a half (I did a paginated get all for when no filters are applied and that took a bit of time :D, as well as most of the components, context, service at this point)
    - Filter feature 
    > around one hour
    - Search feature 
    > around 30 minutes (this was the last bit I developed so by this time I had most of the flows in place and it was easier to integrate)
  
    - Show item details 
    > around 40 minutes ? (had all my data from the list calls :D, so this part was mostly about having a nice enough layout, arranging the images, and so on)

    - Unit tests 
    > around 40 minutes, the intention was to do TDD, but I gave it up as I time was running low :D

    - Other (please specify) 
    > I think I 'lost' some time worrying about routing, building a very basic user profile, wanting to have a nice project structure in place, maybe I did some 'extra', unrequired things ? 
    Also reading the documnetation for tailwind, the API, headlessui, I did not have the chance to work directly with these libraries before.
    All in all, I spent around 2 hours, I think, working on the project base structure and reading the docs.
    I also tried to make the layout responsive, so that took some time as well.

