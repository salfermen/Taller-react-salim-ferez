import { View, Text, StyleSheet, Pressable } from 'react-native';
export default function Producto({ producto, onAgregar }) {
    
    return (
        <View style={styles.card}>
            <Text style={styles.nombre}>{producto.nombre}</Text>
            <Text style={styles.descripcion}>{producto.descripcion}</Text>
            <Text style={styles.precio}>${producto.precio}</Text>
            <Pressable
                style={styles.boton}
                onPress={() => onAgregar(producto)}
            >
                <Text style={styles.textoBoton}>Ver detalle</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#000000',
        padding: 20,
        marginBottom: 15,
        borderRadius: 10,
        elevation: 3,
    },
    nombre: { fontSize: 20, fontWeight: 'bold' },
    descripcion: { marginTop: 8, fontSize: 15 },
    precio: { marginTop: 10, fontSize: 18, fontWeight: 'bold' },
    boton: {
        marginTop: 15,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#222',
    },
    textoBoton: { color: '#fff', fontWeight: 'bold' },
});