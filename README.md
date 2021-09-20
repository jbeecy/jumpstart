![Jumpstart](https://user-images.githubusercontent.com/86622600/134027364-65a01010-188c-4de0-b11e-5afbbfe68297.PNG)

# Important Links

[Deployed Front End](https://jbeecy.github.io/jumpstart/)

[Back end Heroku Deployed](https://git.heroku.com/infinite-everglades-04366.git)

## Repository Links

[Front End Repo](https://github.com/jbeecy/jumpstart)

[Back End Repo](https://github.com/jbeecy/jumpstart-api)

## What is Jumpstart?

JumpStart is an application where all developers, whether junior, mid-level, senior, etc, can come to post code, ask questions, share accomplishments, store important files, and talk to fellow developers. The premise of jumpstart is StackOverflow meats GitHub. 

Users can sign up, or sign in if already signed up. Once logged it, users can change their password or sign out, as well as post "Inquiries". To create an inquiry, simply navigate to the 'Create Inquiry' section on the navbar. Once you have successfully created an inquiry, you will be redirected to the inquiries page where you can see all the inquiries that have been posted.

Once you have posted your inquiry, you are able to update it or delete it. The update and delete buttons require ownership of the inquiry to perform either. You will get an error message if you attempt to update or delete something that isn't yours.

## Technologies used

#### Front End:
React, JavaScript, Bootstrap, HTML, CSS

#### Back End:
MongoDB, Mongoose, Express API, Passport, BCryptjs

## Unsolved Problems

As of now, there are still several features I am working on bringing to Jumpstart:
1. Version 2 will allow users to comment on all posts, and markdown will be supported in inquiries as well as comments.
2. Version 3 will allow users to post documents such as PDF files, users can also comment on these.
3. Version 4 will allow users to direct message one another if they so decide, and will allow users to modify their own profile if they so decide.

### Planning and Problem Solving

After developing the idea for what my application would do, I generated user stories, wireframes, and an ERD to give myself a better vision for how to create the application.

The first technical piece I worked on was the back end, I wanted to make sure that all my API calls were successfully tested with curl scripts before moving on to the front end. After the back end was completed, I began working on the front end.

My general approach for problem solving was "slow is smooth, smooth is fast" since I realized that most problems are simple fixes that were just missed the first time around.

### Set-up and Installation

Setup and Installation is quite simple for jumpstart. Fork and clone both the front end and the back end repositories. Make sure you run `npm install` when you are in both directories. Once that is complete, change into a new branch that you create and you are all set! The npm packages for this application work on both Windows and Mac, so no further npm packages should be required for running the base version of the application. To run on local host (development environment) in your front end repository, run `npm run start` if on Mac, or `npm run start-windows` if on Windows. For the back end, `npm run server` or `npm run serve` works for both Windows and Mac.

### Wireframes and User Stories

[Click here to view wireframes](https://git.generalassemb.ly/ga-wdi-boston/capstone-project/files/3833/project.4.wireframe.drawio.pdf)

1. As an unregistered user I want to be able to sign up and sign in
2. As a registered user I want to be able to sign out and change password
3. As a registered user I want to be able to post something
4. As a registered user I want to be able to update or delete my owned posts
5. As a registered user I want to be able to see other peoples posts
