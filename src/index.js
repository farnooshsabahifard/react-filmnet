import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MovieList from './component/movieList';
const movieDate=[
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/43/4f/434f282568b14fa594e97af7528cceca.jpg?w=300",
    genre:"ورزشی، بیوگرافی",
    productYear: "1397",
    productCountry:"ایران",
    time: "1 ساعت و 45 دقیقه",
    rate:true,
    imdb:"6.8",
    title:"غلامرضا تختی",
  }
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/8e/ff/8eff4d038f2d4b2b8e994416fa233e8b.jpg?w=300",
    genre:"مستند، بیوگرافی",
    productYear: "1378",
    productCountry:"‌ایران",
    time:"59 دقیقه",
    rate:false,
    imdb:null,
    title:"سرد سبز",
  }
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/6f/6c/6f6c18265eb442cfad7f2ada8a968ce7.jpg?w=300",
    genre:"درام، معمایی",
    productYear:"1387" ,
    productCountry:"‌ایران",
    time:"1 ساعت و 58 دقیقه",
    rate:true,
    imdb:"8",
    title:"درباره الی",
  }
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/a7/b3/a7b383ef809b49e0be403090b528fa02.jpg?w=300",
    genre:"درام، کمدی",
    productYear:"1389" ,
    productCountry:"‌ایران",
    time:"1 ساعت و 46 دقیقه",
    rate:false,
    imdb:null,
    title:"ورود آقایان ممنوع",
  }
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/fe/65/fe65c26d64de44009c0c2ccb893bdb42.jpg?w=300",
    genre:"درام",
    productYear:"1383" ,
    productCountry:"‌ایران",
    time:"1 ساعت و 32 دقیقه",
    rate:true,
    imdb:"6.9",
    title:"ماهی ها عاشق می شوند",
  }
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/8a/0c/8a0cc2142512439683905518c44c4c15.jpg?w=300",
    genre:"کمدی، درام",
    productYear:"1381" ,
    productCountry:"‌ایران",
    time:"1 ساعت و 42 دقیقه",
    rate:true,
    imdb:"4.6",
    title:"صورتی",
  }
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/70/6c/706c6e75511d46f3ada76bf39d9dfe94.jpg?w=300",
    genre:"درام، جنایی",
    productYear:"1392" ,
    productCountry:"‌ایران",
    time:"1 ساعت و 33 دقیقه",
    rate:true,
    imdb:"6.2",
    title:"سیزده",
  } 
]

var newFilms=[
  {
    translate:true,
    dubbing:"دوبله اختصاصی",
    image:"https://static.filmnet.ir/images/f2/51/f2515015de5748079a608f6a8f312def.jpg?w=300",
    genre:"جنایی، ترسناک",
    productYear:"2022" ,
    productCountry:"آمریکا",
    time:"2 ساعت و 5 دقیقه",
    rate:true,
    imdb:"6.7",
    title:"چشم آبی کم رنگ",
  } 
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/5a/8a/5a8a520f4a08498b80eba714c261ee50.jpg?w=300",
    genre:"جنایی",
    productYear:"2022" ,
    productCountry:"استرالیا",
    rate:true,
    imdb:"7.4",
    title:"برف سیاه",
  } 
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/c8/85/c885e4c4f8ed4ff6b59bda917ea8dd49.jpg?w=300",
    genre:"اجتماعی",
    productYear:"1401" ,
    productCountry:"‌ایران",
    time:"54 دقیقه",
    rate:false,
    imdb:null,
    title:"فصل‌ 2 قسمت‌ 4",
  } 
  ,
  {
    translate:true,
    dubbing:"دوبله اختصاصی",
    image:"https://static.filmnet.ir/images/76/63/76633bf0477c404ebc492aa49a1d88eb.jpg?w=300",
    genre:"درام، اکشن",
    productYear:"2022" ,
    productCountry:"آمریکا",
    time:"2 ساعت و 8 دقیقه",
    rate:true,
    imdb:"6.8",
    title:"تعلق خاطر",
  } 
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/a3/81/a381aead32b14762bed4ccd56a495e0d.jpg?w=300",
    genre:"ماجرایی، درام",
    productYear:"2022" ,
    productCountry:"فرانسه ،  اسپانیا",
    time:"2 ساعت و 10 دقیقه",
    rate:true,
    imdb:"7.6",
    title:"هیولاها",
  } 
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/21/37/2137d86acba64eb99a131693bc605be1.jpg?w=300",
    genre:"معمایی",
    productYear:"1401" ,
    productCountry:"‌ ایران",
    time:"2 ساعت و 19 دقیقه",
    rate:false,
    imdb:null,
    title:"فصل‌ 1 قسمت‌ 4",
  } 
  ,
  
  {
    translate:true,
    dubbing:"دوبله اختصاصی",
    image:"https://static.filmnet.ir/images/b5/53/b55343a617a74c88bd2f8557e2918731.jpg?w=300",
    genre:"کمدی، ماجرایی",
    productYear:"2022" ,
    productCountry:"آمریکا",
    time:"1 ساعت و 42 دقیقه",
    rate:true,
    imdb:"7.8",
    title:"گربه چکمه پوش: آخرین آرزو",
  } 
]

