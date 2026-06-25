function setResult(id, html) {
  const box = document.getElementById(id);
  if (box) box.innerHTML = html;
}

function checkEntryPlate() {
  const plate = document.getElementById("entryPlate").value.trim();
  const owner = document.getElementById("entryOwner").value.trim();
  const vehicle = document.getElementById("entryVehicle").value.trim();
  const gate = document.getElementById("entryGate").value.trim();

  if (!plate || !owner || !vehicle || !gate) {
    setResult("entryResult", "لطفاً همه فیلدها را کامل کن.");
    return;
  }

  setResult(
    "entryResult",
    پلاک <b>${plate}</b> بررسی شد.<br>
     مالک/راننده: <b>${owner}</b><br>
     خودرو: <b>${vehicle}</b><br>
     دروازه: <b>${gate}</b><br>
     وضعیت: <b>مجاز برای ورود</b>
  );
}

function registerEntry() {
  const plate = document.getElementById("entryPlate").value.trim();
  const owner = document.getElementById("entryOwner").value.trim();
  const vehicle = document.getElementById("entryVehicle").value.trim();
  const gate = document.getElementById("entryGate").value.trim();

  if (!plate || !owner || !vehicle || !gate) {
    setResult("entryResult", "لطفاً همه فیلدها را کامل کن.");
    return;
  }

  setResult(
    "entryResult",
    ورود خودرو ثبت شد ✅<br>
     پلاک: <b>${plate}</b><br>
     راننده: <b>${owner}</b><br>
     خودرو: <b>${vehicle}</b><br>
     دروازه: <b>${gate}</b>
  );
}

function calculateExitFee() {
  const plate = document.getElementById("exitPlate").value.trim();
  const owner = document.getElementById("exitOwner").value.trim();
  const hours = document.getElementById("exitHours").value.trim();

  if (!plate || !owner || !hours) {
    setResult("exitResult", "لطفاً همه فیلدهای خروج را کامل کن.");
    return;
  }

  const fee = Number(hours) * 20000;

  setResult(
    "exitResult",
    هزینه خروج محاسبه شد.<br>
     پلاک: <b>${plate}</b><br>
     راننده: <b>${owner}</b><br>
     مدت توقف: <b>${hours}</b> ساعت<br>
     مبلغ: <b>${fee.toLocaleString()} تومان</b>
  );
}

function payAndExit() {
  const plate = document.getElementById("exitPlate").value.trim();
  const owner = document.getElementById("exitOwner").value.trim();
  const hours = document.getElementById("exitHours").value.trim();

  if (!plate || !owner || !hours) {
    setResult("exitResult", "لطفاً همه فیلدهای خروج را کامل کن.");
    return;
  }

  const fee = Number(hours) * 20000;

  setResult(
    "exitResult",
    پرداخت انجام شد و خروج ثبت گردید ✅<br>
     پلاک: <b>${plate}</b><br>
     راننده: <b>${owner}</b><br>
     مبلغ پرداختی: <b>${fee.toLocaleString()} تومان</b>
  );
}

function approveEmergency() {
  const plate = document.getElementById("emergencyPlate").value.trim();
  const owner = document.getElementById("emergencyOwner").value.trim();
  const reason = document.getElementById("emergencyReason").value.trim();

  if (!plate || !owner || !reason) {
    setResult("emergencyResult", "لطفاً همه فیلدهای خروج اضطراری را کامل کن.");
    return;
  }

  setResult(
    "emergencyResult",
    خروج اضطراری تأیید شد ⚠️<br>
     پلاک: <b>${plate}</b><br>
     راننده: <b>${owner}</b><br>
     دلیل: <b>${reason}</b>
  );
}

function registerEmergencyFine() {
  const plate = document.getElementById("emergencyPlate").value.trim();
  const owner = document.getElementById("emergencyOwner").value.trim();
  const reason = document.getElementById("emergencyReason").value.trim();

  if (!plate || !owner || !reason) {
    setResult("emergencyResult", "لطفاً همه فیلدهای خروج اضطراری را کامل کن.");
    return;
  }

  setResult(
    "emergencyResult",
    جریمه خروج اضطراری ثبت شد ❗<br>
     پلاک: <b>${plate}</b><br>
     راننده: <b>${owner}</b><br>
     دلیل: <b>${reason}</b><br>
     مبلغ جریمه: <b>120,000 تومان</b>
  );
}
