import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';

export default function DetalleProducto({ route, navigation }) {
    const { producto } = route.params;

    // Formateador para mostrar el precio de forma legible (ej. $ 2.500.000)
    const precioFormateado = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
    }).format(producto.precio);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                
                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    style={styles.content}
                    contentContainerStyle={styles.scrollContent}
                >
                    <View style={styles.badgeContainer}>
                        <View style={styles.badgeDot} />
                        <Text style={styles.badgeText}>DISPONIBLE</Text>
                    </View>

                    <Text style={styles.nombre}>{producto.nombre}</Text>
                    <Text style={styles.precio}>{precioFormateado}</Text>
                    
                    <View style={styles.divider} />
                    
                    <Text style={styles.subtitulo}>Acerca de este producto</Text>
                    <Text style={styles.descripcion}>{producto.descripcion}</Text>
                </ScrollView>

                {/* Contenedor del botón fijado en la parte inferior */}
                <View style={styles.footer}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.boton,
                            pressed && styles.botonPressed
                        ]}
                        onPress={() => navigation.navigate('Carrito')}
                    >
                        <Text style={styles.textoBoton}>Añadir al carrito</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F9FAFB', // Fondo claro minimalista coherente con el Inicio
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        paddingTop: 30,
        paddingBottom: 20,
    },
    badgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginBottom: 24,
    },
    badgeDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#10B981', // Mantenemos el punto verde para indicar "disponibilidad"
        marginRight: 8,
    },
    badgeText: {
        fontSize: 11,
        fontWeight: '700',
        color: '#374151',
        letterSpacing: 1,
    },
    nombre: {
        fontSize: 38,
        fontWeight: '900', // Máximo peso visual para el título
        color: '#dce1ed',
        marginBottom: 8,
        letterSpacing: -1,
    },
    precio: {
        fontSize: 28,
        fontWeight: '300', // Contraste con el título usando una fuente muy ligera
        color: '#4B5563',
        marginBottom: 30,
    },
    divider: {
        height: 1,
        backgroundColor: '#E5E7EB', // Línea separadora muy sutil
        marginBottom: 30,
    },
    subtitulo: {
        fontSize: 13,
        fontWeight: '700',
        color: '#111827',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        marginBottom: 16,
    },
    descripcion: {
        fontSize: 16,
        fontWeight: '400',
        color: '#6B7280',
        lineHeight: 26, // Mayor espacio entre líneas para una lectura limpia
    },
    footer: {
        paddingBottom: 30,
        paddingTop: 15,
        backgroundColor: '#F9FAFB', // Evita que el texto del scroll se mezcle con el botón
    },
    boton: {
        backgroundColor: '#000000', // Botón negro sólido (estilo boutique)
        paddingVertical: 18,
        borderRadius: 100, // Bordes completamente redondeados tipo "píldora"
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 5,
    },
    botonPressed: {
        opacity: 0.7,
        transform: [{ scale: 0.98 }], // Microinteracción
    },
    textoBoton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});