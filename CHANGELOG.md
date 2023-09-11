2023-11-09:
- Add backButton when adding new story
- Improve stories:
  - Replace ˝ and similar to split sents better 
  - Use large spaCy model to split sents better
  - Remove consecutive duplicate sents
  - Keep but bypass single word sentences
- Improve vocab:
    - Remove 1 character words
    - Add hardcoded list of English false positives
- Improve answers:
  - Token to mask: 
      - Only in vocab
      - If uppercase and not starting sent, remove from negative pool
  - Wrong answers:
    - use spaCy tags to choose words with the same tag

2023-08-28:
- Add edit story
- Fix scrolling when tapping to translate
- Remove status when no leaf story
- Add "bypassable" sents

2023-08-13:
- First usable release 🎉

...

2023-04-25:
- First build

2023-03-01
- Starting more seriously

2023-12-16
- Created expo app