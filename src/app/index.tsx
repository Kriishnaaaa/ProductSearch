import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link, router } from 'expo-router';

export default function HomeScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Product Search</Text>

            <Link href='/product/1' style={styles.link}>Product 1</Link>
            <Link href='/product/5' style={styles.link}>Product 5</Link>

            <Pressable onPress={() => router.push('/product/3')} style={styles.button}>
                <Text style={styles.buttonText}>Open Product 3</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    heading: {
        fontSize: 18,
        color: "#000"
    },
    link: {
        fontSize: 14,
        color: "#2563eb"
    },
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
})