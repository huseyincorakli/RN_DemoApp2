import React, { FC, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Product } from '../models/product'

const ProductDetailsComponent: FC = ({ navigation, route }: any) => {
  const product: Product = route.params.item
  useEffect(() => {
    navigation.setOptions({ title: product.title })
  }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.starContainer}>
        {[...Array(Math.round(product.rating.rate))].map((_, index) => (
          <Text style={styles.star} key={index}>
            ★
          </Text>
        ))}
        <Text style={styles.count}>({product.rating.count})</Text>
      </View>
      <View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 250,
     resizeMode: 'contain'
  },
  title: {
    fontSize: 20,
    padding: 1,
    fontWeight: 'bold'
  },
  starContainer: {
    flexDirection: 'row',
    padding: 4
  },
  star: {
    fontSize: 25,
    color: 'gold'
  },
  count: {
    fontSize: 18,
    padding: 5
  },
  description:{
    fontSize:19
  },
  buyButton:{
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:'auto',
    borderRadius:5,
    backgroundColor:'#347928'
  },
  buyButtonText:{
    fontSize:15,
    color:'#FFFF',
    fontWeight:'500',
    
  }
})

export default ProductDetailsComponent
