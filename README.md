# Work From Anywhere - Lie Detector

## Brief
* [Wireframes](https://www.figma.com/file/tOBtgwqGiulbFURUhIWo7e/Lie-Detector-Tool---Teneo-%26-Don't-be-Shy?node-id=0%3A1)
* [Copy](https://docs.google.com/document/d/1FCHvWLkPFWkjLQ-ehRNf_TJCItu-jSt4X2Bpt13yu3k/edit)
* [Full brief](https://docs.google.com/document/d/1uf9Zyx0YGupyS_5ImeE78fhArMQxXu4BCb0rN4n_EsA/edit)


## Content.json
The `src/_data/content.json` file contains all the content for the website.
The structure is summarised below.
```js
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

## Hubspot Hosted Files
Various files are currently being served from the sandbox Hubspot account.
Each reference to these files is detailed below:
1. index.html
   1. Line 16 - apple-touch-icon.png
   2. Line 17 - favicon-32x32.png
   3. Line 18 - favicon-16x16.png
   4. Line 20 - Typkit font link
   5. Line 22 - index.css
   6. Line 73 - results-detector.png
   7. Line 74 - results-detector-mobile.png
   8. Line 82 - priscilla-du-preez-OEdkPaxYMXU-unsplash%201.png
   9. Line 95 - priscilla-du-preez-OEdkPaxYMXU-unsplash%201-1.png
   10. Line 256 - false-header-big.png
   11. Line 257 - mobile-false-header-big.png
   12. Line 274 - true-header-big.png
   13. Line 275 - mobile-true-header-big.png
   14. Line 291 - true-header-big.png
   15. Line 292 - mobile-true-header-big.png
   16. Line 308 - true-header-big.png
   17. Line 309 - mobile-true-header-big.png
   18. Line 324 - false-header-big.png
   19. Line 325 - mobile-false-header-big.png
   20. Line 342 - true-header-big.png
   21. Line 343 - mobile-true-header-big.png
   22. Line 358 - false-header-big.png
   23. Line 359 - mobile-false-header-big.png
   24. Line 375 - false-header-big.png
   25. Line 376 - mobile-false-header-big.png
   26. Line 393 - true-header-big.png
   27. Line 394 - mobile-true-header-big.png
   28. Line 409 - false-header-big.png
   29. Line 410 - mobile-false-header-big.png
   30. Line 586 - mobile-start.png
   31. Line 703 - lottie-player.js
   32. Line 704 - script.js
2. index.css
   1. Line 41 - true-bg.png
   2. Line 41 - false-bg.png
   3. Line 41 - results-hero-1.png
   4. Line 42 - post-2-bg-3.png
   5. Line 42 - post-2-bg-mobile-1.png
   6. Line 42 - mobile-banner-beat-1.png
   7. Line 42 - banner-left.png
   8. Line 42 - banner-right.png
3. script.js
   1. Line 135 - low-results-detector.png (URL generated dynamically in script based on user score)
   2. Line 135 - mid-results-detector.png (URL generated dynamically in script based on user score)
   3. Line 135 - high-results-detector.png (URL generated dynamically in script based on user score)
   4. Line 136 - low-mobile-results-detector.png (URL generated dynamically in script based on user score)
   5. Line 136 - mid-mobile-results-detector.png (URL generated dynamically in script based on user score)
   6. Line 136 - high-mobile-results-detector.png (URL generated dynamically in script based on user score)