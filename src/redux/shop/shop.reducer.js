const INITIAL_STATE = {
   hoodies : {
     id: 0,
     title: "hoodies",
     routeName: "hoodies",
     collection: [
       {
         id: 0,
         title: "Ninja Silhouette",
         imgUrl:
           "http://sequex-dark.egemenerd.com/wp-content/uploads/2013/06/T_5_front.jpg",
         price: 20.0,
         rating: 5,
       },
       {
         id: 1,
         title: "Patient Ninja",
         imgUrl:
           "http://sequex-dark.egemenerd.com/wp-content/uploads/2013/06/hoodie_3_front.jpg",
         price: 35.0,
         rating: 5,
       },
       {
         id: 2,
         title: "Woo Ninja",
         imgUrl:
           "http://sequex-dark.egemenerd.com/wp-content/uploads/2013/06/hoodie_2_front.jpg",
         price: 35.0,
         rating: 4,
       },
       {
         id: 3,
         title: "Premium Quality",
         imgUrl:
           "http://sequex-dark.egemenerd.com/wp-content/uploads/2013/06/T_2_front.jpg",
         price: 37.0,
         rating: 5,
       },
     ],
   },
   shirt :{
     id : 1,
     title: "shirt",
     routeName: "shirt",
     collection: [
       {
         id: 0,
         title: "Ninja Silhouette",
         imgUrl:
           "http://sequex-dark.egemenerd.com/wp-content/uploads/2013/06/T_5_front.jpg",
         price: 20.0,
         rating: 5,
       },
       {
         id: 1,
         title: "Patient Ninja",
         imgUrl:
           "http://sequex-dark.egemenerd.com/wp-content/uploads/2013/06/hoodie_3_front.jpg",
         price: 35.0,
         rating: 5,
       },
       {
         id: 2,
         title: "Woo Ninja",
         imgUrl:
           "http://sequex-dark.egemenerd.com/wp-content/uploads/2013/06/hoodie_2_front.jpg",
         price: 35.0,
         rating: 4,
       },
       {
         id: 3,
         title: "Premium Quality",
         imgUrl:
           "http://sequex-dark.egemenerd.com/wp-content/uploads/2013/06/T_2_front.jpg",
         price: 37.0,
         rating: 5,
       },
     ],
   },
   Tshirt :{
     id : 2,
     title: "Tshirt",
     routeName: "tshirt",
     collection: [
       {
         id: 0,
         title: "Ninja Silhouette",
         imgUrl:
           "http://sequex-dark.egemenerd.com/wp-content/uploads/2013/06/T_5_front.jpg",
         price: 20.0,
         rating: 5,
       },
       {
         id: 1,
         title: "Patient Ninja",
         imgUrl:
           "http://sequex-dark.egemenerd.com/wp-content/uploads/2013/06/hoodie_3_front.jpg",
         price: 35.0,
         rating: 5,
       },
       {
         id: 2,
         title: "Woo Ninja",
         imgUrl:
           "http://sequex-dark.egemenerd.com/wp-content/uploads/2013/06/hoodie_2_front.jpg",
         price: 35.0,
         rating: 4,
       },
       {
         id: 3,
         title: "Premium Quality",
         imgUrl:
           "http://sequex-dark.egemenerd.com/wp-content/uploads/2013/06/T_2_front.jpg",
         price: 37.0,
         rating: 5,
       },
     ],
   },
}


const shopReducer = (state = INITIAL_STATE, action) => {
   switch(action.type){
      default : 
         return state;
   }
}


export default shopReducer;