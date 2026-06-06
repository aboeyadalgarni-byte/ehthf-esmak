function sendWhatsApp() {

let phone = document.getElementById("phone").value;

if(phone === ""){
alert("أدخل رقم الجوال");
return;
}

let message =
`طلب جديد - احذف اسمك

رقم العميل:
${phone}

الخدمة:
حذف الاسم من تطبيقات كشف الأرقام`;

window.open(
"https://wa.me/966554229903?text=" +
encodeURIComponent(message),
"_blank"
);

}
