let Restaurant = require("mongoose").model("Restaurant");
let Review = require("mongoose").model("Review");

class RestaurantController{

  create(req,res){

    //res.json({"testing":"123"})
  	Restaurant.findOne({name:req.body.name},(err,restaurant)=>{
  		if(restaurant){
  			res.json({errors:"a restaurant with that name already exists"});
  		} else {
  			let newRestaurant = new Restaurant(req.body);
  			newRestaurant.save((err)=>{
  				if(err){
  					res.json({errors:newRestaurant.errors});
  				} else {
  					//req.session.user_id = newUser._id;
  					res.json(newRestaurant);
  				}
  			});
  		}
  	});


  }

  destroy(req,res){

    Restaurant.findOne({_id:req.body.id},(err,restaurant)=>{

    	if(!restaurant){
    		res.json({error:"record not found"});
    	} else {

            Restaurant.remove({_id:restaurant._id},(err)=>{
              if (err){
              	res.json({error:"problem removing record"});
              }	else {
              	res.json({status:"record removed"});
              }

            });
        }
    });

  }

  update(req,res){

    Restaurant.findOne({_id:req.params.id},(err,restaurant)=>{
    	restaurant.name = req.body.name;
    	restaurant.menu = req.body.menu;
    	restaurant.address = req.body.address;
    	restaurant.save((err)=>{
    		if(err){
    			res.json({error:"problem with restaurant update"});
    		} else {
    			res.json({restaurant_modified_to:restaurant});
    		}
    	});
    });

  }

  read(req,res){

    Restaurant.findOne({_id:req.params.id},(err,restaurant)=>{

    	if(!restaurant){
    		res.json({"errors":"restaurant not found"});
    	} else {
    		res.json({restaurant:restaurant});
    	}

    });

  }

  all(req,res){

    Restaurant.find({},(err,restaurants)=>{

    	if(!restaurants){
    		res.json({"errors":"restaurants not found"});
    	} else {
    		res.json({restaurants:restaurants});
    	}

    });

  }

}


module.exports = new RestaurantController();
