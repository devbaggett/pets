var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/Exam1/dist'));
console.log(__dirname + '/Exam1/dist');

mongoose.connect("mongodb://localhost/pets");

var PetSchema = new mongoose.Schema({
	name: { type: String, required: true, minlength: 3 },
	type: { type: String, required: true, minlength: 3 },
	desc: { type: String, required: true, minlength: 3 },
	skill1: {type: String },
	skill2: {type: String },
	skill3: {type: String },
	likes: {type: Number }},
	{ timestamps: true, versionKey: false});

mongoose.model('Pet', PetSchema);
var Pet = mongoose.model('Pet');

mongoose.Promise = global.Promise;





// ********************* ROUTES *********************

// ADD PET
app.post("/add_pet", function(req, res){
	var pet = new Pet(req.body);
  	pet.save(function(err, pet){
		if(err){
			console.log("ERROR: ", err);
		}
		else{
			console.log('You successfully created a pet.', pet);
			res.json({message: "Success", pet: pet});
		}
	})
})

// RETRIEVE ALL PETS
app.get('/all_pets', function(req, res){
	Pet.find({}, function(err, pets){
		if(err){
			console.log("ERROR: ", err);
			res.json({message: "ERROR", error: err});
		}
		else{
			res.json({message: "Success", pets: pets})
		}
	})
})

// RETRIEVE A PET BY ID
app.get("/retrieve/:id", function(req, res){
	Pet.find({_id: req.params.id}, function(err, pet){
		if(err){
			console.log("ERROR: ", err);
			res.json({message: "ERROR", error: err});
		}
		else{
			res.json({message: "Success", pet });
		}
	})
})

// EDIT PET BY ID
app.put("/edit/:id", function(req, res){
	edited_pet = {};
	if (req.body){
		edited_pet = req.body;
	}
	Pet.update({_id: req.params.id}, edited_pet, function(err){
		if(err){
			console.log("ERROR: ", err);
			res.json({message: "ERROR", error: err});
		}
		else{
			res.json({message: "Success"})
		}
	});
})

// DELETE PET BY ID
app.delete("/delete/:id", function(req, res){
	Pet.remove({_id: req.params.id}, function(err){
		if(err){
			console.log("ERROR: ", err);
			res.json({message: "ERROR", error: err});
		}
		else{
			res.json({message: "Success"})
		}
	});
})

// LIKE PET BY ID
app.put("/like/:id", function(req, res){
	Pet.update({_id: req.params.id}, { $inc: { likes: 1 }}, function(err){
		if(err){
			console.log("ERROR: ", err);
			res.json({message: "ERROR", error: err});
		}
		else{
			res.json({message: "Success"})
		}
	});
})

// catch-all route
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./Exam1/dist/index.html"))
});

var server = app.listen(8000, function(){
	console.log("listening on port 8000");
});