import { createContext, useState } from "react";
export const PlayContext = createContext({});

export const initialPlayData = {
  currentSentenceIdx: 0,
  currentAnswerIdx: undefined,
  numSentences: undefined,
  numWrongAnswers: 0,
  numCorrectAnswers: 0,
  numAnswersToGo: 0,
  storyId: undefined,

  // these are global to the story. When a game is loaded,
  // startIdx = story.done. endIdx = story.done + numSentences
  // and they are used for the `GameStatusBox` to show what
  // sentences are being shown. This includes also when the
  // user is reviewing the previous sentences
  startIdx: 0,
  endIdx: 0,
  // we show the last
  // globalContext.historyLength * globalContext.numSentencesPerGame
  // this is the global index of the first sentence shown.
  startHistoryIdx: 0,
  processingClickedTranslation: false,
};

export function PlayContextProvider({ children }) {
  const [playData, setPlayData] = useState(initialPlayData);

  return (
    <PlayContext.Provider value={{ playData, setPlayData }}>
      {children}
    </PlayContext.Provider>
  );
}
