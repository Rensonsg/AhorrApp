import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { categories } from "../data/categories";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

export default function AddTransationScreen() {
  const navigation = useNavigation();
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0].name);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    if (!amount || isNaN(Number(amount))) {
      Alert.alert("Error", "Ingresa un monto válido");
      return;
    }

    const newTransaction = {
      id: date.now().toString(),
      type,
      amount: Number(amount),
      category,
      date,
      notes,
    };

    console.log("Transacción registrada:", newTransaction);

    Alert.alert("Exito", "Transacción guardada");
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">Nueva Transacción</Text>
      <Text className="mb-1">Tipo</Text>
      <View className="flex-row mb-4">
        <TouchableOpacity
          className={`mr-4 px-4 py-2 rounded ${
            type === "expense" ? "bg-red-500" : "bg-gray-200"
          }`}
          onPress={() => setType("expense")}
        >
          <Text
            className={`${type === "expense" ? "text-white" : "text-black"}`}
          >
            Gasto
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`mr-4 px-4 py-2 rounded ${
            type === "income" ? "bg-green-500" : "bg-gray-200"
          }`}
          onPress={() => setType("income")}
        >
          <Text
            className={`${type === "income" ? "text-white" : "text-black"}`}
          >
            Ingreso
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="mb-1">Monto</Text>
      <TextInput
        className="border p-2 mb-4 rounded"
        returnKeyType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Text className="mb-1">Categoria</Text>
      <View className="border rounded mb-4">
        <Picker
          selectedValue={category}
          onValuedChange={(itemValue) => setCategory(itemValue)}
        >
          {categories.map((cat) => (
            <Picker.Item key={cat.name} label={cat.name} value={cat.name} />
          ))}
        </Picker>
      </View>
      <Text className="mb-1">Fecha</Text>
      <TextInput
        className="border p-2 mb-4 rounded"
        value={date}
        onChange={setDate}
        placeholder="YYYY-MM-DD"
      />
      <Text className="mb-1">Notas</Text>
      <TextInput
        className="border p-2 mb-4 rounded"
        value={notes}
        onChange={setNotes}
        placeholder="Opcional"
      />
      <TouchableOpacity
        className="bg-blue-600 p-3 rounded"
        onPress={handleSubmit}
      >
        <Text className="text-white text-center font-bold">Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
