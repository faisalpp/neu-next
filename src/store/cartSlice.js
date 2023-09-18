import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subTotal:0,
  total:0,
  pickupLocation:'Georgetown Warehouse',
  deliveryLocation:null,
  deliveryDate:null,
  deliveryTime:null,
  cartCount:0,
  sCart:false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setPickupLocation: (state, action) => {
      state.pickupLocation = action.payload.pickupLocation  
    },
    setDeliveryLocation: (state, action) => {
      state.pickupLocation = action.payload.deliveryLocation  
    },
    setDeliveryDate: (state, action) => {
      state.deliveryDate = action.payload.deliveryDate  
    },
    setDeliveryTime: (state, action) => {
      state.deliveryTime = action.payload.deliveryTime  
    },
    setSubTotal: (state, action) => {
      state.subTotal = action.payload.subTotal  
    },
    setTotal: (state, action) => {
      state.total = action.payload.total  
    },
    setCartCount: (state, action) => {
      state.cartCount = action.payload.cartCount  
    },
    showSCart: (state, action) => {
      state.sCart = true 
    },
    hideSCart: (state, action) => {
      state.sCart = false 
    },
  },
  
});

export const { setPickupLocation ,setDeliveryLocation,setDeliveryDate,setDeliveryTime,setSubTotal,setTotal,setCartCount,showSCart,hideSCart } = cartSlice.actions;

export default cartSlice.reducer;