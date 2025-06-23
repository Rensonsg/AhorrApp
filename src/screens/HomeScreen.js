import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { useNavigation } from "@react-navigation/native";
import { calculateTotals } from "../utils/financeUtils";

export default function HomeScreen() {
  const [transactions, setTransactions] = useState([]);
  const [totals, setTotals] = useState({ income: 0, expense: 0, balance: 0 });
  const navigation = useNavigation();

  useEffect(() => {
    const fetchTransactions = async () => {
      const snapshopt = await getDocs(collection(db, "transactions"));
      const list = snapshopt.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTransactions(list);

      setTotals(calculateTotals(list));
    };
    fetchTransactions();
  }, []);

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Resumen</Text>
      <View className="bg-gray-100 p-4 rounded mb-6">
        <Text className="text-green-600 font-semibold">
          Ingresos: ${totals.income}
        </Text>
        <Text className="text-red-600 font-semibold">
          Gastos: ${totals.expense}
        </Text>
        <Text
          className={`font-bold $ {totals.balance >= 0 ? 'text-green-500 ?' : 'text-red-700 '}`}
        >
          Balance: $ {totals.balance}
        </Text>

        
      </View>
      <Text className="text-2xl font-bold mb-4"> Mis Transacciones</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="border-b border-gray-200 py-2">
            <Text className="font-semibold">
              {" "}
              {item.category} - ${item.amount}
            </Text>
            <Text className="text-sm text-gray-500">
              {" "}
              {item.date} - {item.notes}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity
        className="bg-blue-600 p-3 rounded mt-4"
        onPress={() => navigation.navigate("AddExpense")}
      >
        <Text className="text-white text-center font-bold">
          Agregar Transacción
        </Text>
      </TouchableOpacity>
    </View>
  );
}
