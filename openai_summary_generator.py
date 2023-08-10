import openai_api

def generateSummary(url):
    # Get the content of the website
    website_content = openai_api.get_website_content(url)

    # Generate the summary using OpenAI
    summary = openai_api.generate_summary(website_content)

    return summary
