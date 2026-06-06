function sendWhatsApp() {

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

if(name.trim() === ""){
alert("الرجاء إدخال الاسم");
return;
}

if(phone.trim() === ""){
alert("الرجاء إدخال رقم الجوال");
return;
}

let message =
`🔥 طلب جديد - احذف اسمك

👤 الاسم:
${name}

📱 رقم الجوال:
${phone}

💰 قيمة الخدمة:
250 ريال

📌 الخدمة:
حذف الاسم من تطبيقات كشف الأرقام

🕒 تم إرسال الطلب من الموقع`;

window.open(
"https://wa.me/966554229903?text=" +
encodeURIComponent(message),
"_blank"
);

}
