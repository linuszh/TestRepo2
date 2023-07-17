import openai
import os

openai_key = os.getenv("OPENAI_KEY", "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")
openai.api_key = openai_key

def generate_summary(text):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=text,
        temperature=0.5,
        max_tokens=100
    )
    return response.choices[0].text.strip()