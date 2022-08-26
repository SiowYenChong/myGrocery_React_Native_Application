import React from 'react';
import { StyleSheet, Text, View,Dimensions, TouchableOpacity, ScrollView, Image, ActivityIndicator, Alert } from 'react-native';
import {CheckButton} from './components/Custom_Pay';
import COLORS from './consts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const widthscreen = Dimensions.get('screen').width;
let config = require('./Config');
Date.prototype.formatted = function() {
	let day = this.getDay();
	let date = this.getDate();
	let month = this.getMonth();
	let year = this.getFullYear();
	let daysText = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	let monthsText = [
	'Jan','Feb','Mar','Apr','May','Jun',
	'Jul','Aug','Sep','Oct','Nov','Dec'
	];
	return `${daysText[day]}, ${monthsText[month]} ${date}, ${year}`;
   } 

export default class Cart extends React.Component {
	
	constructor(props){
		
		super(props);
		this.state = {
			selectAll: false,
			deleteAll: false,
			cartItemsIsLoading: false,
			cartItems:global.cart,
			date: new Date (Date.now ()),
		}		
		this.check_subtotal=this.check_subtotal.bind(this)
		this._save=this._save.bind(this)
	}

	forceUpdateHandler = () => {
		this.setState({ cartItems: global.cart });
		this.forceUpdate();   	 
  	};

	selectHandler = (index, value) => {		
		this.state.cartItems[index]['checked'] = 0; // clone the array 
		const newItems = [...this.state.cartItems];
		newItems[index]['checked'] = value == 1? 0 : 1; // set the new value 
		this.setState({ cartItems: newItems }); // set new state
	}
	
	selectHandlerAll = (value) => {
		const newItems = [...this.state.cartItems]; // clone the array 
		newItems.map((item, index) => {
			newItems[index]['checked'] = value == true ? 0 : 1; // set the new value 
		});
		this.setState({ cartItems: newItems, selectAll: (value == true ? false : true) }); // set new state
	}
	
