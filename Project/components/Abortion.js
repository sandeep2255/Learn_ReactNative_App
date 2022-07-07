import react from "react";
import { View, Text, StyleSheet,ScrollView, SafeAreaView, Image } from "react-native";
import { Button } from "react-native";
import image from '../assets/pr.png';

const Abortion =  () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                 <Text style={styles.heading}>ABORTION</Text>

                <Text style={styles.discription}>
                Abortion is the termination of a pregnancy by removal or expulsion of an embryo or fetus.
                An abortion that occurs without intervention is known as a miscarriage or "spontaneous abortion"; 
                these occur in approximately 30% to 40% of pregnancies.
                When deliberate steps are taken to end a pregnancy, it is called an induced abortion, 
                or less frequently "induced miscarriage". The unmodified word abortion generally refers to an induced abortion.
                When properly done, induced abortion is one of the safest procedures in medicine.
                In the United States, the risk of maternal mortality is 14 times lower after induced abortion than after childbirth.
                However, unsafe abortions—those performed by people lacking the necessary skills, or in inadequately resourced 
                settings—are a major cause of maternal death, especially in the developing world.
                Public-health data show that making safe abortion legal and accessible reduces maternal deaths.
                Modern methods use medication or surgery for abortions.The drug mifepristone in combination with
                prostaglandin appears to be as safe and effective as surgery during the first and second trimester of pregnancy.
                The most common surgical technique involves dilating the cervix and using a suction device.
                Birth control, such as the pill or intrauterine devices, can be used immediately following abortion.
                When performed legally and safely on a woman who desires it, induced abortions do not increase the risk of long-term 
                mental or physical problems. In contrast, unsafe abortions (those performed by unskilled individuals, with 
                hazardous equipment, or in unsanitary facilities) cause 47,000 deaths and 5 million hospital admissions each year.
                The World Health Organization states that "access to legal, safe and comprehensive abortion care, 
                including post-abortion care, is essential for the attainment of the highest possible level of sexual and reproductive
                health".
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
        width:400,
        height:300,
    }

});

export default Abortion;