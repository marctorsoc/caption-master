import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";
import { sentencesSample } from "../../assets/mocks";
import { useContext } from "react";
import { GlobalContext } from "../../context/global-context";
import MaskedText from "../UI/MaskedText";
function getEmoji(language) {
  return language.slice(0, 4);
}
import Button from "../UI/Button";

function StoryItem({
  id,
  title,
  learning_lc,
  known_lc,
  status,
  isLeaf,
}) {
  const navigation = useNavigation();
  const { data, setData } = useContext(GlobalContext);

  function storyPressHandler() {
    // if this is the leaf of a story, play
    if (isLeaf == true) {
      navigation.navigate("PlayStory", { storyId: id });
      return;
    }
    // TODO: make a setShowLibraryBackButton
    setData({ ...data, showLibraryBackButton: true });
    navigation.navigate("Library", {
      parentId: id,
    });
  }

  return (
    // TODO: use Pressable in Android and TouchableWithoutFeedback
    // for the web via Platform.select
    // TODO marc: start by using the same button everywhere
    <Button
      onPress={storyPressHandler}
      style={styles.StoryItemWrapper}
    >
      <View style={styles.StoryItem}>
        <Text style={[styles.textBase, styles.title]}>{title}</Text>
        <View style={styles.langsContainer}>
          <Text style={styles.language}>{getEmoji(learning_lc)}</Text>
          <Text style={styles.language}>{getEmoji(known_lc)}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    </Button>
  );
}

export default StoryItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  StoryItemWrapper: {
    marginVertical: "2.5%",
    flex: 1 / 2,
  },
  StoryItem: {
    // TODO: extract some style from here to merge with
    // sentences in PlayStory
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 12,
    textAlign: "center",
    marginHorizontal: "5%",
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  title: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
  langsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  language: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
  },
  status: {
    color: "white",
    margin: 10,
    fontSize: 15,
    textAlignVertical: "center",
  },
});
