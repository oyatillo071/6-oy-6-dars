import { useState } from "react";
import "./App.css";

function App() {
  const [firstVal, setFirstVal] = useState("");
  const [secondVal, setSecondVal] = useState("");
  const [secondChangeVal, setSecondChangeVal] = useState("");
  const [thirdVal, setThirdVal] = useState("");
  const [thirdChangeVal, setThirdChangeVal] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);
  const [thirdEX, setThirdEX] = useState([]);
  const [divBg, setDivBg] = useState("black");
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    if (task.trim() !== "") {
      setTaskList((prevTasks) => [...prevTasks, task]);
      setTask("");
    }
  }

  function deleteTask(index) {
    setTaskList((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function handleFruits(e, value) {
    if (e.target.checked) {
      setThirdEX((prev) => [...prev, value]);
    } else {
      setThirdEX((prev) => prev.filter((val) => val !== value));
    }
  }

  function handleBg(value) {
    setDivBg(value);
  }

  function handleCheckEmail() {
    // Emailni tekshirish
    if (email.includes("@") && email.includes(".") && email.includes(".com")) {
      setEmailMessage("Email to'g'ri");
    } else {
      setEmailMessage("Email noto'g'ri formatda");
    }
  }

  return (
    <>
      {/* Form for number-based shape check */}
      <form onSubmit={(e) => e.preventDefault()} className="container mx-auto">
        <div>
          <label
            htmlFor="first-ex"
            className="font-medium text-lg text-right w-[50%]">
            Vazifa: Foydalanuvchi raqamni input orqali kiritsin va pastda
            quyidagi shartga qarab biror shakl nomi chiqsin: 3: "Uchburchak" 4:
            "To'rtburchak" 5: "Beshburchak" Agar kiritilgan raqam 3, 4 yoki 5
            dan boshqa bo'lsa, "Bunday shakl mavjud emas" deb chiqsin.
            <br />
          </label>
          <input
            onChange={(e) => {
              setFirstVal(e.target.value);
            }}
            type="number"
            value={firstVal}
            placeholder="Raqam kiriting:"
            id="first-ex"
            className="border mt-4 w-[50%] p-3 rounded-xl"
          />
          <h3>
            {firstVal == 3
              ? "Uchburchak"
              : firstVal == 4
              ? "Tortburchak"
              : firstVal == 5
              ? "Beshburchak"
              : firstVal
              ? "Bunday shakl mavjud emas"
              : ""}
          </h3>
        </div>
      </form>

      {/* Form for password check */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 border-dotted border border-t-[20px] pt-10">
        <label
          htmlFor="second-inp"
          className="font-medium text-lg text-right w-[50%]">
          2. Parol tekshirish formasi Vazifa: Foydalanuvchi parol va parolni
          tasdiqlash (confirm password) qiymatlarini kiritadi. Agar ikkala input
          qiymati bir xil bo'lsa: Formaning pastida "Parol mos keldi" deb
          chiqsin. Agar farq qilsa: "Parol mos kelmadi" deb chiqsin.
        </label>
        <div className="flex flex-col items-center gap-6 mt-6">
          <input
            type="text"
            onChange={(e) => {
              setSecondVal(e.target.value);
              setIsConfirm(false);
            }}
            id="second-inp"
            className="border mt-4 w-[50%] p-3 rounded-xl"
            placeholder="Parol kiriring:"
          />
          <input
            type="text"
            onChange={(e) => {
              setThirdVal(e.target.value);
              setIsConfirm(false);
            }}
            placeholder="Parolni tasdiqlang:"
            className="border mt-4 w-[50%] p-3 rounded-xl"
          />
          <span
            className="btn border px-4 py-2 rounded-xl border-[black]"
            onClick={() => {
              setIsConfirm(true);
            }}>
            CLick me
          </span>
          <h2 className="font-medium text-xl mb-8">
            {isConfirm
              ? thirdVal !== ""
                ? thirdVal === secondVal
                  ? "Parol mos keldi"
                  : "Parol mos kelmadi"
                : ""
              : ""}
          </h2>
        </div>
      </form>

      {/* Form for checkbox list */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 border-dotted border border-t-[20px] pt-10">
        <label
          htmlFor="second-inp"
          className="font-medium text-lg text-right w-[50%]">
          3. Chek qutisi (Checkbox) bilan ro'yxat tuzish Vazifa: Foydalanuvchi
          turli elementlarni tanlash uchun checkboxlardan foydalanadi. Masalan:{" "}
          <br />
          Olma Banan Apelsin <br /> Tanlangan elementlar ro'yxati formaning
          pastida dinamik ravishda ko'rsin.
        </label>
        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="third-ex"
              value={"behi"}
              onChange={(e) => {
                handleFruits(e, e.target.value);
              }}
            />
            <label className="text-lg font-medium" htmlFor="third-ex">
              behi
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="third-ex-2"
              value={"xurmo"}
              onChange={(e) => {
                handleFruits(e, e.target.value);
              }}
            />
            <label className="text-lg font-medium" htmlFor="third-ex-2">
              xurmo
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              value={"olma"}
              id="third-ex-3"
              onChange={(e) => {
                handleFruits(e, e.target.value);
              }}
            />
            <label className="text-lg font-medium" htmlFor="third-ex-3">
              Olma
            </label>
          </div>
          <h2>
            Tanlangan mevalar: <br /> {thirdEX.join(", ")}
          </h2>
        </div>
      </form>

      {/* Form for color change */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 border-dotted border border-t-[20px] pt-10">
        <label
          htmlFor="second-inp"
          className="font-medium text-lg text-right w-[50%]">
          4. Foydalanuvchining tanlovi bo'yicha rang o'zgartirish Vazifa:
          Formada 3 ta radio tugma bo'lsin: <br /> Qizil Yashil Ko'k <br />{" "}
          Foydalanuvchi qaysi rangni tanlasa, formaning pastida chiqarilgan
          katta blok (div) shu rangga o'zgarishi kerak.
        </label>
        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="red"
              name="color"
              value={"red"}
              onChange={(e) => {
                handleBg(e.target.value);
              }}
            />
            <label className="text-lg font-medium" htmlFor="red">
              Qizil
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="blue"
              name="color"
              value={"blue"}
              onChange={(e) => {
                handleBg(e.target.value);
              }}
            />
            <label className="text-lg font-medium" htmlFor="blue">
              Ko'k
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              value={"green"}
              id="green"
              name="color"
              onChange={(e) => {
                handleBg(e.target.value);
              }}
            />
            <label className="text-lg font-medium" htmlFor="green">
              Yashil
            </label>
          </div>
          <div
            className="w-60 h-60 rounded-3xl"
            style={{
              backgroundColor: divBg,
              marginTop: "20px",
              border: "1px solid black",
            }}></div>
        </div>
      </form>

      {/* Form for email check */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 border-dotted border border-t-[20px] pt-10">
        <label
          htmlFor="second-inp"
          className="font-medium text-lg text-right w-[50%]">
          5. To'g'ri email kiritish tekshiruvi Vazifa: Foydalanuvchi email
          kiritadigan input bo'lsin. Agar foydalanuvchi email manzilni noto'g'ri
          formatda kiritsa (masalan, @ yoki .com bo'lmasa), formaning pastida
          "Email noto'g'ri formatda" degan xabar chiqsin. Aks holda, "Email
          to'g'ri" deb yozilsin.
        </label>
        <div className="flex flex-col items-center gap-6 mt-6">
          <label className="text-lg font-medium" htmlFor="email">
            Email kiriting:
          </label>
          <div className="flex items-center gap-3 border py-2 px-4 rounded-xl">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Emailni kiriting"
              className="p-2 rounded outline-none"
            />
            <span
              className="border-l-2 bg-blue pl-2 cursor-pointer"
              onClick={handleCheckEmail}>
              Submit
            </span>
          </div>
          <h2> Natija: {emailMessage}</h2>
        </div>
      </form>

      {/* 
      
      
      
      
      */}

      {/* form for change inouts values */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 border-dotted border border-t-[20px] pt-10">
        <label
          htmlFor="second-inp"
          className="font-medium text-lg text-right w-[50%]">
          6. Ikkita input qiymatini almashtirish Vazifa: Formada ikkita input
          bo’lsin: Birinchisiga biror so'z yoki qiymat kiritiladi. Ikkinchisiga
          ham biror so'z yoki qiymat kiritiladi. Formada "Qiymatlarni
          almashtirish" tugmasi bo’lsin. Ushbu tugmani bosganda, ikkala
          inputdagi qiymatlar joy almashsin.
        </label>
        <div className="flex flex-col items-center gap-6 mt-6">
          <input
            type="text"
            id="changeFirst"
            value={secondChangeVal}
            onChange={(e) => {
              setSecondChangeVal(e.target.value);
            }}
            className="border mt-4 w-[50%] p-3 rounded-xl"
            placeholder="Qiymat kiriting::"
          />
          <input
            type="text"
            id="changeSecond"
            value={thirdChangeVal}
            onChange={(e) => {
              setThirdChangeVal(e.target.value);
            }}
            placeholder="Qiymat kiriting:"
            className="border mt-4 w-[50%] p-3 rounded-xl"
          />
          <span
            className="btn border cursor-pointer px-4 py-2 rounded-xl border-[black]"
            onClick={() => {
              let tepm = secondChangeVal;
              setSecondChangeVal(thirdChangeVal);
              setThirdChangeVal(tepm);
            }}>
            CLick me
          </span>
        </div>
      </form>

      {/* 
      
      
      
      */}

      {/* form todo list*/}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
        className="flex flex-col items-center gap-8 mt-8">
        <label htmlFor="task-input" className="font-medium text-lg">
          7. To-do ro'yxat yaratish Vazifa: Formada foydalanuvchi biror vazifani
          kiritadigan input va "Qo'shish" tugmasi bo'lsin. Har safar tugmani
          bosganda, vazifa ro’yxatga qo’shilsin va ro’yxat pastda dinamik tarzda
          ko’rinsin. Qo'shimcha talab: Har bir vazifa yonida "O'chirish" tugmasi
          bo'lsin. Bu tugma bosilganda, tegishli vazifa ro'yxatdan o'chsin.
        </label>
        <input
          type="text"
          id="task-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Vazifa kiriting"
          className="border mt-4 w-[50%] p-3 rounded-xl"
        />
        <span
          type="span"
          onClick={addTask}
          className="btn border cursor-pointer px-4 py-2 rounded-xl w-[50%] border-[black]">
          Add
        </span>
      </form>

      <div className="mt-8">
        <h3 className="font-medium text-xl">Vazifalar ro'yxati:</h3>
        <ul className="list-disc pl-5 mt-4">
          {taskList.map((task, index) => (
            <li
              key={index}
              className="flex justify-between border border-2 p-2 rounded-lg items-center">
              <span>{task}</span>
              <span
                onClick={() => deleteTask(index)}
                className="text-lg text-black p-1 rounded-md ml-4">
                x
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
