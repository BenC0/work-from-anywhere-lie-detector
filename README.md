# Work From Anywhere - Lie Detector

## Brief
* [Wireframes](https://www.figma.com/file/tOBtgwqGiulbFURUhIWo7e/Lie-Detector-Tool---Teneo-%26-Don't-be-Shy?node-id=0%3A1)
* [Copy](https://docs.google.com/document/d/1FCHvWLkPFWkjLQ-ehRNf_TJCItu-jSt4X2Bpt13yu3k/edit)
* [Full brief](https://docs.google.com/document/d/1uf9Zyx0YGupyS_5ImeE78fhArMQxXu4BCb0rN4n_EsA/edit)

## Development Approach
In an effort to keep JS dependance to a minimum, any JS features will feature a HTML based backup.

### Form Progression
While form progression could normally be handled through dynamically hiding/showing elements with JS. If structured correctly, this could all be achieved through the use of `label` & `input` tags, along with the `:checked` CSS selector.

### Build Tools
#### Site Generation
* The form features 10 myths & answers (20 in total), each with 4 copy elements and the start screen also features 4 copy elements. Each of these pages are consistent in design as well, this will allow for easy generation of these pages.
* The results page differs from the other pages but this is the only page to do so.
* 11ty is an option for generating the start page and question/answer pages
#### JS
* Use Babel to ensure compatibility where necessary
* JS required for project is not complex so this may not be needed
* Lottie required for animation
* Lie detected animation should play when user answers incorrectly
* Truth detected animation should play when user answers correctly
#### CSS
* PostCSS
* No vendor prefixing - _requirement specified in brief_
#### Hubspot
* Needs to function perfectly within Hubspot
* Form should be compatible with Hubspot - _Can we set this up as a module?_

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
1. QA
   1. Mobile
      1. Start Page
         1. Logo overlayed onto content, should sit above.
      2. Question
         1. Animation
            1. Badly spaced/positioned
      3. Answer
         1. Answer image is blurry
         2. No learn more links
      4. Results
         1. Banner
            1. Image not full width
2. Summarise handover details in README