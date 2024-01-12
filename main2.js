// referring to the dom elements.


// let currentBooingElments = document.getElementsByName("current_booking");   
// let costCurrentBookingElements = document.getElementsByName("cost_of_current_booking");
// let overallBookingElements = document.getElementsByName("overall_booking");
// let costOverallBookingElements =    document.getElementsByName("overall_cost"); 
// let infoHeaders = document.getElementsByName("info_header");
// DOM elements of info pane
let currentBooingElments = Array.from(document.getElementsByName("current_booking"));
let costCurrentBookingElements = Array.from(document.getElementsByName("cost_of_current_booking"));
let overallBookingElements = Array.from(document.getElementsByName("overall_booking"));
let costOverallBookingElements =   Array.from(document.getElementsByName("overall_cost"));
let infoHeaders = Array.from(document.getElementsByName("info_header"));

// DOM elements of Room Section
let checkIn = document.getElementById("check_in");
let checkOut = document.getElementById("check_out");
let roomType = document.getElementsByName("room_type");
let numOfRooms = document.getElementById("num_of_rooms");
let numOfAdults = document.getElementById("adults");
let kidAbove5 = document.getElementById("children_above_5");
let kidBelow5 = document.getElementById("children_below_5");     
let extraBed = document.getElementById("extra_bed");
let wifi = document.getElementById("wi-fi");
let view = document.getElementsByName("view");

// DOM elements of Adventure Section
let divingLocalAdultsCheckbox = document.getElementById("local_adults");
let divingLocalKidsAbove5Checkbox = document.getElementById("local_kids");
let divingForeignAdultsCheckbox = document.getElementById("foreign_adults");
let divingForeignKidsCheckbox = document.getElementById("foreign_kids");

let GuideForAdults = document.getElementById("guide_for_adults");
let GuideForKids = document.getElementById("guide_for_kids");

// DOM elements of Promo Code and Favourite Button
let promoInput = document.getElementById("promo_code");
let loyaltyPointsField = document.getElementById("points_field");
let loyaltyPointsBtn = document.getElementById("points_btn");
let addToFavouriteBtn = document.getElementById("order_favourite_btn");

// DOM elements of Book Buttons
let bookNowBtn = document.getElementById("book_room_btn");
let bookAdventureBtn = document.getElementById("book_adventure_btn");
let dismissBookingConfBtn  = document.getElementById("dismiss_btn_book_now");

// DOM elements of Adventure Booking message section
let adventureMessageDiv = document.getElementById("modal2");
let adventureThanksMessage = document.getElementById("thanks_message");
let adventureDetails = document.getElementById("adventure_details");
let adventureDismissBtn = document.getElementById("dismiss_btn_adventure");



//variable declarations | Room Section
let checkInDate;
let checkOutDate;
let duration = 0;
let roomTypeInfo;
let roomsCount;
let numOfKidsAbove5;
let numOfKidsBelow5;
let numOfAdultsinfo;
let extraRequirement;
let desiredView;

let roomCost =  0;
let adjustedRoomCost = 0;
let mealCost = 0;
let extraBedCost = 0;
let totalRoomCost = 0;

//variable declarations | Adventure Section
let divingCostLocalAdults = 0;
let divingCostLocalKids = 0;
let divingCostForeignAdults = 0;
let divingCostForeignKids = 0;

let adventureCost = 0;
let guideCostAdults = 0;
let guideCostKids = 0;
let totalCostOfAdventure = 0;

//Total OverallCost
let TotalOverallCost = totalRoomCost +  totalCostOfAdventure;

// Variable for Booking Buttons
let correctPromo = "Promo123";
let promoValue;
let totalLoyaltyPoints;
let loyaltyPointsValue;
let startingLoyaltyPoints = 0;

// Initialization functions - Purpose : sets the inner text of selected DOM elements to - and 0 
function initializeCurrentBooking(){
    for (let i=0; i<currentBooingElments.length; i++){
        currentBooingElments[i].innerText = "-";
    }    
} 

