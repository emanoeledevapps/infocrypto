import React, {useState, useEffect} from "react";
import {View, Text, FlatList, ActivityIndicator, Image} from 'react-native';
import { api } from "../../services/api";
import { CryptoProps } from "../../interfaces/crypto";
import { CryptoItem } from "../../components/CryptoItem";

export function Home(){
    const [cryptos, setCryptos] = useState<CryptoProps[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCryptos(); 
    }, []);

    async function getCryptos(){
        setLoading(true)
        const response = await api.get('/v1/cryptocurrency/listings/latest')
        setCryptos(response.data.data);
        setLoading(false);
    }

    return(
        <View style={{}}>
            <View style={{width: '100%', height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#46005F'}}>
                <Image
                    source={require('../../assets/InfoCryptoText.png')}
                    style={{width: 60, height: 40, resizeMode: 'contain'}}
                />
            </View>

            <View style={{}}>
                <FlatList
                    data={cryptos}
                    keyExtractor={item => item.slug}
                    renderItem={({item}) => (
                        <CryptoItem data={item}/>
                    )}
                    refreshing={loading}
                    onRefresh={() => getCryptos()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{padding: 10, paddingBottom: 50}}
                />
            </View>
        </View>
    )
}