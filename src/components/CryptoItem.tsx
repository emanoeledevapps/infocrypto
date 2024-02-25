import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { CryptoProps } from "../interfaces/crypto";
import { getImageCrypto } from "../services/getImageCrypto";
import { useNavigation } from "@react-navigation/native";

interface Props{
    data: CryptoProps;
}

export function CryptoItem({data}: Props){
    const navigation = useNavigation();
    const [imageUrl, setImageUrl] = useState(getImageCrypto(data.symbol));

    return(
        <TouchableOpacity 
            style={{marginBottom: 10, padding: 10, borderRadius: 8, backgroundColor: '#eee', flexDirection: 'row', justifyContent: 'space-between', elevation: 3}}
            onPress={() => navigation.navigate('DetailCrypto', {crypto: data})}
        >   
            <View style={{flexDirection: 'row'}}>
                {imageUrl && (
                    <Image
                        source={{uri: imageUrl}}
                        style={{width: 50, height: 50}}
                    />
                )}
                <View style={{marginLeft: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#000'}}>{data.name}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#aaa'}}>24h: </Text>
                        <View style={{paddingVertical: 2, paddingHorizontal: 5, borderRadius: 10, backgroundColor: data.quote.USD.percent_change_24h < 0 ? 'red' : 'green'}}>
                            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 12}}>
                                {Intl.NumberFormat('pt-BR').format(Number(data.quote.USD.percent_change_24h).toFixed(2))} %
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(Number(data.quote.USD.price).toFixed(2))}    
                </Text>
            </View>
        </TouchableOpacity>
    )
}