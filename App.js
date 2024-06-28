// import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import React from "react";

// const App = () => {
//     const TextInputCustom = ({name, color}) => {
//         return (
//             <TextInput placeholder={` ${name}`}
//             style={{
//                 borderColor:'gray',
//                 width:'90%',
//                 height:'64px',
//                 marginBottom:10,
//                 padding:10,
//                 color:color,
//                 backgroundColor:'white',
//                 shadowColor:'black',
//                 shadowRadius:1,
//                 shadowOpacity:0.2
//             }}
//             />
//         )
//     }

// const ButtonCustom =({color, text}) => {
//     return (
//         <View style={{
//             backgroundColor:color,
//             width:'90%',
//             height:50,
//             borderRadius:20,
//             justifyContent:'center'
//         }}>
//             <Text style={{
//                 textAlign:'center',
//                 fontSize:15,
//                 color:'white'
//             }}> {text}

//             </Text>
//         </View>
//     )
// }

// return (
//     <View style={{
//         flex:1,
//         backgroundColor:'#F5F5F5'
//     }}>
//         <View style={{
//             flex:1,
//             alignItems:'flex-start',
//             justifyContent:'flex-start',
//             width:'100%',
//             paddingLeft:'14px',
//             top:106
//         }}>
//             <Text style={{
//                 fontSize:'34px',
//                 lineHeight:'34px',
//                 fontWeight:'bold',
//                 color:'#222222'
//             }}>Forgot Password</Text>
//         </View>

//         <View style={{
//             flex:1,
//         }}>
//             <Text style={{
//                 color:'#222222',
//                 alignSelf:'center',
//                 padding:20,
//                 bottom:50
//             }}>Please, enteer your email addrerss. You will receive a link to create a new password via email.</Text>
//         </View>

//         <View style={{
//             flex:1,
//             width:'100%',
//             height:'64px',
//             bottom:180,
//             alignItems:'center',
//             alignSelf:'center'
//         }}>
//             <TextInputCustom name='Email' color='#666666'/>
//         </View>


//         <View style={{
//             flex:1,
//             justifyContent:'flex-end',
//             alignItems:'center',
//             bottom:500,
//             width:'100%'
//         }}>
//             <ButtonCustom color='red' text='SEND'/>
//         </View>
//         </View>
// )
// }
// export default App

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const App = () => {
    const [fontsLoaded, fontError] = useFonts({
        'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
        'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
        'Metro-Light': require('./assets/fonts/Metropolis-Light.otf'),
        'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
        'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    })

    if (!fontsLoaded) return <View>
        <Text>Font Tidak Ditemukan</Text>
    </View>

    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: 30
            }}>Font Biasa</Text>
            <Text style={{
                fontSize: 30,
                fontFamily:'Metro-Bold'
            }}>Font Metro Bold</Text>
            <Text style={{
                fontSize: 30,
                fontFamily:'Metro-Black'
            }}>Font Metro Black</Text>
            <Text style={{
                fontSize: 30,
                fontFamily:'Metro-Light'
            }}>Font Metro Light</Text>
            <Text style={{
                fontSize: 30,
                fontFamily:'Metro-Medium'
            }}>Font Metro Medium</Text>
            <Text style={{
                fontSize: 30,
                fontFamily:'Metro-SemiBold'
            }}>Font Metro Semi Bold</Text>

        </View>
    )
}

export default App