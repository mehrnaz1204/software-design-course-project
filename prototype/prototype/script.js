function checkPlate() {
  const plate = document.getElementById('entryPlate').value.trim();
  const result = document.getElementById('entryResult');

  if (!plate) {
    result.innerText = 'لطفاً شماره پلاک را وارد کنید.';
    return;
  }

  const authorized = ['123ABC', '456DEF', '789XYZ'];
  if (authorized.includes(plate)) {
    result.innerText = پلاک ${plate} مجاز است و توسط سیستم تأیید شد.;
  } else {
    result.innerText = پلاک ${plate} در لیست خودروهای مجاز نیست.;
  }
}

function registerEntry() {
  const plate = document.getElementById('entryPlate').value.trim();
  const name = document.getElementById('driverName').value.trim();
  const result = document.getElementById('entryResult');

  if (!plate || !name) {
    result.innerText = 'لطفاً اطلاعات خودرو و راننده را کامل وارد کنید.';
    return;
  }

  result.innerText = ورود خودرو با پلاک ${plate} برای راننده ${name} با موفقیت ثبت شد.;
}

function calculateFee() {
  const plate = document.getElementById('exitPlate').value.trim();
  const result = document.getElementById('feeResult');

  if (!plate) {
    result.innerText = 'لطفاً شماره پلاک را وارد کنید.';
    return;
  }

  const fee = 25000;
  result.innerText = هزینه توقف خودرو ${plate} برابر ${fee.toLocaleString('fa-IR')} تومان است.;
}

function payFee() {
  const plate = document.getElementById('exitPlate').value.trim();
  const result = document.getElementById('feeResult');

  if (!plate) {
    result.innerText = 'ابتدا شماره پلاک را وارد کنید.';
    return;
  }

  result.innerText = پرداخت برای خودرو ${plate} انجام شد و خروج ثبت گردید.;
}

function approveEmergency() {
  const plate = document.getElementById('emergencyPlate').value.trim();
  const reason = document.getElementById('emergencyReason').value.trim();
  const result = document.getElementById('emergencyResult');

  if (!plate || !reason) {
    result.innerText = 'شماره پلاک و علت خروج اضطراری را وارد کنید.';
    return;
  }

  result.innerText = خروج اضطراری خودرو ${plate} با علت «${reason}» تأیید شد.;
}

function registerFine() {
  const plate = document.getElementById('emergencyPlate').value.trim();
  const result = document.getElementById('emergencyResult');

  if (!plate) {
    result.innerText = 'ابتدا شماره پلاک را وارد کنید.';
    return;
  }

  result.innerText = جریمه خروج اضطراری برای خودرو ${plate} ثبت شد.;
}
