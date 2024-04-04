import React, { useState, useEffect } from "react";
import { Page, Document, StyleSheet, Text, View, Image } from '@react-pdf/renderer'; 

import { useClientName } from "./NomContext"


const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  itemContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent:'space-between',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
  },
  itemName: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  itemPrice: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 25,
    fontWeight: 200,
    marginTop: 20,
    textAlign: 'right',
    
  },
  
  imageContainer: {
    alignItems: 'center', // Center the image horizontally
    marginTop:10,
    marginBottom:10,
  },
  
  image: {
    width: 100, // Ajustez la largeur selon vos besoins
    height: 100, // Ajustez la hauteur selon vos besoins
  },
  
  commande: {
      textAlign: 'center',
      fontSize:25,
      fontWeight:'bold',
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#AAAAAA',
      paddingTop: 15,
      borderTopWidth: 1,
      borderTopColor: '#AAAAAA',
      textTransform:'uppercase',
      backgroundColor: '#FF8C00',
      color: 'white',
  },
  
});


function formatAmountWithSeparators(amount) {
  return amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}





const PdfDocument = () => {
    
    
  const { clientName } = useClientName();
    
  // Utilise useState pour stocker les items du localStorage
  const [savedItems, setSavedItems] = useState([]);
    
  // Utilise useEffect pour récupérer les items depuis le localStorage au chargement du composant
  useEffect(() => {
    const savedData = localStorage.getItem("cartItems");
    if (savedData) {
      setSavedItems(JSON.parse(savedData));
    }
  }, []);
  
    const totalAmount = savedItems.reduce((total, item) => total + item.price, 0);
    
    const totalLivraison = savedItems.reduce((som,item)=>som + item.prix_livraison*item.quantity, 0)
    


return (
    <Document>
      <Page style={styles.page}>
        <View>
          <Text style={styles.title}>YATTE</Text>
          <Text style={styles.commande}>Commande de {clientName}</Text>
          {savedItems.map((item) => (
            <View style={styles.itemContainer} key={item.id}>
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>Article commandé: {item.name}</Text>
              <Text style={styles.itemPrice}>Tarif:  {formatAmountWithSeparators(item.price)} FCFA</Text>
              <Text style={styles.itemPrice}>Prix de la livraison:  {formatAmountWithSeparators(item.prix_livraison)} FCFA</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image src={item.image} style={styles.image} />
            </View>
            </View>
          ))}
          <Text style={styles.totalPrice}>Montant a soldé: {formatAmountWithSeparators(totalAmount + totalLivraison )}
            FCFA</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;

