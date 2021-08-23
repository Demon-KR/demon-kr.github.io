function set_member() {
    fetch('/data/member.json').then(r=>r.json()).then(function(resp) {
        resp.forEach(function(member) {
            var $card = $(`
                <div class="card ${member.role}">
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
        resp.forEach(function(active) {
            var $card = $(`
                <div class="card">
                    <div><p>${active.date}</p></div>
                    <div><p>${active.content}</p></div>
                </div>
            `);
            // TODO : links 추가
            $('#active').append($card);
        });
    });
}

$(function() {
    // set_member()
    // set_active()
})