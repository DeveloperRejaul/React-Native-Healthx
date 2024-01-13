import { StyleSheet  } from "react-native";
import { colors } from "src/constants/colors";
import { rf } from "src/utils/size";

 export const styles = StyleSheet.create({
    bodyoutline:{
        borderWidth:2,
        borderColor:colors.lightBlue600,
        width:"100%",
        borderRadius:10
    },
    bodynormal:{
        backgroundColor:colors.lightBlue600,
        width:"100%",
        borderRadius:10
    },
    textoutline:{
        color:colors.lightBlue600, 
        paddingHorizontal:20,
        paddingVertical: 7,
        textAlign:"center",
        fontSize:rf(2),
        fontWeight:"600"
    },
    textnormal:{
        color:colors.coolGray100, 
        paddingHorizontal:20,
        paddingVertical: 7,
        textAlign:"center",
        fontSize:rf(2),
        fontWeight:"700"
    }
})