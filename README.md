# angular2-click-outside

This is a directive for detecting clicks outside of a DOM element where the directive is placed on.

PRs welcome!

## Setup
Run `npm i angular2-click-outside` and configure SystemJS accordingly.

## Sample Usage
Using this directive is as easy as:

```[html]
<div (clickOutside)="close()"></div>
```

You can pass the original `MouseEvent` to the registered handler as follows:

```[html]
<div (clickOutside)="close($event)"></div>
```

## Requirements

Angular 2 RC 0 
Angular 4+ goto https://www.npmjs.com/package/ng-click-outside

