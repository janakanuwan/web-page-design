# webpack-example-4


## steps

1. Install [Jest](https://jestjs.io/docs/en/getting-started)
```
npm i -D jest
```

2. Enable to run Jest via npm scripts
```json
{

  "scripts": {
    
    "test": "jest"
  }

}
```

3. Run the tests
```
npm run test
```
>- NOTE: There will be error saying 'No tests found'.
>- NOTE: There will be logs highlighting 'testMatch', 'testPathIgnorePatterns', 'testRegex'. What are those?
>- Can we change them? (Hint: `jest --init`)

4. Let's create a new `src/util.js` file which has the following code.
```javascript
// filtering by publisher name
function getFilteredHeroes (publisher, heroDataArray) {
	const filteredHeros = [];
	heroDataArray.forEach(heroData => {
		if(publisher == heroData.publisher){
			filteredHeros.push(heroData);
		}
	});
	return filteredHeros;
}


module.exports = getFilteredHeroes;
```
>- How can we test above function?
>- What is meant by 'module.exports = getFilteredHeroes;' ?  Hint: [nodejs-module-exports](https://www.tutorialsteacher.com/nodejs/nodejs-module-exports)

5. Add test file (say `src/util.test.js`) to test the above function in `src/util.js`

```javascript
// util.test.js

const getFilteredHeros = require('./util');

test('empty publish and empty heroData result empty', () => {
  expect(getFilteredHeros([], [])).toEqual([]);
});
```

6. Run the test `npm run test`