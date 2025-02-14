# 🌍 Pollution Monitoring Website - 

A web application that provides real-time air quality index (AQI) data for any city worldwide. Users can search, compare, and analyze pollution levels using an interactive UI with a **Skyline** and **Bora** color scheme.

---

## 📌 Features

- **Real-time AQI Data**: Fetch air pollution data from the API.
- **Search & Select Cities**: Choose any country and city to view AQI levels.
- **Compare Cities**: Compare pollution levels between two or more cities.
- **Interactive UI**: Smooth user experience with a modern UI.
- **Multi-Language Support**: View AQI information in different languages.

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (React.js)
- **Backend**: Node.js, Express.js
- **API**: [World AQI API](https://api.waqi.info)
- **UI Design**: Figma (Skyline & Bora theme)

---

## 🚀 Setup Guide

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/pollution-monitoring.git
   cd pollution-monitoring
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔍 Usage Instructions

- **Search City**: Enter the city name in the search bar to view AQI details.
- **Compare Cities**: Add multiple cities to compare their AQI levels.
- **Language Change**: Change language settings from the dropdown menu.
- **Detailed View**: Click on a city to see detailed pollutant levels (PM2.5, PM10, O3, etc.).

---

## 🌐 API Integration

- Use the following script to fetch AQI data:
  ```html
  <script type="text/javascript" charset="utf-8">
    _aqiFeed({ container: "city-aqi-container", city: "beijing" });
  </script>
  ```
- API Token: `2cb9ab1944513f32f34b7309c0c405f19b17ad20`
- Example API URL:
  ```
  https://api.waqi.info/feed/@10112/?token=2cb9ab1944513f32f34b7309c0c405f19b17ad20
  ```

---

## 🤝 Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

