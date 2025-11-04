import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Monaco from 'monaco-editor';

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

    const editorRef = useRef(null);
    const containerRef = useRef(null);
    const [editor, setEditor] = useState(null);

    useEffect(() => {
        // Create editor if it doesn't exist
        if (containerRef.current && !editor) {
            const monacoEditor = Monaco.editor.create(containerRef.current, {
                value: value || '',
                language: language || 'javascript',
                theme: theme || 'vs-light',
                readOnly: readOnly || false,
                height: height || '300px',
                // Merge default options with user-provided options
                ...options,
            });

            // Set up change listener
            const changeListener = monacoEditor.onDidChangeModelContent(() => {
                const currentValue = monacoEditor.getValue();
                setProps({
                    value: currentValue,
                });
            });

            setEditor(monacoEditor);
            editorRef.current = monacoEditor;

            // Cleanup
            return () => {
                changeListener.dispose();
                monacoEditor.dispose();
            };
        }
    }, []);

    // Update value if changed externally
    useEffect(() => {
        if (editor && value !== editor.getValue()) {
            editor.setValue(value || '');
        }
    }, [value, editor]);

    // Update read-only state
    useEffect(() => {
        if (editor) {
            editor.updateOptions({ readOnly: readOnly || false });
        }
    }, [readOnly, editor]);

    // Update theme
    useEffect(() => {
        if (editor) {
            Monaco.editor.setTheme(theme || 'vs-light');
        }
    }, [theme, editor]);

    // Prepare ID and data attributes
    const componentId = typeof id === 'object' ? id.id : id;
    const dataAttributes = typeof id === 'object'
        ? Object.keys(id)
            .filter(key => key !== 'id')
            .reduce((acc, key) => {
                acc[`data-${key}`] = id[key];
                return acc;
            }, {})
        : {};

    return (
        <div
            id={componentId}
            ref={containerRef}
            className={className}
            style={{
                height: height || '300px',
                width: '100%',
                ...style
            }}
            {...dataAttributes}
        />
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
     */
    height: PropTypes.string,

    /**
     * The language of the editor
     */
    language: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Current code/content
     */
    value: PropTypes.string,

    /**
     * Editor theme
     */
    theme: PropTypes.string,

    /**
     * Make editor read-only
     */
    readOnly: PropTypes.bool,

    /**
     * Additional Monaco Editor options
     */
    options: PropTypes.object,

    /**
     * Additional CSS class for the container
     */
    className: PropTypes.string,

    /**
     * Inline styles for the container
     */
    style: PropTypes.object,
};

export default MonacoDashEditor;