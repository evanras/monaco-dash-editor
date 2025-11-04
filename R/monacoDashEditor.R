# AUTO GENERATED FILE - DO NOT EDIT

#' @export
monacoDashEditor <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MonacoDashEditor',
        namespace = 'monaco_dash_editor',
        propNames = c('id', 'label', 'value'),
        package = 'monacoDashEditor'
        )

    structure(component, class = c('dash_component', 'list'))
}
