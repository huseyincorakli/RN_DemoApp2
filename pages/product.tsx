import React, { FC, memo } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text} from 'react-native'
import ProductCardComponent from '../components/product_card'
import HeaderComponent from '../components/header'
import useFetch from '../hooks/useFetch'
import { Product } from '../models/product'



const ProductPage: FC = (props:any) => {
  const gotoProductDetail=(item:Product)=>{
    props.navigation.navigate('ProductDetails',{item})
  }
 const {data:productData,error,loading} = useFetch(process.env.EXPO_PUBLIC_API_URL)
  const renderProductCard = ({item})=><ProductCardComponent onselect={()=>gotoProductDetail(item)}  product={item}/>

  
  if(loading){
    return(<Text>Loading...</Text>)
  }
  if(!loading && error){
    return(<Text>{error}</Text>)
  }
  return (
    <SafeAreaView style={styles.container}>
      {productData && <FlatList ListHeaderComponent={HeaderComponent}  stickyHeaderIndices={[0]} numColumns={2} keyExtractor={(item)=>item.id.toString()} data={productData} renderItem={renderProductCard}></FlatList>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
     padding:5,
    flex: 1,
    backgroundColor:'#e1e1e1'
  },
  search:{
     borderRadius:10,
     padding:5,
     fontSize:15,
     borderColor:'#232C33',
     backgroundColor:'#ffff',
     fontWeight:'bold'
  }
})

export default memo(ProductPage)
