```python
import openai

# Set up OpenAI API
def setup_openai():
    openai.api_key = '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'

# Generate summary with OpenAI
def generate_summary(prompt):
    setup_openai()
    response = openai.Completion.create(
      engine="davinci-codex",
      prompt=prompt,
      temperature=0.5,
      max_tokens=100
    )
    return response.choices[0].text.strip()
```