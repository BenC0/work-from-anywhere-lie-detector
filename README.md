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

## TODO

1. Animation needs updating - _Asset pending_
2. Form needs building & integrating with Hubspot - _Ask Kess for clarification on how far I should go with this, I might be limited by sandbox vs real enviroment_
3. Mobile design - _need to send notes to Kess_