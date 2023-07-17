```python
from openai_api import generateSummary

def displaySummary(summary):
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Summary</title>
        <style>
            body {{
                font-family: Arial, sans-serif;
            }}
            .summary-container {{
                margin: 50px;
            }}
        </style>
    </head>
    <body>
        <div class="summary-container">
            <h1>Summary</h1>
            <p>{summary}</p>
        </div>
    </body>
    </html>
    """
    return html

if __name__ == "__main__":
    text = "Your text to summarize goes here"
    summary = generateSummary(text)
    html = displaySummary(summary)
    with open("summary.html", "w") as f:
        f.write(html)
```