# AUTO GENERATED FILE - DO NOT EDIT

export monacodasheditor

"""
    monacodasheditor(;kwargs...)

A MonacoDashEditor component.

Keyword arguments:
- `id` (optional): The ID used to identify this component in Dash callbacks.
Can be a string or a dictionary with additional data attributes.. id has the following type: String | lists containing elements 'id', '__extras__'.
Those elements have the following types:
  - `id` (String; required)
  - `__extras__` (Dict with Strings as keys and values of type String; optional)
- `className` (String; optional): Additional CSS class for the container
Allows custom styling of the editor container
Defaults to an empty string
- `height` (String; optional): Height of the editor
Defaults to '300px'
- `language` (String; optional): The programming language for syntax highlighting
Supports various languages like 'javascript', 'python', 'json', etc.
Defaults to 'javascript'
- `options` (Dict; optional): Additional Monaco Editor configuration options
Allows fine-tuning of editor behavior and appearance
Defaults to an empty object
- `readOnly` (Bool; optional): Make editor read-only
Prevents user from modifying the content
Defaults to false
- `style` (Dict; optional): Inline styles for the container
Allows direct styling of the editor container
Defaults to an empty object
- `theme` (String; optional): Editor theme
Supports 'vs-light', 'vs-dark', 'hc-black'
Defaults to 'vs-light'
- `value` (String; optional): Current content/value of the editor
Defaults to an empty string
"""
function monacodasheditor(; kwargs...)
        available_props = Symbol[:id, :className, :height, :language, :options, :readOnly, :style, :theme, :value]
        wild_props = Symbol[]
        return Component("monacodasheditor", "MonacoDashEditor", "monaco_dash_editor", available_props, wild_props; kwargs...)
end

