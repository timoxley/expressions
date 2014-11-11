# expressions

Grab bag of template-binding expressions.

For use with new template-binding standards.

## API

  - [json](#json)
  - [log](#log)
  - [slice](#slice)
  - [keys](#keys)
  - [values](#values)
  - [keyValue](#keyvalue)
  - [date](#date)
  - [fromNow](#fromnow)
  - [calendar](#calendar)

### json

  Convert to pretty-printed json output.
  
  Usage:
  
  ```html
  {{data | json}}
  ```

### log

  Log to console before returning input.
  
  Very useful for debugging.
  
  Usage:
  
  ```html
  {{data | log}}
  {{data | log('my data %s')}}
  {{data | log('my data %s, %d', otherdata)}}
  ```

### slice

  Slice an array of data.
  
  Usage:
  
  ```html
  {{items | slice}}
  {{items | slice(2)}}
  {{items | slice(2, 5)}}
  ```

### keys

  Get array of keys from an Object.
  
  Usage:
  
  ```html
  <template repeat="{{key in items | keys}}">
   {{key}}
  </template>
  ```

### values

  Get array of values from an Object.
  
  Usage:
  
  ```html
  <template repeat="{{value in items | values}}">
   {{value}}
  </template>
  ```

### keyValue

  Get array of keys and values from an Object.
  
  Usage:
  
  ```html
  <template repeat="{{item in items | keyValue}}">
   {{item.key}} : {{item.value}}
  </template>
  ```

### date

  Format a date using moment.js.
  
  Usage:
  
  ```html
  {{item.date | date}}
  {{item.date | date('LLL')}}
  ```

### fromNow

  Get relative time from now.
  
  Usage:
  
  ```html
  {{item.date | fromNow}} <!-- 2 weeks ago. -->
  ```

### calendar

  Get relative 'calendar' time.
  
  Usage:
  
  ```html
  {{item.date | fromNow}} <!-- 2 weeks ago. -->
  ```

## License

MIT
