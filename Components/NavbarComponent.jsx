import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GrandHotel_400Regular, useFonts } from '@expo-google-fonts/grand-hotel'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const NavbarComponent = () => {

        const [isLoaded] = useFonts({
            GrandHotel_400Regular
        });

        if(!isLoaded){
            return null
        }

  return (
    <View style={Style.HeaderContainer}>
        <View>
        <Text style={[Style.WhiteText, Style.HeaderText, {fontFamily: "GrandHotel_400Regular"}]}>Instagram</Text>
        </View>

        <View style={Style.CenterMain}>
            <FontAwesomeIcon icon={faHeart} style={ {color: "white", marginRight: 25}} size={25}/>
            <FontAwesomeIcon icon={faPaperPlane} style={ {color: "white", marginRight: 25}} size={25}/>
        </View>
      
    </View>
  )
}

const Style= StyleSheet.create({
    HeaderContainer: {
        marginTop: 45,
        paddingLeft: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "Black"
    },
    WhiteText: {
        color: "white"
    },
    HeaderText: {
        fontSize: 35
    },
    CenterMain: {
        flexDirection: "row"
    }
})

export default NavbarComponent