var mostView=[
  {
    translate:true,
    dubbing:"دوبله اختصاصی",
    image:"https://static.filmnet.ir/images/f2/51/f2515015de5748079a608f6a8f312def.jpg?w=300",
    genre:"جنایی، ترسناک",
    productYear:"2022" ,
    productCountry:"آمریکا",
    time:"2 ساعت و 5 دقیقه",
    rate:true,
    imdb:"6.7",
    title:"چشم آبی کم رنگ",
  } 
  ,
  {
    translate:true,
    dubbing:"دوبله اختصاصی",
    image:"https://static.filmnet.ir/images/ff/a0/ffa01db4cbf940a6a8d3b2aa4c87d080.jpg?w=300",
    genre:"ماجرایی، کمدی",
    productYear:"2022" ,
    productCountry:"",
    rate:true,
    imdb:"7.8",
    title:"ربات های قصه گو: زمان پاسخگویی",
  } 
  ,
  {
    translate:true,
    dubbing:"دوبله اختصاصی",
    image:"https://static.filmnet.ir/images/2e/99/2e997e1dd4bf4329a29e55cc1708cef4.jpg?w=300",
    genre:"درام، اکشن",
    productYear:"2022" ,
    productCountry:"هند",
    time:"2 ساعت و 9 دقیقه",
    rate:true,
    imdb:8.2,
    title:"سرگرد",
  } 
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/f8/39/f839baf185874d5bb932798722924128.jpg?w=300",
    genre:"فانتزی، درام",
    productYear:"2021" ,
    productCountry:"ژاپن",
    time:"1 ساعت و 39 دقیقه",
    rate:true,
    imdb:"5.9",
    title:"فرزند ماه کامیاری",
  } 
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/17/11/1711fb4e650a4d2d8843eab450a004c6.jpg?w=300",
    genre:"درام، اکشن",
    productYear:"2022" ,
    productCountry:"آمریکا",
    time:"2 ساعت و 10 دقیقه",
    rate:true,
    imdb:"7.5",
    title:"عضو جدید سی آی ای",
  } 
  ,
  {
    translate:false,
    dubbing:null,
    image:"https://static.filmnet.ir/images/7a/f6/7af6efc2348743a48f89efc6b5864caf.jpg?w=300",
    genre:"درام، معمایی",
    productYear:"2023" ,
    productCountry:"‌ انگلستان",
    rate:true,
    imdb:"6.1",
    title:"دکل نفت",
  } 
  ,
  {
    translate:true,
    dubbing:"دوبله اختصاصی",
    image:"https://static.filmnet.ir/images/0e/e2/0ee2a0f9d7164ce4b7da9adc40b8fd0d.jpg?w=300",
    genre:"مستند",
    productYear:"2021" ,
    productCountry:"آمریکا",
    rate:true,
    imdb:"7.8",
    title:"مسابقات کریسمسی پخت شیرینی زنجبیلی",
  } 
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
  <MovieList data={movieDate} title="ایرانی"></MovieList>
  <MovieList data={newFilms} title="تازه های فیلم نت"></MovieList>
  <MovieList data={mostView} title="پربازدیدترین ها"></MovieList>
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
