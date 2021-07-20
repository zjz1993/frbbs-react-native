import * as React from "react";
import {Text,View} from 'react-native';
type Props = {
    title?:string;
}
const Button:React.FC<Props> = ({title}) => {
    return <View><Text>button:{title}</Text></View>
}
export default Button;
