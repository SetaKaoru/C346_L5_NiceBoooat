import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    parentBoat: {
        flexDirection: 'column',
        backgroundColor: 'lightskyblue',
        borderWidth: 2,
        margin: 10
    },
    Child: {
        flex: 1,
        borderWidth: 2,
        alignItems: 'center',
        maxWidth: 400
   },
    Title: {
        marginTop: 20,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: 'darkseagreen'
   },
    Des: {
        marginTop: 8,
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        textAlign: 'center',
        borderWidth: 1,
        fontSize: 17,
        backgroundColor: 'lightsteelblue'
    },
    Name: {
        flex: 1,
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
        marginTop: 50,
        fontWeight: 'bold',
        backgroundColor: 'yellow'
    },
});

const NiceBoat =({name, description, picture})=> {
    return (
        <View style={styles.Child}>
            <Text style={styles.Title}>
                <Icon name='sailboat' size={25} color="#2f4182"/>
                {name}
            </Text>
            <Text style={styles.Des}>
                {description}
            </Text>
            <Image source={picture} style={{width: 385, marginTop: 8, marginBottom: 8}}/>
        </View>

    );
};

const AllBoats = () => {
    return (
        <ScrollView>
            <View>
                <Text style={styles.Name}>
                    GetABoat - For Sale
                </Text>
            </View>
            <View style={styles.parentBoat}>
                <Text>
                    <NiceBoat name='Sea Ray 500 Sundancer'
                              description='Contoured lines and dramatic styling reveal a refined and powerful
                presence that will take your breath away.'
                              picture={require("../img/sea_ray.jpg")}/>
                    <NiceBoat name='Four Winns Horizon 180'
                              description='A sporty look and refined details truly set the Horizon 180 above all others.'
                              picture={require("../img/four_winns.jpg")}/>
                    <NiceBoat name='Flipper 640 ST'
                              description='A modern take on the classic, traditional hardtop and perfect for a family picnic.'
                              picture={require("../img/flipper.jpg")}/>
                    <NiceBoat name='Princess V48'
                              description='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'
                              picture={require("../img/princess.jpg")}/>
                    <NiceBoat name='Bayliner 175 Bowrider'
                              description='Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'
                              picture={require("../img/bayliner.jpg")}/>
                    <NiceBoat name='Fairline Targa 47'
                              description='Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'
                              picture={require("../img/fairline.jpg")}/>
                </Text>

            </View>

        </ScrollView>
    );
};

export default AllBoats;
