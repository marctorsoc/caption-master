import { StyleSheet, Text, TextInput, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import { Picker } from "@react-native-picker/picker";

export function Input({ label, invalid, style, textInputConfig }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export function PickerInput({ label, invalid, style, pickerConfig }) {
  const containerStyle = [
    style,
    styles.inputContainer,
    {
      // useful to see frame of component
      // backgroundColor: GlobalStyles.colors.error500,
      marginBottom: 10,
    },
  ];
  const pickerViewStyle = {
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 12,
    overflow: "hidden",
  };

  return (
    <View style={containerStyle}>
      <Text style={[styles.label, { textAlign: "center" }]}>
        {label}
      </Text>
      <View style={pickerViewStyle}>
        <Picker
          selectedValue={pickerConfig.value}
          mode={"dropdown"}
          onValueChange={pickerConfig.onChangeText}
        >
          {pickerConfig.options.map((item, index) => (
            <Picker.Item
              key={index}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary50,
    color: GlobalStyles.colors.primary800,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
