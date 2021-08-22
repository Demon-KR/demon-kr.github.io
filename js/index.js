function set_member() {
    fetch('/data/member.json').then(r=>r.json()).then(function(resp) {
        resp.forEach(function(member) {
            var $card = $(`
            <div class="card">
                <div class="photo"><img src="${member.photo}"></div>
                <p>${member.name}</p>
                <p>${member.nickname}</p>
                <p>${member.introduce}</p>
            </div>
            `);
            // TODO : links 추가
            $('#member').append($card);
        });
    });
}

function set_active() {
    fetch('/data/active.json').then(r=>r.json()).then(function(resp) {
        console.log(resp)
        // TODO : active 추가
    });
}

$(function() {
    set_member()
    set_active()
})