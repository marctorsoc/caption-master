2024-03:
- Add reading mode
- Add delete story
- Immersive mode: hide back, home controls
- Cleaning:
  - Code around showTranslation, started showing translation when passthrough, and hiding for previous sents in current round
  - Fixed language pickers in settings for Android: widths and colours
  - Starting Google sign in

2023-12-26:
- Better sentencization:
  - We used to join all text, then split with spaCy sentencizer. Now relying on subtitles splits, and joining "..." or starting with lowercase
  - Split into two sents if "\n" found
- Better vocabulary generation. Adding extra words to complement spacy.vocab.strings, based on 1) wordnet, 2) unimorph
- Better answer generation. Now can mask sentences with only one maskable token but multiple non-maskable (but still valid tokens i.e. alpha and len <=2)
- Translating texts in Colab: https://colab.research.google.com/drive/182W-BRAL8cyQ3xFn-M-CdeTDE9uyGj-L#scrollTo=ZYEGSAWziUJY


2023-10-31:
- Add show totals and avoid editing > total
- Move languages to the settings screen and filter by language
- Dirty fix to scroll when omitted sentence


2023-10-11:
- Add ability to import data to filesystem (only Android)
- Still some repeated and 1 word sentences (strip "-" at the end of sentences)
- Still some english words in vocab
- Check if complete and show Completed
- Copy to clipboard when holding sentence

2023-09-11:
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