	deleteHandler = (index) => {
		Alert.alert(
			'Are you sure you want to delete this item from your cart?',
			'',
			[
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'Delete', onPress: () => {
					let updatedCart = this.state.cartItems; /* Clone it first */
					updatedCart.splice(index, 1); /* Remove item from the cloned cart state */
					this.setState(updatedCart); /* Update the state */
					
				}},
			],
			{ cancelable: false }
		);
	}

	deleteHandlerAll = (index,value) => {
		Alert.alert(
			'Are you sure you want to delete all items from your cart?',
			'',
			[
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'Delete', onPress: () => {
					let updatedCart = this.state.cartItems; /* Clone it first */
					updatedCart.map((item, index) => {
					updatedCart.splice(index, 30); /* Remove item from the cloned cart state */
				});
					this.setState({updatedCart, deleteAll: (value == true ? false : true)}); /* Update the state */
				
				}},
			],
			{ cancelable: false }
		);
	}

	check_out_deleteHandlerAll = (index,value) => {		
					let updatedCart = this.state.cartItems; /* Clone it first */
					updatedCart.map((item, index) => {
					updatedCart.splice(index, 30); /* Remove item from the cloned cart state */
				});
					this.setState({updatedCart, deleteAll: (value == true ? false : true)}); /* Update the state */
	}

	
	quantityHandler = (action, index) => {
		const newItems = [...this.state.cartItems]; // clone the array 
		
		let currentQty = newItems[index]['qty'];
		
		if(action == 'more'){
			newItems[index]['qty'] = currentQty + 1;
		} else if(action == 'less'){
			newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
		}
		
		this.setState({ cartItems: newItems }); // set new state
	}
	
	subtotalPrice = () => {
		const { cartItems} = this.state;
		if(cartItems){
			return cartItems.reduce((sum, item) => (sum + (item.checked == 1 ? item.qty * item.price : 0)), 0 );
		}
		return 0;
	}

	check_subtotal(){
		if (this.subtotalPrice().toFixed(2) > 0){
			this._save()
			this.check_out_deleteHandlerAll(this.state.deleteAll)
		}else{
			Alert.alert("Please select item to checkout and place order.");
		}
	}

	_save() {
		let url = config.settings.serverPath + '/api/orders_insert';
	
		fetch(url, {
		  method: 'POST',
		  headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			user_id:global.userid,
			total_price: this.subtotalPrice().toFixed(2),
			paid_status:'Paid',
			order_status: 'Shipping',
			date:this.state.date,
		  }),
		})
		  .then(response => {
			if (!response.ok) {
			  Alert.alert('Error:', response.status.toString());
			  throw Error('Error ' + response.status);
			}
	
			return response.json();
		  })
		  .then(respondJson => {
			if (respondJson.affected > 0) {
			  Alert.alert(
				"Checkout and place order",
				"Checkout and place order successfully!",
				[
				  {
					text: "Okay", onPress: () =>
					  this.props.navigation.navigate('Home')
				  }
				]
			  );
			} else {
			  Alert.alert('Error in saving');
			}
		  })
	  }
	  
	render() {

		const styles = StyleSheet.create({
			centerElement: {justifyContent: 'center', alignItems: 'center'},
			container: {
				flex: 1,
				backgroundColor: '#fff',
			  },
		});
		
		const { cartItems, cartItemsIsLoading, selectAll ,deleteAll } = this.state;
		
		return (
			<ScrollView style={styles.container}>

<View
        style={{
          backgroundColor: '#24ce85',
          height: 130,
          width: Dimensions.get('screen').width,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 35,
            backgroundColor: '#24ce85',
            paddingTop: 50,
            fontWeight: 'bold',
            color: 'black'
          }}>
        Cart
        </Text>
        <Text
          style={{
            fontSize: 15,
            backgroundColor: '#24ce85',
            paddingTop: 0,
            fontWeight: 'bold',
            marginLeft: -270,
            marginTop: -30,
            color: 'black'
          }}
          onPress={() => this.props.navigation.goBack()}>
          Back
        </Text>
      </View>
      <Text>{'\n'}</Text>

			<View style={{flex: 1, backgroundColor: '#e6e8e6'}}>
				<View style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10}}>
					<View style={[styles.centerElement, {width: 50, height: 50}]}>
						<Ionicons name="ios-cart" size={25} color="#000" />
					</View>
					<View style={[styles.centerElement, {height: 50}]}>
						<Text style={{fontSize: 18, color: '#000'}}>Shopping Cart</Text>
					</View>
					<TouchableOpacity style={{position:'absolute', zIndex:5,right:10,top:8}} onPress={() =>{this.forceUpdateHandler()}}><Icon name="refresh" size={35}/></TouchableOpacity>
				</View>
				{!cartItemsIsLoading &&
					<View style={{backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 15}}>
					
						<View style={{flexDirection: 'row'}}>
							<View style={[styles.centerElement, {width: 60}]}>
								<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.selectHandlerAll(selectAll)}>
									<Ionicons name={selectAll == true ? "md-checkbox" : "md-checkbox"} size={25} color={selectAll == true ? "#0faf9a" : "#aaaaaa"} />
								</TouchableOpacity>
							</View>
							<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
								<Text>Select All</Text>
								<View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
								<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.deleteHandlerAll(deleteAll)}>
								<Ionicons name={deleteAll == true ? "md-trash" : "md-trash"} size={22} color={deleteAll == true ? "#0faf9a" : "#aaaaaa"} />
								</TouchableOpacity>
								
								<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center', color: 'red'}}>
								<Text>Clear All</Text>
								</View>
							</View>
						</View>
					</View>
					</View>
				}
				
				{cartItemsIsLoading ? (
					<View style={[styles.centerElement, {height: 300}]}>
						<ActivityIndicator size="large" color="#ef5739" />
					</View>
				) : (
					<ScrollView>	
						{cartItems && cartItems.map((item, i) => (
							<View key={i} style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 120}}>
								<View style={[styles.centerElement, {width: 60}]}>
									<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.selectHandler(i, item.checked)}>
										<Ionicons name={item.checked == 1 ? "md-checkbox" : "md-checkbox"} size={25} color={item.checked == 1 ? "#0faf9a" : "#aaaaaa"} />
									</TouchableOpacity>
								</View>
								<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
									<TouchableOpacity onPress={() => {/this.props.navigation.navigate('ProductDetails', {productDetails: item})/}} style={{paddingRight: 10}}>
										<Image source={ {uri:item.pic_url}} style={[styles.centerElement, {height: 60, width: 60, backgroundColor: '#eeeeee'}]} />
									</TouchableOpacity>
									<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
										<Text numberOfLines={1} style={{fontSize: 15}}>{item.name}</Text>
										
                    <Text numberOfLines={1} style={{color: '#333333', marginBottom: 10}}>${(item.qty * item.price).toFixed(2)}</Text>
										<View style={{flexDirection: 'row'}}>
											<TouchableOpacity onPress={() => this.quantityHandler('less', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
												<Ionicons name="remove-circle-sharp" size={22} color="red" backgroundcolor="pink"/>
											</TouchableOpacity>
											<Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#bbbbbb', fontSize: 13 }}>{item.qty}</Text>
											<TouchableOpacity onPress={() => this.quantityHandler('more', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
												<Ionicons name="add-circle" size={22} color="red" />
											</TouchableOpacity>
										</View>
									</View>
									
								</View>
								<View style={[styles.centerElement, {width: 60}]}>
									<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.deleteHandler(i)}>
										<Ionicons name="md-trash" size={25} color="#ee4d2d" />
									</TouchableOpacity>
								</View>
							</View>
						))}
					</ScrollView>
				)}
				
				{!cartItemsIsLoading &&
					<View style={{backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 15}}>
					
						<View style={{flexDirection: 'row'}}>
							<View style={[styles.centerElement, {width: 60}]}>
							</View>
							<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
								<Text>Final</Text>
								<View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
									<Text style={{color: '#8f8f8f'}}>SubTotal: </Text>
									<Text>RM {this.subtotalPrice().toFixed(2)}</Text>
								</View>
							</View>
						</View>
						
					</View>
					
				}
					
				 <View style={{flexDirection: 'column',backgroundColor: '#fff', paddingBottom:15}}>
							

							<CheckButton center={widthscreen/100}
								label={"Checkout and place order"}
								onPress={() => {this.check_subtotal();}}
								bcolor="#24CE85"
								tcolor={COLORS.white}
								icolor={COLORS.white}
								icon="chevron-right"
								isize={27}
								i
							/>
				</View>
			</View>
			</ScrollView>

			
		);
	}
}

