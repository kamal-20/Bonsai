import React from 'react'
import { Button } from 'react-native-elements';
import {navigate} from '../navigatorRef';
import { withNavigation } from 'react-navigation';


const RoundButton = ({title,color,navigation,path,onPress}) => {
    return (
        <Button
            title={title}
            buttonStyle={{
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: `${color}`,
                marginLeft: 30,
                marginRight: 30,
                margin: 10,
                height: 50,
                width: 300
            }}
            onPress={
                path
                ?()=>navigate(path)
                :()=>{OnPress}
            }
            
        />

    )
}

export default withNavigation(RoundButton);
