---
# Set layout to boilerplate and template to njk
layout: 'boilerplate.njk'
templateEngineOverride: njk
---
{# Call in content in order of appearance #}
{% include "start_page.njk" %}

{# Loop through questions and call question template #}
{%- for question in content.questions -%}
    {% include "question.njk" %}
{%- endfor -%}

<!-- {% include "results_page.njk" %} -->

{# Header called last to enable dynamic hide/show nav based on user current page #}
{% include "header.njk" %}