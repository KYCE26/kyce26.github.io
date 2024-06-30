const baseUrl = "https://130.162.195.228/mhs714220022";
const token = "your-bearer-token-here";

document.getElementById("login-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    console.log(data);
});

document.getElementById("register-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    const response = await fetch(`${baseUrl}/regis`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    console.log(data);
});

document.getElementById("get-motors-button").addEventListener("click", async () => {
    const response = await fetch(`${baseUrl}/motors`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await response.json();
    const motorsList = document.getElementById("motors-list");
    motorsList.innerHTML = "";
    data.forEach(motor => {
        const motorItem = document.createElement("div");
        motorItem.classList.add("motor-item");
        motorItem.innerText = `Name: ${motor.nama_motor}, Plate: ${motor.plat}`;
        motorsList.appendChild(motorItem);
    });
});

document.getElementById("add-motor-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const nama_motor = document.getElementById("motor-name").value;
    const plat = document.getElementById("motor-plate").value;

    const response = await fetch(`${baseUrl}/motors`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ nama_motor, plat })
    });

    const data = await response.json();
    console.log(data);
});

document.getElementById("update-motor-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const MotorId = document.getElementById("update-motor-id").value;
    const nama_motor = document.getElementById("update-motor-name").value;
    const plat = document.getElementById("update-motor-plate").value;

    const response = await fetch(`${baseUrl}/motors/${MotorId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ nama_motor, plat })
    });

    const data = await response.json();
    console.log(data);
});

document.getElementById("delete-motor-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const MotorId = document.getElementById("delete-motor-id").value;

    const response = await fetch(`${baseUrl}/motors/${MotorId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await response.json();
    console.log(data);
});

document.getElementById("get-booked-button").addEventListener("click", async () => {
    const response = await fetch(`${baseUrl}/bookeds`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await response.json();
    const bookedList = document.getElementById("booked-list");
    bookedList.innerHTML = "";
    data.forEach(booked => {
        const bookedItem = document.createElement("div");
        bookedItem.classList.add("booked-item");
        bookedItem.innerText = `Motor ID: ${booked.motor_id}, Name: ${booked.nama}, Address: ${booked.alamat}, Price: ${booked.harga}`;
        bookedList.appendChild(bookedItem);
    });
});

document.getElementById("book-motor-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const motor_id = document.getElementById("book-motor-id").value;
    const nama = document.getElementById("book-name").value;
    const alamat = document.getElementById("book-address").value;
    const harga = document.getElementById("book-price").value;

    const response = await fetch(`${baseUrl}/bookeds`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ motor_id, nama, alamat, harga })
    });

    const data = await response.json();
    console.log(data);
});

document.getElementById("update-booking-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const BookedId = document.getElementById("update-booking-id").value;
    const motor_id = document.getElementById("update-book-motor-id").value;
    const nama = document.getElementById("update-book-name").value;
    const alamat = document.getElementById("update-book-address").value;
    const harga = document.getElementById("update-book-price").value;

    const response = await fetch(`${baseUrl}/bookeds/${BookedId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ motor_id, nama, alamat, harga })
    });

    const data = await response.json();
    console.log(data);
});

document.getElementById("delete-booking-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const BookedId = document.getElementById("delete-booking-id").value;

    const response = await fetch(`${baseUrl}/bookeds/${BookedId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await response.json();
    console.log(data);
});
