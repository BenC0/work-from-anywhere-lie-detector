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
1. index--backup.html
   1. Line 10 - apple-touch-icon.png
   2. Line 11 - favicon-32x32.png
   3. Line 12 - favicon-16x16.png
   4. Line 14 - Typkit font link
   5. Line 16 - index.css
   6. Line 64 - results-detector.png
   7. Line 65 - results-detector-mobile.png
   8. Line 73 - priscilla-du-preez-OEdkPaxYMXU-unsplash%201.png
   9. Line 86 - priscilla-du-preez-OEdkPaxYMXU-unsplash%201-1.png"
   10. Line 247 - false-header-big.png
   11. Line 248 - mobile-false-header-big.png
   12. Line 265 - true-header-big.png
   13. Line 266 - mobile-true-header-big.png
   14. Line 282 - true-header-big.png
   15. Line 283 - mobile-true-header-big.png
   16. Line 299 - true-header-big.png
   17. Line 300 - mobile-true-header-big.png
   18. Line 315 - false-header-big.png
   19. Line 316 - mobile-false-header-big.png
   20. Line 333 - true-header-big.png
   21. Line 334 - mobile-true-header-big.png
   22. Line 349 - false-header-big.png
   23. Line 350 - mobile-false-header-big.png
   24. Line 366 - false-header-big.png
   25. Line 367 - mobile-false-header-big.png
   26. Line 384 - true-header-big.png
   27. Line 385 - mobile-true-header-big.png
   28. Line 400 - false-header-big.png
   29. Line 401 - mobile-false-header-big.png
   30. Line 577 - mobile-start.png
   31. Line 694 - lottie-player.js
   32. Line 695 - script.js
2. index--backup.css
   1. Line 41 - true-bg.png
   2. Line 41 - false-bg.png
   3. Line 41 - results-hero-1.png
   4. Line 41 - post-1-bg-1.png
   5. Line 41 - post-2-bg-3.png
   6. Line 41 - post-2-bg-mobile-1.png
   7. Line 41 - mobile-banner-beat-1.png
   8. Line 41 - banner-left.png
   9. Line 41 - banner-right.png