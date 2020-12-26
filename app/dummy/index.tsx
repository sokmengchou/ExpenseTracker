import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import modules from '../modules';
export const GENDER = [
    { label: 'male', value: { key: 1, text: 'Male', code: 'M' }, icon: () => <Icon name="user" size={18} color="#900" /> },
    { label: 'female', value: { key: 2, text: 'Female', code: 'F' }, icon: () => <Icon name="user-female" size={18} color="#900" /> },
]

export const TYPE_TRANSACTION = [
    {
        label: 'Income'
    },
    {
        label: 'Expense'
    }
];

export const CATEGORY = [
    { label: 'Housing', value: { key: 1, text: 'Housing' } },
    { label: 'Transportation', value: { key: 2, text: 'Transportation' } },
    { label: 'Food', value: { key: 3, text: 'Food' } },
    { label: 'Utilities', value: { key: 4, text: 'Utilities' } },
    { label: 'Clothing', value: { key: 5, text: 'Clothing' } },
    { label: 'Medical/Healthcare', value: { key: 6, text: 'Medical/Healthcare' } },
    { label: 'Insurance', value: { key: 7, text: 'Insurance' } },
    { label: 'Household Items/Supplies', value: { key: 8, text: 'Household Items/Supplies' } },
    { label: 'Personal', value: { key: 9, text: 'Personal' } },
    { label: 'Debt', value: { key: 10, text: 'Debt' } },
    { label: 'Retirement', value: { key: 11, text: 'Retirement' } },
    { label: 'Savings', value: { key: 12, text: 'Savings' } },
    { label: 'Gifts/Donations', value: { key: 13, text: 'Gifts/Donations' } },
    { label: 'Entertainment', value: { key: 14, text: 'Entertainment' } },
    { label: 'Others', value: { key: 15, text: 'Others' } },


]

export const CURRENCY = [
    { symbol: "៛", name: "Cambodian Riel", symbol_native: "៛", decimal_digits: 2, rounding: 0, code: "KHR", name_plural: "Cambodian riels", factor: '*' },
    { symbol: "$", name: "US Dollar", symbol_native: "$", decimal_digits: 2, rounding: 0, code: "USD", name_plural: "US dollars", factor: '/' },
    { symbol: "€", name: "Euro", symbol_native: "€", decimal_digits: 2, rounding: 0, code: "EUR", name_plural: "euros", factor: '/' },
    { symbol: "฿", name: "Thai Baht", symbol_native: "฿", decimal_digits: 2, rounding: 0, code: "THB", name_plural: "Thai baht", factor: '*' },
    { symbol: "₫", name: "Vietnamese Dong", symbol_native: "₫", decimal_digits: 0, rounding: 0, code: "VND", name_plural: "Vietnamese dong", factor: '*' },
    { symbol: "¥", name: "Japanese Yen", symbol_native: "￥", decimal_digits: 0, rounding: 0, code: "JPY", name_plural: "Japanese yen", factor: '*' },
    { symbol: "CN¥", name: "Chinese Yuan", symbol_native: "CN¥", decimal_digits: 2, rounding: 0, code: "CNY", name_plural: "Chinese yuan", factor: '*' },
    { symbol: "₩", name: "South Korean Won", symbol_native: "₩", decimal_digits: 0, rounding: 0, code: "KRW", name_plural: "South Korean won", factor: '*' },
]

