import * as React from "react";
import { Text, View } from 'react-native';
const Button = ({ title }) => {
    return <View><Text>这是我的ui库第一个组件</Text><Text>传过来的title是{title}</Text></View>;
};
export default Button;
