import {View, Text} from 'react-native';
import { Image } from 'react-native';

interface HeaderWithIconProps {
    text?: string;
    icon?: string;
    title?: string;
}



const IconP = ( type?: "clap"|"wave"|"post"|"lock") =>{
    switch (type) {
        case "clap":
            return <Image source={require('../assets/Claps.png')} style={{width: 20, height: 20}} />
        case "wave":
            return <Image source={require('../assets/Wave.png')} style={{width: 20, height: 20}} />
        case "post":
            return <Image source={require('../assets/Post.png')} style={{width: 20, height: 20}} />
        case "lock":
            return <Image source={require('../assets/Lock.png')} style={{width: 20, height: 20}} />
        default:
            return null;
    }
}

export default function HeaderWithIcon({text, icon, title}: HeaderWithIconProps) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconP type={icon} />
            <Text>{title}</Text>
            <Text>{text}</Text>
        </View>
    );
}