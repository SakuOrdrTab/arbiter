# Arbiter

A super simple TypeScript app to draw a lottery from inputted candidates.

This app compiles to static javascript

## Installation

First clone the repo
>git clone [https://github.com/SakuOrdrTab/arbiter.git](https://github.com/SakuOrdrTab/arbiter.git)

Navigate to the project root, for example if you cloned this in vscode, use terminal prompt:
>cd arbiter

Install dependancies there:
>npm install

## Launching the app

After installation, you can use the development server (Vite)

>npm run dev

This launches the Vite development server from the source code and you can find the app with your browser at:
http://localhost:5173

Or, you can run it in Docker:

Build a docker image and run it
>docker compose up --build

Then your app will be available in this address:
http://localhost:3000

## Using the app

This is the most simple app for doing just a most simple thing: picking an item from a list randomly.

Let's say you want to randomly pick from three persons, Mike, Juliet and Iris who does the dishes. You enter the three names with the add button to the pool from where the selection is made. These are called the "candidates"

When you have all the attendees that you wish, just press the Draw Lottery button and the arbitrary selection is made and the winner is announced.

You have to have at least two items to be able to do lottery.

You can't add the same string twice to the candidates, however, the check for this is case-sensitive, so you can add "Mike" and "mike".

## Notes

All in all, this is a static app. You can build static JavaScript dist folder with 
>npm run build

and that doesn't have a server, dependancies or anything.

This means, that even though the default Docker image is building the whole app from scratch, there are many places, where you can either make a thin Docker image (just the artefacts from dist folder) or even plain html/JS/css and deploy those in a site that provides a platform for static websites for free.
