# 🧠 Simple To-Do List (Pure JavaScript)

A minimal **To-Do List App** built using **only JavaScript** — no frameworks, no CSS, just pure DOM manipulation and browser storage.
It lets you add, edit, mark complete, and delete tasks, and automatically saves them using **localStorage**.

---

## 🚀 Features

* ➕ **Add new tasks** using the input box or by pressing **Enter**
* ✏️ **Edit tasks** by double-clicking on them
* ✅ **Mark tasks as complete** using checkboxes
* ❌ **Delete tasks** instantly
* 💾 **Auto-save to localStorage** — tasks stay even after reloading the page

---

## ⚙️ How It Works

1. **Getting Elements**

   ```js
   let input = document.querySelector("input");
   let list = document.getElementById("todo-list");
   let addBtn = document.getElementById("add-btn");
   ```

2. **Loading Saved Tasks**

   ```js
   const saved = localStorage.getItem("todos");
   const todos = saved ? JSON.parse(saved) : [];
   ```

3. **Adding Tasks**

   * You can click the “Add” button or press **Enter**.
   * Each task is stored as an object `{ text, completed }`.

4. **Rendering the List**

   ```js
   todos.forEach((todo, index) => {
       const node = createToDoNode(todo, index);
       list.appendChild(node);
   });
   ```

   Every task is displayed with:

   * A **checkbox** (toggles completion)
   * A **text span** (editable)
   * A **delete button**

5. **Editing Tasks**
   Double-clicking a task opens a prompt to change its text.

6. **Deleting Tasks**
   Clicking “Delete” removes that task and re-renders the list.

7. **Saving Automatically**
   The function `saveTodos()` updates localStorage whenever you change, add, or delete tasks.

---

## 💾 Data Persistence

All data is saved locally in your browser via **localStorage**, so your tasks stay even after closing or refreshing the page.

---

## 🧩 Technologies Used

* **JavaScript (ES6)** – logic and DOM manipulation
* **HTML** – structure only (no CSS used)

---

## ▶️ How to Run

1. Create an `index.html` file containing your HTML and this JS script.
2. Open the file in your browser.
3. Start adding tasks right away!

---

## 🌟 Optional Improvements

* Add basic CSS for a cleaner look
* Add filters (All / Completed / Pending)
* Implement a “Clear All” button
* Add task timestamps

---

**Author:** AkashxDev
**License:** MIT
