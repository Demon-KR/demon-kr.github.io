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
        "name": "Sangsoo Jung",
        "nickname": "c0nstant",
        "image": "./images/logo.jpg",
        "link": "https://1993-constant.tistory.com/",
        "role" : ['Leader👑', 'rev'],
        "height": 180
    },
    {
        "name": "Dongmin Choi",
        "nickname": "alkyne",
        "image": "./images/logo.jpg",
        "link": "",
        "role" : ['pwn'],
        "height": 180
    },
    {
        "name": "Donghyeon Jung",
        "nickname": "DH.J",
        "image": "https://avatars.githubusercontent.com/u/50125695?v=4",
        "link": "https://github.com/jhye0n",
        "role" : ['web'],
        "height": 180
    },
    {
        "name": "Jaeseung Lee",
        "nickname": "g0pher",
        "image": "https://avatars.githubusercontent.com/u/44149738?v=4",
        "link": "https://g0pher.kr",
        "role" : ['web'],
        "height": 170
    },
    {
        "name": "Juwon Kim",
        "nickname": "arrester",
        "image": "https://avatars.githubusercontent.com/u/41779684?v=4",
        "link": "https://blog.naver.com/lstarrlodyl",
        "role" : ['web', 'mobile'],
        "height": 180
    },
    {
        "name": "Hyeonji Son",
        "nickname": "jir4vvit",
        "image": "./images/logo.jpg",
        "link": "https://jiravvit.tistory.com/",
        "role" : ['pwn'],
        "height": 180
    },
    {
        "name": "Soomin Hwang",
        "nickname": "Calibar",
        "image": "./images/logo.jpg",
        "link": "https://katolik-xixon.tistory.com/",
        "role" : ['web?'],
        "height": 180
    },
    {
        "name": "Juntae Kim",
        "nickname": "racrua",
        "image": "./images/logo.jpg",
        "link": "https://sunrinjuntae.tistory.com/",
        "role" : ['rev', 'pwn'],
        "height": 180
    },
    {
        "name": "Jongmin Kim",
        "nickname": "slyfizz",
        "image": "./images/logo.jpg",
        "link": "https://slyfizz3.github.io",
        "role" : ['rev'],
        "height": 180
    },
    {
        "name": "Hanul Kim",
        "nickname": "G0RiyA",
        "image": "./images/logo.jpg",
        "link": "https://github.com/G0RiyA",
        "role" : ['???'],
        "height": 180
    },
    {
        "name": "Kitae Park",
        "nickname": "kitae",
        "image": "./images/logo.jpg",
        "link": "https://github.com/pkt0615",
        "role" : ['???'],
        "height": 180
    },
    {
        "name": "Dowon Lee",
        "nickname": "kksil",
        "image": "./images/logo.jpg",
        "link": "https://blog.naver.com/ldw0811",
        "role" : ['forensic'],
        "height": 180
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