function initializeCurrentCost(){
    for (let i=0; i<costCurrentBookingElements.length; i++){
        if (i === 0){
            costCurrentBookingElements[i].innerText = "0";
        }else{
            costCurrentBookingElements[i].innerText = 0;
        }
    }    
}

function initializeOverallBooking(){
    for (let i=0; i<overallBookingElements.length; i++){
        overallBookingElements[i].innerText = "-";
    }    
}

function initializeOverallCost(){
    for (let i=0; i<costOverallBookingElements.length; i++){
        costOverallBookingElements[i].innerText = "0";
    }    
}

function initializeInfoHeaders(){
    for (let i=0; i<infoHeaders.length; i++){
        infoHeaders[i].innerText = 0;
    }
}


// Functions for Event Listeners of Room Section
function roomInnerText(){
    let costOfRoomElement = costCurrentBookingElements.find((element) => element.id === "cost_for_rooms");
    let TotalRoomCostElement = infoHeaders.find((element) => element.id === "total_room_cost_header");

    roomsCount = parseInt(numOfRooms.value);
    
    // adjustedRoomCost = roomCost * roomsCount * duration;
    // totalRoomCost = adjustedRoomCost + extraBedCost + mealCost;

    if (duration === 0 && roomCost === 0){
        costOfRoomElement.innerText = 0;
    }
    else if (duration !== 0 && roomCost === 0){
        costOfRoomElement.innerText = 0;
    }
    else if(duration === 0 && roomCost !== 0){
        adjustedRoomCost = roomCost * roomsCount;
        costOfRoomElement.innerText = adjustedRoomCost;
    }
    else {
        adjustedRoomCost = roomCost * roomsCount * duration;
        costOfRoomElement.innerText = adjustedRoomCost;
    }
    totalRoomCost = adjustedRoomCost + extraBedCost + mealCost;
    TotalRoomCostElement.innerText = totalRoomCost;
}

function checkInEvent(){
    // checkInDate = parseInt(checkIn.value);
    checkInDate = new Date(checkIn.value);

}

function checkOutEvent(){
    let durationElement = currentBooingElments.find((element) => element.id === "duration_info");

    checkOutDate = new Date(checkOut.value);
    duration = ((checkOutDate - checkInDate) / (1000 * 3600 * 24)) + 1;

    durationElement.innerText = duration;
    roomInnerText();
}

function roomTypeEvent(){
    let roomTypeElement;
    let roomCostElement;

    roomTypeElement = currentBooingElments.find((element) => element.id === "room_type_info1");
    roomCostElement = costCurrentBookingElements.find((element) => element.id === "cost_info1");


    if (this.value === "Single"){
        roomTypeInfo = "Single";
        roomCost = 25000;

        roomTypeElement.innerText = roomTypeInfo;
        roomCostElement.innerText = roomCost;

    }else if (this.value === "Double"){
        roomTypeInfo = "Double";
        roomCost = 35000;

        roomTypeElement.innerText = roomTypeInfo;
        roomCostElement.innerText = roomCost;

    }else if (this.value === "Triple" ){
        roomTypeInfo = "Triple";
        roomCost = 40000;

        roomTypeElement.innerText = roomTypeInfo;
        roomCostElement.innerText = roomCost;

    }else if (this.value === "0" ){
        roomTypeInfo = "-";
        roomCost = 0;
        roomTypeElement.innerText = roomTypeInfo;
    }else {

    }
    roomInnerText()
}

function numOfRoomsEvent(){
    let numOfRoomsElement;
    let costOfRoomElement

    numOfRoomsElement = currentBooingElments.find((element) => element.id === "num_rooms_info");
    costOfRoomElement = costCurrentBookingElements.find((element) => element.id === "cost_for_rooms");
    
    roomsCount = parseInt(numOfRooms.value);
    
    numOfRoomsElement.innerText = roomsCount;
    costOfRoomElement.innerText = roomCost * roomsCount;

    roomInnerText()
}

