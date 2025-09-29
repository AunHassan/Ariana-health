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
    first_name: "",
    last_name: "",
    dob: "",
    gender: "Male",
    relation: "Mother",
    otherRelation: "",
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
      <InputWrap>
        <Label>First Name:</Label>
        <TextInput
          placeholder="Shehbaz"
          style={styles.input}
          value={form.first_name}
          onChangeText={(v) => handleChange("first_name", v)}
        />
      </InputWrap>

      <InputWrap>
        <Label>Last Name:</Label>
        <TextInput
          placeholder="Sharif"
          style={styles.input}
          value={form.last_name}
          onChangeText={(v) => handleChange("last_name", v)}
        />
      </InputWrap>

      <InputWrap>
        <Label>Date Of Birth:</Label>
        <TextInput
          placeholder="September 23, 1951"
          style={styles.input}
          value={form.dob}
          onChangeText={(v) => handleChange("dob", v)}
        />
      </InputWrap>

      <InputWrap>
        <Label>Gender:</Label>
        <Picker
          style={styles.picker}
          selectedValue={form.gender}
          onValueChange={(v) => handleChange("gender", v)}
        >
          <Picker.Item style={styles.select} label="Male" value="Male" />
          <Picker.Item style={styles.select} label="Female" value="Female" />
          <Picker.Item style={styles.select} label="Other" value="Other" />
        </Picker>
      </InputWrap>

      <InputWrap>
        <Label>Relation:</Label>
        <Picker
          style={styles.picker}
          selectedValue={form.relation}
          onValueChange={(v) => handleChange("relation", v)}
        >
          <Picker.Item style={styles.select} label="Mother" value="Mother" />
          <Picker.Item style={styles.select} label="Father" value="Father" />
          <Picker.Item style={styles.select} label="Brother" value="Brother" />
          <Picker.Item style={styles.select} label="Sister" value="Sister" />
          <Picker.Item style={styles.select} label="Spouse" value="Spouse" />
          <Picker.Item style={styles.select} label="Son" value="Son" />
          <Picker.Item
            style={styles.select}
            label="Daughater"
            value="Daughater"
          />
          <Picker.Item style={styles.select} label="Other" value="Other" />
        </Picker>
      </InputWrap>

      <InputWrap>
        <Label>Contact Number:</Label>
        <TextInput
          placeholder="0300 0001112"
          style={styles.input}
          value={form.contact}
          onChangeText={(v) => handleChange("contact", v)}
        />
      </InputWrap>

      {/* <TextInput
        placeholder="Contact Number"
        style={styles.input}
        value={form.contact}
        onChangeText={(v) => handleChange("contact", v)}
      /> */}

      <InputWrap>
        <Label>Email:</Label>
        <TextInput
          placeholder="username@gmail.com"
          style={styles.input}
          value={form.email}
          onChangeText={(v) => handleChange("email", v)}
        />
      </InputWrap>
      {/* <TextInput
        placeholder="Email"
        style={styles.input}
        value={form.email}
        onChangeText={(v) => handleChange("email", v)}
      /> */}

      <InputWrap>
        <Label>Address</Label>
        <TextInput
          placeholder="Address"
          style={[styles.input, { height: 80 }]}
          value={form.address}
          onChangeText={(v) => handleChange("address", v)}
          multiline
        />
      </InputWrap>

      {/* <TextInput
        placeholder="Address"
        style={[styles.input, { height: 80 }]}
        value={form.address}
        onChangeText={(v) => handleChange("address", v)}
        multiline
      /> */}

      <InputWrap>
        <Label>Emergency Contact Name</Label>
        <TextInput
          placeholder="Asim Munir"
          style={styles.input}
          value={form.emergencyName}
          onChangeText={(v) => handleChange("emergencyName", v)}
        />
      </InputWrap>

      <InputWrap>
        <Label>Emergency Contact Phone:</Label>
        <TextInput
          placeholder="General Asim Munir"
          style={styles.input}
          value={form.emergencyPhone}
          onChangeText={(v) => handleChange("emergencyPhone", v)}
        />
      </InputWrap>

      <Label>Blood Group:</Label>
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

      {/* <InputWrap>
        <Label>Blood Group:</Label>
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
          <Picker.Item label="Don't Know" value="Don't Know" />
        </Picker>
      </InputWrap> */}

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
