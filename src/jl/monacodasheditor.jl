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
- `height` (String; optional): Height of the editor
- `language` (String; optional): The language of the editor
- `options` (Dict; optional): Additional Monaco Editor options
- `readOnly` (Bool; optional): Make editor read-only
- `style` (Dict; optional): Inline styles for the container
- `theme` (String; optional): Editor theme
- `value` (String; optional): Current code/content
"""
function monacodasheditor(; kwargs...)
        available_props = Symbol[:id, :className, :height, :language, :options, :readOnly, :style, :theme, :value]
        wild_props = Symbol[]
        return Component("monacodasheditor", "MonacoDashEditor", "monaco_dash_editor", available_props, wild_props; kwargs...)
end

