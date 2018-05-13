let _ = require("underscore");
let Review = require("mongoose").model("Review");
let Restaurant = require("mongoose").model("Restaurant");

class ReviewController{

  create(req,res){
  	User.findOne({_id:req.body.user},(err,user)=>{
        //res.json({"testing":user});

  		Restaurant.findOne({_id:req.body.restaurant},(err,restaurant)=>{

  			var review = new Review(req.body);
  			review.restaurant = restaurant._id;
  			restaurant.reviews.push(review);
            user.reviews.push(review);
            review.save((err)=>{
            	restaurant.save((err)=>{
            		if(err){
            			console.log("error");
            		} else {
            			user.save((err)=>{
            				if(err){
            					console.log("error");
            				} else{
            					res.json({"review_saved":review});

            				}
            			});
            		}
            	});

            });

  		});

    });
  }

  destroy(req,res){

  	Review.findOne({_id:req.body.id},(err,review)=>{

      if (!review){
      	res.json({error:"that review does not exist"});
      } else {

  	  User.findOne({_id:review.user},(err,user)=>{

  		if (!user){
  			console.log("no user");
  		} else {
  		  console.log(user.reviews);

  		  user.reviews = _.reject(user.reviews, function(el) {return el == req.body.id});
  		  console.log(user.reviews);

  		  user.save((err)=>{

            if(err){

              console.log("error");

            } else{

              console.log("review deleted for user");

            }

          });
        }
      });

  	  Restaurant.findOne({_id:review.restaurant},(err,restaurant)=>{

  		if (!restaurant){
  		    console.log("no restaurant");
  		} else {

  			restaurant.reviews = _.reject(restaurant.reviews, function(el) { return el == req.body.id});
  			//console.log(restaurant.orders);
            restaurant.save((err)=>{

              if(err){

            	console.log("error");

              } else {

                console.log("review deleted for restaurant");
              }
            });
        }
      });

      Review.remove({_id:review._id},(err)=>{

        if (err){
        	console.log("review not deleted");
        } else {
        	res.json({review_deleted:review});
        }

  	  });
    }
    });

  }

  update(req,res){

    Review.findOne({_id:req.params.id},(err,review)=>{

    	review.text = req.body.text;

    	review.save((err)=>{
    		if(err){
    			res.json({error:"problem with review update"});
    		} else {
    			res.json({review_modified_to:review});
    		}
    	});
    });

  }

  read(req,res){

    Review.findOne({_id:req.params.id},(err,review)=>{

    	if(!review){
    		res.json({"errors":"review not found"});
    	} else {
    		res.json({review:review});
    	}

    });

  }

  all(req,res){

    Review.find({},(err,reviews)=>{

    	if(!reviews){
    		res.json({"errors":"review not found"});
    	} else {
    		res.json({reviews:reviews});
    	}

    });

  }

}

module.exports = new ReviewController();
