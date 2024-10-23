import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";


const NiceBoat =({name, description, picture})=> {
    return (
        <View>
            <Text>
                <Icon name='sailboat' size={50} color="#2f4182"/>
                {name}
            </Text>
            <Text>
                {description}
            </Text>
            <Image source={picture} style={{width: 407}}/>
        </View>

    );
};

const AllBoats = () => {
    return (
        <ScrollView>
            <Text>
                GetABoat - For Sale
            </Text>
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
        </ScrollView>
    );
};

export default AllBoats;
