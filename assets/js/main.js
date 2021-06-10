document.addEventListener("DOMContentLoaded", () => {
    let countries = document.querySelectorAll(".callback-country__item");
    let phoneMask = IMask(
        document.querySelector(".callback__number-field"), {
        mask: '+{7} (000) 000 00-00'
    });

    let setMask = (country) => {
        let mask = "+{7} (000) 000 00-00";
        let placeholder = "+7 (123) 456 78-90";
        switch (country) {
            case "RU": {
                mask = "+{7} (000) 000 00-00";
                placeholder = "+7 (123) 456 78-90";
                break;
            }
            case "UA": {
                mask = "+{380} 00 000 0000";
                placeholder = "+380 12 345 6789";
                break;
            }
            case "BY": {
                mask = "+{375} 00 000-00-00";
                placeholder = "+375 12 345-67-89";
                break;
            }
        }

        document.querySelector("#userNumber").placeholder = placeholder;
        phoneMask.updateOptions({ mask });
    }

    for (let c of countries) {
        c.onclick = () => {
            document.querySelector(".callback__country-selected").innerHTML = "";
            document.querySelector(".callback__country-selected").innerHTML = c.innerHTML;
            setMask(document.querySelector(".callback__country-selected span").innerText);
        }
    }

    document.querySelector("#userCountry").onmouseover = () => {
        document.querySelector(".callback__country-select").style.display = "block";
    }
    document.querySelector(".callback__country-select").onmouseover = () => {
        document.querySelector(".callback__country-select").style.display = "block";
    }

    document.querySelector("#userCountry").onmouseout = () => {
        document.querySelector(".callback__country-select").style.display = "none";
    }
})
