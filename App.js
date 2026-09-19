import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Producto from './components/Producto';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './screens/Inicio';
import DetalleProducto from './screens/DetalleProducto';
import Carrito from './screens/Carrito';

const Stack = createNativeStackNavigator();

export default function App() {

  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    setCarrito([
      ...carrito,
      producto
    ]);
    console.log('Producto agregado:', producto.nombre);
  }

  const productos = [
    {
      id: 1, nombre: 'Laptop',
      precio: 2500000, descripcion: 'Para trabajo y estudio'
    },
    {
      id: 2, nombre: 'Mouse',
      precio: 80000, descripcion: 'Mouse inalámbrico'
    },
    {
      id: 3, nombre: 'Teclado',
      precio: 150000, descripcion: 'Teclado mecánico'
    },
  ];
  function agregarAlCarrito(producto) {
    console.log('Producto agregado:', producto.nombre);
  }


  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: 'Tienda Virtual' }}
        />
        <Stack.Screen
          name="DetalleProducto"
          component={DetalleProducto}
          options={{ title: 'Detalle del producto' }}
        />
        <Stack.Screen
          name="Carrito"
          component={Carrito}
          options={{ title: 'Mi carrito' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function LoginScreen({ navigation }) {

  return (
  
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.headerContainer}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Inicia sesión para ingresar a  PruebaloYaMani</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.titulo}>Tienda Virtual</Text>
        <ScrollView>
          {productos.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              onAgregar={agregarAlCarrito}
            />
          ))}
        </ScrollView>
      </View>

      <Text style={styles.carrito}></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242429be',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#8a8a93',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#2a2a32',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#a94dc0ff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#1767b1ff',
    fontSize: 14,
    marginTop: 20,
  },
});
