let timer = function () {
    this.draw = () => {
        //style for body.
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.boxSizing = "border-box";
        document.body.style.fontSize = "2rem";
        document.body.style.background = "#222";
        document.body.style.fontFamily = 'Bakbak One, cursive';
        document.body.style.color = "white";

        //Create main title
        let createH1 = document.createElement("h1");
        createH1.innerHTML = "Timer"
        createH1.style.display = "flex";
        createH1.style.justifyContent = "center";
        document.body.append(createH1);

        //Create principal container for divTimer
        let principalContainer = document.createElement("div");
        principalContainer.id = "container"
        principalContainer.style.display = "flex";
        principalContainer.style.flexFlow = "row wrap";
        principalContainer.style.justifyContent = "center";
        principalContainer.style.alignContent = "center";
        principalContainer.style.width = "100%";
        document.body.append(principalContainer);

        //Create div for the timer
        let divForTimer = document.createElement("div");
        divForTimer.id = "divTimer";
        divForTimer.style.display = "flex";
        divForTimer.style.flexFlow = "row wrap";
        divForTimer.style.justifyContent = "center";
        divForTimer.style.alignItems = "center";
        divForTimer.style.width = "70%";
        divForTimer.style.height = "50rem";
        divForTimer.style.fontSize = "20rem"
        divForTimer.innerHTML = "00:00:00";
        document.getElementById("container").append(divForTimer);

        let divTimer = document.getElementById('divTimer')

        let pHours = document.createElement('p');
        pHours.innerHTML = "Heures: ";
        pHours.style.fontSize = "1.8rem";
        pHours.style.width = "52%";
        divTimer.append(pHours);

        let createInputHours = document.createElement("input");
        createInputHours.placeholder = "0";
        createInputHours.style.width = "50%";
        divTimer.append(createInputHours);

        let pMinutes = document.createElement('p');
        pMinutes.innerHTML = "Minutes: ";
        pMinutes.style.fontSize = "1.8rem";
        pMinutes.style.width = "52%";
        divTimer.append(pMinutes);

        let createInputMinutes = document.createElement("input");
        createInputMinutes.placeholder = "0";
        createInputMinutes.style.width = "50%";
        divTimer.append(createInputMinutes);


        let pSecondes = document.createElement('p');
        pSecondes.innerHTML = "Secondes: ";
        pSecondes.style.fontSize = "1.8rem";
        pSecondes.style.width = "52%";
        divTimer.append(pSecondes);

        let createInputSecondes = document.createElement("input");
        createInputSecondes.placeholder = "0";
        createInputSecondes.style.width = "50%";
        divTimer.append(createInputSecondes);

        let createButton = document.createElement("button");
        createButton.innerHTML = "Validez";
        createButton.style.width = "60%";
        createButton.style.borderRadius = "12px";
        createButton.style.border = "none";
        createButton.style.cursor = "pointer";
        createButton.style.background = "#490e0e";
        createButton.style.color = "white";
        createButton.style.marginTop = "1rem";
        divTimer.append(createButton);

        createButton.addEventListener('click', () => {
            let inputValue = createInputHours.value;
            createInputHours.innerHTML = " ";
        })
    }
}

let timer1 = new timer();
timer1.draw()