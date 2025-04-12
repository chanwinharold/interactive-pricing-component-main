const pageViews = document.getElementById("pageviews")
const price = document.getElementById("price")
const inputBill = document.getElementById("bill")
const inputSwitch = document.getElementById("mySwitch")
const buttonStart = document.querySelector(".section_bottom button")

const monthly = {
    "one": {
        "pageview": "10K",
        "price": (8).toFixed(2),
    },
    "two": {
        "pageview": "50K",
        "price": (12).toFixed(2),
    },
    "three": {
        "pageview": "100K",
        "price": (16).toFixed(2),
    },
    "four": {
        "pageview": "500K",
        "price": (24).toFixed(2),
    },
    "five": {
        "pageview": "1M",
        "price": (36).toFixed(2),
    }
}

const yearly = {
    "one": {
        "pageview": "10K",
        "price": discount(8).toFixed(2),
    },
    "two": {
        "pageview": "50K",
        "price": discount(12).toFixed(2),
    },
    "three": {
        "pageview": "100K",
        "price": discount(16).toFixed(2),
    },
    "four": {
        "pageview": "500K",
        "price": discount(24).toFixed(2),
    },
    "five": {
        "pageview": "1M",
        "price": discount(36).toFixed(2),
    }
}


inputSwitch.addEventListener("click", (event) => {
    let data = !inputSwitch.checked ? monthly:yearly
    displayData(data)
})

inputBill.addEventListener("input", (event) => {
    let data = !inputSwitch.checked ? monthly:yearly
    displayData(data)
})

buttonStart.addEventListener("click", (event) => {
    alert("✅Validé !")
})

function discount(price) {
    return (price) - (price*0.25)
}

function displayData(data) {
    if ((inputBill.value >= 0) && (inputBill.value < 20)) {
        pageViews.innerHTML = `${data.one.pageview} Pageviews`
        price.innerHTML = `$${data.one.price}`
    } else if ((inputBill.value >= 20) && (inputBill.value < 40)) {
        pageViews.innerHTML = `${data.two.pageview} Pageviews`
        price.innerHTML = `$${data.two.price}`
    } else if ((inputBill.value >= 40) && (inputBill.value < 60)) {
        pageViews.innerHTML = `${data.three.pageview} Pageviews`
        price.innerHTML = `$${data.three.price}`
    } else if ((inputBill.value >= 60) && (inputBill.value < 80)) {
        pageViews.innerHTML = `${data.four.pageview} Pageviews`
        price.innerHTML = `$${data.four.price}`
    } else {
        pageViews.innerHTML = `${data.five.pageview} Pageviews`
        price.innerHTML = `$${data.five.price}`
    }
}
