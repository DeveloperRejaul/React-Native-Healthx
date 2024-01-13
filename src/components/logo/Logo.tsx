import { Image } from "react-native";
import logo from "../../assets/logo.png"
type LogoProps = {size:number}

export const Logo = ({size}:LogoProps) => <Image source={logo} style={{width:size, height:size}} />