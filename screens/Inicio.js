import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import Producto from '../components/Producto';

export default function Inicio({ navigation }) {
    const productos = [
        { id: 1, nombre: 'Laptop', precio: 2500000, descripcion: 'Laptop para trabajo y estudio' },
        { id: 2, nombre: 'Mouse', precio: 80000, descripcion: 'Mouse inalámbrico' },
        { id: 3, nombre: 'Teclado', precio: 150000, descripcion: 'Teclado mecánico' },
    ];

    const verDetalle = (producto) => {
        navigation.navigate('DetalleProducto', { producto });
    };

    const renderHeader = () => (
        <View style={styles.headerContainer}>
            <View style={styles.badgeContainer}>
                <View style={styles.badgeDot} />
                <Text style={styles.badgeText}>COLECCIÓN 2024</Text>
            </View>
            
            <Text style={styles.titulo}>
                Eleva tu {'\n'}experiencia con{'\n'}
                <Text style={styles.brandText}>Tienda Fermin.</Text>
            </Text>
            
            <View style={styles.filterSection}>
                <Text style={styles.filterTextActive}>Todos</Text>
                <Text style={styles.filterText}>Populares</Text>
                <Text style={styles.filterText}>Nuevos</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <FlatList
                    data={productos}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listPadding}
                    ListHeaderComponent={renderHeader}
                    renderItem={({ item }) => (
                        <View style={styles.productoWrapper}>
                            <Producto
                                producto={item}
                                onAgregar={() => verDetalle(item)} 
                            />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
} 

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F9FAFB', // Blanco roto/gris ultraclaro para un fondo limpio
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    headerContainer: {
        marginTop: 30,
        marginBottom: 20,
    },
    badgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginBottom: 20,
    },
    badgeDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#000000',
        marginRight: 8,
    },
    badgeText: {
        fontSize: 11,
        fontWeight: '700',
        color: '#374151',
        letterSpacing: 1,
    },
    titulo: {
        fontSize: 38,
        fontWeight: '300', // Tipografía ligera para un toque elegante
        color: '#111827',
        lineHeight: 46,
        marginBottom: 30,
        letterSpacing: -1,
    },
    brandText: {
        fontWeight: '900', // Contraste fuerte con el texto ligero
        color: '#000000',
    },
    filterSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
        paddingBottom: 15,
    },
    filterTextActive: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000000',
        marginRight: 24,
    },
    filterText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#9CA3AF',
        marginRight: 24,
    },
    listPadding: {
        paddingBottom: 40,
    },
    productoWrapper: {
        marginBottom: 20,
    }
});