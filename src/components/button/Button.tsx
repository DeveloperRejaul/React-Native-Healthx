import {type IButtonTypes} from "./type"
import { Pressable, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import { rw } from "src/utils/size"

export default function Button(props:IButtonTypes) {

const {
    text,
    type = "normal",
    onPress,
    textStyle,
    bodyStyle
} = props

  return (
    <Pressable onPress={onPress} style={[styles[`body${type}`],bodyStyle]}>
      <Text style={[styles[`text${type}`],textStyle]}>{text}</Text>
    </Pressable>
  )
}
