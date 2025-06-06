# 🧾 Extensions Holding Entry Input Field Fill

A Chrome Extension to **automatically fill land-related form fields** on specific web pages, especially helpful for data entry operators and government office staff working with land records.

---

## ✅ Features

- Auto-selects specific values for:
  - **Survey** (`survey`)
  - **Paid Year** (`paid_year`)
- Detects land type (e.g., "বাড়ী") and selects:
  - **Residential (4)** or **Agricultural-2 (3)** accordingly
- Automatically selects the **best available year** for each `useable_start_year` field
- DOM traversal logic ensures it works even in complex HTML structures
- Waits for the DOM to fully load before executing actions

---

## 🖱️ How to Use

1. Open the target webpage where the land entry form is available.
2. Click on the **extension icon** in the Chrome toolbar.
3. Press the **"Fill"** button in the popup.
4. The script will automatically populate the fields in the form.

---

## 🛠 Installation (For Developers)

1. Clone the repository:
   ```bash
   git clone https://github.com/AdibRasel/Extensions_Holding_Entry_Input_Field_Fill.git
