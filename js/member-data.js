const MEMBEssRS = [
    {
        name : 'Jae Seung Lee',
        link : 'https://g0pher.kr',
        role : ['web', 'rev'],
        height: 180
    },
    {
        name : 'test',
        link : 'https://example.com',
        height : 150
    }
]

const MEMBERS = [
    {
        "name": "Sangsoo Jeong",
        "nickname": "c0nstant",
        "link": "https://1993-constant.tistory.com/",
        "role" : ['Leader👑', 'rev'],
        "height": 174
    },
    {
        "name": "Jaeseung Lee",
        "nickname": "g0pher",
        "link": "https://g0pher.kr",
        "role" : ['web'],
        "height": 175
    },
    {
        "name": "Joowon Kim",
        "nickname": "arrester",
        "link": "https://blog.naver.com/lstarrlodyl",
        "role" : ['web', 'mobile', 'rev'],
        "height": 183
    },
    {
        "name": "Donghyeon Jung",
        "nickname": "DH.J",
        "link": "https://mypf.jhyeon.dev",
        "role" : ['web', 'pwn'],
        "height": 150
    },
    {
        "name": "Cha",
        "nickname": "G0RiyA",
        "link": "https://g0riya.github.io",
        "role" : ['???'],
        "height": 183
    },
    {
        "name": "Kitae Park",
        "nickname": "kitae",
        "link": "https://g0riya.github.io", // ???
        "role" : ['web'],
        "height": 170
    },
    {
        "name": "Jongmin Kim",
        "nickname": "slyfizz",
        "link": "https://slyfizz3.github.io",
        "role" : ['rev'],
        "height": 173
    },
    {
        "name": "Dowon Lee",
        "nickname": "ksil",
        "image": "./images/logo.jpg",
        "link": "https://blog.naver.com/ldw0811",
        "role" : ['forensic'],
        "height": 173
    },
    {
        "name": "Hyunji Son",
        "nickname": "jir4vvit",
        "link": "https://jiravvit.tistory.com/",
        "role" : ['pwn'],
        "height": 158
    },

    //////////////////// 아래는 아직 미기입 ////////////////


    {
        "name": "Dongmin Choi",
        "nickname": "alkyne",
        "image": "./images/logo.jpg",
        "link": "",
        "role" : ['pwn'],
        "height": 180
    },
    {
        "name": "Soomin Hwang",
        "nickname": "Calibar",
        "link": "https://katolik-xixon.tistory.com/",
        "role" : ['???'],
        "height": 160
    },
    {
        "name": "Juntae Kim",
        "nickname": "racrua",
        "link": "https://sunrinjuntae.tistory.com/",
        "role" : ['rev', 'pwn'],
        "height": 160
    }
]


// $(function() {
//     MEMBER.forEach(function(member) {
//         console.log(member)
//         var $code = $(`
//             <div class="card">
//                 <div class="profile_image">
//                     <img src="${member.image}" width="100%">
//                 </div>
//                 <div class="info">
//                     <p class="name">${member.name}</p>
//                     <p class="nickname">${member.nickname}</p>
//                 </div>
//                 <div class="description">
//                     <p>${member.description}</p>
//                 </div>
//                 <div class="contact">
//                 </div>
//             </div>
//         `);
        
//         // add contact link
//         if (member.link.instagram) {
//             $code.find('.contact').append(`
//                 <a href="${member.link.instagram}" target="_blank">
//                     <i class="fab fa-instagram"></i>
//                 </a>
//             `)
//         }
//         if (member.link.facebook) {
//             $code.find('.contact').append(`
//                 <a href="${member.link.facebook}" target="_blank">
//                     <i class="fab fa-facebook"></i>
//                 </a>
//             `)
//         }
//         if (member.link.github) {
//             $code.find('.contact').append(`
//                 <a href="${member.link.github}" target="_blank">
//                     <i class="fab fa-github"></i>
//                 </a>
//             `)
//         }
//         if (member.link.blog) {
//             $code.find('.contact').append(`
//                 <a href="${member.link.blog}" target="_blank">
//                     <i class="fas fa-pen-square"></i>
//                 </a>
//             `)
//         }
        
//         $('#members').append($code)
//     });
    
// })