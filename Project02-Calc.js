
//math.round(): اعداد را گاهی به سمت بالا و گاهی به سمت پایین گرد میکند
//math.pow(): برای به توان رساندن تعداد به کار میرود
//math.sqrt(): ار اعداد رادیکال دو میگیرد
//math.abs(): ار اعداد قدر مطلق میگیرد و خروجی آن همیشه یک عدد مثبت خواهد بود
//math.ceil():اعداد را رو به بالا گرد میکند
//math.floor(): همیشه به سمت پایین گرد میکند

//ایجاد اعداد تصادفی در جاوا اسکریپت
//math.random():عددی که برمیگرداند بین صفر و یک استو برای اعداد دیگر کارایی ندارد
//eval: یکی از توابع جاوااسگریپت است که ما میتوانیم کد را به آن بدهیم تا برایمان اجرا کند

//در این کد میگیم ولیو را بگیر و آنرا به ولیو پیش فرض اضافه کن

var powflag = false;

function addToCalculator(value) {
    document.getElementById('displayResult').value += value;

    //در اینجا چک میکنیم اگر پوفلگ ترو بود اعداد را در یک آرایه با تابع اسپلیت نگه میداریم ئ میریزیم در یک متغیر
    //و بعد ایندکس های آنرا میدهیم به تابع توان و سپس پوفلگ را فالس میکنیم
    if (powflag) {
        var numbers = document.getElementById('displayResult').value.split('^');
        document.getElementById('displayResult').value = Math.pow(numbers[0], numbers[1]);
        powflag = false;

    }
}

//برای مساوی میگیم ولیو فعلی این آی دی را بگیر و آنرا ایول کن و محاسباتش را انجام بده و نتیجه را بریز در دیسپلی
function finialize() {
    document.getElementById('displayResult').value = eval(document.getElementById('displayResult').value);
}

//دکمه ریست
//یعنی مقدار فعلی را بگیر و آنرا ریست کن و مساوی خالی کن
function reset() {
    document.getElementById('displayResult').value = '';
}

//تا اینجای کد اون عملیت چهارگانه را داریم
//utf8icons.com : نیتوانیم آیکون برداریم
//برای مجاسبات پیچیده تر نمیتوانیم از همان تایع استفاده کنیم چون محاسبات متفاوت است
//اما برای توان باز هم متفاوت است
//تابع پاور دو عدد میگیرد کخ کدان را به توان کدام برساند

function MathCalculator(Mathfunc) {
    if (Mathfunc == 'pow') {
        powflag = true;
        document.getElementById('displayResult').value += '^';
    } else {
        var val = document.getElementById('displayResult').value;
        document.getElementById('displayResult').value = Math[Mathfunc](val);
    }

}