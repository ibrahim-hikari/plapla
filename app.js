'use strict';

function Kitten(name, breed, coatColor , interest, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats){

    this.name = name;
    this.breed = breed;
    this.coatColor = coatColor;
    this.interest = interest;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithOtherCats = isGoodWithOtherCats;
}

var addKitten = document.getElementById('addKittenForm')

addKitten.addEventListener('submit',function(event){
    event.preventDefault();
    var kittenName = event.target.name.value;
    // console.log(event.target.kittenName);
    var kittenBreed = event.target.breed.value;
    var kittenCoat = event.target.coatColor.value;
    var kittenInt = event.target.interest.value;
    kittenInt = interest.split(',');
    // console.log(kittenInt);
}
);