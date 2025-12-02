# FcInput Component Documentation

`fc-input` is a robust, form-associated custom element (`HTMLElement`) that extends the native input functionality. It encapsulates styling, validation logic, accessibility features, and specific behaviors like password toggling, while maintaining compatibility with native forms and modern frameworks like React.

## Key Features

  * **Form Associated:** Works natively with `<form>`, `FormData`, and standard form events (`reset`, `submit`).
  * **Shadow DOM:** Encapsulated styles and structure using `delegatesFocus` for proper accessibility.
  * **Validation System:** Two-layer validation (Native Attributes + Custom Function) with a "touched" state UI pattern.
  * **Framework Compatible:** Specifically designed `value` setter logic to prevent re-render loops in React.
  * **Built-in Password Toggle:** Integrated eye icon for `type="password"`.
  * **Accessibility:** Automatic management of ARIA states (`aria-disabled`, `aria-required`) via `ElementInternals`.

-----

## Usage

### Registration

To use the component, you must first register it. Prevents double-registration errors automatically.

```javascript
import { defineInput } from './index';

// Registers <fc-input> in the browser
defineInput();
```

### Basic HTML

```html
<fc-input 
    name="username" 
    label="Username" 
    placeholder="Enter your name" 
    required
></fc-input>
```

-----

## Styling & Theming

The component uses Shadow DOM but exposes CSS variables for extensive customization.

### CSS Variables

| Variable | Description |
| :--- | :--- |
| **Dimensions & Font** | |
| `--fc-font-family` | Font stack for the input. |
| `--fc-input-max-width` | Max width of the host element. |
| `--fc-input-padding` | Padding inside the input field. |
| `--fc-input-radius` | Border radius. |
| `--fc-font-size-md` | Font size. |
| **Colors (Default)** | |
| `--fc-input-bg` | Background color. |
| `--fc-input-fg` | Text color. |
| `--fc-input-border` | Border color. |
| `--fc-input-placeholder` | Placeholder text color. |
| `--fc-input-border-width` | Thickness of the border. |
| `--fc-input-shadow` | Box shadow. |
| **Colors (Interactive)** | |
| `--fc-input-border-hover` | Border color on hover. |
| `--fc-input-border-focus` | Border color on focus. |
| `--fc-input-focus-ring` | Box shadow/Ring on focus. |
| **Colors (Error State)** | |
| `--fc-input-error-bg` | Background when invalid (and touched). |
| `--fc-input-error-color` | Border color when invalid (and touched). |
| `--fc-input-error-focus-ring`| Focus ring when invalid. |
| **Colors (Disabled)** | |
| `--fc-input-disabled-bg` | Background when disabled. |
| `--fc-input-disabled-placeholder`| Placeholder color when disabled. |
| **Special Types (File/Password)** | |
| `--fc-input-file-border` | Border specific to file inputs. |
| `--fc-input-btn-bg` | File selector button background. |
| `--fc-input-file-btn-fg` | File selector button text color. |
| `--fc-input-password-icon-color` | Color of the eye icon. |

-----

## API Reference

### Attributes & Properties

Most attributes are synchronized with their corresponding properties.

| Attribute | Property | Type | Description |
| :--- | :--- | :--- | :--- |
| `name` | `name` | `string` | The name of the field for form submission. |
| `type` | `type` | `string` | Supported: `text`, `email`, `number`, `password`, `file`, `url`. Defaults to `text`. |
| `value` | `value` | `string` | Controls the input value. **Note:** Does not reflect as an attribute to support React controlled states. |
| `placeholder`| `placeholder`| `string` | The placeholder text. |
| `disabled` | `disabled` | `boolean`| Disables the input and updates `aria-disabled`. |
| `readonly` | `readonly` | `boolean`| Sets the field to read-only. |
| `required` | `required` | `boolean`| Marks field as required and updates `aria-required`. |
| `min` | `min` | `string` | Minimum value (for numbers). |
| `max` | `max` | `string` | Maximum value (for numbers). |
| `step` | `step` | `string` | Step interval (for numbers). |
| `minlength` | `minLength` | `number` | Minimum character length. |
| `maxlength` | `maxLength` | `number` | Maximum character length. |
| `pattern` | `pattern` | `string` | Regex pattern for validation. |

### Read-Only Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `files` | `FileList` | `null` | Returns the file list if `type="file"`. |
| `validity` | `ValidityState` | Returns the validity state from ElementInternals. |
| `validationMessage` | `string` | Returns the validation message. |
| `willValidate` | `boolean` | Returns true if the element is a candidate for constraint validation. |

### Methods

| Method | Description |
| :--- | :--- |
| `checkValidity()` | Checks the validity of the element. Returns `boolean`. |
| `reportValidity()` | Checks validity and reports the result to the user. |
| `setProps(props)` | Bulk sets properties on the component. Ignores object/array values for HTML attributes. |

-----

## Events

The component dispatches custom events that bubble and are composed (cross Shadow DOM boundaries).

### `fc-input`

Fired synchronously when the value changes (similar to the native `input` event).

  * **Trigger:** User types in the field.
  * **Detail:** `{ value: string }`

### `fc-change`