function ExtraBedEvent(){
    let extraBedInfoElement;
    let extraBedCostInfoElement;

    // extraBedInfoElement = Array.from(currentBooingElments).find((element) => element.id === "extra_bed_info");
    // extraBedCostInfoElement = Array.from(costCurrentBookingElements).find((element) => element.id === "cost_per_bed_info");

    extraBedInfoElement = currentBooingElments.find((element) => element.id === "extra_bed_info");
    extraBedCostInfoElement = costCurrentBookingElements.find((element) => element.id === "cost_per_bed_info");
        
    if (extraBed.checked){
        extraBedCost = 8000;
        extraBedInfoElement.innerText = "yes";
        extraBedCostInfoElement.innerText = extraBedCost;
    }
    else{
        extraBedCost = 0;
        extraBedInfoElement.innerText = "-";
        extraBedCostInfoElement.innerText = extraBedCost;
    }
    roomInnerText()
}

function extraWiFiEvent(){
    let extraWifiElement;
    extraWifiElement = currentBooingElments.find((element) => element.id === "extra_req_info");
    
    if (wifi.checked){
        extraWifiElement.innerText = "yes";
        extraRequirement = "Wi-Fi"
    }else {
        extraWifiElement.innerText = "-";
        extraRequirement = "Not Selected"
    }
}

function viewEvent() {
    let viewElement;
    viewElement = currentBooingElments.find((element) => element.id === "desired_view_info");

    if (this.value === "pool_view"){
        viewElement.innerText = "Pool View";
        desiredView = "Pool View";
    
    }else if (this.value === "garden_view"){
        viewElement.innerText = "Garden View";
        desiredView = "Garden View";
    }else   {
        viewElement.innerText = "-";
        desiredView = "Not Selected";
    }
}



function mealEvent(){
    let kidsAbove5Element;
    let mealCostElement;
    
    kidsAbove5Element = currentBooingElments.find((element) => element.id === "above5_info");
    mealCostElement = costCurrentBookingElements.find((element) => element.id === "kid_meal_charge_info");
    
    numOfKidsAbove5 = parseInt(this.value); 
    mealCost = 8000 * numOfKidsAbove5;
    
    kidsAbove5Element.innerText = numOfKidsAbove5;
    mealCostElement.innerText = mealCost;

    roomInnerText()
}

function kidBelow5Event(){
    let kidsBelow5Element;
    kidsBelow5Element = currentBooingElments.find((element) => element.id === "below5_info");
    
    numOfKidsBelow5 = kidBelow5.value;
    kidsBelow5Element.innerText = numOfKidsBelow5;
}

function AdultsEvent(){
    let AdultsElement;
    AdultsElement = currentBooingElments.find((element) => element.id === "adults_info");

    numOfAdultsinfo = numOfAdults.value;
    AdultsElement.innerText = numOfAdultsinfo;

    roomInnerText()
}


// function adventureTypes(){
//     let localAdultsText = "";
//     let localKidsText = "";
//     let foreignAdultsText = "";
//     let foreignKidsText = "";
//     // let typeOfAdventureElement;
//     let adventureTypeElement;
//     let adventureCostElement;
//
//     adventureTypeElement = currentBooingElments.find((element) => element.id === "adventure_type_info");
//     adventureCostElement = costCurrentBookingElements.find((element) => element.id === "adventure_cost");
//
//    
//    
//     function localAdult(){
//         if (divingLocalAdultsCheckbox.checked){
//             localAdultsText = "Diving For Local Adults";
//         }
//         else{
//             localAdultsText = "";
//         }
//     }
//    
//     function localKid(){
//         if (divingLocalKidsAbove5Checkbox.checked){
//             localKidsText = "Diving for Local Kids";
//         }
//         else {
//             localAdultsText = "";
//         }
//     }
//    
//     function foreignAdults(){
//         if (divingForeignAdultsCheckbox.checked){
//             foreignAdultsText = "Diving for Foreign Adults";
//         }else {
//             foreignAdultsText = "";
//         }
//     }
//    
//     function foreignKids(){
//         if (divingForeignKidsCheckbox.checked){
//             foreignKidsText = "Diving for Foreign Kids";
//         }else{
//             foreignKidsText = "";
//         }
//     }
//
//     localAdult();
//     localKid();
//     foreignAdults();
//     foreignKids();
//
//     adventureTypeElement.innerHTML = `${localAdultsText}  ${localKidsText}  ${foreignAdultsText}  ${foreignKidsText}`
// }



