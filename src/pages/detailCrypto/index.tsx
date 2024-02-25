import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { CryptoProps } from "../../interfaces/crypto";
import { getImageCrypto } from "../../services/getImageCrypto";

interface Props {
    route: {
        params: {
            crypto: CryptoProps;
        }
    }
}
export function DetailCrypto({ route }: Props) {
    const { crypto } = route.params;
    const [imageUrl, setImageUrl] = useState(getImageCrypto(crypto.symbol));

    return (
        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                {imageUrl && (
                    <Image
                        source={{ uri: imageUrl }}
                        style={{ width: 70, height: 70 }}
                    />
                )}
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000' }}>
                        {crypto.name}
                        <Text style={{ color: '#aaa', fontWeight: 'normal', fontSize: 16 }}> ({crypto.symbol})</Text>
                    </Text>
                </View>
            </View>
            
            <Text style={{ color: '#aaa', textAlign: 'center', marginTop: 20 }}>Valor atual</Text>
            <Text style={{ textAlign: 'center', fontSize: 30, color: 'green' }}>
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'USD'
                }).format(Number(crypto.quote.USD.price).toFixed(2))}
            </Text>

            <Text style={{ color: '#aaa' }}>Estatísticas</Text>
            <View style={{ borderRadius: 10, padding: 10, elevation: 3, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Text style={{ color: 'black' }}>Última hora</Text>
                    <Text style={{ fontWeight: 'bold', color: crypto.quote.USD.percent_change_1h < 0 ? 'red' : 'green' }}>
                        {Intl.NumberFormat('pt-BR').format(Number(crypto.quote.USD.percent_change_1h).toFixed(2))} %
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={{ color: 'black' }}>Último dia</Text>
                    <Text style={{ fontWeight: 'bold', color: crypto.quote.USD.percent_change_24h < 0 ? 'red' : 'green' }}>
                        {Intl.NumberFormat('pt-BR').format(Number(crypto.quote.USD.percent_change_24h).toFixed(2))} %
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 7 }}>
                    <Text style={{ color: 'black' }}>1 semana</Text>
                    <Text style={{ fontWeight: 'bold', color: crypto.quote.USD.percent_change_7d < 0 ? 'red' : 'green' }}>
                        {Intl.NumberFormat('pt-BR').format(Number(crypto.quote.USD.percent_change_7d).toFixed(2))} %
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 7 }}>
                    <Text style={{ color: 'black' }}>1 mês</Text>
                    <Text style={{ fontWeight: 'bold', color: crypto.quote.USD.percent_change_30d < 0 ? 'red' : 'green' }}>
                        {Intl.NumberFormat('pt-BR').format(Number(crypto.quote.USD.percent_change_30d).toFixed(2))} %
                    </Text>
                </View>
            </View>
        </View>
    )
}