Fired when the value is committed (similar to the native `change` event).

  * **Trigger:** User blurs the field after editing.
  * **Detail:** `{ value: string, files: FileList | null }`

<!-- end list -->

```javascript
element.addEventListener('fc-input', (e) => {
    console.log(e.detail.value);
});
```

-----

## Validation Logic

The component uses `ElementInternals` to integrate with the browser's native validity API.

### 1\. The "Touched" State

Visual error styles (red border/background) are **suppressed** until the user has interacted with the field.

  * The `touched` attribute is added automatically on `blur` or when the form is submitted invalidly (`onInvalid`).
  * CSS Selector used: `:host([touched]:invalid)`.

### 2\. Validation Layers

Validation occurs in two steps via the `syncValidity()` method:

1.  **Native Constraints:** Checks standard attributes like `required`, `min`, `pattern` against the inner `<input>`.
2.  **Custom Validator:** Checks the user-defined `validator` function.

### 3\. Custom Validator Hook

You can attach a custom validation function via JavaScript.

```javascript
const myInput = document.querySelector('fc-input');

// Logic: Return a string for error, null for valid
myInput.validator = (value) => {
    if (value === 'admin') {
        return 'That username is taken.'; // Sets custom validity error
    }
    return null; // Valid
};
```

-----

## React Integration

`fc-input` is optimized for React's controlled component pattern.

In standard Web Components, setting `element.value = "x"` often reflects to the attribute `value="x"`. In React, this causes an infinite loop because React sets the value property on every render.

**Solution:**

  * The `value` setter in `fc-input` updates the internal state `_value` and the inner `<input>` value.
  * It does **not** set the `value` attribute on the host `<fc-input>`.
  * This allows the component to be "controlled" without fighting the framework.

```jsx
// works perfectly in React
<fc-input 
    value={state} 
    onFcChange={(e) => setState(e.detail.value)} 
/>
```

-----

## Accessibility

  * **Delegates Focus:** The Shadow DOM is attached with `{ delegatesFocus: true }`. Focusing the `<fc-input>` tag programmatically or via click automatically moves focus to the internal `<input>`, associating the ARIA attributes on the host with the focusable element inside (the `<input>`). Discriptive ARIA's like 'aria-describedby', 'aria-details', 'aria-labelledby' and others can be added directly to `<fc-input>`.
  * **ElementInternals:**
      * `aria-disabled` is automatically managed based on the `disabled` property.
      * `aria-required` is automatically managed based on the `required` property.
      * `aria-invalid` is automatically managed when setting input validity.
  * **Password Toggle:** The eye icon button has `aria-label="Toggle password visibility"` and manages `aria-pressed` state.

-----

# Technical Implementation Details

This section describes the internal architecture for developers contributing to or debugging the component.

### 1\. Property-Attribute Synchronization (Reflection)

For most properties (e.g., `placeholder`, `disabled`, `min`), the component uses a **Reflecting Property** pattern.

  * **Flow:** Setting a property via JavaScript (e.g., `el.placeholder = "Search"`) calls the setter.
  * **Setter Logic:** The setter executes `this.setAttribute('placeholder', 'Search')`.
  * **Update Loop:**
    1.  `setAttribute` triggers the browser's `attributeChangedCallback`.
    2.  The callback matches the attribute name and updates the **internal** `<input>` element inside the Shadow DOM.

This ensures that the DOM tree (attributes) and the JavaScript object (properties) always stay in sync.

### 2\. The `value` Property Exception (React Support)

The `value` property breaks the reflection pattern intentionally to support React's "Controlled Component" pattern.

  * **Problem:** React sets the `value` property on every render. If the setter calls `setAttribute('value', ...)`, it triggers a DOM mutation, which might cause React to re-render, creating an infinite loop.
  * **Solution:** The `value` setter in `FcInput`:
    1.  Updates the private class field `_value`.
    2.  Updates the inner `<input>.value` directly.
    3.  Updates `this.internals.setFormValue()`.
    4.  **Does NOT** call `setAttribute('value', ...)`.

This means `<fc-input>.getAttribute('value')` might differ from `<fc-input>.value`, which is standard behavior for HTML inputs.

### 3\. Validity Synchronization

Validation is handled via the `syncValidity()` private method, which is called centrally whenever:

  * The inner input triggers an `input` or `change` event.
  * Validation constraints (like `required` or `pattern`) are changed programmatically.
  * A custom `validator` function is set.

**Logic:**

1.  **Native Check:** First, checks `this.inputEl.validity`. If invalid, it sets the error on `ElementInternals`.
2.  **Custom Check:** If native passes, it runs `this._validatorFunction(value)`. If it returns a string, it sets a Custom Error on `ElementInternals`.

### 4\. Shadow DOM & Focus Delegation

The component is initialized with:

```javascript
this.attachShadow({ mode: 'open', delegatesFocus: true });
```

  * **`delegatesFocus: true`:** Ensures that clicking anywhere on the host `<fc-input>` (including padding or icons) sends focus to the first focusable element in the shadow tree (the inner `<input>`).
  * **ARIA Mapping:** This browser feature automatically maps `aria-label` and `aria-describedby` from the host to the inner input, removing the need for manual attribute copying.