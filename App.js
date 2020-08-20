
import React from 'react'
import {View,Text,StyleSheet,Image}from 'react-native'

export default function App(){
  return(
    <View style={style.container}>
      <Text style={style.text}>
        ไอ้เพชรรรรรรรรรรรรรรรรรรรรร</Text>
        <Image style={{width:150,height:150,}}
                source={{uri:'https://www.petcitiz.info/wp-content/uploads/2017/11/01-1.jpg'}}
        />
         
        <Image style={{width:150,height:150,}}
                source={{uri:'https://www.petcitiz.info/wp-content/uploads/2017/11/01-1.jpg'}}
        />
          
        <Image style={{width:150,height:150,}}
                source={{uri:'https://www.petcitiz.info/wp-content/uploads/2017/11/01-1.jpg'}}
        />
    </View>
  )   
}
const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ff8000'
  },
  text:{
    fontSize:20,
        color:'red',
        backgroundColor:'blue',
        padding:20,
  },
  image:{
    width:150,
    height:150,
  }

})
//export default App;