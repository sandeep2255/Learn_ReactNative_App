import react from "react";
import { View, Text, StyleSheet,ScrollView, SafeAreaView, Image } from "react-native";
import { Button } from "react-native";
import image from '../assets/pr.png';

const Contraception =  () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                 <Text style={styles.heading}>CONTRACEPTION</Text>

                <Text style={styles.discription}>
                Many elements need to be considered by women, men, or couples at any given point in their lifetimes when choosing 
                the most appropriate contraceptive method. These elements include safety, effectiveness, availability 
                (including accessibility and affordability), and acceptability. Voluntary informed choice of contraceptive methods is
                 an essential guiding principle, and contraceptive counseling, when applicable, might be an important contributor 
                 to the successful use of contraceptive methods.
                In choosing a method of contraception, dual protection from the simultaneous risk for HIV and other STDs also 
                should be considered. Although hormonal contraceptives and IUDs are highly effective at preventing pregnancy, 
                they do not protect against STDs, including HIV. Consistent and correct use of the male latex condom reduces the 
                risk for HIV infection and other STDs, including chlamydial infection, gonococcal infection, and trichomoniasis.
                </Text>
                <Text style={styles.heading}>INTRAUTERINE CONTRACEPTION</Text>
                <Text style={styles.discription}><Text style={styles.subhead}>Levonorgestrel intrauterine system (LNG IUD)</Text> —> The LNG IUD is a small T-shaped device like the Copper T IUD. 
                    It is placed inside the uterus by a doctor. It releases a small amount of progestin each day to keep you 
                    from getting pregnant. The LNG IUD stays in your uterus for up to 3 to 6 years, depending on the device. 
                    Typical use failure rate: 0.1-0.4%.</Text>

                <Text style={styles.discription}><Text style={styles.subhead}>Copper T intrauterine device (IUD)</Text> —> This IUD is a small device that is shaped in the form of a “T.” 
                    Your doctor places it inside the uterus to prevent pregnancy. 
                    It can stay in your uterus for up to 10 years. Typical use failure rate: 0.8%.
                </Text>
                <Text style={styles.heading}>HORMONAL METHODS</Text>
                <Text style={styles.discription}><Text style={styles.subhead}>Implant</Text> —> The implant is a single, thin rod that 
                is inserted under the skin of a women’s upper arm. 
                The rod contains a progestin that is released into the body over 3 years. Typical use failure rate: 0.1%.</Text>

                <Text style={styles.discription}><Text style={styles.subhead}>Injection or “shot”</Text> —> Women get shots of the hormone progestin in 
                the buttocks or arm every three months from their doctor. 
                Typical use failure rate: 4%.
                </Text>

                <Text style={styles.discription}><Text style={styles.subhead}>Combined oral contraceptives</Text> —> Also called “the pill,” 
                combined oral contraceptives contain the hormones estrogen and progestin. It is prescribed by a doctor. A pill is taken at the 
                same time each day. If you are older than 35 years and smoke, 
                have a history of blood clots or breast cancer, your doctor may advise you not to take the pill. Typical use failure rate: 7%.
                </Text>

                <Text style={styles.discription}><Text style={styles.subhead}>Progestin only pill</Text>—> Unlike the combined pill, the 
                progestin-only pill (sometimes called the mini-pill) only has one hormone, progestin, instead of both estrogen and progestin. 
                It is prescribed by a doctor.
                 It is taken at the same time each day. It may be a good option for women who can’t take estrogen. Typical use failure rate: 7%
                </Text>

                <Text style={styles.discription}><Text style={styles.subhead}>Patch</Text>—> This skin patch is worn on the lower abdomen, 
                buttocks, or upper body (but not on the breasts). This method is prescribed by a doctor. It releases hormones progestin and 
                estrogen into the bloodstream. You put on a new patch once a week for three weeks. During the fourth week, you do not wear a patch,
                so you can have a menstrual period. 
                Typical use failure rate: 7%.
                </Text>

                <Text style={styles.discription}><Text style={styles.subhead}>Hormonal vaginal contraceptive ring</Text>—> The ring releases the hormones
                 progestin and estrogen. You place the ring inside your vagina. You wear the ring for three weeks,
                 take it out for the week you have your period, and then put in a new ring. Typical use failure rate: 7%.
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
    },
    subhead:{
        fontWeight:'bold',
    }

});

export default Contraception;