// Variables for Adventure Section 

let localAdultsText = "";
let localKidsText = "";
let foreignAdultsText = "";
let foreignKidsText = "";

let adventureTypeElement;
let adventureCostElement;

let adventureTypeElementTemplate;

adventureTypeElement = currentBooingElments.find((element) => element.id === "adventure_type_info");
adventureCostElement = costCurrentBookingElements.find((element) => element.id === "adventure_cost");
totalAdventureCostElement = infoHeaders.find((element) => element.id === "total_Adventure_cost_header");


// functions for Event Listeners of Adventure Section

// this function will set inner text of Adventure Type, Adventure Cost and Total Adventure Cost
function innerText(){
    adventureCost = divingCostLocalAdults + divingCostLocalKids + divingCostForeignAdults + divingCostForeignKids;
    totalCostOfAdventure = adventureCost + guideCostAdults + guideCostKids;
    
    adventureTypeElementTemplate = `${localAdultsText} ${localKidsText} ${foreignAdultsText} ${foreignKidsText}`;
    adventureTypeElement.innerHTML = adventureTypeElementTemplate;
    // adventureTypeElement.innerHTML = `${localAdultsText} ${localKidsText} ${foreignAdultsText} ${foreignKidsText}`;
    adventureCostElement.innerText = adventureCost;
    totalAdventureCostElement.innerText = totalCostOfAdventure;
}

// This function will update local adults adventure selection status, price and total adventure cost
function localAdult() {
    if (divingLocalAdultsCheckbox.checked) {
        localAdultsText = "Diving for Local Adults <br>";
        divingCostLocalAdults =  5000;
    } else {
        localAdultsText = "";
        divingCostLocalAdults =  0;
    }

    innerText();
}

// This function will update local kids adventure selection status, price and total adventure cost
function localKid() {
    if (divingLocalKidsAbove5Checkbox.checked) {
        localKidsText = "Diving for Local Kids <br>";
        divingCostLocalKids =  2000;
    } else {
        localKidsText = "";
        divingCostLocalKids =  0;
    }
    
    innerText();
}

// This function will update foreign adults adventure selection status, price and total adventure cost
function foreignAdults() {
    if (divingForeignAdultsCheckbox.checked) {
        foreignAdultsText = "Diving for Foreign Adults <br>";
        divingCostForeignAdults =  10000;
    } else {
        foreignAdultsText = "";
        divingCostForeignAdults =  0;
    }
    
    innerText();
}

// This function will update foreign kids adventure selection status, price and total adventure cost
function foreignKids() {
    if (divingForeignKidsCheckbox.checked) {
        foreignKidsText = "Diving for Foreign Kids";
        divingCostForeignKids = 5000;
    } else {
        foreignKidsText = "";
        divingCostForeignKids = 0;
    }

    innerText();
}

// This function will update guide for adults selection status, price and total adventure cost
function guideForAdultsEvent(){
    let adultGuideElement;
    let adultGuideCostElement;

    adultGuideElement = currentBooingElments.find((element) => element.id === "guide_adult_info");
    adultGuideCostElement = costCurrentBookingElements.find((element) => element.id === "guide_adult_info2");

    if (this.checked){
        adultGuideElement.innerText = "yes";
        guideCostAdults = 1000;
    }
    else {
        adultGuideElement.innerText = "-";
        guideCostAdults = 0;
    }
    totalCostOfAdventure = adventureCost + guideCostAdults + guideCostKids;
    
    adultGuideCostElement.innerText = guideCostAdults;
    totalAdventureCostElement.innerText = totalCostOfAdventure;
}

