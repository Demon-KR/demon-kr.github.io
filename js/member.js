const MEMBER = [
    {
        "name": "정상수 👑",
        "nickname": "c0nstant",
        "image": "./images/logo.jpg",
        "description": ">_<",
        "links": {
            "blog": "https://1993-constant.tistory.com/"
        }
    },
    {
        "name": "최동민",
        "nickname": "alkyne",
        "image": "./images/logo.jpg",
        "description": "-",
        "links": {}
    },
    {
        "name": "정동현",
        "nickname": "DH.J",
        "image": "https://avatars.githubusercontent.com/u/50125695?v=4",
        "description": "undefined",
        "links": {
            "github": "https://github.com/jhye0n",
            "instagram": "https://instagram.com/dh_.j_"
        }
    },
    {
        "name": "이재승",
        "nickname": "g0pher",
        "image": "https://avatars.githubusercontent.com/u/44149738?v=4",
        "description": "💻☕🎵🏀💰",
        "links": {
            "github": "https://github.com/g0pher98",
            "instagram": "https://instagram.com/g0pher_"
        }
    },
    {
        "name": "김주원",
        "nickname": "arrester",
        "image": "https://avatars.githubusercontent.com/u/41779684?v=4",
        "description": "아따 함 봐준다",
        "links": {
            "blog": "https://blog.naver.com/lstarrlodyl",
            "github": "https://github.com/arrester",
            "facebook": "https://www.facebook.com/lstarrlodyl"
        }
    },
    {
        "name": "손현지",
        "nickname": "jir4vvit",
        "image": "./images/logo.jpg",
        "description": "-",
        "links": {
            "blog": "https://jiravvit.tistory.com/"
        }
    },
    {
        "name": "황수민",
        "nickname": "Calibar",
        "image": "./images/logo.jpg",
        "description": "-",
        "links": {
            "blog": "https://katolik-xixon.tistory.com/"
        }
    },
    {
        "name": "김준태",
        "nickname": "racrua",
        "image": "./images/logo.jpg",
        "description": "Hello, world!",
        "links": {
            "blog": "https://sunrinjuntae.tistory.com/",
            "facebook": "https://www.facebook.com/sunrinjuntae"
        }
    },
    {
        "name": "김종민",
        "nickname": "slyfizz",
        "image": "./images/logo.jpg",
        "description": "flzzdari",
        "links": {
            "github": "https://slyfizz3.github.io"
        }
    },
    {
        "name": "채하늘",
        "nickname": "G0RiyA",
        "image": "./images/logo.jpg",
        "description": "-",
        "links": {
            "github": "https://github.com/G0RiyA"
        }
    },
    {
        "name": "박기태",
        "nickname": "undefined",
        "image": "./images/logo.jpg",
        "description": "-",
        "links": {
            "github":"https://github.com/pkt0615"
        }
    },
    {
        "name": "이도원",
        "nickname": "kksil",
        "image": "./images/logo.jpg",
        "description": "wall!",
        "links": {
            "github":"https://blog.naver.com/ldw0811"
        }
    }
]


$(function() {
    MEMBER.forEach(function(member) {
        console.log(member)
        var $code = $(`
            <div class="card">
                <div class="profile_image">
                    <img src="${member.image}" width="100%">
                </div>
                <div class="info">
                    <p class="name">${member.name}</p>
                    <p class="nickname">${member.nickname}</p>
                </div>
                <div class="description">
                    <p>${member.description}</p>
                </div>
                <div class="contact">
                </div>
            </div>
        `);
        
        // add contact links
        if (member.links.instagram) {
            $code.find('.contact').append(`
                <a href="${member.links.instagram}" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
            `)
        }
        if (member.links.facebook) {
            $code.find('.contact').append(`
                <a href="${member.links.facebook}" target="_blank">
                    <i class="fab fa-facebook"></i>
                </a>
            `)
        }
        if (member.links.github) {
            $code.find('.contact').append(`
                <a href="${member.links.github}" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            `)
        }
        if (member.links.blog) {
            $code.find('.contact').append(`
                <a href="${member.links.blog}" target="_blank">
                    <i class="fas fa-pen-square"></i>
                </a>
            `)
        }
        
        $('#members').append($code)
    });
    
})