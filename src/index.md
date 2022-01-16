---
# Set layout to boilerplate and template to njk
layout: 'boilerplate.njk'
templateEngineOverride: njk
---
{# Loop through questions and create question inputs #}
<input type="radio" name="answer-0" id="input-answer-0" class="counter_ignore input-answer input_progress" />
{%- for question in content.questions -%}
    {#
        Question radio inputs:
        - This is checked when a user selects an asnwer.
        - .correct-answer is counted using a CSS counter
        - .counter_ignore is not counted.
        - These are mapped to the relevant CTA in the #question section below
    #}
    <input type="radio" name="question-{{ question.num }}" id="question-{{ question.num }}-correct" class="correct-answer input-answer" />
    <input type="radio" name="question-{{ question.num }}" id="question-{{ question.num }}-incorrect" class="counter_ignore incorrect-answer input-answer" />
    {#
        Answer radio input:
        - This is checked when the user clicks the primary "Next" CTA in the answer card
        - When checked the next card is displayed.
    #}
    <input type="radio" name="answer-{{ question.num }}" id="input-answer-{{ question.num }}" class="counter_ignore input-answer input_progress" />
{%- endfor -%}

{% include "results_page.njk" %}

{% include "lottie_animations.njk" %}
{# Loop through questions and create question content #}
<section class="questions">
    {%- for question in content.questions -%}
        {% include "question.njk" %}
    {%- endfor -%}
</section>
{# Loop through questions and create answer content #}
<section class="answers">
    {%- for question in content.questions -%}
        {% include "answer.njk" %}
    {%- endfor -%}
</section>
{% include "start_page.njk" %}

{# Header called last to enable dynamic hide/show nav based on user current page #}
{% include "header.njk" %}

{% include "progress_bar.njk" %}

{% include "form.njk" %}