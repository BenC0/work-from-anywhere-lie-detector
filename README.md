# Work From Anywhere - Lie Detector

## Brief
* [Wireframes](https://www.figma.com/file/tOBtgwqGiulbFURUhIWo7e/Lie-Detector-Tool---Teneo-%26-Don't-be-Shy?node-id=0%3A1)
* [Copy](https://docs.google.com/document/d/1FCHvWLkPFWkjLQ-ehRNf_TJCItu-jSt4X2Bpt13yu3k/edit)
* [Full brief](https://docs.google.com/document/d/1uf9Zyx0YGupyS_5ImeE78fhArMQxXu4BCb0rN4n_EsA/edit)


## Content.json
The `src/_data/content.json` file contains all the content for the website.
The structure is summarised below.
```json
    // Start page content
    // Content is used in the "src/_includes/start_page.njk" template
    "startPage": {
        "content": {
            "hero_title": "Example Title",
            "hero_subheading": "Example Subheading",
            "hero_body": "Example body content",
            "hero_CTA": "Example"
        }
    },
    // Questions array of objects containing content for each question
    // Content is used in the "src/_includes/question.njk" template
    "questions": [
        {
            // num is used for identifying the order of the questions
            "num": "1",
            // ca is the `correct answer`
            // True or False
            // This is used for styling the answer card
            "ca": "False",
            // content for the question.
            "content": {
                "statement": "True or false?",
                "question": "Example question"
            },
             // content for the answer
            "answer": {
                "header": "False!",
                "copy": "Example body copy"
            }
        },
        // This format is repeated for each of the 10 questions
        // ....
    ],
    "resultsPage": {
        // Hero content
        "hero": "Example hero content",
        "subheading": "Example hero subheading",
        // Component two content
        "component_two_leading_copy": "Continue reading...",
        "component_two_heading": "Example heading",
        "component_two_subheading": "Example subheading",
        "component_two_body": "Example body content",
        "component_two_cta_one": "Read now",
        "component_two_cta_two": "Read later – send link to email",
        // Component three content
        "component_three_heading": "Example heading",
        "component_three_body": "Example body content",
        "component_three_cta_one": "Learn more",
        // Form content
        "form_heading": "Get instant access to our insider content"
    },
    // Navigation links
    // Array of object with `copy` and `url` props
    "navigation_links": [
        {
            "copy": "2021 Work From Anywhere: IT Impact Report",
            "url": "https://www.teneo.net/blog/work-from-anywhere-it-impact-report/"
        },
    ]
```

## TODO
1. Icon on Learn more CTA disappeared
2. Summarise handover details in README
   1. Things I need
      1. Learn more links
   2. Make a note of all the URLs so they can easily update
   3. Github
3. 