// This function will update guide for kids selection status, price and total adventure cost
function guideForKidsEvent(){
    let kidsGuideElement;
    let kidsGuideCostElement;

    kidsGuideElement = currentBooingElments.find((element) => element.id === "guide_kids_info");
    kidsGuideCostElement = costCurrentBookingElements.find((element) => element.id === "guide_kid_info2");
    
    if (this.checked){
        kidsGuideElement.innerText = "yes";
        guideCostKids = 500;
    }
    else {
        kidsGuideElement.innerText = "-";
        guideCostKids = 0;
    }

    totalCostOfAdventure = adventureCost + guideCostAdults + guideCostKids;
    
    kidsGuideCostElement.innerText = guideCostKids;
    totalAdventureCostElement.innerText = totalCostOfAdventure;
}


//Functions for Booking buttons

// This function will reset the form
function reset(){
    let form = document.getElementById("my_form");
    form.reset();
}

// This function will Hide the Booking confirmation
function hideBookingConf(){
    let modal = document.getElementById("modal");
    modal.classList.add("hidden");
}

// This function will show the Booking confirmation
function showBookingConf(){
    let modal = document.getElementById("modal");
    modal.classList.remove("hidden");
}

// This function will show the Adventure Booking confirmation
function showAdventureConf(){
    let modal2 = document.getElementById("modal2");
    modal2.classList.remove("hidden2");

}

// This function will Hide the Adventure Booking confirmation
function hideAdventureConf(){
    let modal2 = document.getElementById("modal2");
    modal2.classList.add("hidden2");
}

// this function will check weather loyalty points can be given
function loyaltyPoint(){
    if (roomsCount > 3){
        startingLoyaltyPoints = 0;

        let storedStartingLoyaltyPoints = localStorage.getItem('startingLoyaltyPoints');

        if (storedStartingLoyaltyPoints){
            startingLoyaltyPoints = parseInt(storedStartingLoyaltyPoints);
        }

        // localStorage.setItem('startingLoyaltyPoints', startingLoyaltyPoints);

        totalLoyaltyPoints = roomsCount * 20;
        startingLoyaltyPoints += totalLoyaltyPoints;
        // startingLoyaltyPoints = parseInt(localStorage.getItem(startingLoyaltyPoints)) + totalLoyaltyPoints;
        // localStorage.setItem('startingLoyaltyPoints', startingLoyaltyPoints);
        localStorage.setItem('startingLoyaltyPoints', startingLoyaltyPoints);
    }
}

// this function will display the loyalty points
function displayLoyaltyPoints(){
    loyaltyPointsValue = localStorage.getItem('startingLoyaltyPoints')
    loyaltyPointsField.innerText = loyaltyPointsValue;

}

