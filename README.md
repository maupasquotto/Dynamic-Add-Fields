# Dynamic Add Fields JQuery
Dynamic Add Objects/Divs/Fields into your code using this library based in JQuery

## Features
 * Dynamic add an objetc into your DOM from a model to a target
 * Animate options
 * Set different events to trigger
 
## Exemple
```javascript
$(document).ready(function() {
  $('.addNewThing').modelToClone({
    target: '.bars',  //Where to go ?
    source: '#modelBar', //From where ?
  });
});
```
 
## Authors
* **Maurício de Castro Pasquotto** - *Initial work* - [GitHub](https://github.com/maupasquotto)
