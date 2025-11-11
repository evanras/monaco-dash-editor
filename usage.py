import dash
from dash import html, dcc
from dash.dependencies import Input, Output, State
import datetime as dt
from monaco_dash_editor import MonacoDashEditor 

# Initialize the Dash app
app = dash.Dash(__name__)

# Define the layout
app.layout = html.Div(style={"margin": "4em"}, children=[
    # JSON Editor
    # Theme Selector
    html.Div([
        html.H3("Theme Selector"),
        dcc.Dropdown(
            id="theme-selector",
            options=[
                {"label": "Light", "value": "vs-light"},
                {"label": "Dark", "value": "vs-dark"},
                {"label": "High Contrast", "value": "hc-black"}
            ],
            value="vs-light",
            clearable=False
        )
    ]),
    html.Div([
        html.Button(id="display-editor", children=["Click to show"]),
        html.H3("JSON Editor"),
        html.Div(
            id="dynamic-monaco",
            style={"display": "none"},
            children=[
                MonacoDashEditor(
                    theme="vs-dark",
                    id="json-editor",
                    language="json",
                    height="300px",
                    value="""{
                        "name": "John Doe",
                        "age": 30,
                        "city": "New York",
                        "isStudent": false,
                        "hobbies": [
                            "reading",
                            "swimming",
                            "coding"
                        ]
                    }""",
                    options={
                        "automaticLayout": True,
                        "minimap": {"enabled": False},
                        "formatOnType": True
                    }
                ),
            ]
        ),
       html.Div(id="json-output")
    ]),

    # YAML Editor
    html.Div([
        html.H3("YAML Editor"),
        MonacoDashEditor(
            id="yaml-editor",
            language="yaml",
            height="300px",
            value="""# Kubernetes Deployment Example
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
""",
            readOnly=False,
            options={
                "fontSize": 12,
                "wordWrap": "on",
                "theme": "vs-dark"
            }
        ),
        html.Div(id="yaml-output")
    ]),

    # Python Code Editor
    html.Div([
        html.H3("Python Code Editor"),
        MonacoDashEditor(
            id="python-editor",
            language="python",
            height="300px",
            value="""def fibonacci(n):
    \"\"\"Generate Fibonacci sequence up to n.\"\"\"
    sequence = [0, 1]
    while sequence[-1] + sequence[-2] <= n:
        sequence.append(sequence[-1] + sequence[-2])
    return sequence

# Example usage
print(fibonacci(100))
""",
            theme="vs-dark",
            options={
                "lineNumbers": "on",
                "glyphMargin": True,
                "folding": True
            }
        ),
        html.Div(id="python-output")
    ]),

    # SQL Editor
    html.Div([
        html.H3("SQL Editor"),
        MonacoDashEditor(
            id="sql-editor",
            language="sql",
            height="300px",
            value="""-- Sample SQL Query
SELECT 
    customer_id, 
    first_name, 
    last_name, 
    email
FROM 
    customers
WHERE 
    country = "USA"
ORDER BY 
    last_name ASC
LIMIT 10;
""",
            options={
                "wordSeparators": "/\\(){}[].,;:\"\'",
                "quickSuggestions": True
            }
        ),
        html.Div(id="sql-output")
    ]),
])

# Callback to update theme for all editors
@app.callback(
    [
        Output("json-editor", "theme"),
        Output("yaml-editor", "theme"),
        Output("python-editor", "theme"),
        Output("sql-editor", "theme")
    ],
    [Input("theme-selector", "value")]
)
def update_theme(selected_theme):
    return [selected_theme] * 4

# Callbacks to demonstrate editor interactions
@app.callback(
    Output("json-output", "children"),
    [Input("json-editor", "value")]
)
def update_json_output(value):
    return f"JSON Content: {value}"

@app.callback(
    Output("yaml-output", "children"),
    [Input("yaml-editor", "value")]
)
def update_yaml_output(value):
    return f"YAML Content: {value}"

@app.callback(
    Output("python-output", "children"),
    [Input("python-editor", "value")]
)
def update_python_output(value):
    return f"Python Code: {value}"

@app.callback(
    Output("sql-output", "children"),
    [Input("sql-editor", "value")]
)
def update_sql_output(value):
    return f"SQL Query: {value}"


@app.callback(
    Output("dynamic-monaco", "style"),
    Input("display-editor", "n_clicks"),
    prevent_initial_call=True,
)
def display_monaco_editor(n_clicks):
    return {
        "display": "block", 
        "width": "100%",  # Ensure full width
        "height": "300px"  # Specify height
    }

# Run the app
if __name__ == "__main__":
    app.run(debug=True)