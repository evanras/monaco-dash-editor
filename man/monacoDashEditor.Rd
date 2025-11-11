% Auto-generated: do not edit by hand
\name{monacoDashEditor}

\alias{monacoDashEditor}

\title{MonacoDashEditor component}

\description{

}

\usage{
monacoDashEditor(id=NULL, className=NULL, height=NULL, language=NULL,
options=NULL, readOnly=NULL, style=NULL, theme=NULL,
value=NULL)
}

\arguments{
\item{id}{Character | lists containing elements 'id', '__extras__'.
those elements have the following types:
  - id (character; required)
  - __extras__ (list with named elements and values of type character; optional). The ID used to identify this component in Dash callbacks.
Can be a string or a dictionary with additional data attributes.}

\item{className}{Character. Additional CSS class for the container
Allows custom styling of the editor container
Defaults to an empty string}

\item{height}{Character. Height of the editor
Defaults to '300px'}

\item{language}{Character. The programming language for syntax highlighting
Supports various languages like 'javascript', 'python', 'json', etc.
Defaults to 'javascript'}

\item{options}{Named list. Additional Monaco Editor configuration options
Allows fine-tuning of editor behavior and appearance
Defaults to an empty object}

\item{readOnly}{Logical. Make editor read-only
Prevents user from modifying the content
Defaults to false}

\item{style}{Named list. Inline styles for the container
Allows direct styling of the editor container
Defaults to an empty object}

\item{theme}{Character. Editor theme
Supports 'vs-light', 'vs-dark', 'hc-black'
Defaults to 'vs-light'}

\item{value}{Character. Current content/value of the editor
Defaults to an empty string}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