// the function to book an room and adventure at same time
function BookingConfirmation(){
    
    showBookingConf();

    // resting the current costs to 0
    initializeCurrentCost();
    initializeCurrentBooking();
    initializeInfoHeaders();
    
    // loyalty Points function
    loyaltyPoint();

    // overall booking elements
    let roomTypeOverall = overallBookingElements.find((element) => element.id === "room_type_overall");
    let durationOverall = overallBookingElements.find((element) => element.id === "duration_overall");
    let roomsCountOverall = overallBookingElements.find((element) => element.id === "num_of_rooms_overall");
    let adventureTypeOverall = overallBookingElements.find((element) => element.id === "adventure_type_overall");

    // overall booking cost elements
    let roomCostOverall = costOverallBookingElements.find((element) => element.id === "cost_info1_overall");
    let adjustedCostOverall = costOverallBookingElements.find((element) => element.id === "cost_for_rooms_overall");
    let extraBedCostOverall = costOverallBookingElements.find((element) => element.id === "cost_per_bed_info_overall");
    let kidMealCostOverall = costOverallBookingElements.find((element) => element.id === "kid_meal_charge_info_overall");

    let adventureCostOverall = costOverallBookingElements.find((element) => element.id === "total_adventure_cost_overall");
    let GuideAdultCostOverall = costOverallBookingElements.find((element) => element.id === "guide_adult_info2_overall");
    let GuideKidCostOverall = costOverallBookingElements.find((element) => element.id === "guide_kid_info2_overall");

    // info header elements
    let totalRoomCostOverall = infoHeaders.find((element) => element.id === "total_room_cost_header_overall");
    let totalAdventureCostOverall = infoHeaders.find((element) => element.id === "total_Adventure_cost_header_overall");
    let FinalCostOverall = infoHeaders.find((element) => element.id === "overall_cost");


    // setting inner text for overall booking and overall cost
    roomTypeOverall.innerHTML = roomTypeInfo;
    durationOverall.innerHTML = duration;
    roomsCountOverall.innerHTML = roomsCount;
    adventureTypeOverall.innerHTML = adventureTypeElementTemplate;

    roomCostOverall.innerHTML = roomCost;
    adjustedCostOverall.innerHTML = adjustedRoomCost;
    extraBedCostOverall.innerHTML = extraBedCost;
    kidMealCostOverall.innerHTML = mealCost;

    adventureCostOverall.innerHTML = adventureCost;
    GuideAdultCostOverall.innerHTML = guideCostAdults;
    GuideKidCostOverall.innerHTML = guideCostKids;

    totalRoomCostOverall.innerHTML = totalRoomCost;
    totalAdventureCostOverall.innerHTML = totalCostOfAdventure;
    FinalCostOverall.innerHTML = TotalOverallCost;

    // calling reset function to reset form elements
    reset();
}

// the function to book an adventure
function adventureBookingConf(){
    showAdventureConf();

    initializeCurrentCost();
    initializeCurrentBooking();
    initializeOverallBooking();
    initializeOverallCost();
    initializeInfoHeaders();

    adventureThanksMessage.innerHTML = `Thank you for Booking an Adventure With US<br><br>Details of your adventure is as follows:`;
    adventureDetails.innerHTML = `<br>You have booked these Adventures:<br> ${adventureTypeElementTemplate}<br>`
}

//this function will check for promotion code and run the booking confirmation function accordingly.
function promoCheckForBooking(){
    promoValue = promoInput.value;
    
    // This if condition will check if the entered promo code is Correct
    // If input is correct or empty the booking Confirmation function will run
    //if promo code is wrong it will display Error
    
    if (promoValue === correctPromo){
        // setting up totalOverallCost
        TotalOverallCost = (totalRoomCost + totalCostOfAdventure) - ((totalRoomCost + totalCostOfAdventure) * 0.05);
        BookingConfirmation();
    }else if(promoValue === ""){
        TotalOverallCost = totalRoomCost + totalCostOfAdventure;
        BookingConfirmation();
    }else{
        alert("Promo Code you entered is wrong");
    }
    reset();
}

//this function will check for promotion code and run the adventure booking confirmation function accordingly.
function promoCheckForAdventureBooking(){
    promoValue = promoInput.value;

    // This if condition will check if the entered promo code is Correct
    // If input is correct or empty the booking Adventure Booking Confirmation function will run
    //if promo code is wrong it will display Error

    if (promoValue === correctPromo){
        // setting up totalOverallCost
        TotalOverallCost = (totalRoomCost + totalCostOfAdventure) - ((totalRoomCost + totalCostOfAdventure) * 0.05);
        adventureBookingConf();
    }else if(promoValue === ""){
        TotalOverallCost = totalRoomCost + totalCostOfAdventure;
        adventureBookingConf();
    }else{
        alert("Promo Code you entered is wrong");
    }
    reset();
}

