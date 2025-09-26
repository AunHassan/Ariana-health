import React, { useState } from "react";
import styled from "styled-components/native";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";




export default function AddPatientForm() {

  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    dob: "",
    gender: "Male",
    contact: "",
    email: "",
    address: "",
    emergencyName: "",
    emergencyPhone: "",
    bloodGroup: "O+",
    allergies: "",
    conditions: "",
    medications: "",
    history: "",
    familyHistory: "",
    visitDate: new Date().toISOString().split("T")[0],
    visitCause: "",
    doctorNotes: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Submit patient:", form);
    // TODO: append to profile.json or DB later
    router.back();
  };

  const InputWrap = styled(View)`
  background-color: ${(props) => (props.primary ? "#28c1a5" : "transparent")};
  border-radius: 8px;
  margin-bottom: 12px;
`;

  const Label = styled(Text)`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 600;
`;


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add Patient</Text>

      {/* Basic Info */}
      <InputWrap >
        <Label>Full Name:</Label>
        <TextInput
          placeholder="Shehbaz Sharif"
          style={styles.input}
          value={form.name}
          onChangeText={(v) => handleChange("name", v)}
        />
      </InputWrap>

      <InputWrap >
        <Label>Date Of Birth:</Label>
        <TextInput
          placeholder="September 23, 1951"
          style={styles.input}
          value={form.dob}
          onChangeText={(v) => handleChange("dob", v)}
        />
      </InputWrap>

      <InputWrap >
        <Label>Gender</Label>
        <Picker
          style={styles.picker}
          selectedValue={form.gender}
          onValueChange={(v) => handleChange("gender", v)}
        >
          <Picker.Item
            style={styles.select}
            label="Male" value="Male" />
          <Picker.Item
            style={styles.select}
            label="Female" value="Female" />
          <Picker.Item
            style={styles.select}
            label="Other" value="Other" />
        </Picker>
      </InputWrap>

      <InputWrap >
        <Label>Date Of Birth:</Label>
        <TextInput
          placeholder="September 23, 1951"
          style={styles.input}
          value={form.dob}
          onChangeText={(v) => handleChange("dob", v)}
        />
      </InputWrap>


      <TextInput
        placeholder="Contact Number"
        style={styles.input}
        value={form.contact}
        onChangeText={(v) => handleChange("contact", v)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={form.email}
        onChangeText={(v) => handleChange("email", v)}
      />

      <TextInput
        placeholder="Address"
        style={[styles.input, { height: 80 }]}
        value={form.address}
        onChangeText={(v) => handleChange("address", v)}
        multiline
      />

      <TextInput
        placeholder="Emergency Contact Name"
        style={styles.input}
        value={form.emergencyName}
        onChangeText={(v) => handleChange("emergencyName", v)}
      />
      <TextInput
        placeholder="Emergency Contact Phone"
        style={styles.input}
        value={form.emergencyPhone}
        onChangeText={(v) => handleChange("emergencyPhone", v)}
      />

      <Text style={styles.label}>Blood Group</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={form.bloodGroup}
          onValueChange={(v) => handleChange("bloodGroup", v)}
        >
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="A−" value="A−" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B−" value="B−" />
          <Picker.Item label="AB+" value="AB+" />
          <Picker.Item label="AB−" value="AB−" />
          <Picker.Item label="O+" value="O+" />
          <Picker.Item label="O−" value="O−" />
        </Picker>
      </View>

      {/* Medical Info */}
      <TextInput
        placeholder="Known Allergies"
        style={[styles.input, { height: 60 }]}
        value={form.allergies}
        onChangeText={(v) => handleChange("allergies", v)}
        multiline
      />
      <TextInput
        placeholder="Chronic Conditions"
        style={[styles.input, { height: 60 }]}
        value={form.conditions}
        onChangeText={(v) => handleChange("conditions", v)}
        multiline
      />
      <TextInput
        placeholder="Current Medications"
        style={[styles.input, { height: 60 }]}
        value={form.medications}
        onChangeText={(v) => handleChange("medications", v)}
        multiline
      />
      <TextInput
        placeholder="Past Surgeries / Medical History"
        style={[styles.input, { height: 60 }]}
        value={form.history}
        onChangeText={(v) => handleChange("history", v)}
        multiline
      />
      <TextInput
        placeholder="Family Medical History"
        style={[styles.input, { height: 60 }]}
        value={form.familyHistory}
        onChangeText={(v) => handleChange("familyHistory", v)}
        multiline
      />

      {/* Visit Info */}
      <TextInput
        placeholder="Visit Date (YYYY-MM-DD)"
        style={styles.input}
        value={form.visitDate}
        onChangeText={(v) => handleChange("visitDate", v)}
      />
      <TextInput
        placeholder="Visit Cause"
        style={[styles.input, { height: 60 }]}
        value={form.visitCause}
        onChangeText={(v) => handleChange("visitCause", v)}
        multiline
      />
      <TextInput
        placeholder="Doctor Notes (optional)"
        style={[styles.input, { height: 60 }]}
        value={form.doctorNotes}
        onChangeText={(v) => handleChange("doctorNotes", v)}
        multiline
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  label: { marginTop: 8, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#f1f2f4",
    borderRadius: 6,
    padding: 10,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginBottom: 12,
  },
});
