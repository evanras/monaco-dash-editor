import React from 'react';
import Editor from '@monaco-editor/react';
import PropTypes from 'prop-types';

const MonacoDashEditor = (props) => {
    const {
        id,
        height,
        language,
        setProps,
        value,
        theme,
        readOnly,
        options,
        className,
        style
    } = props;

    const handleEditorChange = (newValue) => {
        setProps({
            value: newValue
        });
    };

    return (
        <div
            id={typeof id === 'object' ? id.id : id}
            className={className}
            style={{
                height: height || '300px',
                width: '100%',
                ...style
            }}
        >
            <Editor
                height="100%"
                language={language || 'javascript'}
                theme={theme || 'vs-light'}
                value={value || ''}
                options={{
                    readOnly: readOnly || false,
                    ...options
                }}
                onChange={handleEditorChange}
            />
        </div>
    );
};

MonacoDashEditor.defaultProps = {
    height: '300px',
    language: 'javascript',
    theme: 'vs-light',
    readOnly: false,
    options: {},
    value: '',
    className: '',
    style: {}
};

MonacoDashEditor.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     * Can be a string or a dictionary with additional data attributes.
     */
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            // Allow any additional string attributes
            __extras__: PropTypes.objectOf(PropTypes.string)
        })
    ]),

    /**
     * Height of the editor
     * Defaults to '300px'
     */
    height: PropTypes.string,

    /**
     * The programming language for syntax highlighting
     * Supports various languages like 'javascript', 'python', 'json', etc.
     * Defaults to 'javascript'
     */
    language: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Current content/value of the editor
     * Defaults to an empty string
     */
    value: PropTypes.string,

    /**
     * Editor theme
     * Supports 'vs-light', 'vs-dark', 'hc-black'
     * Defaults to 'vs-light'
     */
    theme: PropTypes.string,

    /**
     * Make editor read-only
     * Prevents user from modifying the content
     * Defaults to false
     */
    readOnly: PropTypes.bool,

    /**
     * Additional Monaco Editor configuration options
     * Allows fine-tuning of editor behavior and appearance
     * Defaults to an empty object
     */
    options: PropTypes.object,

    /**
     * Additional CSS class for the container
     * Allows custom styling of the editor container
     * Defaults to an empty string
     */
    className: PropTypes.string,

    /**
     * Inline styles for the container
     * Allows direct styling of the editor container
     * Defaults to an empty object
     */
    style: PropTypes.object,
};

export default MonacoDashEditor;