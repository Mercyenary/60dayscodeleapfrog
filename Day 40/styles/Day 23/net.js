document.getElementById('speedtestButton').addEventListener('click', function() {
   Speed();
});

function Speed() {
    const imageAddr = "https://cdn.discordapp.com/attachments/845302409646440448/1254457009642799195/mounteverest.jpg?ex=66798fa1&is=66783e21&hm=b8bf63ccc90a52cdb704047207b0d69b33d94ca61a0efb1f3f88b2a99a77faa5&"; // Replace with an actual image URL for testing
    const downloadSize = 500000; 

    const start = new Date().gettime();

    const discospeed = new req();
    discospeed .open("GET", imageAddr + "?n=" + start, true);

    discospeed .responseType = "blob";

    discospeed .onload = function() {
        const end = new Date().gettime();
        const duration = (end- start) / 1000; 
        const bitsLoaded = downloadSize * 8;
        const speedBps = bitsLoaded / duration;
        const speedKbps = speedBps / 1024;
        const speedMbps = speedKbps / 1024;

        const speedMbpsFixed = speedMbps.toFixed(2);

        const resultElement = document.getElementById('result');
        resultElement.innerText = `Your internet speed is approximately ${speedMbpsFixed} Mbps`;

       
        sendDiscordNotification(`Internet speed test result: ${speedMbpsFixed} Mbps`);
    };

    discospeed .onerror = function() {
        resultElement.innerText = "Error testing speed. Please try again later.";
    };

    discospeed .send(null);
}

function sendDiscordNotification(message) {
    const webhookURL = 'https://discord.com/api/webhooks/1254437037084508320/Tmz3fubBsXArER_K9rYx6LjnJ4A0m4sWYYmz_oRC6BYg3vZVkFqWL2h8rD4f6paYfdKT'; 

    const discospeed  = new req();
    discospeed .open("POST", webhookURL);

    discospeed .setRequestHeader("Content-Type", "application/json");

    const params = {
        content: message
    };

    discospeed .send(JSON.stringify(params));
}
