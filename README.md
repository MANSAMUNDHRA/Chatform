# 🚀 CodeNow Classroom — *Till Death: Advanced C++ Development*

Live App 👉 **[https://codenow.binny.house/](https://codenow.binny.house/)**

Welcome to **CodeNow Classroom**, a stealthy, terminal-style **real‑time C++ coded chat system** where messages look like complex C++ programs but secretly carry human-readable communication inside them.

This project is **not a toy chat app**.
It’s a **systems + UI + obfuscation + real-time networking** flex — disguised as a compiler terminal.

---

## 🏫 Classroom: **HIRE**

This repository is configured as a **classroom-style environment**.

### 👩‍🏫 Roles

* **Instructor (YOU)** → `Printf`
* **Students** → `Scanf`

> Anyone joining the classroom **HIRE** must use:

```
Username: Scanf
Password / Room Code: HIRE
```

All student code appears under the user **Scanf**.
This simulates a **real lab / classroom / interview coding room**.

---

## 🧠 What This Project Actually Does

* Users **type normal text**
* Text is **embedded inside valid-looking C++ code**
* Code is sent & displayed like a compiler output
* Message can be:

  * **Hidden** (default)
  * **Manually decrypted per message** 👁️
  * **Globally decrypted using Decrypt Mode (D)** 🔓

To an outsider?

> *Looks like hardcore C++ debugging.*

To insiders?

> *It’s a chat system with superpowers.*

---

## 🖥️ Interface Overview

### 🔐 Login Screen

* Minimal terminal-style login
* No unnecessary UI noise
* Authenticated via **allowed compiler users**

📸 *(Login Screen Screenshot)*

---

### 🧾 Main Terminal View

Messages appear as **large, intimidating C++ programs**:

* Classes
* Threads
* Buffers
* Checksums
* CRCs
* Randomized logic

But hidden inside comments are **real messages**.

📸 *(Terminal Chat Screenshot)*

---

## 👁️ Feature Breakdown (For Absolute Beginners)

### 1️⃣ Per‑Message Decrypt 👁️

Each message has a **Decrypt button**:

* Click **👁️ Decrypt** → reveals the hidden message
* Click **🙈 Hide** → hides it again

This is **manual, message-by-message decryption**.

📸 *(Screenshot showing per-message decrypt)*

---

### 2️⃣ 🔓 Decrypt Mode — `D`

Top‑right corner: a tiny button called **`D`**.

This is **Decrypt Mode**.

When ON:

* ALL messages auto-decrypt
* No buttons needed
* Clean readable plaintext view

When OFF:

* Everything looks like hardcore C++ again

If you don’t understand this feature — that’s okay.
It means it’s **working**.

📸 *(Screenshot showing Decrypt Mode ON)*

---

### 3️⃣ 🧹 Clear Terminal (Local Only)

Click **🧹 Clear**:

* Clears messages **only for you**
* Does NOT delete server history
* New messages still appear

Exactly like a real terminal.

📸 *(Screenshot after clearing terminal)*

---

### 4️⃣ 🔔 Real‑Time Notifications

* Browser notifications for new messages
* Only triggers for **other users**
* Auto-closes
* Focus-safe

This is **poll-based real-time sync**, not fake UI updates.

---

## ⚙️ Technical Highlights (Why This Is Actually Impressive)

### 🔧 Frontend

* Pure **HTML + CSS + Vanilla JS**
* No frameworks
* Responsive (mobile, tablet, desktop)
* Terminal aesthetics done right

### 🌐 Backend

* Node.js server
* REST API (`/api/messages`)
* Room-based message isolation
* Polling-based real-time updates

### 🧠 Obfuscation Engine

* Messages are embedded into:

  * C++ classes
  * Threads
  * File handlers
  * Network packets
  * Hash generators
* Each message uses a **random template**
* Base64 splitting
* Random constants
* Looks legit to anyone skimming

---

## 🧪 Example (For Idiots — Respectfully)

### You type:

```
HELLO WORLD
```

### Others see:

```cpp
class DataProcessor {
  vector<int> buffer;
  // lots of scary stuff
  // Decoded message part 1:
  // HELLO WORLD
}
```

### You click `D`

```
HELLO WORLD
```

Magic. 🎩

---

## 🎯 Use Cases

* Coding classrooms
* Interview prep rooms
* Stealth communication
* Fun OS / C++ demonstrations
* Portfolio flex
* "WTF is this" reactions

---

## 🧑‍💻 Why Recruiters Should Care

This project demonstrates:

* Systems thinking
* UI/UX restraint
* Real-time communication
* Code generation
* Security through obscurity (intentionally)
* Creative engineering

This is **not CRUD**.
This is **character**.

---

## 🚨 Disclaimer

* This is a **communication experiment**
* Not meant for real encryption or security
* Purely educational + creative

---

## 🏁 Final Words

If you understand this project in 5 minutes — you’re smart.

If it confuses you — it’s doing its job.

If you love it — welcome to the classroom.

> **Till Death.** 💻🔥
