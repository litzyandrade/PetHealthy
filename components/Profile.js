import React, { useState } from 'react';
import { ScrollView, Card, Text, Image, Container } from 'native-base';

const Profile =()=>{


    return (
        <ScrollView>

            <Card>
            <Image
                    size={150}
                    alignItems= 'center'
                    justifyContent= 'center'
                    alignSelf= 'center'
                    alt="fallback text"
                    borderRadius={100}
                    source={{
                        uri: "https://-page-icon.png",
                            }}
                    fallbackSource={{
                        uri: "https://www.w3schools.com/css/img_lights.jpg",
                    }}
            />
            </Card>
        </ScrollView>
    )
}
export default Profile;