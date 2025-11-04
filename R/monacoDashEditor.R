# AUTO GENERATED FILE - DO NOT EDIT

#' @export
monacoDashEditor <- function(id=NULL, className=NULL, height=NULL, language=NULL, options=NULL, readOnly=NULL, style=NULL, theme=NULL, value=NULL) {
    
    props <- list(id=id, className=className, height=height, language=language, options=options, readOnly=readOnly, style=style, theme=theme, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MonacoDashEditor',
        namespace = 'monaco_dash_editor',
        propNames = c('id', 'className', 'height', 'language', 'options', 'readOnly', 'style', 'theme', 'value'),
        package = 'monacoDashEditor'
        )

    structure(component, class = c('dash_component', 'list'))
}
