const MEMBER = [
    {
        "name": "정상수",
        "nickname": "c0nstant",
        "image": "/images/logo.jpg",
        "discription": "음.. 뭐쓰지",
        "links": {
            "blog": "https://1993-constant.tistory.com/"
        }
    },
    {
        "name": "정동현",
        "nickname": "jhyeon",
        "image": "/images/logo.jpg",
        "discription": "undefined",
        "links": {
            "github": "https://github.com/jhye0n",
            "instagram": "https://instagram.com/jhye3n"
        }
    },
    {
        "name": "이재승",
        "nickname": "g0pher",
        "image": "/images/logo.jpg",
        "discription": "킹갓해커가될거야",
        "links": {
            "github": "https://github.com/g0pher98",
            "instagram": "https://instagram.com/g0pher_"
        }
    },
    {
        "name": "김주원",
        "nickname": "arrester",
        "image": "/images/logo.jpg",
        "discription": "아따 함 봐준다",
        "links": {
            "blog": "https://blog.naver.com/lstarrlodyl",
            "github": "https://github.com/arrester",
            "facebook": "https://www.facebook.com/lstarrlodyl"
        }
    },
    {
        "name": "손현지",
        "nickname": "jir4vvit",
        "image": "/images/logo.jpg",
        "discription": "-",
        "links": {
            "blog": "https://jiravvit.tistory.com/"
        }
    },
    {
        "name": "황수민",
        "nickname": "Calibar",
        "image": "/images/logo.jpg",
        "discription": "-",
        "links": {
            "blog": "https://katolik-xixon.tistory.com/"
        }
    },
    {
        "name": "김준태",
        "nickname": "racrua",
        "image": "/images/logo.jpg",
        "discription": "Hello, world!",
        "links": {
            "blog": "https://sunrinjuntae.tistory.com/",
            "facebook": "https://www.facebook.com/sunrinjuntae"
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
                <div class="discription">
                    <p>${member.discription}</p>
                </div>
                <div class="contact">
                </div>
            </div>
        `);
        
        // add contact links
        if (member.links.instagram) {
            $code.find('.contact').append(`
                <a href="${member.links.instagram}">
                    <i class="fab fa-instagram"></i>
                </a>
            `)
        }
        if (member.links.facebook) {
            $code.find('.contact').append(`
                <a href="${member.links.facebook}">
                    <i class="fab fa-facebook"></i>
                </a>
            `)
        }
        if (member.links.github) {
            $code.find('.contact').append(`
                <a href="${member.links.github}">
                    <i class="fab fa-github"></i>
                </a>
            `)
        }
        if (member.links.blog) {
            $code.find('.contact').append(`
                <a href="${member.links.blog}">
                    <i class="fas fa-pen-square"></i>
                </a>
            `)
        }
        
        $('#members').append($code)
    });
    
})