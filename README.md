# Algorithm Visualizer

Algorithm Visualizer is a progressive web app written in  React and is used to visualize classic Algorithms such as Bubble Sorting, Selection Sorting, Merge sorting, Heap Sorting, etc. from code.

This app is deployed on Netlify for you to have fun playing around with.
Aceesible here: https://pranavchachra-algorithm-visualizer.netlify.app


## Purpose

I wanted to improve my React abilities while also learn few classic Algorithms. This project ended up being a good approach to accomplish both of the mentioned goals at once.

## Installation

The app is already deployed so you can play around with the final product using this [link](https://pranavchachra-algorithm-visualizer.netlify.app).

In case you wish to run this app locally, you can clone this repo and install the dependencies.

```
$ git clone https://github.com/pranavchachra1702/Algorithm-Visualizer.git
$ cd Algorithm-Visualizer
$ npm install
```

## App Conventions

The `src` folder contains two subdirectories:

- `algorithms` - Each sorting algorithm is contained in its own file and imports helper functions from the `helpers.js` file, which is also present inside this folder. 
                   Each algorithm file has two named exports and a default export. The named exports are:
•	`<AlgorithmName>Key` which returns a mapping of the color group and its meaning in the context of the algorithm, and
•	`<AlgorithmName>Desc` which returns an object containing the description and details of the algorithm. 
                      `AlgorithmName` is the default export, which is a function that takes in an array of numbers, sorts it and returns an object that contains every state change that the array has undergone. 
- `components` - This folder is broken down into further subfolders, each sub-folder representing a component [sub-components].
          - Each component of the project in its sub-folder has 2 files. The `index.js` file, which contains the JavaScript code for the component and the `style.css` file which contains all the formatting and design rules for classes 