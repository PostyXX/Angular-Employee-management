การติดตั้งและเริ่มใช้งานโปรเจกต์ที่มี Frontend และ Backend มีขั้นตอนดังนี้:

### Frontend (Angular)
1. **เข้าไปในโฟลเดอร์โปรเจกต์**:
   ก่อนอื่นให้ไปที่โฟลเดอร์โปรเจกต์ที่มีไฟล์ `package.json` ซึ่งใช้ในการติดตั้ง dependencies:
   ```bash
   cd [path-to-your-project-folder]
   ```

2. **ติดตั้ง Dependencies**:
   ใช้คำสั่ง `npm install` เพื่อดาวน์โหลดและติดตั้ง dependencies ที่ระบุในไฟล์ `package.json` ของโปรเจกต์:
   ```bash
   npm install
   ```

3. **รันแอปพลิเคชัน**:
   หลังจากติดตั้งเสร็จแล้ว สามารถรันโปรเจกต์ Angular ด้วยคำสั่ง `ng serve`:
   ```bash
   ng serve
   ```
   คำสั่งนี้จะเริ่มต้นเซิร์ฟเวอร์ Angular และสามารถเข้าถึงแอปพลิเคชันที่ `http://localhost:4200` (หรือพอร์ตที่กำหนด) ในเบราว์เซอร์

### Backend (JSON Server)
1. **รัน Backend Server**:
   ในส่วนของ Backend หากใช้ JSON Server หรือเซิร์ฟเวอร์ Node.js, ให้รันคำสั่งในโฟลเดอร์ที่มีไฟล์ `server.js`:
   ```bash
   node server.js
   ```

   คำสั่งนี้จะเริ่มต้นเซิร์ฟเวอร์ที่ใช้ `server.js` ซึ่งจะทำงานเหมือนกับ API ของโปรเจกต์. จากนั้นสามารถเข้าถึง API ที่เซิร์ฟเวอร์นี้ให้บริการได้

---

1. **Frontend**:
   - `cd [path-to-your-project-folder]`
   - `npm install`
   - `ng serve`
2. **Backend**:
   - `node server.js`
