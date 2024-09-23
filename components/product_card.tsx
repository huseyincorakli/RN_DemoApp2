import React, { FC, useState } from 'react'
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { Product } from '../models/product'

interface Props {
  product: Product
  onselect: ()=>void
}

const ProductCardComponent: FC<Props> = ({ product, onselect }) => {
  const rate = Math.round(product.rating.rate)
  
  const renderStar = [...Array(rate)].map((_, index) => (
    <Text key={index} style={styles.star}>
      ★
    </Text>
  ))

  const addToCard = () => {
    Alert.alert('ADD TO CARD')
  }

  return (
    <TouchableWithoutFeedback onPress={onselect}>
      <View style={styles.container}>
        <Text style={styles.category}>{product.category}</Text>
        <Image style={styles.image} source={{ uri: product.image }} />
        <Text style={styles.rate}>
          <Text style={styles.rate}>{product.rating.rate} </Text>
          {renderStar}
          <Text style={styles.rateCount}> ({product.rating.count})</Text>
        </Text>

        <View style={styles.footer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price} </Text>
          <TouchableOpacity style={styles.addCard} onPress={addToCard}>
            <Text style={styles.addCardText}>Add To Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: 5,
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#ffff',
    borderColor: '#ffff'
  },
  image: {
    marginBottom: 5,
    width: 'auto',
    height: 150,
    resizeMode: 'contain'
  },
  title: {
    flex: 1,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  category: {
    borderWidth: 1,
    alignSelf: 'flex-end',
    padding: 2,
    borderRadius: 5,
    backgroundColor: 'green',
    color: 'white',
    marginBottom: 5,
    fontSize: 10
  },
  footer: {
    borderTopWidth: 2,
    borderTopColor: 'gray',
    flex: 1
  },
  rate: {
    padding: 4,
    paddingLeft: 0
  },
  rateCount: {
    fontSize: 12
  },
  star: {
    color: 'gold',
    fontSize: 16
  },
  price: {
    margin: 5,
    marginLeft: 0,
    color: '#86D293',
    fontWeight: 'bold',
    fontSize: 17
  },
  addCard: {
    padding: 3,
    borderWidth: 1,
    borderColor: '#86D293',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#C1E2A4'
  },
  addCardText: {
    color: 'green',
    fontWeight: 'bold'
  }
})

export default ProductCardComponent
