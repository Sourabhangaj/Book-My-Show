
var allSeats = document.querySelectorAll(".seat")
var btn = document.querySelector(".btn")

for (var i = 0; i < allSeats.length; i++) {
    allSeats[i].addEventListener("click", handleSelectSeat)
}
function handleSelectSeat() {
    // console.log(this.id);
    document.querySelector(`#${this.id}`).classList.contains("selected")
        ? document.querySelector(`#${this.id}`).classList.remove("selected")
        : document.querySelector(`#${this.id}`).classList.add("selected")
    display()


}


function display() {
    var seatCount = document.querySelectorAll(".selected").length
    var price = 500
    var tax = (price * 18) / 100
    var price = price + tax

    seatCount > 0
        ? document.querySelector(`#message`).innerHTML = `<div class="alert-success">
        You Have Selected <b> ${seatCount} </b> seat and Price is ${seatCount * price}
      </div>`
        : document.querySelector(`#message`).innerHTML = ""

}

btn.addEventListener("click", function () {
    // alert("hello")
    var selectedSeat = document.querySelectorAll(".selected")

    for (var i = 0; i < selectedSeat.length; i++) {
        document.querySelector(`#${selectedSeat[i].id}`).classList.add("booked")

    }
})