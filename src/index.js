import React from "react";
import ReactDOM from "react-dom";

import bottle_image from "./graphics/bottle.png";
import glass_upgrade from "./graphics/glass.png";
import bucket_upgrade from "./graphics/bucket.png";
import well_upgrade from "./graphics/well.png";

var consumption_rate = 0;
var consumed_total = 0;

var glass_price = 10;
var bucket_price = 200;
var well_price = 1000;

var glass_owned = 0;
var bucket_owned = 0;
var well_owned = 0;

function sip() {
  consumed_total += 1;
  var consumednew = <h3 id="WaterBottlesCount">Water Bottles Produced: {consumed_total.toFixed(0)}</h3>
  ReactDOM.render(consumednew, document.getElementById("counter"))
}

function new_glass() {
  if (consumed_total >= glass_price) {
    glass_owned += 1;
    var temp_owned = "OWNED: " + glass_owned;
    ReactDOM.render(temp_owned, document.getElementById("upgrade_1_owned"))
    consumed_total -= glass_price;
    var consumednew = <h3 id="WaterBottlesCount">Water Bottles Produced: {consumed_total.toFixed(0)}</h3>
    ReactDOM.render(consumednew, document.getElementById("counter"))
    consumption_rate += 1;
    glass_price = (glass_price * 1.02).toFixed(2);
    var productionrate = <h3>Production Rate: {consumption_rate}</h3>
    ReactDOM.render(productionrate, document.getElementById("multiplier"))
    var temp_message = "PRICE: " + glass_price
    ReactDOM.render(temp_message, document.getElementById("Upgrade1_Value"))

  }
}

function new_bucket() {
  if (consumed_total >= bucket_price) {
    bucket_owned += 1;
    var temp_own = "OWNED: " + bucket_owned;
    ReactDOM.render(temp_own, document.getElementById("upgrade_2_owned"))
    consumed_total -= bucket_price;
    var consumednew = <h3 id="WaterBottlesCount">Water Bottles Produced: {consumed_total.toFixed(0)}</h3>
    ReactDOM.render(consumednew, document.getElementById("counter"))
    consumption_rate += 4;
    bucket_price = (bucket_price * 1.13).toFixed(2);
    var productionrate = <h3>Production Rate: {consumption_rate}</h3>
    ReactDOM.render(productionrate, document.getElementById("multiplier"))
    var temp_message = "PRICE: " + bucket_price
    ReactDOM.render(temp_message, document.getElementById("Upgrade2_Value"))
  }
}

function new_well() {
  if (consumed_total >= well_price) {
    well_owned += 1;
    var temp_own = "OWNED: " + well_owned;
    ReactDOM.render(temp_own, document.getElementById("upgrade_3_owned"))
    consumed_total -= well_price;
    var consumednew = <h3 id="WaterBottlesCount">Water Bottles Produced: {consumed_total.toFixed(0)}</h3>
    ReactDOM.render(consumednew, document.getElementById("counter"))
    consumption_rate += 20;
    well_price = (well_price * 1.19).toFixed(2);
    var productionrate = <h3>Production Rate: {consumption_rate}</h3>
    ReactDOM.render(productionrate, document.getElementById("multiplier"))
    var temp_message = "PRICE: " + well_price
    ReactDOM.render(temp_message, document.getElementById("Upgrade3_Value"))
  }

}

const mainheading = <h1>Drink some water</h1>
const maindescription = <p>Hello there traveler. Sit down, drink some water, stay hydrated.
  If you will need more - don't be shy. Click on the bottle and consume more.
  Or contribute to making more by purchasing upgrades!
</p>
var counter = <h3 id="WaterBottlesCount">Water Bottles Produced: {consumed_total}</h3>
var productionrate = <h3>Production Rate: {consumption_rate}</h3>
const mybottleimage = <img class="bottle_img" src={bottle_image} alt="bottle" onClick={sip}/>
const moreupgrade = <p>Purchase the following upgrades:</p>
const upgrade1 = <img class="upgrade_img" src={glass_upgrade} alt="glass" onClick={new_glass}/>
var glassprice = "PRICE: " + glass_price;
const upgrade2 = <img class="upgrade_img" src={bucket_upgrade} alt="bucket" onClick={new_bucket}/>
var bucketprices = "PRICE: " + bucket_price;
const upgrade3 = <img class="upgrade_img" src={well_upgrade} alt="well" onClick={new_well}/>
var wellprice = "PRICE: " + well_price;

var upgrade_1_present = "OWNED: " + glass_owned;
var upgrade_2_present = "OWNED: " + bucket_owned;
var upgrade_3_present = "OWNED: " + well_owned;

ReactDOM.render(mainheading, document.getElementById('mainheading'))
ReactDOM.render(maindescription,document.getElementById("maindescription"))
ReactDOM.render(counter, document.getElementById("counter"))
ReactDOM.render(productionrate, document.getElementById("multiplier"))
ReactDOM.render(mybottleimage, document.getElementById("bottle"))
ReactDOM.render(moreupgrade, document.getElementById("upgrades_text"))

ReactDOM.render(upgrade1, document.getElementById("upgrade_1"))
ReactDOM.render(glassprice, document.getElementById("Upgrade1_Value"))
ReactDOM.render(upgrade2, document.getElementById("upgrade_2"))
ReactDOM.render(bucketprices, document.getElementById("Upgrade2_Value"))
ReactDOM.render(upgrade3, document.getElementById("upgrade_3"))
ReactDOM.render(wellprice, document.getElementById("Upgrade3_Value"))

ReactDOM.render(upgrade_1_present, document.getElementById("upgrade_1_owned"))
ReactDOM.render(upgrade_2_present, document.getElementById("upgrade_2_owned"))
ReactDOM.render(upgrade_3_present, document.getElementById("upgrade_3_owned"))

var pureTimer = setInterval(myTimer, 1000);
function myTimer() {
  consumed_total = consumed_total + consumption_rate
  var counter = <h3 id="WaterBottlesCount">Water Bottles Produced: {consumed_total.toFixed(0)}</h3>
  ReactDOM.render(counter, document.getElementById("counter"))
}