import react from "react";
import { View, Text, StyleSheet,ScrollView, SafeAreaView, Image } from "react-native";
import { Button } from "react-native";
import image from "../assets/hiv.png"

const STD =  () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <Image source={image} style={styles.strech}/>
                 <Text style={styles.heading}>HIV and Sexually Transmitted Diseases (STDs)</Text>

                <Text style={styles.discription}>
                Sexually transmitted diseases (STDs), also called sexually transmitted infections (STIs), 
                are infections that spread from person to person through sexual activity, including anal, 
                vaginal, or oral sex. Many health care providers use the term “infection” instead of “disease”, 
                because a person with an infection may have no symptoms but still require treatment. 
                When untreated, an STI can become a disease. HIV is a sexually transmitted infection, but it can progress to a disease 
                called acquired immunodeficiency syndrome (AIDS) when HIV infection is untreated. Other examples of STDs are chlamydia, gonorrhea, 
                human papillomavirus (HPV) infection, and syphilis. Having an STD can make it easier to get HIV. 
                For example, an STD can cause a sore or a break in the skin, which can make it easier for HIV to enter the body.
                Having HIV and another STD may increase the risk of HIV transmission. To prevent STDs, including HIV, 
                choose less risky sexual behaviors 
                and use condoms correctly every time you have sex.
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:40,
    },
    newtaskitem:{
        backgroundColor: 'red',
        paddingTop: 10,
        alignSelf:'center',
        width:300,
        paddingBottom: 20,
        borderRadius: 10,
        marginTop:20,
        marginBottom:20,
        justifyContent:'space-evenly',
    },
    discription:{
        alignContent:'center',
        fontSize: 20,
        marginBottom: 10,
        textAlign:'justify',
    },
    ScrollView: {
        marginHorizontal: 10,
    },
    heading:{
        fontWeight:'bold',
        fontSize: 20,
        marginBottom: 10,
        color:'red',
    },
    strech:{
        alignSelf:'center',
        borderRadius:30,
        width:600,
        height:619,
    }

});

export default STD;