# simple-dropdown

Module implementing dropdown functionality.

## Install

`npm i @tuhindas56/simple-dropdown`

### Usage

Arguments:

- `triggeringElement` - Element that triggers the dropdown.
- `dropdownContent` - Element containing dropdown contents.
- `{ keepOpenOnContentClick: boolean }` - if set to `true`, clicking on the dropdown's contents does not close the dropdown and vice versa.

### Example

```
import dropdown from '@tuhindas56/simple-dropdown'

const dropdownTrigger = document.querySelector('.dropdown-button')
const dropdownContent = document.querySelector('.dropdown-content')

dropdown(dropdownTrigger, dropdownContent, { keepOpenOnContentClick: true })
```

#### Note

Apply appropriate _positional properties_ to relevant elements to prevent breaking the page layout.
