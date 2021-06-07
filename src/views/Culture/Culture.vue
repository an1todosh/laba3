<template>
  <div class="culture">
    <div class="culture_text">
      <h1 class="topic">Євробачення</h1>
      <h2 class="topic2">
        У нідерландському місті Роттердам відбулася урочиста церемонія відкриття
        пісенного конкурсу Євробачення-2021
      </h2>
      <p class="main_text">
        <img
          src="../../assets/image1.jpg"
          width="500px"
          class="culture_image1"
        />
        Церемонія відкриття відбулася на території круїзного терміналу Cruise
        Terminal Rotterdam. Учасники конкурсу крокували бірюзовою килимовою
        доріжкою довжиною 210 м. Цьогорічний міжнародний пісенний конкурс
        проходитиме з 18 по 22 травня. Україну на ньому представить гурт Go_A із
        піснею "Шум".18 травня відбудеться перший півфінал Євробачення-2021, 20
        травня – другий півфінал, 22 травня – фінал.Go_A виступить з піснею Shum
        у першому півфіналі під № 15.
      </p>
      <p>
        Хто виступатиме? На сцені концертної зали Ahoy Arena за вихід у фінал
        змагатимуться представники 16 країн, у тому числі України. Із них 10
        учасників продовжать участь у конкурсі і виступлять у фіналі, 22 травня.
      </p>
      <p>
        Як голосувати? У першому півфіналі Україна зможе голосувати за всіх
        учасників конкурсу, крім українського гурту Go_A. Під час прямого ефіру
        з’явиться інформація, на який номер надсилати смс-повідомлення.
      </p>
      <p>Перші півфіналісти:</p>
      <ul>
        <img
          src="../../assets/image2.jpeg"
          width="500px"
          class="culture_image2"
        />
        <li>Литва / The Roop – Discoteque</li>
        <li>Словенія /Ана Соклич – Amen</li>
        <li>Росія / Маніжа – Russian Woman</li>
        <li>Туссе – Voices</li>
        <li>Австралія / Монтень – Technicolour</li>
        <li>Північна Македонія / Васил – Here I Stand</li>
        <li>Ірландія / Леслі Рой – Maps</li>
        <li>Кіпр / Елена Цагріну – El Diablo</li>
        <li>Норвегія / Tix – Fallen Angel</li>
        <li>Хорватія / Албіна – Tick-Tock</li>
        <li>Бельгія / Hooverphonic – The Wrong Place</li>
        <li>Ізраїль / Еден Алене – Set Me Free</li>
        <li>Румунія / Roxen – Amnesia</li>
        <li>Азербайджан / Ефенді – Mata Hari</li>
        <li>Україна / Go_A – Shum</li>
        <li>Мальта /Дестіні – Je Me Casse</li>
      </ul>
    </div>
    <div class="line">Коментарі</div>
    <CultureText />
  </div>
</template>

<script>
import CultureText from "./CultureText";
export default {
  name: "Culture",
  components: {
    CultureText,
  },
};
</script>

<style>
.culture_image1 {
  float: left;
  margin: 10px 15px 0px 5px;
}
.culture_image2 {
  float: right;
  margin: 50px 15px 10px 5px;
}
textarea {
  width: 100%;
  height: 100px;
}
.line {
  margin: 10px 0px 10px 0px;
  border-bottom: 1px solid rgb(36, 33, 33);
}
</style>
