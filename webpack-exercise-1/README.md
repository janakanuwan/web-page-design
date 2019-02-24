# webpack-exercise-1

## Due Date:
March 7, 2019, 23:59 (Thursday of Week 7)

## Description
This is an **individual** exercise. The purpose of this exercise is to practice the concepts learned in the Tutorial 3 and Tutorial 2. You will carry out the same example, [modularity-example-3](https://github.com/janakanuwan/web-page-design/tree/master/modularity-example-3) which was carried out in Tutorial 2 as the exercise with `npm`, `webpack` and `Sass`.

**Required output:**
![Web Page](https://github.com/janakanuwan/web-page-design/blob/master/modularity-example-3/My%20Super%20Heros.png)

### Instructions
1. Create a directory in the format  `Tutorial3_<MATRIC_NUMBER>`.
2. Initialize your project using `npm` inside that directory. Use **your name** as the author and **Tutorial 3 - Exercise - <MATRIC_NUMBER>** as the name of the project (i.e. `package name`). You will compress this directory and upload it to IVLE.
3. Download the [data file](https://github.com/janakanuwan/web-page-design/blob/master/webpack-exercise-1/data/data.js) and [images](https://github.com/janakanuwan/web-page-design/blob/master/webpack-exercise-1/data/images.zip) (Compressed, need to uncompress). You must use this data set.
>- NOTE: Now the data object has the image file name instead of image URL!
```javascript
// data.js

{
  "id": 1,
  "name": "A-Bomb",
  "powerstats": {
    "intelligence": 38,
    "strength": 100,
    "speed": 17
  },
  "image": "1-a-bomb.jpg",
  "publisher": "Marvel Comics"
},

```
4. You must use [url-loader](https://github.com/webpack-contrib/url-loader) to load images. Images should be inside a separate directory (Hint: _assets/images_). 
5. You must use the port '9000' instead of default port '8080' for `webpack-dev-server`
6. You must use SASS instead of CSS for all style-sheets and they should reside in a separate directory (Hint: _assets/styles_).
    - Each constant value (e.g. _width_, _margin_) related to style-sheet should be added in a separate file as _variables_ and you must use _inheritance_ to use them.
    - You must use _mixins_ and _nesting_ to simplify the SASS code.
    - The background color of each hero "tile" and "publisher" should be changed based on _hue_, _saturation_, _lightness_ and _alpha_.
7. You must show the modularity concepts you learned in Tutorial 2 in your code.
8. You are allowed to use the JS codes in [modularity-example-3](https://github.com/janakanuwan/web-page-design/tree/master/modularity-example-3), but code must be simplified as much as possible.
9. [Optional] Add the test codes using '[Jest](https://jestjs.io/docs/en/getting-started)' for the filtering, sorting and parsing.
10. **DO NOT** include the `node_modules` directory in final compressed files. (Why? some libraries are platform dependent and they take considerable space)

## Deliverables:
- The **project folder** with name `Tutorial3_<MATRIC_NUMBER>`
- An **instruction file** on how to the run the code (e.g. _README.md_ file) **inside** your _project folder_

## Submitting Exercise
All deliverables should be archived into a .zip file with the following naming convention:
```
Tutorial3_<MATRIC_NUMBER>.zip
```
submitted to the IVLE "Tutorial 3 Exercise" workbin ("Files" > "Tutorials" > "Tutorial 3 Exercise") before March 7, 2019, 23:59.

