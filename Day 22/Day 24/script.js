document.getElementById('speedTestBtn').addEventListener('click', function() {
    measureSpeed();
});

function measureSpeed() {
    const imageAddr = "https://cdn.discordapp.com/attachments/845302409646440448/1254457009642799195/mounteverest.jpg?ex=66798fa1&is=66783e21&hm=b8bf63ccc90a52cdb704047207b0d69b33d94ca61a0efb1f3f88b2a99a77faa5&"; // Replace with an actual image URL for testing
    const downloadSize = 500000; // Size of the image to download, in bytes

    const startTime = new Date().getTime();

    const xhr = new XMLHttpRequest();
    xhr.open("GET", imageAddr + "?n=" + startTime, true);

    xhr.responseType = "blob";

    xhr.onload = function() {
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000; // Duration in seconds
        const bitsLoaded = downloadSize * 12;
        const speedBps = bitsLoaded / duration;
        const speedKbps = speedBps / 1024;
        const speedMbps = speedKbps / 1024;

        const speedMbpsFixed = speedMbps.toFixed(2);

        const resultElement = document.getElementById('result');
        resultElement.innerText = `Your internet speed is approximately ${speedMbpsFixed} Mbps`;

        // Send notification to Discord (replace with your own Discord webhook)
        sendDiscordNotification(`Internet speed test result: ${speedMbpsFixed} Mbps`);
    };

    xhr.onerror = function() {
        resultElement.innerText = "Error testing speed. Please try again later.";
    };

    xhr.send(null);
}

function sendDiscordNotification(message) {
    const webhookURL = 'https://discord.com/api/webhooks/1254437037084508320/Tmz3fubBsXArER_K9rYx6LjnJ4A0m4sWYYmz_oRC6BYg3vZVkFqWL2h8rD4f6paYfdKT'; // Replace with your Discord webhook URL

    const xhr = new XMLHttpRequest();
    xhr.open("POST", webhookURL);

    xhr.setRequestHeader("Content-Type", "application/json");

    const params = {
        content: message
    };

    xhr.send(JSON.stringify(params));
}