function addToFavourite(){
    // saving variables of room section to local storage
    localStorage.setItem("checkInDate",checkInDate );
    localStorage.setItem("checkOutDate",checkOutDate );
    localStorage.setItem("duration",duration );
    localStorage.setItem("roomTypeInfo",roomTypeInfo );
    localStorage.setItem("roomsCount",roomsCount );
    localStorage.setItem("numOfKidsAbove5",numOfKidsAbove5 );
    localStorage.setItem("numOfKidsBelow5",numOfKidsBelow5 );
    localStorage.setItem("numOfAdultsinfo",numOfAdultsinfo );
    localStorage.setItem("totalRoomCost",extraRequirement );
    localStorage.setItem("totalRoomCost",desiredView );
    localStorage.setItem("roomCost",roomCost );
    localStorage.setItem("adjustedRoomCost",adjustedRoomCost );
    localStorage.setItem("mealCost",mealCost );
    localStorage.setItem("extraBedCost",extraBedCost );
    localStorage.setItem("totalRoomCost",totalRoomCost );
    
    
    // saving variables of adventure section to local storage
    localStorage.setItem("divingCostLocalAdults", divingCostLocalAdults );
    localStorage.setItem("divingCostLocalKids", divingCostLocalKids );
    localStorage.setItem("divingCostForeignAdults", divingCostForeignAdults );
    localStorage.setItem("divingCostForeignKids", divingCostForeignKids );
    localStorage.setItem("adventureCost", adventureCost );
    localStorage.setItem("guideCostAdults", guideCostAdults );
    localStorage.setItem("guideCostKids", guideCostKids );
    localStorage.setItem("totalCostOfAdventure", totalCostOfAdventure );
    localStorage.setItem("selectedAdventures", adventureTypeElementTemplate );
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

// calling initialization functions
initializeCurrentCost();
initializeCurrentBooking();
initializeOverallBooking();
initializeOverallCost();
initializeInfoHeaders();


// Event listeners for Room Section
extraBed.addEventListener("change", ExtraBedEvent);
wifi.addEventListener("change", extraWiFiEvent);
view.forEach((element) => element.addEventListener("change", viewEvent));
roomType.forEach((element) => element.addEventListener("change", roomTypeEvent));
numOfRooms.addEventListener("change", numOfRoomsEvent);
kidAbove5.addEventListener("change", mealEvent);
kidBelow5.addEventListener("change", kidBelow5Event);
numOfAdults.addEventListener("change", AdultsEvent);
checkIn.addEventListener("change", checkInEvent);
checkOut.addEventListener("change", checkOutEvent);


// Event listeners for Adventure Section
divingLocalAdultsCheckbox.addEventListener("change", localAdult);
divingLocalKidsAbove5Checkbox.addEventListener("change", localKid);
divingForeignAdultsCheckbox.addEventListener("change", foreignAdults);
divingForeignKidsCheckbox.addEventListener("change", foreignKids);
GuideForAdults.addEventListener("change", guideForAdultsEvent);
GuideForKids.addEventListener("change", guideForKidsEvent);


// Event Listeners for Booking Buttons, promotion
bookNowBtn.addEventListener("click", promoCheckForBooking);
dismissBookingConfBtn.addEventListener("click", hideBookingConf);
bookAdventureBtn.addEventListener("click", promoCheckForAdventureBooking);
adventureDismissBtn.addEventListener("click", hideAdventureConf);


// Event Listeners for loyalty button
loyaltyPointsBtn.addEventListener("click", displayLoyaltyPoints);


// Event Listener for add to favourite Button
addToFavouriteBtn.addEventListener("click", addToFavourite)





// console.log(promoInput.value);
// console.log(overallBookingElements);
// console.log(currentBooingElments);
// console.log(costCurrentBookingElements);

