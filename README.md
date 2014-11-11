# expressions

Grab bag of template binding expressions.

## API

  - [json()](#expressionsjson)
  - [log()](#expressionslog)
  - [slice()](#expressionsslice)
  - [keys()](#expressionskeys)
  - [values()](#expressionsvalues)
  - [keyValue()](#expressionskeyvalue)
  - [date()](#expressionsdate)
  - [fromNow()](#expressionsfromnow)
  - [calendar()](#expressionscalendar)

### json

  Convert to pretty-printed json output.
  
  Usage:
  
  ```js
  {{data | json}}
  ```

### log

  Log to console before returning input.
  
  Very useful for debugging.
  
  Usage:
  
  ```js
  {{data | log}}
  {{data | log('my data %s')}}
  {{data | log('my data %s, %d', otherdata)}}
  ```

### slice

  Slice an array of data.
  
  Usage:
  
  ```js
  {{items | slice}}
  {{items | slice(2)}}
  {{items | slice(2, 5)}}
  ```

### keys

  Get array of keys from an Object.
  
  Usage:
  
  ```js
  <template repeat="{{key in items | keys}}">
   {{key}}
  </template>
  ```

### values

  Get array of values from an Object.
  
  Usage:
  
  ```js
  <template repeat="{{value in items | values}}">
   {{value}}
  </template>
  ```

### keyValue

  Get array of keys and values from an Object.
  
  Usage:
  
  ```js
  <template repeat="{{item in items | keyValue}}">
   {{item.key}} : {{item.value}}
  </template>
  ```

### date

  Format a date using moment.js.
  
  Usage:
  
  ```js
  {{item.date | date}}
  {{item.date | date('LLL')}}
  ```

### fromNow

  Get relative time from now.
  
  Usage:
  
  ```js
  {{item.date | fromNow}} <!-- 2 weeks ago. -->
  ```

### calendar

  Get relative 'calendar' time.
  
  Usage:
  
  ```js
  {{item.date | fromNow}} <!-- 2 weeks ago. -->
  ```

## License

MIT
